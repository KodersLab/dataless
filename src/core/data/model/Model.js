import EventEmitter from '../../utils/EventEmitter';
import DatabaseManager from '../DatabaseManager';
import Collection from './Collection';
import Builder from './Builder';
import BaseBuilder from '../query/Builder';

export default class Model extends EventEmitter{
    _connection = null;
    _table = null;
    _primaryKey = 'id';
    _incrementing = true;
    _perPage = 15;
    _attributes = {};
    _original = {};
    _relations = {};
    _fillable = [];
    _guarded = [];
    _dates = [];
    _casts = {};
    _exists = false;
    _with = [];

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
    }

    newCollection(models){
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
        var grammar = conn.getQueryGrammar();
        var builder = new Builder(new BaseBuilder(conn, grammar, conn.getPostProcessor()));

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

    touchOwners()
    {
        // TODO: implement
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
        // TODO: full implementation
        this._attributes[key] = value;
    }

    getAttribute(key){
        return typeof this._attributes[key] === 'undefined' ? null : this._attributes[key];
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

    fireModelEvent(){
        // TODO: implement
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

    setRawAttributes(attributes, sync = false)
    {
        this._attributes = {};
        for(var k in attributes)
        {
            if(attributes.hasOwnProperty(k)){
                this._attributes[k] = attributes[k];
            }
        }
        if(sync)
        {
            this.syncOriginal();
        }
    }

    set(name, value){
        return this.setAttribute(name, value);
    }

    get(name){
        return this.getAttribute(name);
    }
}
