export default class Processor{
    async processSelect(query, result){
        return result;
    }

    async processInsert(query, result){
        return result;
    }

    async processInsertGetId(query, sql, values){
        return await query.getConnection().insert(sql, values);
    }

    async processUpdate(query, result){
        return result;
    }

    async processDelete(query, result){
        return result;
    }
}
