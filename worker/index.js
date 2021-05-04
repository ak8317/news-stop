const cron = require('node-cron');
const fetchNews = require('./fetchNews');
const reel = require('node-reel');

const cronJob = cron.schedule('0 */15 * * * *', () => {
  console.log(`Running cron job ..fetching news`);
  fetchNews();
});

module.exports = cronJob;
