export default class Processor{
    async processSelect(query, result){
        return result;
    }

    async processInsert(query, result){
        return result;
    }

    async processInsertGetId(query, values){
        return await query.getConnection().insert(query, values);
    }

    async processUpdate(query, result){
        return result;
    }

    async processDestroy(query, result){
        return result;
    }
}
