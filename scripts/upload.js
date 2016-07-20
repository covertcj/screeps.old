/* eslint-env node */

'use strict';

var https = require('https');
var fs = require('fs');
var secrets = require('../secrets.js');


console.log('Starting upload');
var email = secrets.email,
    password = secrets.password,
    data = {
        branch: 'default',
        modules: { main: fs.readFileSync('./dist/main.js', { encoding: 'utf8' }) }
    };

var req = https.request({
    hostname: 'screeps.com',
    port: 443,
    path: '/api/user/code',
    method: 'POST',
    auth: email + ':' + password,
    headers: {
        'Content-Type': 'application/json; charset=utf-8'
    }
}, function(res) {
    console.log('Response: ' + res.statusCode);
});

req.write(JSON.stringify(data));
req.end();
