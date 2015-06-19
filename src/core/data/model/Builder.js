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
            type: "scope",
            name: name,
            args: args
        });
        return this;
    }

    async get(columns = null)
    {
        var models = await this.getModels(columns);
        // If we actually found models we will also eager load any relationships that
        // have been specified as needing to be eager loaded, which will solve the
        // n+1 query issue for the developers to avoid running a lot of queries.
        if (models.length > 0) {
            //TODO: models = this.eagerLoadRelations(models);
        }
        return this._model.newCollection(models);
    }

    async first(columns = null){
        return (await this.take(1).get(columns)).first();
    }

    
    async find(pks = [], columns = null){
        if(Array.isArray(pks)){
            var result = this.where(this._model.getPrimaryKey(), "in", pks).get(columns);
        }else{
            var result = this.where(this._model.getPrimaryKey(), "=", pks).first(columns);
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
var _async = ['find', 'insert', 'insertGetId', 'exists', 'count', 'min', 'max', 'avg', 'sum'];
var _keys = Object.getOwnPropertyNames(BaseBuilder.prototype);

function wrap(that, k){
    var result = that._query[k].call(that, args);
    return _passthru.indexOf(k) > -1 ? result : that;
}

for(var i = 0; i < _keys.length; i++){
    var k = _keys[i];
    if(BaseBuilder.prototype.hasOwnProperty(k) && typeof Builder.prototype[k] === 'undefined'){
        Builder.prototype[k] = (function(k){
            return function(...args){
                var result = this._query[k].apply(this._query, args);
                return _passthru.indexOf(k) > -1 ? result : this;
            };
        })(k);
    }
}

export default Builder;