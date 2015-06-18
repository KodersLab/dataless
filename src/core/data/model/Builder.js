import BaseBuilder from '../query/Builder';

class Builder{
    _with = null;
    _model = null;
    _query = null;

    constructor(query){
        this._query = query;
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
        return await this._query.get(columns);
        // TODO: implement the rest
        var models = this.getModels(columns);
        // If we actually found models we will also eager load any relationships that
        // have been specified as needing to be eager loaded, which will solve the
        // n+1 query issue for the developers to avoid running a lot of queries.
        if (models.length > 0) {
            models = this.eagerLoadRelations(models);
        }
        return this._model.newCollection(models);
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
for(var i = 0; i < _keys.length; i++){
    var k = _keys[i];
    if(BaseBuilder.prototype.hasOwnProperty(k) && typeof Builder.prototype[k] === 'undefined'){
        Builder.prototype[k] = function(...args){
            var result = this._query[k].call(this, args);
            console.log(_passthru.indexOf(k) > -1 ? "result" : "this");
            return _passthru.indexOf(k) > -1 ? result : this;
        };
    }
}

export default Builder;