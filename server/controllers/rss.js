const rssRouter = require('express').Router();
const axios = require('axios');
var parseString = require('xml2js').parseString;

rssRouter.get('/:u', async (req, res) => {
    const quality = '1080p'
    const romaji = req.query.romaji;
    console.log(romaji);
    const english = req.query.english;
    const u = req.params.u; // submitter
    //const q = req.query.q; // query
    const c = '1_2'; // Anime - English translated
    const f = 0; // 0 - No Filter 1 - No remakes 2 - Trusted only

    let url;

    if (u === 'ASW') {
        url = `https://nyaa.si/?page=rss&u=AkihitoSubsWeeklies&q=${romaji}+${quality}&c=${c}&f=${f}`;
    } else if (u === 'ToonsHub') {
        url = `https://nyaa.si/?page=rss&q=${u}+${english}+2160p&c=${c}&f=${f}`;
    } else if (u === 'Tenrai-Sensei') {
        url = `https://nyaa.si/?page=rss&u=Tenrai_Sensei&q=${romaji}+${quality}&c=${c}&f=${f}`;
    } else if (u === 'EMBER') {
        url = `https://nyaa.si/?page=rss&u=Ember_Encodes&q=${romaji}+${quality}&c=${c}&f=${f}`;
    } else if (u === 'SubsPlease') {
        url = `https://nyaa.si/?page=rss&u=subsplease&q=${english}+${quality}&c=${c}&f=${f}`;
    } else if (u === 'Anime Time') {
        url = `https://nyaa.si/?page=rss&u=sff&q=${english}+${quality}&c=${c}&f=${f}`;
    } else {
        url = `https://nyaa.si/?page=rss&u=${u}&q=${romaji}+${quality}&c=${c}&f=${f}`;
    }

    console.log(url);
    const response = await axios.get(url);
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