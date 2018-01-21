const Discord = require("discord.js");
require("dotenv").config();

const client = new Discord.Client();

const Middleware = require("./middleware/Middleware");

const checkIfWednesday = require("./middleware/checkIfWednesday/");
const pingPong = require("./middleware/pingPong/");
const bangModules = require("./middleware/bangModules");



const botMiddleware = new Middleware();
client.on("ready", () => {
  console.log("Started on: " + new Date());

  botMiddleware.add(checkIfWednesday);
  botMiddleware.add(pingPong);
  botMiddleware.add(bangModules);
});

client.on("message", message => {
  const content = message.content.toLocaleLowerCase();

  botMiddleware.run(message);
});

client.login(process.env.token);
