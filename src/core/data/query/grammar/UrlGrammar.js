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

    compileUpdate(query, pks){
        if(Array.isArray(pks)){ throw 'UrlConnection does not support updating multiple records.'; }
        return {from: this.compileFrom(query._from) + '/' + pks};
    }

    compileDestroy(query, pks){
        if(Array.isArray(pks)){ throw 'UrlConnection does not support destroying multiple records.'; }
        return {from: this.compileFrom(query._from) + '/' + pks};
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
