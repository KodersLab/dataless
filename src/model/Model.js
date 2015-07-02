import EventEmitter from 'eventemitter3';
import Collection from './Collection';
import DatabaseManager from '../DatabaseManager';
import Query from '../query/Query';
import Case from '../utils/Case';

import Relation from './relation/Relation';
import BelongsTo from './relation/BelongsTo';

export default class Model extends EventEmitter{
    _table = null;
    _primaryKey = 'id';
    _incrementing = true;
    _perPage = 15;
    _attributes = {};
    _original = {};
    _relations = {};
    _dates = [];
    _casts = {};
    _exists = false;
    _with = [];
    _parent = null;
    _touches = [];

    _connection = null;

    constructor(attributes = {}){
        super();
        //this.bootIfNotBooted(); TODO: Needed?
        this.syncOriginal();
        this.fill(attributes);
        return this;
    }

    static query(){
        return (new this()).newQuery();
    }

    static resolveConnection(name = null){
        return DatabaseManager.connection(name);
    }

    static hydrate(items = [], connection = null)
    {
        var instance = new this();
        instance.setConnection(connection);

        var coll = items.map((item) =>
        {
            return instance.newFromBuilder(item);
        });

        return instance.newCollection(coll);
    }

    fill(attributes = {}){
        for(var k in attributes){
            if(attributes.hasOwnProperty(k)){
                this._attributes[k] = attributes[k];
            }
        }
        this.emit('changed');
    }

    newCollection(models){
        if(typeof models === 'undefined'){ return new Collection(); }
        return new Collection(Array.isArray(models) ? models : [models]);
    }

    newFromBuilder(attributes = {}, connection = null)
    {
        var model = this.newInstance({}, true);
        model.setRawAttributes(attributes, true);
        model.setConnection(connection != null ? null : connection);
        return model;
    }

    newInstance(attributes = {}, exists = false)
    {
        var model = new this.constructor(attributes);
        model._exists = exists;
        return model;
    }

    newQuery(){
        return this.newQueryWithoutScopes();
    }

    newQueryWithoutScopes(){
        var conn = this.getConnection();
        var builder = new Query(this, conn);

        return builder.setModel(this).with(this._with);
    }

    // saving
    async save(options = {})
    {
        var query = this.newQueryWithoutScopes();

        if(this.fireModelEvent('saving') === false) { return false; }

        var saved = false;
        if (this._exists)
        {
            saved = await this.performUpdate(query, options);
        }
        else
        {
            saved = await this.performInsert(query, options);
        }

        if (saved){ await this.finishSave(options); }

        return saved;
    }

    async finishSave(options = {})
    {
        this.fireModelEvent('saved', false);
        this.syncOriginal();
        if (typeof options.touch === 'undefined' ? true : options.touch){ await this.touchOwners(); }
    }

    async performUpdate(query)
    {
        var dirty = this.getDirty();

        if (Object.keys(dirty).length > 0)
        {
            if (this.fireModelEvent('updating') === false){ return false; }

            dirty = this.getDirty();

            if (Object.keys(dirty).length > 0)
            {
                await this.setKeysForSaveQuery(query).update(dirty);
                this.fireModelEvent('updated', false);
            }
        }

        return true;
    }

    async performInsert(query)
    {
        if (this.fireModelEvent('creating') === false){ return false; }
        var attributes = {};
        for(var k in this._attributes)
        {
            if(this._attributes.hasOwnProperty(k)){
                attributes[k] = this._attributes[k];
            }
        }

        if (this._incrementing)
        {
            await this.insertAndSetId(query, attributes);
        }
        else
        {
            query.insert(attributes);
        }
        this._exists = true;
        this.fireModelEvent('created', false);
        return true;
    }

    async insertAndSetId(query, attributes)
    {
        var keyName = this.getKeyName();
        var id = await query.insertGetId(attributes, keyName);
        this.setAttribute(keyName, id);
    }

    setKeysForSaveQuery(query)
    {
        query.where(this.getKeyName(), '=', this.getKeyForSaveQuery());
        return query;
    }

    getKeyForSaveQuery()
    {
        if (typeof this._original[this.getKeyName()] !== 'undefined')
        {
            return this._original[this.getKeyName()];
        }

        return this.getAttribute(this.getKeyName());
    }

