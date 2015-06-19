// should be replaced with import {DatabaseManager, DB} from 'dataless'
import {DatabaseManager, DB, Model} from '../../src/index';

DatabaseManager.addConnection("default", {
    driver: "url",
    database: "http://localhost:100/api/v1/"
});

class Profile extends Model{
    _table = 'auth/profiles';
}

async function app(){ 
    var profiles = await Profile.query().limit(10).get();
    var profilesCount = await Profile.query().count();
    var latestProfiles = await Profile.query().orderBy('id', 'DESC').get();
    var firstProfile = await Profile.query().first();
    var theProfile = await Profile.query().find(1);
    var activeProfiles = await Profile.query().where('active','=',true).get();
    var profileWithUser = await Profile.query().with('user').first();
    
    var insertedProfile = await Profile.query().insert({ name: 'Nutella!'});
    
    var updatedProfile = await Profile.query().update(1, {name:'New Nutella!'});
    
    var deletedProfile = await Profile.query().destroy(1);
    
    
    console.log('There are '+profilesCount+' profiles:', profiles);
    console.log('Sorted by latest', latestProfiles);
    console.log('The first profile is ', firstProfile);
    console.log('The profile #1 is ', theProfile);
    console.log('Currently active profiles are', activeProfiles);
    console.log('A profile with its user', profileWithUser);
    console.log('===');
    console.log('Inserted profile:', insertedProfile);
    console.log('===');
    console.log('Updated profile:', updatedProfile);
    console.log('===');
    console.log('Deleted profile:', deletedProfile);
}

DatabaseManager.connect().then(app, function(err){ console.log(err); });