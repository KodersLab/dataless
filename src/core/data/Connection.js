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

    constructor(pdo, database = '', tablePrefix = '', config = {})
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
        return await this._postProcessor.processSelect(query, await this.selectingStatement(query, useReadPdo));
    }

    async insert(query, data){
        return await this._postProcessor.processInsert(query, await this.insertingStatement(query, data));
    }

    async update(query, data){
        return await this._postProcessor.processUpdate(query, await this.updatingStatement(query, data));
    }

    async destroy(query){
        return await this._postProcessor.processDestroy(query, await this.destroyingStatement(query));
    }

    setReconnector(reconnector = null){
        this._reconnector = reconnector;
        return this;
    }

    getConfig(name = ''){
        return typeof this._config[name] === 'undefined' ? null : this._config[name];
    }

    setConfig(name, value){
        this._config[name] = value;
        return this;
    }

    useDefaultQueryGrammar(){
        this._queryGrammar = new Grammar();
        return this;
    }

    useDefaultPostProcessor(){
        this._postProcessor = new Processor();
        return this;
    }

    getQueryGrammar(){
        return this._queryGrammar;
    }

    getPostProcessor(){
        return this._postProcessor;
    }

    async connect(){
        throw 'This should be implemented by custom connection.';
    }

    async disconnect(){
        throw 'This should be implemented by custom connection.';
    }

    async selectingStatement(){
        throw 'This should be implemented by custom connection.';
    }

    async insertingStatement(){
        throw 'This should be implemented by custom connection.';
    }

    async updatingStatement(){
        throw 'This should be implemented by custom connection.';
    }

    async destroyingStatement(){
        throw 'This should be implemented by custom connection.';
    }
}
