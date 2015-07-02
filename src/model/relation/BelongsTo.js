import Relation from './Relation';

export default class BelongsTo extends Relation{
    _foreignKey = null;
    _otherKey = null;
    _relation = null;

    initialize(query, parent, foreignKey, otherKey, relation)
    {
        this._otherKey = otherKey;
        this._relation = relation;
        this._foreignKey = foreignKey;

        super.initialize(query, parent);
    }

    addConstraints(){
        var table = this._related.getTable();

        this._query.where(this._otherKey, '=', this._parent.getAttribute(this._foreignKey));
    }

    hydrate(items, connection){
        return super.hydrate(items === null ? null : [items], connection).first();
    }

    async getResults(){
        return await this._query.first();
    }

    associate(model){
        model.setParent(this);
        var otherKey = model.getAttribute(this._otherKey);
        this._parent.setAttribute(this._foreignKey, otherKey);
        this._parent.setRelation(this._relation, model);
        return this._parent;
    }

    dissociate()
    {
        var related = this._parent.getAttribute(this._relation);
        if(related !== null)
            related.setParent(null);
        }
        this._parent.setAttribute(this._foreignKey, null);
        return this._parent.setRelation(this._relation, null);
    }
}
