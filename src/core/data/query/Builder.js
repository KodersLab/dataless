export default class Builder{
    _columns = null;
    _aggregate = [];
    _from = null;
    _wheres = null;
    _orders = null;
    _groups = null;
    _limit = null;
    _offset = null;
    _with = null;
    
    _model = null;
    
    _connection = null;
    _grammar = null;
    _processor = null;
    
    constructor(connection, grammar, processor){
        this._connection = connection;
        this._grammar = grammar;
        this._processor = processor;
    }
        
    select(...columns){
        if(columns.length === 0) return this;
        
        this._columns = Array.isArray(columns) ? columns : [columns];
        return this;
    }
    
    addSelect(columns = []){
        columns = Array.isArray(columns) ? columns : [columns];
        this._columns = this._columns === null ? columns : this._columns.concat(columns);
        return this;
    }
    
    from(from = null){
        this._from = from;
        return this;
    }
    
    where(column, operation, value, boolean = 'and'){
        var where = {
            type: "basic",
            column: column,
            operation: operation,
            value: value,
            boolean: boolean.toLowerCase()
        };
        this._wheres = this._wheres === null ? [where] : this._wheres.concat([where]);
        return this;
    }
    
    orderBy(name, dir = 'asc'){
        this._orders = this._orders === null ? [[name, dir]] : this._orders.concat([[name, dir]]);
        return this;
    }
    
    limit(limit = null){
        this._limit = limit;
        return this;
    }
    
    offset(offset = null){
        this._offset = offset;
        return this;
    }
    
    with(...args){
        args = Array.isArray(args) ? args : [args];
        this._with = this._with.concat(args);
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
    
    // Computed on above methods    
    forPage(page, perPage = 15){
        return this.offset((page-1)*perPage).limit(perPage);
    }
    
    // Generators methods
    toSql(){
        return this._grammar.compileSelect(this);
    }
    
    async get(columns = null){
        this._columns = this._columns === null ? columns : this._columns;
        return this._processor.processSelect(this, await this._connection.select(this.toSql()));
    }
    
    async first(columns = null){
        var prev = this._limit;
        var result = this.limit(1).get();
        this._limit = prev;
        result = await result;
        return result.length === 0 ? null : result[0];
    }
    
    async find(pks = [], columns = null){
        pks = Array.isArray(pks) ? pks : [pks];
        var filter = {
            type: "pks",
            pks: pks
        };
        this._wheres = this._wheres === null ? [filter] : this._wheres.concat([filter]);
        var result = this.get(columns);
        this._wheres.splice(this._wheres.indexOf(filter), 1);
        return await result;
    }
    
    async aggregate(fn){
        this._aggregate = fn;
        var result = this.get();
        this._aggregate = null;
        result = await result;
        if(result.length > 0){
            return result[0]["aggregate"];
        }
        throw "Aggregate result was invalid.";
    }
    
    async count(){
        return await this.aggregate("count");
    }
    
    async insert(data){
        return this._processor.processInsert(this, await this._connection.insert(this._grammar.compileInsert(this, data), data));
    }
    
    async update(pks, data){
        return this._processor.processUpdate(this, await this._connection.update(this._grammar.compileUpdate(this, pks, data), pks, data));
    }
    
    async destroy(pks, data){
        return this._processor.processDestroy(this, await this._connection.destroy(this._grammar.compileDestroy(this, pks), pks));
    }
    
    
    // Setters
    setModel(model = null){
        this._model = model;
    }
    
    // Getters for the query
    getQueryGrammar(){
        return this._queryGrammar;
    }
    
    getPostProcessor(){
        return this._postProcessor;
    }
    
    getConnection(){
        return this._connection;
    }
}