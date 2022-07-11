import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react';
import dsv from '@rollup/plugin-dsv';

import nunjucks from './vite-plugin-transform-nunjucks';
import hmrjson from './vite-plugin-hmr-json';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    dsv(),
    nunjucks(),
    hmrjson(),
  ]
})
