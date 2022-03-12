const Discord = require('discord.js');
require('dotenv').config();

const client = new Discord.Client({
  intents: [Discord.Intents.FLAGS.GUILDS, Discord.Intents.FLAGS.GUILD_MESSAGES],
});

const Middleware = require('./middleware/Middleware');

const startJobs = require('./jobs/');
const checkIfWednesday = require('./middleware/checkIfWednesday/');
const getWedYoutubeVideo = require('./middleware/getWedYoutubeVideo/');
const pingPong = require('./middleware/pingPong/');

const botMiddleware = new Middleware();

client.on('ready', () => {
  console.log(`Started on: ${new Date()}`);

  startJobs();
  botMiddleware.add(checkIfWednesday);
  botMiddleware.add(getWedYoutubeVideo);
  botMiddleware.add(pingPong);
});

client.on('messageCreate', (message) => {
  botMiddleware.run(message);
});

client.login(process.env.token);
