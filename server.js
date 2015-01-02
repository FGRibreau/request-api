'use strict';
var logger = require('./logger');
var config = require('./config')(logger);
var pair = require('./proxy')(logger);
var proxy = pair[0];
var events = pair[1];

events.on('request', function (req) {
  logger.log('debug', 'rqst', req.method, req.url, req.body);
});

events.on('response', function (err, resp, body, req) {
  logger.log('debug', 'resp', {
    method: req.method,
    url: req.url,
    err: err,
    body: body
  });
});

proxy.listen(config.port, function () {
  logger.log('debug', 'Proxy listening on %s', config.port);
});