// @flow
const winston = require('winston');

const logger = winston.createLogger({
  format: winston.format.combine(
    winston.format.timestamp({
      format: 'YYYY-MM-DD HH:mm:ss',
    }),
    //
    // The simple format outputs
    // `${level}: ${message} ${[Object with everything else]}`
    //
    winston.format.json(),
    //
    // Alternatively you could use this custom printf format if you
    // want to control where the timestamp comes in your final message.
    // Try replacing `format.simple()` above with this:
    //
    // format.printf(info => `${info.timestamp} ${info.level}: ${info.message}`)
  ),
  level: 'debug',
  transports: [
    //
    // - Write to all logs with level `info` and below to `combined.log`
    // - Write all logs error (and below) to `error.log`.
    //
    new winston.transports.File({ filename: 'error.log', level: 'error' }),
    new winston.transports.File({ filename: 'combined.log' }),
  ],
});

type errorLevel = 'debug' | 'error' | 'info' | 'warn';

/**
 * Logs a custom message along with optional discord message info
 */
function log(param: { message: string, level: errorLevel, discordMsg?: {} }) {
  const { message, level, discordMsg } = param;

  let customMsg = message;

  if (discordMsg) {
    const { author, channel, content } = discordMsg;

    customMsg += `: Discord Info : author: ${author}, channel: ${channel}, content: ${content}`;
  }

  logger.log({ level, message: customMsg });
}

module.exports = log;