    async destroy()
    {
        if (this._primaryKey == null)
        {
            throw 'No primary key on the model. Could not destroy.';
        }

        if (this._exists)
        {
            if (this.fireModelEvent('destroying') === false){ return false; }

            await this.touchOwners();
            await this.performDestroyOnModel();
            this._exists = false;
            this.fireModelEvent('destroyed', false);

            return true;
        }
        return null;
    }

    async forceDestroy()
    {
        await this.delete();
    }

    async performDestroyOnModel()
    {
        await (this.setKeysForSaveQuery(this.newQuery())).destroy();
    }

    _touchRelationOwners(relation){
        relation.touchOwners();
    }

    touchOwners()
    {
        for(var relation in this._touches) {
            if(this._touches.hasOwnProperty(relation)){
                this[relation]().touch();
                if (this.getAttribute(relation) instanceof Model) {
                    this.getAttribute(relation).touchOwners();
                } else if (this.getAttribute(relation) instanceof Collection) {
                    this.getAttribute(relation).each(this._touchRelationOwners);
                }
            }
        }
    }

    getDirty()
    {
        var dirty = {};

        for(var k in this._attributes)
        {
            if(this._attributes.hasOwnProperty(k)){
                if (typeof this._original[k] === 'undefined')
                {
                    dirty[k] = this._attributes[k];
                }
                else if (this._attributes[k] !== this._original[k])
                {
                    dirty[k] = this._attributes[k];
                }
            }
        }

        return dirty;
    }

    setAttribute(key, value){
        if(this.hasSetMutator(key)){
            this['set' + Case.studlyCase(key) + 'Attribute'](value);
            return this;
        }
        this._attributes[key] = value;
        return this;
    }

    hasSetMutator(key){
        return typeof this['set' + Case.studlyCase(key) + 'Attribute'] === 'function';
    }

    getAttribute(key)
    {
        if (typeof this._attributes[key] !== 'undefined' || this.hasGetMutator(key))
        {
            return this.getAttributeValue(key);
        }

        if (typeof this._relations[key] !== 'undefined')
        {
            return this._relations[key];
        }
        return null;
    }

    hasGetMutator(key){
        return typeof this['get' + Case.studlyCase(key) + 'Attribute'] === 'function';
    }

    getAttributeValue(key){
        if(this.hasGetMutator(key)){
            return this['get' + Case.studlyCase(key) + 'Attribute']();
        }
        if(typeof this._attributes[key] !== 'undefined'){
            return this._attributes[key];
        }
        return null;
    }

    syncOriginal()
    {
        this._original = {};
        for(var k in this._attributes)
        {
            if(this._attributes.hasOwnProperty(k)){
                this._original[k] = this._attributes[k];
            }
        }
        return this;
    }

    fireModelEvent(name){
        // TODO: implement
        this.emit(name);
        return true;
    }

    getTable(){
        return this._table;
    }

    getKey(){
        return this.getAttribute(this._primaryKey);
    }

    getKeyName(){
        return this._primaryKey;
    }

    getQualifiedKeyName(){
        return [this.getTable(), this.getKeyName()];
    }

    getConnection(){
        return this.constructor.resolveConnection(this._connection);
    }

    getConnectionName(){
        return this._connection;
    }

    setConnection(name = null){
        this._connection = name;
        return this;
    }

    setParent(parent = null){
        this._parent = parent;
        return this;
    }

    setRawAttributes(attributes, sync = false)
    {
        this._attributes = {};
        for(var k in attributes)
        {
            if(attributes.hasOwnProperty(k)){
                if(this.hasRelation(k)){
                    this.setRelation(k, this[k]().hydrate(attributes[k], this._connection));
                }else{
                    this._attributes[k] = attributes[k];
                }
            }
        }
        if(sync)
        {
            this.syncOriginal();
        }
    }

    setRelation(name, value){
        this._relations[name] = value;
    }

    set(name, value){
        return this.setAttribute(name, value);
    }

    get(name){
        return this.getAttribute(name);
    }

    // ============= RELATIONS ==============
    hasRelation(name){
        return typeof this[name] === 'function' && this[name]() instanceof Relation;
    }

    belongsTo(relation, ModelClass, foreignKey = null, otherKey = null)
    {
        var instance = new ModelClass();
        foreignKey = foreignKey == null ? Case.snakeCase(relation) + '_id' : foreignKey;
        otherKey = otherKey == null ? instance.getKeyName() : otherKey;

        var query = instance.newQuery();

        return new BelongsTo(query, this, foreignKey, otherKey, relation);
    }
}
