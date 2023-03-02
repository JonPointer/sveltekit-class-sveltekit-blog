<script>
	export let data; // brings data from the +page.js file
	$: ({ episode, user } = data); // Reactive version of const {latest_episode, all_episodes} = data;
</script>

<h1>{user.email}</h1>
<h3>{episode.title}</h3>

{@html episode.html}
