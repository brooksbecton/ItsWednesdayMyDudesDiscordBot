const Discord = require("discord.js");

class Webhook {
  constructor() {
    this.hook = new Discord.WebhookClient(
      process.env.webhookId,
      process.env.webhookToken
    );
  }

  /**
   * Sends a message to the general channel
   * @param {String} msg
   */
  sendMessage(msg) {
    this.hook.send(msg);
  }
}

module.exports = Webhook; 