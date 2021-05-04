const fetch = require('node-fetch');
const Article = require('../models/Article');

async function fetchNews() {
  try {
    const res = await fetch(
      `https://newsapi.org/v2/top-headlines?country=in&apiKey=${process.env.API_KEY}`
    );
    const data = await res.json();
    const mongoArticles = await Article.find();
    let id;
    let savedData;

    if (mongoArticles.length > 0) {
      id = mongoArticles[0]._id;
      savedData = await Article.findByIdAndUpdate(
        { _id: id },
        { $set: { articles: data.articles } },
        { new: true }
      );
    } else {
      const d = new Article();
      d.articles = data.articles;
      //console.log(d);
      savedData = await d.save();
    }

    //console.log(savedData);
  } catch (err) {
    console.error(err.message);
  }
}
module.exports = fetchNews;
