import Grammar from './Grammar';

export default class UrlGrammar extends Grammar{

    compileInsert(query, data){
        return {from: this.compileFrom(query._from)};
    }
    
    compileUpdate(query, pks, data){
        if(Array.isArray(pks)) throw "UrlConnection does not support updating multiple records.";
        return {from: this.compileFrom(query._from)+'/'+pks};
    }
    
    compileDestroy(query, pks, data){
        if(Array.isArray(pks)) throw "UrlConnection does not support destroying multiple records.";
        return {from: this.compileFrom(query._from)+'/'+pks};
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