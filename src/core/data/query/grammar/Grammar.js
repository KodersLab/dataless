export default class Grammar{
    _toCompile = ["columns", "aggregate", "from", "wheres", "orders", "groups", "limit", "offset", "with"];
    
    compileSelect(query){
        return this.compileComponents(query);
    }
    
    compileInsert(query, data){
        return this.compileComponents(query);
    }
    
    compileUpdate(query, pks, data){
        return this.compileComponents(query);
    }
    
    compileDestroy(query, pks){
        return this.compileComponents(query);
    }
    
    compileComponents(query){
        var name, ucname;
        var result = {};
        
        for(var i = 0; i < this._toCompile.length; i++){
            name = this._toCompile[i];
            ucname = name.charAt(0).toUpperCase() + name.substring(1);
            result[name] = this['compile'+ucname](query['_'+name]);
        }
        return result;
    }
    
    compileColumns(value){
        return value === null ? undefined : value;
    }
    compileAggregate(value){
        return value === null ? undefined : value;
    }
    compileFrom(value){
        return value === null ? undefined : value;
    }
    compileWith(value){
        return value === null ? undefined : value;
    }
    compileWheres(value){
        return value === null ? undefined : value;
    }
    compileOrders(value){
        return value === null ? undefined : value;
    }
    compileLimit(value){
        return value === null ? undefined : value;
    }
    compileOffset(value){
        return value === null ? undefined : value;
    }
    compileGroups(value){
        return value === null ? undefined : value;
    }
}