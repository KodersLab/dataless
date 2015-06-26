export default class Relation{
    constructor()
    {
        this.initialize.apply(this, arguments);
    }

    initialize(query, parent)
    {
        this._query = query;
        this._parent = parent;
        this._related = query.getModel();

        this.addConstraints();
    }

    addConstraints(){
        throw '#addConstraints(): should be implemented by the relation.';
    }

    touchOwners(){
        throw '#touchOwners(): should be implemented by the relation.';
    }

    hydrate(items, connection){
        if(items === null){ return this._related.newCollection(); }
        return this._related.constructor.hydrate(items, connection).map((model) => {
            return model.setParent(this._parent);
        });
    }
}
