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
		// prerender: {
		// 	// This can be false if you're using a fallback (i.e. SPA mode)
		// 	default: true
		// },
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
