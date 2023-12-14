<p align="center">
<img src="/client/public/Website_Logo.jpg" alt="drawing" width="400" />  
</p>

# Anyaasi

**Anyaasi** is a web application designed to streamline the process of finding and downloading translated anime episodes. The app integrates with *Anilist.co* and *Myanimelist.net*, allowing users to log in and track their currently watching anime. With a user-friendly React app powered by Vite, Anyaasi provides a convenient platform for anime enthusiasts to discover, search, and download the latest episodes.

![image](https://github.com/kstarmach/anyaasi/assets/110173586/52843371-aa5e-4027-826a-78e1c898d626)

## Client

The `client` folder contains a React app built with Vite. This front-end interface provides users with a seamless experience to manage their currently watching anime, discover new shows, and find translated episodes for download. Here are the key features and Home page visual:

### Features

1. **User Authentication**: Users can log in with their **Anilist.co** or **Myanimelist.net** accounts to display their currently watching anime.

![image](https://github.com/kstarmach/anyaasi/assets/110173586/bbc99df5-35e3-46d9-8bfb-8571eaaee649)

2. **Anime Details**: Short description with users score. On the bottom you can change torrent provider.

![image](https://github.com/kstarmach/anyaasi/assets/110173586/260fe326-d240-4878-9277-decbc7e183da)


4. **Built-in Search**: Users can search for anime not on their list but wish to download. The app provides a convenient search functionality.

![image](https://github.com/kstarmach/anyaasi/assets/110173586/b31a7da5-c036-49f0-90a8-3e7d11fc6790)

5. **Newest Anime Display**: Stay up-to-date with the latest anime arrivals through the display of newest anime.

![image](https://github.com/kstarmach/anyaasi/assets/110173586/0b23ea2f-e72a-4632-8a5e-5b09a1d4902c)

6. **Popular Page**: Explore a curated list of currently popular animes to discover new and trending shows.

![image](https://github.com/kstarmach/anyaasi/assets/110173586/7f4453b4-f9bb-48ad-87f5-fc34043513b8)

### Setup

To run the client, navigate to the `client` folder and follow these steps:

1. Create a `.env` file in the root of the `client` folder.

2. Add the following environment variables to the `.env` file:

    ```env
    SERVER_URI=your_server_uri
    ```

    Replace `your_server_uri` with your actual URL to where your server is deployed.

3. Make sure to add the `.env` file to your `.gitignore` file to avoid exposing sensitive information.

4. Install all dependencies by following this instruction.
   
```bash
# Install dependencies
npm install

# Run the app
npm run dev
```

5. On local machine you can visit [http://localhost:3000](http://localhost:3000) to start using Anyaasi.

## Server

The `server` folder contains the XML parser from *Nyaa.si* RSS. I also manage user data form Anilist and Myanimelist whenever user log in.

<p align="center">
  <img src="/client/public/Nyaa_Logo.png" alt="nyaa.si logo" width="200" />  
  <img src="/client/public/AniList_logo.svg.png" alt="anilist logo" width="200" />  
  <img src="/client/public/MyAnimeList_Logo.png" alt="myanimelist logo" width="200" />  
</p>
<p align="center">
  <em>Nyaa.si</em>
  <em>Anilist.co</em>
  <em>MyAnimeList.net</em>
</p>

### Features

1. **RSS Feed Parser**: Parses XML with RSS feed of torrents from nyaa.si , making it easy to integrate and update torrent information.

2. **Anilist and Myanimelist Login Controller**: Manages user authentication with *Anilist.co* and *Myanimelist.net*.

### Setup

To run the server, navigate to the `server` folder and follow these steps:

1. Create a `.env` file in the root of the `server` folder.

2. Add the following environment variables to the `.env` file:

    ```env
    CLIENT_ID=your_animelist_api_client_id
    CLIENT_SECRET=your_animelist_api_client_secret
    CLIENT_URL=your_animelist_api_client_url
    ```

    Replace `your_animelist_api_client_id` and `your_animelist_api_client_secret` with your actual client ID and client secret from your myanimelist.net api respectively.
    `your_animelist_api_client_url` should be set to url where you deploy your client and it should be the same as api redirect url.
    Make sure you update your redirect url on myanimelist.net after you deploy app.

4. Make sure to add the `.env` file to your `.gitignore` file.

By following these steps, you ensure that sensitive information, such as API keys and client secrets, is kept secure and is not exposed in your version control system. Always exercise caution and never expose sensitive information in public repositories.

5. Install all dependencies by following this instruction.

```bash
# Install dependencies
npm install

# Run the server
npm start
```

Make sure to set up any required environment variables for the server to function correctly.

### 1. Client
- The `client` folder contains the React app built with Vite.
- Explore the interactive web interface for seamless anime tracking and downloading.

### 2. Server
- The `server` folder houses essential components:
  - **XML Parser:** Parses XML with RSS feed of torrents.
  - **Login Controller:** Manages authentication with Anilist and Myanimelist accounts.

## Contributing

Feel free to contribute to Anyaasi by opening issues, providing feedback, or submitting pull requests. Let's make anime tracking and downloading even better together!

## License

This project is licensed under the [MIT License](LICENSE.md).
