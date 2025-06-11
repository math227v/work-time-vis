import adapter from '@sveltejs/adapter-static';
import preprocess from 'svelte-preprocess';

// import { dev } from '$app/env';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter({
			// default options are shown
			pages: 'docs',
			assets: 'docs',
		}),
                prerender: {
                        entries: ['*']
                },
		paths: {
			// base: dev ? "" : '/work-time-vis',
			base: '/work-time-vis',
		},

	},
	preprocess: [
		preprocess({
			postcss: true,
		}),
	],
};

export default config;
