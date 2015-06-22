import Connection from './Connection';
import _ from 'lodash';

export default class MemoryConnection extends Connection{
    _db = {};

    async connect(){
        // nothing to do here
    }

    async disconnect(){
        // nothing to do here too
    }

    makeFilterFn(wheres){
        return (row) => {
            return _.indexOf(_.map(wheres, (where) => {
                switch(where.type){
                    case 'basic':
                        switch(where.operator){
                            case '=':
                                return row[where.column] === where.value;
                            default:
                                throw 'Unsupported memory store operator ' + where.operator;
                        }
                        break;
                    default:
                        throw 'Unsupported memory store where type ' + where.type + '.';
                }
            }), false) === -1;
        };
    }

    // Actual implementation of the connection.
    applyQuery(query, collection){
        if(query._wheres !== null && Array.isArray(query._wheres)){
            collection = _.filter(collection, this.makeFilterFn(query._wheres));
        }
        return collection;
    }

    async selectingStatement(query){
        if(typeof this._db[query._from] === 'undefined'){
            this._db[query._from] = [];
        }
        return this.applyQuery(query, this._db[query._from]);
    }

    async insertingStatement(query, data){
        if(typeof this._db[query._from] === 'undefined'){
            this._db[query._from] = [];
        }
        var result = _.assign({}, data);
        result[query._model.getKeyName()] = _.uniqueId();
        this._db[query._from].push(result);
        return result[query._model.getKeyName()];
    }

    async updatingStatement(query, data){
        if(typeof this._db[query._from] === 'undefined'){
            this._db[query._from] = [];
        }
        return _.map(this.applyQuery(query, this._db[query._from]), (row) => {
            _.assign(row, data);
            return row;
        });
    }

    async destroyingStatement(query){
        if(typeof this._db[query._from] === 'undefined'){
            this._db[query._from] = [];
        }
        var toDelete = this.applyQuery(query, this._db[query._from]);
        this._db[query._from] = _.filter(this._db[query._from], (row) => _.indexOf(toDelete, row) === -1);
        return toDelete.length;
    }

    toObject(){
        return this._db;
    }
}
