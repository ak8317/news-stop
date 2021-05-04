const express = require('express');
const app = express();
const connectDB = require('./config/db');
const cronJob = require('./worker');
const cors = require('cors');
const path = require('path');
require('dotenv').config();

connectDB();

cronJob.start();

app.use(cors());
app.use(express.json({ extended: false }));

//routes
app.use('/api/articles', require('./routes/articles'));

//serve static assests
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));

  app.get('*', (req, res) =>
    res.sendFile(path.resolve(__dirname, 'news-app', 'build', 'index.html'))
  );
}
const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
