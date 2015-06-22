import qs from 'qs';
import HTTP from './utils/HTTP';
import UrlProcessor from './query/processor/UrlProcessor';
import Connection from './Connection';

export default class UrlConnection extends Connection{
    useDefaultPostProcessor(){
        this._postProcessor = new UrlProcessor();
        return this;
    }

    async connect(){
        // nothing to do here
    }

    async disconnect(){
        // nothing to do here too
    }

    // reformat a query to a url string that will obtain the post/get/delete request.
    _buildQueryString(query){
        var data = {};
        data._aggregate = query._aggregate === null ? undefined : query._aggregate;
        data._columns = query._columns === null ? undefined : query._columns.join(',');
        data._wheres = query._wheres === null ? undefined : query._wheres;
        data._limit = query._limit === null ? undefined : query._limit;
        data._offset = query._offset === null ? undefined : query._offset;
        data._orders = query._orders === null ? undefined : query._orders.map((order) => order.join(',')).join('|');
        data._groups = query._groups === null ? undefined : query._groups;
        data._with = query._with === null ? undefined : query._with.join(',');
        return qs.stringify(data);
    }

    _buildSelectUrl(query){
        var baseUrl = query._from;
        var queryString = this._buildQueryString(query);
        if(queryString !== ''){
            baseUrl += (query._from.indexOf('?') > -1 ? '&' : '?') + queryString;
        }
        return baseUrl;
    }

    _buildModelUrl(query){
        var baseUrl = query._from + '/' + query._model.getKey();
        var queryString = this._buildQueryString(query);
        if(queryString !== ''){
            baseUrl += (query._from.indexOf('?') > -1 ? '&' : '?') + queryString;
        }
        return baseUrl;
    }

    // Actual implementation of the connection.
    async selectingStatement(query){
        return HTTP.get(this.getConfig('database', '') + this._buildSelectUrl(query));
    }

    async insertingStatement(query, data){
        return HTTP.post(this.getConfig('database', '') + this._buildSelectUrl(query), data);
    }

    async updatingStatement(query, data){
        return HTTP.post(this.getConfig('database', '') + this._buildModelUrl(query), data);
    }

    async destroyingStatement(query){
        return HTTP.delete(this.getConfig('database', '') + this._buildModelUrl(query));
    }
}
