
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'


import dotenv from 'dotenv'

dotenv.config()


const proxy = process.env.SERVER_URI;

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/rss/': proxy, // Change this to the address of your Node server
      '/anilist/': proxy, // Change this to the address of your Node server
      '/myanimelist/': proxy, // Change this to the address of your Node server
      '/api': {
        target: 'https://api.myanimelist.net',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
    },
  },
})
