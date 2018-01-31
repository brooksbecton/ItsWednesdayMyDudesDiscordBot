const { createLogger, format, transports } = require('winston');

const { combine, timestamp } = format;

const logger = createLogger({
  format: combine(timestamp()),
  transports: [new transports.Console(), new transports.File({ filename: 'logs/combined.log' })],
});

module.exports = logger;
