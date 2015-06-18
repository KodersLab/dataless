import EventEmitter from '../../utils/EventEmitter';
import DatabaseManager from '../DatabaseManager';
import Collection from './Collection';
import Builder from './Builder';
import BaseBuilder from '../query/Builder';

export default class Model extends EventEmitter{
    _connection = null;
    _table = null;
    _primaryKey = 'id';
    _perPage = 15;
    _timestamps = true;
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
    
    getTable(){
        return this._table;
    }
    
    getConnection(){
        return this.constructor.resolveConnection(this._connection);
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
    
    setConnection(name = null){
        this._connection = name;
        return this;
    }
}