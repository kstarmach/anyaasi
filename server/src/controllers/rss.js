const rssRouter = require('express').Router();
const axios = require('axios');
var parseString = require('xml2js').parseString;

rssRouter.get('/:u', async (req, res) => {

    const u = req.params.u;
    const q = req.query.q;
    const c = '1_0';
    const f = 2;

    const response = await axios.get(`https://nyaa.si/?page=rss&u=${u}&q=${q}&c=${c}&f=${f}`);
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
});

module.exports = rssRouter;