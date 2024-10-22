<script lang="ts">
	import TextInput from './Input/TextInput.svelte';

	type Prop = {
		name: string;
		tones: number[];
	};

	let { name = $bindable(), tones = $bindable() }: Prop = $props();

	let newToneValue = $state('');

	$effect(() => {
		function listenEvent(e: KeyboardEvent) {
			if (e.key !== 'Enter') return;

			// Check if the value exists in tone, if not update tone array
			if (!tones.includes(+newToneValue) && +newToneValue >= 0 && +newToneValue <= 100) {
				tones = [...tones, +newToneValue].sort((a, b) => a - b);
			}
			newToneValue = '';
		}

		window.addEventListener('keydown', listenEvent);
		return () => window.removeEventListener('keydown', listenEvent);
	});
</script>


<div class="cnt">
	<TextInput bind:value={name} class="config-input-name">
		{#snippet label()}
			Name
		{/snippet}
	</TextInput>

	<TextInput placeholder="0–100" class="config-input-tone" bind:value={newToneValue}>
		{#snippet label()}
			Add Tone
		{/snippet}
	</TextInput>
</div>

<style>
	.cnt {
		display: flex;
		margin-bottom: 1.5rem;
		column-gap: 1rem;
		padding: 0 1rem;
	}

	.cnt :global(.config-input-name) {
		width: 7rem;
	}

	.cnt :global(.config-input-tone) {
		width: 5rem;
	}
</style>
