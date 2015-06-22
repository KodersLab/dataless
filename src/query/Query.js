export default class Query{
    _columns = null;
    _aggregate = null;
    _from = null;
    _wheres = null;
    _orders = null;
    _groups = null;
    _limit = null;
    _offset = null;
    _with = null;

    _model = null;

    constructor(model = null, connection = null){
        this._model = model;
        this._connection = connection;
    }

    // Add members to query
    select(...columns){
        this._columns = Array.isArray(columns) ? columns : [columns];
        return this;
    }

    addSelect(columns = null){
        columns = Array.isArray(columns) ? columns : [columns];
        this._columns = this._columns === null ? columns : this._columns.concat(columns);
        return this;
    }

    from(from = null){
        this._from = from;
        return this;
    }

    where(column, operator, value, boolean = 'and'){
        var where = {
            type: 'basic',
            column: column,
            operator: operator,
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

    skip(offset = null){
        return this.offset(offset);
    }

    forPage(page, perPage = 15){
        return this.offset((page - 1) * perPage).limit(perPage);
    }

    with(args){
        args = Array.isArray(args) ? args : [args];
        if(args.length > 0){
            this._with = this._with == null ? args : this._with.concat(args);
        }
        return this;
    }

    scope(name = '', ...args){
        this._wheres.push({
            type: 'scope',
            name: name,
            args: args
        });
        return this;
    }

    // Perform query methods
    async getModels(columns = null){
        this._columns = this._columns === null ? columns : this._columns;
        var results = await this._connection.select(this);
        var connection = this._model.getConnectionName();

        return this._model.constructor.hydrate(results, connection).all();
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

    async aggregate(fn, column){
        this._aggregate = [fn, column];
        var result = this.get();
        this._aggregate = null;
        result = await result;
        if(result.length > 0){
            return result[0].aggregate;
        }
        throw 'Aggregate result was invalid.';
    }

    async count(column = null){
        return await this.aggregate('count', column);
    }

    async insert(data){
        return await this._connection.insert(this, data);
    }

    async insertGetId(values, sequence = null)
    {
        return await this._connection.getPostProcessor().processInsertGetId(this, values, sequence);
    }

    async update(data){
        return await this._connection.update(this, data);
    }

    async destroy(){
        return await this._connection.destroy(this);
    }

    // Getter and setter
    setModel(model = null){
        this._model = model;
        this.from(model.getTable());
        return this;
    }

    setConnection(connection = null){
        this._connection = connection;
        return this;
    }

    getModel(){
        return this._model;
    }

    getConnection(){
        return this._connection;
    }
}
