var Promise = require('bluebird');
var request = require('request');

var Errors = require('../errors');

module.exports = function(params) {
    return new Promise(function(resolve, reject) {

        var options = {
            uri: "https://api.cronofy.com/v1/channels/" + params['channel_id'],
            method: 'DELETE',
            headers: {
                'Content-type': 'application/json; charset=utf-8',
                'Authorization': 'Bearer ' + params['access_token']
            },
            json: true
        };

        request(options, function (error, response, body) {
            if ( error || (response.statusCode != 200 && response.statusCode != 202) ) {
                console.log(error, response.statusCode);
                return reject(error);
            }

            return resolve(true);
        });
    });
};