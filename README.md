# dataless
A javascript ORM with multiple adapters that aims to provide data access in browsers.


----------
## Features

 - [ ] Support multiple databases adapter
   - [X] REST adapter
   - [ ] Local In-Memory adapter (WIP)
   - [ ] SQLite adapter
 - [X] Entity abstraction layer with basic query operations
 - [X] Support model definition
   - [ ] Basic definition
     - [X] Define table
     - [X] Primary Key
     - [ ] Date fields
     - [ ] Field to type casting
   - [X] Basic Create / Read / Update / Delete operations
   - [X] Model event hooks
   - [X] Getter and Setter mutators
   - [ ] Define model relationships
     - [X] BelongsTo
     - [ ] HasMany
     - [ ] HasOne
     - [ ] BelongsToMany
   - [ ] Perform advanced query on a relationship on a model
   - [X] Eager load relationships
   - [ ] $refs, How can we handler refs? (maybe share the _attributes and _original object)
   - [ ] Call remote functions defined on remote entity (rest endpoint or db functions)
 - [ ] DOCS D:

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
class User extends Model{
    // provide a table
    _table = 'auth/users';

    // a mutator
    getFullnameAttribute(){
        return this._attributes['name'] + ' ' + this._attributes['surname'];
    }
}

// define your model
class Profile extends Model{
    // provide a table
    _table = 'auth/profiles';

    // provide a connection
    _connection = 'default';

    // setup a relation
    founder(){
        return this.belongsTo('founder', User);
    }
}

// Another model in memory store
class Setting extends Model{
    _table = 'settings';
    _connection = 'memory';
}

// the app function will be executed once the db is ready
async function app(){ 
    // search profiles
    var theProfile = await Profile.query().with('founder').select('id', 'name', 'founder_id').find(4);
    var profiles = await Profile.query().with('founder').orderBy('id','DESC').where('logo', '=', null).limit(10).get();
    console.log(theProfile, profiles);
    console.log('Profile #4 is funded by ' + theProfile.get('founder').get('fullname'));

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
