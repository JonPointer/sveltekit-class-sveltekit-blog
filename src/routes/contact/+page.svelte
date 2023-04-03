<script>
	import { invalidateAll } from '$app/navigation'; // only needed for the crazy handleForm below when we took over control of everything. Normally don't do this.
	import { applyAction, deserialize, enhance } from '$app/forms';

	export let form;
	$: console.log('form: ', form);

	async function handleForm(event) {
		// for the second form where we are taking over everything ourself.
		// normally I wouldn't do any of this. This is all from lesson 23
		// this = form element
		const data = new FormData(this);
		const res = await fetch(this.action, {
			method: 'POST',
			body: data
		});
		const result = deserialize(await res.text());
		if (result.type === 'success') {
			await invalidateAll();
		}
		applyAction(result);
	}
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
	<!-- <form
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
		action="/contact?/email" "route + ? + / + action_name" if in same folder, route not needed, just ?/action_name
		method="POST"
	> -->
	<form on:submit|preventDefault={handleForm} action="/contact?/email">
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
