import qs from 'qs';
import UrlGrammar from './grammar/UrlGrammar';
import UrlProcessor from './processor/UrlProcessor';
import Connection from './Connection';
import HTTP from '../protocol/HTTP';

export default class UrlConnection extends Connection{
    
    useDefaultQueryGrammar(){
        return this._queryGrammar = new UrlGrammar();
    }
    
    useDefaultPostProcessor(){
        return this._postProcessor = new UrlProcessor();
    }
    
    async select(query){
        var from = query.from;
        delete query['from'];
        
        for(var k in query){
            if(query.hasOwnProperty(k)){
                query['_'+k] = query[k];
                delete query[k];
            }
        }
        
        var baseUrl = this._database + from;
        return await HTTP.get(baseUrl + (baseUrl.indexOf('?') > -1 ? '&' : '?') + qs.stringify(query));
    }
}