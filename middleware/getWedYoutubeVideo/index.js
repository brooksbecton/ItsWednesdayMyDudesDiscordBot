const getRandomInt = require('./../../lib/getRandomInt/');
const getWedYoutubeVideos = require('./../../lib/getWedYoutubeVideos/');

async function checkIfWednesday(message) {
  const content = message.content.toLocaleLowerCase();
  if (

    content.indexOf("my dude") > -1 &&
    message.author.username !== process.env.botName

  ) {
    if (content.indexOf('video') > -1) {
      const videoUrls = await getWedYoutubeVideos();
      const videoCount = videoUrls.length;
      const randomVideoIndex = getRandomInt(videoCount);
      const randomVideo = videoUrls[randomVideoIndex];

      message.reply(randomVideo);
    }
  }
}

module.exports = checkIfWednesday;
