import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react';

import nunjucks from './vite-plugin-transform-nunjucks.js';
import hmrjson from './vite-plugin-hmr-json';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    nunjucks(),
    hmrjson(),
  ]
})
