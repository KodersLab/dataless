import qs from 'qs';
import HTTP from './utils/HTTP';
import UrlProcessor from './query/processor/UrlProcessor';
import Connection from './Connection';

export default class UrlConnection extends Connection{
    // change the post processor to be the url one, which picks data from .value instead of root.
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
        // create a copy of the object with reformatted data.
        var data = {};
        data._aggregate = query._aggregate === null ? undefined : query._aggregate;
        data._columns = query._columns === null ? undefined : query._columns.join(',');
        data._wheres = query._wheres === null ? undefined : JSON.stringify(query._wheres);
        data._limit = query._limit === null ? undefined : query._limit;
        data._offset = query._offset === null ? undefined : query._offset;
        data._orders = query._orders === null ? undefined : query._orders.map((order) => order.join(',')).join('|');
        data._groups = query._groups === null ? undefined : query._groups;
        data._with = query._with === null ? undefined : query._with.join(',');
        // return as a string.
        return qs.stringify(data);
    }

    _buildSelectUrl(query){
        // by default, base url is the model table.
        var baseUrl = query._model._table;
        // append query string.
        var queryString = this._buildQueryString(query);
        if(queryString !== ''){
            baseUrl += (baseUrl.indexOf('?') > -1 ? '&' : '?') + queryString;
        }
        return baseUrl;
    }

    _buildModelUrl(query){
        var model = query._model;
        var baseUrl = [];

        // Loop through parent and build the url.
        while(model != null){
            // if the model is parentless, stop there.
            if(model._parentless === true){ break; }
            // push fragment into baseUrl and then change current model.
            baseUrl.push(model._table + '/' + model.getKey());
            model = model.getParent();
        }
        // create a string.
        baseUrl = baseUrl.join('/');
        // handle query string append.
        var queryString = this._buildQueryString(query);
        if(queryString !== ''){
            baseUrl += (baseUrl.indexOf('?') > -1 ? '&' : '?') + queryString;
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
