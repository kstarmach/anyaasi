require('dotenv').config();
const malRouter = require('express').Router();
const axios = require('axios');
const session = require('express-session');
const crypto = require('crypto');
const fs = require('fs');

function getNewCodeVerifier() {
    const token = crypto.randomBytes(64).toString('base64').replace(/\W/g, '');
    return token.slice(0, 128);
}
// Store the code verifier and access token globally or in a database
let globalCodeVerifier = null;
let redirectUri = 'http://localhost:3000/myanimelist/oauth/callback/';
// Configure session middleware
malRouter.use(session({
    secret: 'your-secret-key', // Change this to a secure secret
    resave: false,
    saveUninitialized: true,
}));


malRouter.get('/login', async (req, res) => {
    try {
        globalCodeVerifier = getNewCodeVerifier(); // Store the code verifier

        // const { username } = req.params;

        // Replace these values with your actual client ID, code challenge, and redirect URI
        const clientId = process.env.CLIENT_ID;

        // Additional optional parameters
        const responseType = 'code';
        const state = 'RequestID42'; // You can generate a random string for this
        const codeChallengeMethod = 'plain'; // Default value, can be omitted

        // Define the URL and parameters
        const baseUrl = 'https://myanimelist.net/v1/oauth2/authorize';
        const params = {
            response_type: responseType,
            client_id: clientId,
            code_challenge: globalCodeVerifier,
            state: state,
            redirect_uri: redirectUri,
            code_challenge_method: codeChallengeMethod,
        };

        // Construct the URL
        const authorizationUrl = `${baseUrl}?${Object.entries(params).map(([key, value]) => `${key}=${value}`).join('&')}`;

        // Send the URL as JSON
        const result = {
            authorizationUrl,
        };

        res.json(result);
    } catch (error) {
        console.error('Error:', error.message);
        res.status(500).send(error.message);
    }
});

// Route to handle the redirect
malRouter.get('/oauth/callback', async (req, res) => {
    try {
        // Retrieve the 'code' parameter from the query string
        const code = req.query.code;
        const state = req.query.state; // You may want to validate the state parameter for security

        // Replace these values with your actual client ID, client secret, and redirect URI
        const clientId = process.env.CLIENT_ID;
        const clientSecret = process.env.CLIENT_SECRET; // Omit if your application doesn't have a client secret

        // Define the URL and parameters for token request
        const baseUrlToken = 'https://myanimelist.net/v1/oauth2/token';
        const paramsToken = {
            client_id: clientId,
            client_secret: clientSecret,
            code: code,
            code_verifier: globalCodeVerifier,
            grant_type: 'authorization_code',
            redirect_uri: redirectUri,
        };

        // Make the POST request using Axios
        const response = await axios.post(baseUrlToken, new URLSearchParams(paramsToken));
        //console.log(response.data.access_token);
        req.session.accessToken = response.data.access_token;

        const userData = await axios.get('https://api.myanimelist.net/v2/users/@me', {
            headers: {
                'Authorization': `Bearer ${response.data.access_token}`
            }
        });

        let userJson = {
            token: response.data,
            user: userData.data
        };
        console.log(userJson);

        //res.json(userJson);
        res.redirect(`http://localhost:5173/?access_token=${response.data.access_token}`)
    } catch (error) {
        console.error('Error:', error.message);
        res.status(500).send(error.message);
    }
});

malRouter.get('/user', async (req, res) => {
    try {
        console.log('Retrieving access token from session:', req.session.accessToken);
        res.json(req.session.accessToken);
    } catch (error) {
        console.error('Error:', error.message);
        res.status(500).send(error.message);
    }
});

malRouter.get('/:username', async (req, res) => {
    try {

        const { username } = req.params;
        const response = await axios.get(`https://api.myanimelist.net/v2/users/${username}/animelist?fields=list_status&limit=25&status=watching`, {
            headers: {
                'X-MAL-CLIENT-ID': process.env.CLIENT_ID
            }
        });


        // Read JSON data from a file
        const jsonDataPath = '../server/src/sync/anime-list-full.json';
        const jsonData = JSON.parse(fs.readFileSync(jsonDataPath, 'utf8'));


        const mal_ids_list = [];

        // Assuming `response` is your API response containing the data
        for (let i = 0; i < response.data.data.length; i++) {
            mal_ids_list.push(response.data.data[i].node.id);
        }

        // Assuming `jsonData` is your JSON data array
        const new_mal_ids = mal_ids_list.map(id => {
            const foundItem = jsonData.find(item => item.mal_id === id);
            return foundItem
                ? {
                    id: foundItem.anilist_id,
                    progress: response.data.data.find(
                        entry => entry.node.id === id
                    ).list_status.num_episodes_watched,
                }
                : null;
        });
        res.json(new_mal_ids);
        //res.json(response.data.data);

    } catch (error) {
        res.status(500).send(error);
    }
})

module.exports = malRouter;