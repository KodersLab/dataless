import Grammar from './Grammar';

export default class UrlGrammar extends Grammar{
    compileComponents(query){
        var {_with} = query._modelBuilder == null ? {} : query._modelBuilder;
        var result = super.compileComponents(query);
        result.with = _with;
        return result;
    }

    compileInsert(query){
        return {from: this.compileFrom(query._from)};
    }

    compileInsertGetId(query){
        return {from: this.compileFrom(query._from)};
    }

    compileUpdate(query){
        if(query._modelBuilder === null){ throw 'UrlConnection does not support updating without a model (due to rest limitations).'; }
        var result = super.compileComponents(query);
        result.from = this.compileFrom(query._from) + '/' + query._modelBuilder._model.getKey();
        return result;
    }

    compileDestroy(query){
        if(query._modelBuilder === null){ throw 'UrlConnection does not support deleting without a model (due to rest limitations).'; }
        var result = super.compileComponents(query);
        result.from = this.compileFrom(query._from) + '/' + query._modelBuilder._model.getKey();
        return result;
    }

    // &columns=id,name,surname
    compileColumns(value){
        return value === null ? undefined : value.join(',');
    }

    // &order=id,asc|time,desc
    compileOrders(value){
        return value === null ? undefined : value.map(item => item.join(',')).join('|');
    }
}
