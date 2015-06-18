

export default class Query{
    _columns = null;
    _aggregate = null;
    _from = null;
    _with = null;
    _filters = null;
    _orders = null;
    _limit = null;
    _offset = null;
    
    _connection = null;
    _grammar = null;
    _processor = null;
    
    constructor(connection, grammar, processor){
        this._connection = connection;
        this._grammar = grammar;
        this._processor = processor;
    }
    
    getQueryGrammar(){
        return this._queryGrammar;
    }
    
    getPostProcessor(){
        return this._postProcessor;
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
    
    with(relations = []){
        this._with = this._with === null ? relations : this._with.concat(Array.isArray(relations) ? relations : [relations]);
        return this;
    }
    
    scope(name, ...args){
        var scope = {
            type: "scope",
            name: name,
            args: args
        };
        this._filters = this._filters === null ? [scope] : this._filters.concat([scope]);
        return this;
    }
    
    
    where(column, operation, value, boolean = 'and'){
        var where = {
            type: "where",
            column: column,
            operation: operation,
            value: value,
            boolean: boolean.toLowerCase()
        };
        this._filters = this._filters === null ? [where] : this._filters.concat([where]);
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
    
    forPage(page, perPage = 15){
        return this.offset((page-1)*perPage).limit(perPage);
    }
    
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
        this._filters = this._filters === null ? [filter] : this._filters.concat([filter]);
        var result = this.get(columns);
        this._filters.splice(this._filters.indexOf(filter), 1);
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
}