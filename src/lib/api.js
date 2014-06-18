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


  exports.WordCup = Api;
})();