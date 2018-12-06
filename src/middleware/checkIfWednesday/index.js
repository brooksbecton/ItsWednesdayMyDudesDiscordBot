const getRandomInt = require('./../../lib/getRandomInt/');
const getWedYoutubeVideos = require('./../../lib/getWedYoutubeVideos/');
const log = require('./../../lib/logger');

async function checkIfWednesday(message) {
  const { content = message.content.toLocaleLowercase() } = message;

  log({
    level: 'debug',
    message: 'Checking if Wednesday',
    discordMsg: message,
  });
  if (
    content.indexOf('my dude') > -1
    && message.author.username !== process.env.botName

  if (message.author.username !== process.env.botName) {
    if (content.indexOf('my dude') > -1 && content.indexOf('wednesday') > -1) {
      const isWednesday = new Date().getDay() === 3;

      if (isWednesday) {
        log({
          level: 'debug',
          message: 'Checking if Wednesday',
          discordMsg: message,
        });

        const videoUrls = await getWedYoutubeVideos();
        const videoCount = videoUrls.length;
        const randomVideoIndex = getRandomInt(videoCount);
        const randomVideo = videoUrls[randomVideoIndex];

        message.reply(
          `It is Wednesday my dude! \n eeeeeeeAAAAAhhhhhahahHAHahAHHAhAHHAhHAhAhHAhHHAAAAAAAAAA \n  ${randomVideo}`,
        );
        log({
          level: 'debug',
          message: 'Checking if Wednesday',
          discordMsg: message,
        });
      } else {
        message.reply("It's NOT Wednesday my dude :(");
      }
    }
  } else {
    log({
      level: 'debug',
      message: 'Ignoring message from myself',
      discordMsg: message,
    });
  }
}

module.exports = checkIfWednesday;
