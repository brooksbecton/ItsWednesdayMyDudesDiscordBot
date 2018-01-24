const fetch = require('node-fetch');
require('dotenv').config('./../../');
/**
 * Endpoint: https://www.googleapis.com/youtube/v3/playlistItems?part=contentDetails&playlistId=PLy3-VH7qrUZ5IVq_lISnoccVIYZCMvi-8&maxResults=50&key=YOUTUBE_API_KEY
 * Response:
 * {
 *   "kind": "youtube#playlistItemListResponse",
 *   "etag": "\"g7k5f8kvn67Bsl8L-Bum53neIr4/EBxT0hDTn5jnQFrx6RBysV_-UW4\"",
 *   "pageInfo": {
 *     "totalResults": 21,
 *     "resultsPerPage": 50
 *   },
 *   "items": [
 *     {
 *       "kind": "youtube#playlistItem",
 *       "etag": "\"g7k5f8kvn67Bsl8L-Bum53neIr4/acGNfHw_WLPwHVCrz9n4WMUK5Kw\"",
 *       "id": "UEx5My1WSDdxclVaNUlWcV9sSVNub2NjVklZWkNNdmktOC41NkI0NEY2RDEwNTU3Q0M2",
 *       "contentDetails": {
 *         "videoId": "9K4-jllrPrE",
 *         "videoPublishedAt": "2017-08-30T07:00:40.000Z"
 *       }
 *     },
 *     ...
 *   ]
 * }
 */

async function getWedYoutubeVideos() {
  const videoUrls = [];
  const baseYoutubeUrl = 'https://www.youtube.com/watch?v=';
  const resp = await fetch(`https://www.googleapis.com/youtube/v3/playlistItems?part=contentDetails&playlistId=PLy3-VH7qrUZ5IVq_lISnoccVIYZCMvi-8&maxResults=50&key=${
    process.env.youtubeApiKey
  }`);

  if (resp.status === 200) {
    const body = await resp.text();
    const { items } = JSON.parse(body);

    items.forEach(({ contentDetails: { videoId } }) => {
      const videoUrl = baseYoutubeUrl + videoId;
      videoUrls.push(videoUrl);
    });

    return videoUrls;
  }
  return [];
}

module.exports = getWedYoutubeVideos;
