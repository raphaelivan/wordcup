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
    });
  };

  Api.results = function (callback) {
    request.get(url + '/group_results', function (error, response, body) {
      var json = JSON.parse(body);
      callback(json);
    });
  };

  Api.matches = function (callback) {
    request.get(url + '/matches/', function (error, response, body) {
      var json = JSON.parse(body);
      callback(json);
    });
  }

  Api.current = function (callback) {
    request.get(url + '/matches/current', function (error, response, body) {
      var json = JSON.parse(body);
      callback(json);
    });
  }

  Api.today = function (callback) {
    request.get(url + '/matches/today', function (error, response, body) {
      var json = JSON.parse(body);
      callback(json);
    });
  }

  exports.worldcup = Api;
})();