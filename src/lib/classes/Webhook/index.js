// @flow

const Discord = require('discord.js');

class Webhook {
  constructor() {
    this.hook = new Discord.WebhookClient(process.env.webhookId, process.env.webhookToken);
  }

  sendMessage(msg: string) {
    hook.send();
  }
}

module.exports = Webhook;
