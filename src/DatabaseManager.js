import EventEmitter from 'eventemitter3';
import UrlConnection from './UrlConnection';
import MemoryConnection from './MemoryConnection';

class DatabaseManager extends EventEmitter{
    _connections = {};
    _configs = {};
    _default = 'default';
    _drivers = {
        url: (config) => new UrlConnection(config),
        memory: (config) => new MemoryConnection(config)
    };

    async connect(name = null){
        name = name != null ? name : this.getDefaultConnection();

        var p = this.parseConnectionName(name);
        name = p[0];
        var type = p[1];

        if (typeof this._connections[name] === 'undefined')
        {
            var connection = await this.makeConnection(name);
            this.setPdoForType(connection, type);
            this._connections[name] = this.prepare(connection);
        }
    }

    async disconnect(name = null){
        if (this.connection(name) != null)
        {
            await this.connection(name).disconnect();
        }
    }

    async reconnect(name = null){
        name = name != null ? name : this.getDefaultConnection();
        this.disconnect(name);
        if(typeof this._connections[name] === 'undefined'){
            return this.connection(name);
        }
        return await this.refreshPdoConnections(name);
    }

    prepare(connection){
        connection.setReconnector((c) => {
            return this.reconnect(c.getName());
        });
        return connection;
    }

    async makeConnection(name){
        var config = this.getConfig(name);
        var driver = (config.driver || 'url').toLowerCase();

        var instance = null;
        if(typeof this._drivers[driver] === 'undefined'){
            throw 'Unknown driver type ' + driver;
        }
        instance = this._drivers[driver](config);

        await instance.connect();
        return instance;
    }

    async refreshPdoConnections(name){
        var fresh = await this.makeConnection(name);
        return this._connections[name].setPdo(fresh.getPdo()).setReadPdo(fresh.getReadPdo());
    }

    connections(){
        var result = [];
        for(var k in this._connections){
            if(this._connections.hasOwnProperty(k)){
                result.push(this._connections[k]);
            }
        }
        return result;
    }

    getDefaultConnection(){
        return this._default;
    }

    parseConnectionName(name = null){
        name = name != null ? name : this.getDefaultConnection();
        return name.indexOf('::read') === name.length - 6 || name.indexOf('::write') === name.length - 7 ? name.split('::') : [name, null];
    }

    setPdoForType(connection, type = null){
        if (type === 'read')
        {
            connection.setPdo(connection.getReadPdo());
        }
        else if (type === 'write')
        {
            connection.setReadPdo(connection.getPdo());
        }
        return connection;
    }

    connection(name = null){
        var p = this.parseConnectionName(name);
        name = p[0];

        if (typeof this._connections[name] === 'undefined')
        {
            throw 'Connection ' + name + ' is not ready yet. Have you called DatabaseManager.connect(\'' + name + '\') before this query?';
        }
        if (name == null)
        {
            return typeof this._connections[this.getDefaultConnection()] ? this._connections[this.getDefaultConnection()] : null;
        }
        else if (typeof this._connections[name] === 'undefined')
        {
            return null;
        }else
        {
            return this._connections[name];
        }
    }

    addConnection(name, config){
        this._configs[name] = config;
    }

    addDriver(name, driverFn){
        this._drivers[name] = driverFn;
    }

    getConfig(name = null){
        name = name != null ? name : this.getDefaultConnection();

        if (typeof this._configs[name] === 'undefined')
        {
            throw 'Database ' + name + ' not configured.';
        }
        return this._configs[name];
    }
}

export default new DatabaseManager();
