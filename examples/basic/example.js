// should be replaced with import {DatabaseManager, DB} from 'dataless'
import {DatabaseManager, DB} from '../../src/index';

DatabaseManager.addConnection("default", {
    driver: "url",
    database: "http://localhost:100/api/v1/"
});

async function app(){
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