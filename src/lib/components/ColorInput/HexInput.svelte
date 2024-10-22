<script lang="ts">
	import TextInput from '$lib/components/Input/TextInput.svelte';

	type Prop = {
		value: string;
	};

	let { value = $bindable() }: Prop = $props();
</script>

<div class="color-inp">
	<span class="label">HEX</span>
	<TextInput border={false} bind:value class="hex-inp" />
</div>

<style>
	.color-inp :global(.hex-inp input) {
		font-size: 1.5rem;
		font-weight: 500;
	}
	.color-inp{
		margin-bottom: 0.25rem;
	}
</style>
