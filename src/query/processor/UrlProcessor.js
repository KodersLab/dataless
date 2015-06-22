import Processor from './Processor';

export default class UrlProcessor extends Processor{
    async processSelect(query, result){
        return result.value;
    }

    async processInsert(query, result){
        return result.value;
    }

    async processInsertGetId(query, values){
        var result = await query.getConnection().insert(query, values);
        return result[query._model.getKeyName()];
    }

    async processUpdate(query, result){
        return result.value;
    }

    async processDestroy(query, result){
        return result.value;
    }
}
