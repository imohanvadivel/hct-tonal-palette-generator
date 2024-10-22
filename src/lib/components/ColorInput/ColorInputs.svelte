<script lang="ts">
	import HexInput from './HexInput.svelte';
	import HctInput from './HctInput.svelte';
	import RgbInput from './RgbInput.svelte';
	import HslInput from './HslInput.svelte';
	import type { ColorStore } from '$lib/store.svelte';

	type Prop = {
		color: ColorStore;
	};

	let { color = $bindable() }: Prop = $props();
</script>

<div class="key-info">
	<div class="key-color" style="background-color: #{color.hex};"></div>
	<div class="color-inputs">
		<HexInput bind:value={color.hex} />
		<HctInput bind:value={color.hct} />
		<RgbInput bind:value={color.rgb} />
		<HslInput bind:value={color.hsl} />
	</div>
</div>

<style>
	.key-info {
		display: flex;
		flex-direction: row;
		column-gap: 1.5rem;
		align-items: center;
		margin-bottom: 1.5rem;
		margin-top: 0.25rem;
		padding: 0 1.5rem;
	}

	.key-color {
		min-width: 100px;
		min-height: 120px;
		border-radius: 4px;
		box-shadow:
			0px 4px 8px 0px rgba(0, 0, 0, 0.08),
			0px 0px 2px 0px rgba(0, 0, 0, 0.16);
	}

	.color-inputs {
		display: flex;
		flex-direction: column;
		row-gap: 0rem;
	}

	.color-inputs :global(.color-inp) {
		display: flex;
		align-items: baseline;
		column-gap: 0.1rem;
	}

	.color-inputs :global(.label) {
		color: var(--color-text-secondary);
		font-size: 0.75rem;
		width: 2.25rem;
		display: inline-block;
		flex-shrink: 0;
		letter-spacing: 0.04em;
		font-weight: 500;
	}

	.color-inputs :global(.num-inp) {
		width: 56px;
	}

	.color-inputs :global(.num-inp input) {
		font-variant-numeric: tabular-nums;
	}
</style>
