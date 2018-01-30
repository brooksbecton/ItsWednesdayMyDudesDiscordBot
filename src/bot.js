const Discord = require('discord.js');
require('dotenv').config();

const logger = require('./lib/logger');

const client = new Discord.Client();

const Middleware = require('./middleware/Middleware');

const checkIfWednesday = require('./middleware/checkIfWednesday/');
const getWedYoutubeVideo = require('./middleware/getWedYoutubeVideo/');
const pingPong = require('./middleware/pingPong/');

const botMiddleware = new Middleware();

client.on('ready', () => {
  logger.info('Bot Started');

  botMiddleware.add(checkIfWednesday);
  botMiddleware.add(getWedYoutubeVideo);
  botMiddleware.add(pingPong);
});

client.on('message', (message) => {
  botMiddleware.run(message);
});

client.login(process.env.token);
