'client';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';


import dotenv from 'dotenv';

dotenv.config()


// eslint-disable-next-line no-undef
const proxy = process.env.SERVER_URI;
//const proxy = 'http://localhost:3000/';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/rss/': proxy, // Change this to the address of your Node server
      '/anilist/': proxy // Change this to the address of your Node server
      // '/myanimelist/': proxy, // Change this to the address of your Node server
      // '/api': {
      //   target: 'https://api.myanimelist.net',
      //   changeOrigin: true,
      //   rewrite: (path) => path.replace(/^\/api/, ''),
      // },
    },
  },
})
