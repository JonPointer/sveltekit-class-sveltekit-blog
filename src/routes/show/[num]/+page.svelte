<script>
	export let data; // brings data from the +page.js file
	$: ({ episode } = data); // Reactive version of const {latest_episode, all_episodes} = data;
</script>

<h3>{episode.title}</h3>

{@html episode.html}
