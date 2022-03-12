// @flow

const Discord = require('discord.js');

class Webhook {
  constructor() {
    this.hook = new Discord.WebhookClient({ url: process.env.webhookUrl });
  }

  sendMessage(msg: string) {
    this.hook.send(msg);
  }
}

module.exports = Webhook;
