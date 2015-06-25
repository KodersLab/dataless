class Case{
    snakeCase(name){
        return name.replace(/([A-Z])/g, function($1){return '_' + $1.toLowerCase(); });
    }
}

export default new Case();
