export default class UrlProcessor{
    async processSelect(query, result){
        return result.value;
    }

    async processInsert(query, result){
        return result.value;
    }

    async processInsertGetId(query, sql, values){
        if(query._modelBuilder === null){ throw 'UrlConnection does not support insertGetId without a model (due to rest limitations).'; }
        var result = await query.getConnection().insert(sql, values);
        return result[query._modelBuilder._model.getKeyName()];
    }

    async processUpdate(query, result){
        return result.value;
    }

    async processDestroy(query, result){
        return result.value;
    }
}
