# dataless
A javascript DBAL with multiple adapters that aims to provide data access in browsers.


----------
## Todo

 - Support object memory adapter via lodash
 - Support mutation (rpc calls to a function set on the db)
 - Provide laravel relay adapter
 - DOCS!!! D:

## Code example

```javascript
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
    // your query will be remapped to an http request and executed.
    var profiles = await DB.table('auth/profiles').get();
    var profilesCount = await DB.table('auth/profiles').count();
    var latestProfiles = await DB.table('auth/profiles').orderBy('id', 'DESC').get();
    var theProfile = await DB.table('auth/profiles').find(1);
    var activeProfiles = await DB.table('auth/profiles').where('active','=',true).get();
    // all methods returns promises, so you can create an array and use Promise.all to get one promise instead of many.

    var insertedProfile = await DB.table('auth/profiles').insert({ name: 'Nutella!'});

    var updatedProfile = await DB.table('auth/profiles').update(1, {name:'New Nutella!'});

    var deletedProfile = await DB.table('auth/profiles').destroy(1);


    console.log('There are '+profilesCount+' profiles:', profiles);
    console.log('Sorted by latest', latestProfiles);
    console.log('The profile #1 is ', theProfile);
    console.log('Currently active profiles are', activeProfiles);
    console.log('===');
    console.log('Inserted profile:', insertedProfile);
    console.log('===');
    console.log('Updated profile:', updatedProfile);
    console.log('===');
    console.log('Deleted profile:', deletedProfile);
}

DatabaseManager.connect().then(app, function(err){ console.log(err); });
```
