const getRandomInt = require('./../../lib/getRandomInt/');
const getWedYoutubeVideos = require('./../../lib/getWedYoutubeVideos/');

async function checkIfWednesday(message) {
  const content = message.content.toLocaleLowerCase();
  
  if (
    content.indexOf("my dude") > -1 &&
    message.author.username !== process.env.botName

  ) {
    if (content.indexOf('wednesday') > -1) {
      const isWednesday = new Date().getDay() === 3;

      if (isWednesday) {
        const videoUrls = await getWedYoutubeVideos();
        const videoCount = videoUrls.length;
        const randomVideoIndex = getRandomInt(videoCount);
        const randomVideo = videoUrls[randomVideoIndex];

        message.reply(`It is Wednesday my dude! \n eeeeeeeAAAAAhhhhhahahHAHahAHHAhAHHAhHAhAhHAhHHAAAAAAAAAA \n  ${
          randomVideo}`);
      } else {
        message.reply("It's NOT Wednesday my dude :(");
      }
    }
  }
}

module.exports = checkIfWednesday;
