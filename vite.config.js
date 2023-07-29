import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import dsv from '@michigandaily/rollup-plugin-dsv';
import nunjucks from '@michigandaily/vite-plugin-transform-nunjucks';

import { deployment } from './sink.config.json';

// https://vitejs.dev/config/
export default defineConfig({
	base: deployment.key.length === 0 ? '/' : `/${deployment.key}/`,
	plugins: [react(), dsv({ include: ['**.csv', '**.tsv', '**.dsv'] }), nunjucks()]
});
