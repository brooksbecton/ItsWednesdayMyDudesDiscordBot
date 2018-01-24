const getWedYoutubeVideos = require('./index');

describe('getWedYoutubeVideos', () => {
  test('fetches youtube data', async () => {
    const videoUrls = await getWedYoutubeVideos();
    expect(videoUrls.length).toMatchSnapshot();
  });
});
