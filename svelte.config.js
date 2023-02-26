import adapter from '@sveltejs/adapter-auto';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter(),
		// Creating another alias path in addition to the default lib
		alias: {
			$db: "./src/db"
		}
	}
};

export default config;
