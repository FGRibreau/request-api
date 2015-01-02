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
      maxAttempts: 5,
      retryDelay: 1000,
      retryStrategy: request.RetryStrategies.NetworkError
    }), function (err, resp, body) {
      events.emit('response', err, resp, body, req);

      if (err) {
        return res.status(500).send(err);
      }

      res.set(resp.headers).status(resp.statusCode).send(body);
    });
  });

  return [app, events];
};
