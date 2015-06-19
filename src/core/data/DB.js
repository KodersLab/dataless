import DatabaseManager from './DatabaseManager';

class DB{
    table(name = ''){
        return DatabaseManager.connection().table(name);
    }
}

export default new DB();
