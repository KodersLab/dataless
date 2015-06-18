import qs from 'qs';
import EventEmitter from '../utils/EventEmitter';

class HTTP extends EventEmitter{
    _pending = 0;
    
    ajax(method, url, body = {}, type = "json", options = {}){
        
        method = method.toUpperCase();
        
        return new Promise((resolve, reject) => {
            var params = qs.stringify(body);

            url = url + (url.indexOf('?') > -1 ? '&' : '?') + '_randomCacheBuster=' + Math.random();
            
            var xhr = null;            
            try{xhr = new XMLHttpRequest();}catch(e){}try{xhr = ActiveXObject("Msxml3.XMLHTTP");}catch(e){}try{xhr = ActiveXObject("Msxml2.XMLHTTP.6.0");}catch(e){}try{xhr = ActiveXObject("Msxml2.XMLHTTP.3.0");}catch(e){}try{xhr = ActiveXObject("Msxml2.XMLHTTP");}catch(e){}try{xhr = ActiveXObject("Microsoft.XMLHTTP");}catch(e){}
            
            xhr.open(method,  url, true);
            if(method === 'POST'){
                xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
            }
            
            this[type + 'PreRequest'](xhr, method);
            
            xhr.onreadystatechange = () => {
                if (xhr.readyState === 4) {
                    if(xhr.status == 200){
                        resolve(this[type + 'ParseData'](xhr.responseText));
                    }else{
                        reject(xhr);
                    }
                    this._pending--;
                    this.emit('ajaxEnd', this._pending);
                    this.emit('ajaxChanged', this._pending);
                }
            };
            
            this._pending++;
            this.emit('ajaxStart', this._pending);
            this.emit('ajaxChanged', this._pending);
            if(method === 'POST'){
                xhr.send(params);
            }else{
                xhr.send();
            }
        });
    }
    
    get(url){
        return this.ajax('GET', url);
    }
    
    delete(url){
        return this.ajax('DELETE', url);
    }
    
    post(url, data = {}){
        return this.ajax('POST', url, data);
    }
    
    jsonPreRequest(xhr, method){
        xhr.setRequestHeader('Accept', 'application/json');
    }
    
    jsonParseData(data){
        return JSON.parse(data);
    }
}

export default new HTTP();