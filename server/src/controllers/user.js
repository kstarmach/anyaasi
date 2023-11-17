const userRouter = require('express').Router();
const axios = require('axios');
const { ApolloClient, InMemoryCache, gql } = require('@apollo/client/core');
//import fetch from "cross-fetch";

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

// Import the GraphQL client setup
const client = new ApolloClient({
    uri: 'https://graphql.anilist.co', // Replace with your GraphQL API endpoint
    cache: new InMemoryCache(),
});

// Define your GraphQL query
const GET_USER_DATA = gql`
    query ($name: String) {
      User(name: $name) {
        id
        name
        avatar {
          large
        }
      }
    }
  `;

// Define the route to fetch user data from the GraphQL API
userRouter.get('/anilist/:username', async (req, res) => {
    try {
        const { username } = req.params;

        // Make a request to your GraphQL API using Apollo Client
        const { data } = await client.query({
            query: GET_USER_DATA,
            variables: { name: username },
        });

        res.json(data.User);
    } catch (error) {
        console.error(error);
        res.status(500).send(error.message);
    }
});

module.exports = userRouter;