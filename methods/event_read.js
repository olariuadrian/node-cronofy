var _ = require('underscore');

var Promise = require('bluebird');
var request = require('request');
//request.debug = true;

var Errors = require('../errors');

module.exports = function(params) {
    return new Promise(function(resolve, reject) {
        var events = [];

        params['tzid'] = 'Etc/UTC';

        var options = {
                uri: "https://api.cronofy.com/v1/events",
                method: 'GET',
                headers: {
                    'Content-type': 'application/json; charset=utf-8',
                    'Authorization': 'Bearer ' + params['access_token']
                },
                qs: _.omit(params, 'access_token'),
                json: true
            };

        request(options, responseCallback);

        function responseCallback(error, response, body) {
            console.log('requestCallback');
            if ( error || (response.statusCode != 200 && response.statusCode != 202) ) {
                console.log(error, response.statusCode);
                return reject(error);
            }

            events.push(body.events);

            nextPageFn(body.pages && body.pages.next_page);
        }

        function nextPageFn(nextPageUrl) {
            console.log('nextPageUrl ', nextPageUrl);
            if (!nextPageUrl) return resolve(_.flatten(events));

            request(
                {
                    uri: nextPageUrl,
                    method: 'GET',
                    headers: {
                        'Content-type': 'application/json; charset=utf-8',
                        'Authorization': 'Bearer ' + params['access_token']
                    },
                    json: true
                },
                responseCallback
            );
        }
    });
};