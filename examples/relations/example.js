// should be replaced with import {DatabaseManager, Model} from 'dataless'
import {DatabaseManager, Model} from '../../src/index';

// configure your connection
DatabaseManager.addConnection('default', {
    driver: 'url',
    database: 'http://localhost:100/api/v1/'
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

// the app function will be executed once the db is ready
async function app(){ 
    // search profiles
    var theProfile = await Profile.query().with('founder').select('id', 'name', 'founder_id').find(4);
    var profiles = await Profile.query().with('founder').orderBy('id','DESC').where('logo', '=', null).limit(10).get();
    // dumps the data
    console.log(theProfile, profiles);
    console.log('Profile #4 is funded by ' + theProfile.get('founder').get('fullname'));
    // associate a user with the profile
    var theUser = User.query().find(7);
    theProfile.founder().associate(theUser);
    // save to make it permanent
    theProfile.save();    
}

// connect all the db and let it fly! :D
Promise.all([DatabaseManager.connect()]).then(app, function(err){ console.log(err); });