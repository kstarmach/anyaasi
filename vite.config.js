import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/fetchRss': 'http://localhost:3000', // Change this to the address of your Node server
    },
  },
})
