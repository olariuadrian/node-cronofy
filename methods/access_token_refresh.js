var Promise = require('bluebird');
var request = require('request');

var Errors = require('../errors');

module.exports = function(params) {
    return new Promise(function(resolve, reject) {

        var options = {
            uri: "https://api.cronofy.com/oauth/token",
            method: 'POST',
            headers: {
                'Content-type': 'application/json; charset=utf-8'
            },
            json: params
        };
        
        request(options, function (error, response, body) {
            if ( error || (response.statusCode != 200 && response.statusCode != 202) ) {
                console.log(error, response.statusCode);
                return reject(error);
            }
          
            return resolve(body);
        });        
    });
};
