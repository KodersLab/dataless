import EventEmitter from '../utils/EventEmitter';
import Grammar from './grammar/Grammar';
import Processor from './processor/Processor';
import Query from './Query';

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
    
    table(table)
    {
        var query = new Query(this, this.getQueryGrammar(), this.getPostProcessor());
        return query.from(table);
    }
    
    async select(query, useReadPdo){
        return await this.selectingStatement(query, useReadPdo);    
    }
    
    setReconnector(reconnector = null){
        this._reconnector = reconnector;
        return this;
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
}