'use strict';

module.exports = function (logger) {
  var env = require('common-env')(logger);
  return env.getOrElseAll({
    port: 8080,
    proxy: {
      // unflatten body parameters
      unflatten: true
    }
  });
};
