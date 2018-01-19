const Discord = require('discord.js');
require('dotenv').config();
const schedule = require("node-schedule")

const client = new Discord.Client();

const Middleware = require('./middleware/Middleware')

const checkIfWednesday = require('./middleware/checkIfWednesday/')
const pingPong = require('./middleware/pingPong/')

const botMiddleware = new Middleware();
client.on('ready', () => {
    console.log('Started on: ' + new Date());


    botMiddleware.add(checkIfWednesday);
    botMiddleware.add(pingPong);
});

client.on('message', (message) => {
    const content = message.content.toLocaleLowerCase();


    botMiddleware.run(message);
});




client.login(process.env.token);