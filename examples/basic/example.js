// should be replaced with import {DatabaseManager} from 'dataless'
import {DatabaseManager, DB} from '../../src/index';

DatabaseManager.addConnection("default", {
    driver: "url",
    database: "http://localhost:100/api/v1/"
});

async function app(){
    var profiles = await DB.table('auth/profiles').get();
    var profilesCount = await DB.table('auth/profiles').count();
    var latestProfiles = await DB.table('auth/profiles').orderBy('id', 'DESC').get();
    
    
    console.log(profiles, profilesCount);
    console.log(latestProfiles);
}

DatabaseManager.connect().then(app, function(err){ console.log(err); });