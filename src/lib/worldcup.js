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

  Api.results = function (callback) {
    request.get(url + '/group_results', function (error, response, body) {
      var json = JSON.parse(body);
      callback(json);

      /*
       {
         country: 'Brazil',
         alternate_name: null,
         fifa_code: 'BRA',
         group_id: 1,
         wins: 1,
         draws: 1,
         losses: 0,
         goals_for: 3,
         goals_against: 1,
         knocked_out: false,
         updated_at: '2014-06-17T22:20:49.260-03:00'
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
          home_team: { country: 'Brazil', code: 'BRA', goals: 3 },
          away_team: { country: 'Croatia', code: 'CRO', goals: 1 },
          winner: 'Brazil',
          home_team_events:
           [ { id: 11,
               type_of_event: 'goal-own',
               player: 'Marcelo',
               time: '11' },
             { id: 14,
               type_of_event: 'yellow-card',
               player: 'Neymar Jr',
               time: '27' },
             { id: 15, type_of_event: 'goal', player: 'Neymar Jr', time: '29' },
             { id: 13,
               type_of_event: 'substitution-in',
               player: 'Hernanes',
               time: '63' },
             { id: 12,
               type_of_event: 'substitution-in',
               player: 'Bernard',
               time: '68' },
             { id: 16,
               type_of_event: 'goal-penalty',
               player: 'Neymar Jr',
               time: '71' },
             { id: 19,
               type_of_event: 'yellow-card',
               player: 'L Gustavo',
               time: '88' },
             { id: 17,
               type_of_event: 'substitution-in',
               player: 'Ramires',
               time: '88' },
             { id: 18, type_of_event: 'goal', player: 'Oscar', time: '901' } ],
          away_team_events:
           [ { id: 23,
               type_of_event: 'substitution-in',
               player: 'BrozoviĆ',
               time: '61' },
             { id: 20,
               type_of_event: 'yellow-card',
               player: 'Corluka',
               time: '66' },
             { id: 21,
               type_of_event: 'yellow-card',
               player: 'Lovren',
               time: '69' },
             { id: 22,
               type_of_event: 'substitution-in',
               player: 'RebiĆ',
               time: '78' } ]
        }
      */
    });
  }

  exports.worldcup = Api;
})();