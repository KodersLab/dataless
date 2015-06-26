class Case{
    snakeCase(name){
        return name.replace(/([A-Z])/g, function($1){return '_' + $1.toLowerCase(); });
    }

    camelCase(input){
        return input.toLowerCase().replace(/_(.)/g, function(match, group1) {
            return group1.toUpperCase();
        });
    }

    studlyCase(input){
        return this.upperCaseFirst(this.camelCase(input));
    }

    upperCaseFirst(str){
        str += '';
        var f = str.charAt(0).toUpperCase();
        return f + str.substr(1);
    }
}

export default new Case();
