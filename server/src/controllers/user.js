const userRouter = require('express').Router();
const axios = require('axios');

userRouter.get('/myanimelist/:username', async (req, res) => {

    try {
        const { username } = req.params;
        const response = await axios.get(`https://api.myanimelist.net/v2/users/${username}/animelist?fields=list_status&limit=25&status=watching`, {
            headers: {
                'X-MAL-CLIENT-ID': 'd395b1923f5da0bd3acc7e49c38efdf9'
            }
        });

        console.log(response.data);
        res.json(response.data.data);
        console.log(response.data.data);
    } catch (error) {
        res.status(500).send(error);
    }
})

userRouter.get('/anilist/', async (req, res) => {
    // to implement
})

module.exports = userRouter;