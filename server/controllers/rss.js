const rssRouter = require('express').Router();
const axios = require('axios');
const parseString = require('xml2js').parseString;

rssRouter.get('/:u', async (req, res) => {
    const quality = '1080p';
    const romaji = encodeURIComponent(req.query.romaji);
    const english = encodeURIComponent(req.query.english);
    const u = req.params.u; // submitter
    const c = '1_2'; // Anime - English translated
    const f = 0; // 0 - No Filter 1 - No remakes 2 - Trusted only

    let url;

    if (u === 'ASW') {
        url = `https://nyaa.si/?page=rss&u=AkihitoSubsWeeklies&q=${romaji}+${quality}&c=${c}&f=${f}`;
    } else if (u === 'ToonsHub') {
        url = `https://nyaa.si/?page=rss&q=${u}+${romaji}+2160p&c=${c}&f=${f}`;
    } else if (u === 'Tenrai-Sensei') {
        url = `https://nyaa.si/?page=rss&u=Tenrai_Sensei&q=${romaji}+${quality}&c=${c}&f=${f}`;
    } else if (u === 'EMBER') {
        url = `https://nyaa.si/?page=rss&u=Ember_Encodes&q=${romaji}+${quality}&c=${c}&f=${f}`;
    } else if (u === 'SubsPlease') {
        url = `https://nyaa.si/?page=rss&u=subsplease&q=${romaji}+${quality}&c=${c}&f=${f}`;
    } else if (u === 'Anime Time') {
        url = `https://nyaa.si/?page=rss&u=sff&q=${romaji}+${quality}&c=${c}&f=${f}`;
    } else {
        url = `https://nyaa.si/?page=rss&u=${u}&q=${romaji}+${quality}&c=${c}&f=${f}`;
    }

    try {
        const response = await axios.get(url);
        console.log(url);
        if (response.status === 200) {
            parseString(response.data, (err, result) => {
                if (err) {
                    res.status(500).send(err);
                } else {
                    let resultTorrent = result.rss.channel[0].item;
                    if (resultTorrent.length === 0 && english) {
                        // If no results and English query is provided, retry with English query
                        retryWithEnglishQuery();
                    } else {
                        res.json(resultTorrent);
                    }
                }
            });
        }
    } catch (error) {
        res.status(500).send(error);
    }

    async function retryWithEnglishQuery() {
        const englishUrl = `https://nyaa.si/?page=rss&u=${u}&q=${english}+${quality}&c=${c}&f=${f}`;
        try {
            console.log(englishUrl);
            const response = await axios.get(englishUrl);
            if (response.status === 200) {
                parseString(response.data, (err, result) => {
                    if (err) {
                        res.status(500).send(err);
                    } else {
                        let resultTorrent = result.rss.channel[0].item;
                        res.json(resultTorrent);
                    }
                });
            }
        } catch (error) {
            res.status(500).send(error);
        }
    }
});

module.exports = rssRouter;
