<script>
	import Test from '$lib/Test.svelte';
	import { navigating, page, updated, getStores } from '$app/stores';
	// Can reference db just like lib because we added an alias in svelte.config.js
	import '$db/start';
	export let data; // brings data from the +page.js file

	console.log('navigating, page ', $navigating, $page);

	$: ({ latest_episode } = data); // Reactive version of const {latest_episode, all_episodes} = data;
</script>

<h3>{data.latest_episode.title}</h3>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>

<Test />
