const fetch = require('node-fetch');
const Article = require('../models/Article');

async function fetchFilteredNews(text) {
  try {
    const res = await fetch(
      `https://newsapi.org/v2/everything?q=${text}&sortBy=publishedAt&pageSize=10&apiKey=${process.env.API_KEY}`
    );
    const data = await res.json();
    return data;

    //console.log(savedData);
  } catch (err) {
    console.error(err.message);
  }
}
module.exports = fetchFilteredNews;
