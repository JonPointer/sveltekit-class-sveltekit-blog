<script>
	import { enhance } from '$app/forms';

	export let form;
	$: console.log('form: ', form);
</script>

<!-- Fail on role including admin -->
{#if form?.error_message}
	<p>
		{form.error_message}
	</p>
{/if}

<!-- Pass on role including admin -->
{#if form?.message}
	<p>
		{form.message}
	</p>
{:else}
	<form
		use:enhance={({ form, data, action, cancel }) => {
			// form = form element
			// data = FormData object
			// action = url that the form posts to
			// cancel() = function cancels the from from submitting
			return ({ result, update }) => {
				update(); // with just this, everything acts like the default
				// result = ActionResult
				// update() = runs all of the normal default use:enhance functionality
			};
		}}
		action="?/test"
		method="POST"
	>
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
{/if}

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
