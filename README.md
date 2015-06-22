# dataless
A javascript DBAL with multiple adapters that aims to provide data access in browsers.


----------
## Todo

 - [ ] Support object memory adapter via lodash
 - [ ] Support mutation (rpc calls to a function set on the db)
 - [ ] Provide laravel relay adapter
 - [ ] DOCS!!! D:

## Code example

```javascript
// first import needed classes
import {DatabaseManager, Model} from 'dataless'

// configure your connection
DatabaseManager.addConnection('default', {
    driver: 'url',
    database: 'http://localhost:100/api/v1/'
});
DatabaseManager.addConnection('memory', {
    driver: 'memory'
});

// define your model
class Profile extends Model{
    // provide a table
    _table = 'auth/profiles';

    // provide a connection
    _connection = 'default';
}

// Another model in memory store
class Setting extends Model{
    _table = 'settings';
    _connection = 'memory';
}

// the app function will be executed once the db is ready
async function app(){ 
    // search profiles
    var theProfile = await Profile.query().select('id', 'name').find(1);
    var profiles = await Profile.query().orderBy('id','DESC').where('active', '=', 'true').get();
    console.log(theProfile, profiles);

    // create a new record with some data
    var profile = new Profile();
    profile.set('name', 'Matt');
    profile.set('surname', 'Smith');
    await profile.save();
    
    // update it
    profile.set('nickname', '"The Doctor"');
    await profile.save();
    
    // access it
    console.log('Hello, my name is ' + profile.get('name') + ' ' + profile.get('surname') + ', also named '+ profile.get('nickname'));
    
    // destroy it
    await profile.destroy();
    
    // create a new record in the memory connection
    var setting = new Setting();
    setting.set('value', true);
    setting.set('name', 'fullscreen');
    await setting.save();
    
    // dump the memory store
    console.log('Memory store dump:', DatabaseManager.connection('memory').toObject());
}

// connect all the db and let it fly! :D
Promise.all([DatabaseManager.connect(), DatabaseManager.connect('memory')]).then(app, function(err){ console.log(err); });
```
