<script>
	import { page } from '$app/stores';
	$: console.log('Page: ', $page);
</script>

<h1>Oops!</h1>
<p>{$page.status}</p>
<p>{$page.error.message}</p>
