// should be replaced with import {DatabaseManager, Model} from 'dataless'
import {DatabaseManager, Model} from '../../src/index';

// configure your connection
DatabaseManager.addConnection('default', {
    driver: "url",
    database: "http://localhost:100/api/v1/"
});

// define your model
class Profile extends Model{
    // provide a table
    _table = 'auth/profiles';

    // provide a connection
    _connection = 'default';
}

// the app function will be executed once the db is ready
async function app(){ 
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
}

// connect the db and let it fly! :D
DatabaseManager.connect().then(app, function(err){ console.log(err); });