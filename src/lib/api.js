"use strict";

;(function () {
  var
      request = require('request')
    , url  = 'http://footballdb.herokuapp.com/api/v1/event/world.2014'
    , Api = {};


  Api.teams = function (callback) {
    request.get(url + '/teams', function (error, response, body) {
      var body = JSON.parse(response.body);
      callback(body.teams); //{ key: '', title: '', code: '' }
    });
  };


  Api.rounds = function (round, callback) {
    if (round) {
      request.get(url + '/round/'+ round, function (error, response, body) {
        var body = JSON.parse(response.body);
        callback(body);
        /*
          { team1_key: 'bra',
            team1_title: 'Brazil',
            team1_code: 'BRA',
            team2_key: 'cro',
            team2_title: 'Croatia',
            team2_code: 'CRO',
            play_at: '2014/06/12',
            score1: 3,
            score2: 1,
            score1ot: null,
            score2ot: null,
            score1p: null,
            score2p: null
          }
        */
      });
    } else {
      request.get(url + '/rounds', function (error, response, body) {
        var body = JSON.parse(response.body);
        callback(body.rounds); //{ pos: 20, title: 'Final', start_at: '2014/07/13', end_at: '2014/07/13' }
      });
    }
  }

  exports.WordCup = Api;
})();