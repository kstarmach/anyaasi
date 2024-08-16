'client';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

import dotenv from 'dotenv';

dotenv.config()

// eslint-disable-next-line no-undef
const proxy = process.env.SERVER_URI || 'http://localhost:3000';

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/rss/': proxy,
      '/anilist/': proxy
    },
    host: true,
    port: 8000
  }
})
