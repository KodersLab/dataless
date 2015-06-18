
class DatabaseManager{
    _connections = {};
    _configs = {};
    _default = "default";

    disconnect(name = null)
    {
        if (this.connection(name) != null)
        {
            this.connection(name).disconnect();
        }
    }

    reconnect(name = null)
    {
        var name = name != null ? name : getDefaultConnection()
        this.disconnect(name);
        if(typeof this._connections[name] === 'undefined'){
            return this.connection(name);
        }
        return this.refreshPdoConnections(name);
    }

    refreshPdoConnections(name)
    {
        var fresh = this.makeConnection(name);
        return _connections[name].setPdo(fresh.getPdo()).setReadPdo(fresh.getReadPdo());
    }

    makeConnection(name)
    {
        var config = this.getConfig(name);

        var instance = null;
        switch (config["driver"])
        {
            case "url":
                instance = new UrlConnection(null, config["database"], config["prefix"], config);
                break;
        }

        instance.connect();
        return instance;
    }

    connections()
    {
        var result = [];
        for(var k in this._connections){
            if(this._connections.hasOwnProperty(k)){
                result.push(this._connections[k]);
            }
        }
        return result;
    }

    getDefaultConnection()
    {
        return this._default;
    }

    parseConnectionName(name = null)
    {
        name = name != null ? name: getDefaultConnection();
        return name.indexOf("::read") === name.length - 6 || name.indexOf("::write") === name.length - 7 ? name.split("::") : [name, null];
    }

    setPdoForType(connection, type = null)
    {
        if (type == "read")
        {
            connection.setPdo(connection.getReadPdo());
        }
        else if (type == "write")
        {
            connection.setReadPdo(connection.getPdo());
        }
        return connection;
    }

    connection(name = null)
    {
        var p = this.parseConnectionName(name);
        name = p[0];
        var type = p[1];

        if (typeof this._connections[name] === 'undefined')
        {
            var connection = this.makeConnection(name);
            this.setPdoForType(connection, type);
            this._connections[name] = this.prepare(connection);
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

    addConnection(name, config)
    {
        this._configs[name] = config;
    }

    getConfig(name = null)
    {
        name = name != null ? name : getDefaultConnection();

        if (typeof _configs['name'] === 'undefined')
        {
            throw "Database "+name+" not configured.";
        }
        return _configs[name];
    }

    prepare(connection){
        connection.setReconnector((c) => {
            return this.reconnect(c.getName());
        });
        return connection;
    }
}

export default new DatabaseManager();