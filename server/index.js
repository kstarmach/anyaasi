import express from 'express';
import axios from 'axios';
import { parseString } from 'xml2js';

const app = express();
const port = 3000;

app.use(express.json());

app.get('/fetchRss', async (req, res) => {
  try {
    const response = await axios.get('https://nyaa.si/?page=rss&q=%5BSubsPlease%5D+Spy+x+Family+-+%281080p%29&c=1_0&f=2');
    if (response.status === 200) {
      // Parse the XML data using xml2js
      parseString(response.data, (err, result) => {
        if (err) {
          res.status(500).send(err);
        } else {
          // Convert the parsed XML data to JSON
          res.json(result.rss.channel[0].item);
        }
      });
    }
  } catch (error) {
    res.status(500).send(error);
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
