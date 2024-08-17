<a href="https://anyaasi.vercel.app/">
<p align="center">
<img src="/client/public/Logo.jpg" alt="drawing" width="200" />  
</p>
</a>

# Anyaasi

**Anyasi** is a web application designed to simplify the process of searching and downloading translated anime episodes. The app integrates with *Anilist.co*, allowing users to log in and find the anime they are currently watching. With its user-friendly React app powered by Vite, Anyaasi provides an easy way for anime enthusiasts to find, search and download the latest content

![image](https://github.com/user-attachments/assets/ffb30512-1788-445e-b7cc-d2904469b4e5)

## Setup

### Understanding the Components
Before we dive into the setup, it's important to understand that Anyaasi consists of two main parts:

* **Client:** The frontend application that users interact with.
* **Server:** The backend that handles data processing and communication with the client.

### Local Development

#### Setting up the Server
1. **Navigate to the server directory:**
   ```bash
   cd server
   ```
2. **Install dependencies:**
   ```bash
   npm install
   ```
3. **Start the server:**
   ```bash
   npm run dev
   ```
   This will typically start the server on `http://localhost:3000` (or a different port specified in your server's configuration __.env__ file).

#### Setting up the Client
1. **Navigate to the client directory:**
   ```bash
   cd client
   ```
2. **Install dependencies:**
   ```bash
   npm install
   ```
3. **Configure environment variables:**

   Add the following line to your `.env` file:
   ```env
   SERVER_URI=http://localhost:3000
   ```
   This specifies the address of your local server. You only need to modify this if your server runs on a different port.

5. **Start the client:**
   ```bash
   npm run dev
   ```
   This will typically start the client on `http://localhost:8000`.

### Running on a VPS with Docker Compose

**Prerequisites:**
* Docker and Docker Compose installed on your VPS.

**To build and run containers:**
   ```bash
   docker-compose up --build
   ```
   This will build the Docker images for both the server and client and start the containers.

**Note:**

* Replace the port numbers in the `docker-compose.yml` file with your desired ports.
* Add any necessary environment variables for your server in the `environment` section of the `server` service.
* The `SERVER_URI` environment variable in the `client` service points to the server container. Adjust it if needed.

Once the containers are running, you can access your application at `http://your_vps_ip:8000`.
 
**Remember to replace `your_vps_ip` with the actual IP address of your VPS.**
 
This setup allows you to manage and deploy both the client and server components efficiently using Docker Compose.


## Integration

This project makes use of [`Anilist ApiV2 GrapQL`](https://github.com/AniList/ApiV2-GraphQL-Docs) and [`Nyaa.si RSS`](https://nyaa.si/?page=rss).
<p float="left">
        <a href="https://github.com/AniList/ApiV2-GraphQL-Docs">    
  <img src="/client/public/AniList_logo.svg.png" width="100" />
        </a>
    <a href="https://nyaa.si/?page=rss">
  <img src="/client/public/Nyaa_Logo.png" width="100" /> 
    </a>
</p>

## Contributing

Feel free to contribute to Anyaasi by opening issues, providing feedback, or submitting pull requests.

## License

This project is licensed under the [MIT License](LICENSE.md).
