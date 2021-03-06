export default class Collection{
    _items = [];

    constructor(items = []){
        this._items = items;
    }

    all(){
        return this._items;
    }

    map(fn){
        return this._items.map(fn);
    }

    each(fn){
        this._items.map(function(item){
            return fn(item);
        });
        return this;
    }

    first(){
        return this._items.length > 0 ? this._items[0] : null;
    }
}
