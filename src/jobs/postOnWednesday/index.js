const schedule = require('node-schedule');

const getRandomInt = require('./../../lib/getRandomInt');
const getWedYoutubeVideos = require('./../../lib/getWedYoutubeVideos');
const Webhook = require('./../../lib/classes/Webhook');

/**
 * Sends a message and a video through a webhook
 * every Wednesday
 */
function postOnWednesday() {
  const hook = new Webhook();

  schedule.scheduleJob({ hour: 0, minute: 0, dayOfWeek: 3 }, () => {
    const videoUrls = getWedYoutubeVideos();
    const randomInt = getRandomInt(videoUrls.length);
    const randomVideo = videoUrls[randomInt];
    hook.sendMessage(`It is Wednesday my dudes ${randomVideo}`);
  });
}

module.exports = postOnWednesday;
