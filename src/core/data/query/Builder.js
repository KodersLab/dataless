export default class Builder{
    _columns = null;
    _aggregate = [];
    _from = null;
    _wheres = null;
    _orders = null;
    _groups = null;
    _limit = null;
    _offset = null;

    _connection = null;
    _grammar = null;
    _processor = null;
    _modelBuilder = null;
    
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
    
    take(limit = null){
        return this.limit(limit);
    }
    
    offset(offset = null){
        this._offset = offset;
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
        if(Array.isArray(pks)){
            var result = this.where("id", "in", pks).get(columns);
        }else{
            var result = this.where("id", "=", pks).first(columns);
        }
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
    
    getComponent(name){
        return this['_'+name];
    }
}