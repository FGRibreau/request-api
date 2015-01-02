'use strict';

var express = require('express');
var request = require('requestretry');
var _ = require('lodash');
var bodyParser = require('body-parser');
var EventEmitter = require('events').EventEmitter;
var unflatten = require('flat').unflatten;

module.exports = function (logger, config) {
  var app = express();
  var events = new EventEmitter();

  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({
    extended: true
  }));

  if (config.unflatten) {
    app.use(function (req, res, next) {
      req.body = unflatten(req.body || {});
      next();
    });
  }

  // @todo add auth ?

  app.all('/request', function (req, res) {
    events.emit('request', req);
    request(_.extend(req.body, {
      maxAttempts: 5, // (default) try 5 times
      retryDelay: 5000, // (default) wait for 5s before trying again
      retryStrategy: request.RetryStrategies.HTTPOrNetworkError // (default) r
    }), function (err, resp, body) {
      events.emit('response', err, resp, body, req);
      res.status(err ? 500 : 200).send(err || body);
    });
  });

  return [app, events];
};
