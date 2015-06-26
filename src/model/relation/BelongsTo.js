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

    hydrate(items, connection){
        return super.hydrate(items === null ? null : [items], connection).first();
    }

    addConstraints(){
        var table = this._related.getTable();

        this._query.where(this._otherKey, '=', this._parent.getAttribute(this._foreignKey));
    }
}
