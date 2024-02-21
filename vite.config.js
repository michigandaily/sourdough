import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import dsv from '@michigandaily/rollup-plugin-dsv';
import nunjucks from '@michigandaily/vite-plugin-transform-nunjucks';

import config from './sink.config.js';

// https://vitejs.dev/config/
export default defineConfig({
	base: config.deployment.key.length === 0 ? '/' : `/${config.deployment.key}/`,
	plugins: [
		react(),
		dsv({ include: ['**.csv', '**.tsv', '**.dsv'] }),
		nunjucks({
			hed: 'The Michigan Daily',
			dek: 'Description',
			social_img: '',
			google_analytics: '',
			url: 'https://test.michigandaily.com/tmp/key'
		})
	]
});
