import BaseBuilder from '../query/Builder';

class Builder{
    _with = null;
    _model = null;
    _query = null;

    constructor(query){
        this._query = query;
        query._modelBuilder = this;
    }

    with(...args){
        args = Array.isArray(args) ? args : [args];
        this._with = this._with == null ? args : this._with.concat(args);
        return this;
    }

    scope(name = '', ...args){
        // Scopes are treated as additional wheres.
        this._wheres.push({
            type: 'scope',
            name: name,
            args: args
        });
        return this;
    }

    async get(columns = null)
    {
        var models = await this.getModels(columns);
        return this._model.newCollection(models);
    }

    async first(columns = null){
        return (await this.take(1).get(columns)).first();
    }

    async find(pks = [], columns = null){
        var result;
        if(Array.isArray(pks)){
            result = this.where(this._model.getQualifiedKeyName(), 'in', pks).get(columns);
        }else{
            result = this.where(this._model.getQualifiedKeyName(), '=', pks).first(columns);
        }
        return await result;
    }

    async getModels(columns = null){
        var results = await this._query.get(columns);
        var connection = this._model.getConnectionName();

        return this._model.constructor.hydrate(results, connection).all();
    }

    // Setters
    setModel(model = null){
        this._model = model;
        this._query.from(model.getTable());
        return this;
    }
}

// Mirror methods from base builder.
var _passthru = ['insert', 'insertGetId', 'getBindings', 'toSql', 'exists', 'count', 'min', 'max', 'avg', 'sum'];
var _keys = Object.getOwnPropertyNames(BaseBuilder.prototype);

function wrapMethod(k){
    return function(...args){
        var result = this._query[k].apply(this._query, args);
        return _passthru.indexOf(k) > -1 ? result : this;
    };
}

for(var i = 0; i < _keys.length; i++){
    if(BaseBuilder.prototype.hasOwnProperty(_keys[i]) && typeof Builder.prototype[_keys[i]] === 'undefined'){
        Builder.prototype[_keys[i]] = wrapMethod(_keys[i]);
    }
}

export default Builder;
