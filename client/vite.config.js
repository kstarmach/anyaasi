import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api/': 'http://localhost:3000', // Change this to the address of your Node server
      '/anilist/': 'http://localhost:3000', // Change this to the address of your Node server
      '/myanimelist/': 'http://localhost:3000', // Change this to the address of your Node server
    },
  },
})
