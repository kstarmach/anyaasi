const anilistRouter = require('express').Router();
const { ApolloClient, InMemoryCache, gql } = require('@apollo/client/core');
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
anilistRouter.get('/:username', async (req, res) => {

  try {
    const { username } = req.params;

    // Make a request to your GraphQL API using Apollo Client
    const { data } = await client.query({
      query: GET_USER_DATA,
      variables: { name: username },
    });

    const { id, name, avatar: { large } } = data.User;
    const userJson = { id, name, avatar: large, type: 'anilist' };


    res.json(userJson);
  } catch (error) {
    console.error(error);
    //res.status(500).send(error.message);
  }
});

module.exports = anilistRouter;