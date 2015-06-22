import EventEmitter from 'eventemitter3';
import Processor from './query/processor/Processor';

export default class Connection extends EventEmitter{
    _config = null;
    _reconnector = null;

    _adapter = null;
    _postProcessor = null;

    constructor(config = {})
    {
        super();
        this._config = config;

        this.useDefaultPostProcessor();
    }

    useDefaultPostProcessor(){
        this._postProcessor = new Processor();
        return this;
    }

    // Getter and setter
    setReconnector(reconnector = null){
        this._reconnector = reconnector;
        return this;
    }

    setConfig(name, value){
        this._config[name] = value;
        return this;
    }

    getPostProcessor(){
        return this._postProcessor;
    }

    getConfig(name = ''){
        return typeof this._config[name] === 'undefined' ? null : this._config[name];
    }

    // Redirect calls to adapter
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

    async connect(){
        throw '#connect(): This should be implemented by custom connection.';
    }

    async disconnect(){
        throw '#disconnect(): This should be implemented by custom connection.';
    }

    async selectingStatement(){
        throw '#selectingStatement(query): This should be implemented by custom connection.';
    }

    async insertingStatement(){
        throw '#insertingStatement(query, data): This should be implemented by custom connection.';
    }

    async updatingStatement(){
        throw '#updatingStatement(query, data): This should be implemented by custom connection.';
    }

    async destroyingStatement(){
        throw '#destroyingStatement(query): This should be implemented by custom connection.';
    }
}
