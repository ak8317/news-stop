const router = require('express').Router();
const Article = require('../models/Article');
const fetchFilteredNews = require('../worker/fetchFilteredNews');
//get all articles
router
  .route('/')
  .get(async (req, res) => {
    try {
      const articles = await Article.find();

      if (articles.length > 0) {
        res.json(articles);
      } else {
        res.status(404).json({
          error: 'No articles to show',
        });
      }
    } catch (err) {
      console.error(err.message);
      res.status(500).json({
        error: err.message,
      });
    }
  })
  .post(async (req, res) => {
    try {
      const { query } = req.body;
      const data = await fetchFilteredNews(query);
      res.json(data);
    } catch (error) {
      console.error(err.message);
      res.status(500).json({
        error: err.message,
      });
    }
  });

//search for a particular keyword

module.exports = router;
