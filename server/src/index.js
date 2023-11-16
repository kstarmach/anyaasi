const express = require('express');
const cors = require('cors');
const rssRouter = require('./controllers/rss.js');
const userRouter = require('./controllers/user.js');

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

app.use('/rss/', rssRouter);
app.use('/user/', userRouter);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
