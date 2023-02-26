<script>
	import Test from '$lib/Test.svelte';
	// Can reference db just like lib because we added an alias in svelte.config.js
	import '$db/start';
	export let data; // brings data from the +page.js file

	$: ({ latest_episode, all_episodes } = data); // Reactive version of const {latest_episode, all_episodes} = data;
</script>

<h3>{data.latest_episode.title}</h3>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>

<nav>
	<ul>
		{#each all_episodes as episode}
			<li>
				<a href={`/show/${episode.number}`}>{episode.title}</a>
			</li>
		{/each}
	</ul>
</nav>

<Test />
