const mongoose = require('mongoose');

const articleSchema = mongoose.Schema({
  articles: [mongoose.Schema.Types.Mixed],
});

module.exports = mongoose.model('Article', articleSchema);
