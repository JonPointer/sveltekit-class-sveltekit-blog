<script>
	import Header from './Header.svelte';
	import Footer from './Footer.svelte';

	// Global CSS:
	import './styles.css';
</script>

<Header />

<main>
	<slot />
</main>

<Footer />
