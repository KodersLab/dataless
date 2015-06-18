import EventEmitter from '../utils/EventEmitter';
import Grammar from './query/grammar/Grammar';
import Processor from './query/processor/Processor';
import Query from './query/Builder';

export default class Connection extends EventEmitter{
    _pdo = null;
    _database = null;
    _tablePrefix = null;
    _config = null;
    _reconnector = null;
    
    _queryGrammar = null;
    _postProcessor = null;
    
    constructor(pdo, database = "", tablePrefix = "", config = {})
    {
        super();
        this._pdo = pdo;
        this._database = database;
        this._tablePrefix = tablePrefix;
        this._config = config;

        this.useDefaultQueryGrammar();
        this.useDefaultPostProcessor();
    }
    
    table(table)
    {
        var query = new Query(this, this.getQueryGrammar(), this.getPostProcessor());
        return query.from(table);
    }
    
    async select(query, useReadPdo){
        return await this.selectingStatement(query, useReadPdo);    
    }
    
    async insert(query, data){
        return await this.insertingStatement(query, data);
    }
    
    async update(query, pks, data){
        return await this.updatingStatement(query, pks, data);
    }
    
    async destroy(query, pks){
        return await this.destroyingStatement(query, pks);
    }
    
    setReconnector(reconnector = null){
        this._reconnector = reconnector;
        return this;
    }
    
    getConfig(name = ''){
        return typeof this._config[name] === 'undefined' ? null : this._config[name];
    }
    
    setConfig(name, value){
        return this._config[name] = value;
    }
    
    useDefaultQueryGrammar(){
        return this._queryGrammar = new Grammar();
    }
    
    useDefaultPostProcessor(){
        return this._postProcessor = new Processor();
    }
    
    getQueryGrammar(){
        return this._queryGrammar;
    }
    
    getPostProcessor(){
        return this._postProcessor;
    }
    
    async connect(){
        throw "This should be implemented by custom connection.";
    }
    
    async disconnect(){
        throw "This should be implemented by custom connection.";
    }
    
    async selectingStatement(query, useReadPdo = true){
        throw "This should be implemented by custom connection.";
    }
    
    async insertingStatement(query, data){
        throw "This should be implemented by custom connection.";
    }
    
    async updatingStatement(query, data){
        throw "This should be implemented by custom connection.";
    }
    
    async destroyingStatement(query, data){
        throw "This should be implemented by custom connection.";
    }
}