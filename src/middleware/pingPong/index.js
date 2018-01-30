function pingPong(message) {
  const content = message.content.toLocaleLowerCase();

  if (content === 'ping') {
    message.reply('pong');
  }
}

module.exports = pingPong;
