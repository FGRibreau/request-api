var Winston = require('winston');

var winston = new Winston.Logger({
  transports: [
    new Winston.transports.Console({
      colorize: process.env.LOG_COLOR !== 'false',
      timestamp: process.env.LOG_TIMESTAMP !== 'false',
      level: process.env.LOG_LEVEL || 'debug'
    })
  ]
});

module.exports = winston;
