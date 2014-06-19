"use strict";

;(function () {
  var
      request = require('request')
    , url  = 'http://worldcup.sfg.io/'
    , Api = {};


  Api.teams = function (callback) {
    request.get(url + '/teams', function (error, response, body) {
      var json = JSON.parse(body);
      callback(json);
      /*
        { country: 'Croatia',
         alternate_name: null,
         fifa_code: 'CRO',
         group_id: 1
        }
      */

    });
  };


  Api.matches = function (callback) {
    request.get(url + '/matches/', function (error, response, body) {
      var json = JSON.parse(body);
      callback(json);
      /*
        {
          match_number: 1,
          location: 'Arena Corinthians',
          datetime: '2014-06-12T17:00:00.000-03:00',
          status: 'completed',
          home_team:
           { country: 'Brazil',
             code: 'BRA',
             goals: 3 },
          away_team:
           { country: 'Croatia',
             code: 'CRO',
             goals: 1 },
          winner: 'Brazil'
        }
      */
    });
  }

  exports.WorldCup = Api;
})();