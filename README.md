# dataless
A javascript DBAL with multiple adapters that aims to provide data access in browsers.


----------
## Todo

 - Support object memory adapter via lodash
 - Support insert/update/delete operations
 - Support mutation (rpc calls to a function set on the db)
 - DOCS!!! D:

## Code example

    // first import the needed classes.
    import {DatabaseManager, DB} from 'dataless'
     
    // configure the rest adapter to the database
    DatabaseManager.addConnection("default", {
        driver: "url",
        database: "http://localhost:100/api/v1/"
    });
    
    // main async app
    async function app(){
        // you can write your queries to 
        var profiles = await DB.table('auth/profiles').get();
        var profilesCount = await DB.table('auth/profiles').count();
        var latestProfiles = await DB.table('auth/profiles').orderBy('id', 'DESC').get();
        var theProfile = await DB.table('auth/profiles').find(1);
        var activeProfiles = await DB.table('auth/profiles').where('active','=',true).get();
    
    
        console.log('There are '+profilesCount+' profiles:', profiles);
        console.log('Sorted by latest', latestProfiles);
        console.log('The profile #1 is ', theProfile);
        console.log('Currently active profiles are', activeProfiles);
    }
    
    DatabaseManager.connect().then(app, function(err){ console.log(err); });