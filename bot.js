const logger = require('winston');
require('dotenv').config();
const schedule = require("node-schedule")
// Configure logger settings
logger.remove(logger.transports.Console);
logger.add(logger.transports.Console, {
    colorize: true
});
logger.level = 'debug';

const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
    schedule.scheduleJob({ hour: 8, minute: 01, dayOfWeek: 3 }, function () {
    });
});

client.on('message', (message) => {
    const content = message.content.toLocaleLowerCase();
    if (content.indexOf("my") > -1 && content.indexOf("dude") > -1 && message.author.username !== "ItsWednesdayMyDudes") {
        if (content.indexOf('wednesday') > -1) {

            const isWednesday = new Date().getDay() === 3;

            if (isWednesday) {
                message.reply("It's Wednesday my dude!");
            }
            else {
                message.reply("It's NOT Wednesday my dude :(")
            }
        }
    }
});




client.login(process.env.token);