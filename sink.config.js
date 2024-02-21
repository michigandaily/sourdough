import { defineConfig } from 'sink';

export default defineConfig({
	fetch: [
		{
			type: 'doc',
			id: '',
			output: '',
			auth: '~/.daily-google-services.json'
		},
		{
			type: 'sheet',
			id: '',
			sheetId: '0',
			output: '',
			auth: '~/.daily-google-services.json'
		},
		{
			type: 'json',
			id: '',
			output: '',
			auth: '~/.daily-google-services.json'
		}
	],
	deployment: {
		region: 'us-east-2',
		bucket: 'test.michigandaily.com',
		key: 'tmp/key',
		build: './dist',
		profile: 'sink'
	}
});
