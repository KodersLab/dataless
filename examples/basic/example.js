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
    
    var profiles = await Profile.query().get();
    console.log('Via model', profiles);
    
    var profiles = await DB.table('auth/profiles').get();
    var profilesCount = await DB.table('auth/profiles').count();
    var latestProfiles = await DB.table('auth/profiles').orderBy('id', 'DESC').get();
    var theProfile = await DB.table('auth/profiles').find(1);
    var activeProfiles = await DB.table('auth/profiles').where('active','=',true).get();
    
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