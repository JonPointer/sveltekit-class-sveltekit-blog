<script>
	import { enhance } from '$app/forms';
</script>

<form use:enhance method="POST">
	<!-- POST means result is sent to +page.server.js file in same route directory  -->
	<label>
		Name: <input type="text" required name="name" id="name" />
	</label>
	<label>
		Email: <input type="email" required name="email" id="email" />
	</label>
	<label>
		Message: <textarea required name="message" id="message" />
	</label>
	<button type="submit">Send Email</button>
</form>

<style>
	form {
		padding: 20px;
		display: flex;
		gap: 20px;
		flex-direction: column;
	}
	label {
		display: block;
	}
</style>
