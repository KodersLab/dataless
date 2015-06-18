import Grammar from './Grammar';

export default class UrlGrammar extends Grammar{

    // &columns=id,name,surname
    compileColumns(value){
        return value === null ? undefined : value.join(',');
    }
    
    // &order=id,asc|time,desc
    compileOrders(value){
        return value === null ? undefined : value.map(item => item.join(',')).join('|');
    }
}