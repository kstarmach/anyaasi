require('dotenv').config();
const express = require('express');
const cors = require('cors');
const rssRouter = require('./controllers/rss.js');
const malRouter = require('./controllers/myanimelist.js');
const anilistRouter = require('./controllers/anilist.js');

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.use('/rss/', rssRouter);
app.use('/anilist/', anilistRouter);
app.use('/myanimelist/', malRouter);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
