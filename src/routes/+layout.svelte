<script>
	import { browser, building, dev, version } from '$app/environment';
	import { navigating } from '$app/stores';
	import Header from './Header.svelte';
	import Footer from './Footer.svelte';

	// Global CSS:
	import './styles.css';
	import Episodes from './Episodes.svelte';

	export let data;
	$: ({ all_episodes } = data);
	console.log(browser, building, dev, version);
	// browser -> boolean if app is running in a browser
	// building - true if current build for production
	// dev - true if in development run environment - so could use to do things only when in local dev, but not in production
	// version - config.kit.version.name
</script>

<Header />

{#if !!$navigating}
	<div class="loading">Loading</div>
{/if}

<main>
	<div class="main">
		<slot />
	</div>
	<aside>
		<Episodes episodes={all_episodes} />
	</aside>
</main>

<Footer />

<style>
	main {
		display: grid;
		grid-template-columns: 300px 1fr;
		gap: 20px;
	}
	aside {
		order: -1;
	}

	.loading {
		position: fixed;
		inset: 0;
		display: flex;
		justify-content: center;
		background-color: blue;
		color: white;
	}
</style>
