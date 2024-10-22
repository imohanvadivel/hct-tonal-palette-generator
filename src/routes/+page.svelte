<script lang="ts">
	import ColorCard from '$lib/components/ColorCard.svelte';
	import Add from '$lib/assets/icon/add.svg';
	import { createColorStore } from '$lib/store.svelte';

	let palletCount = $state(0);

	let color1 = createColorStore('1871E9', 'primary');
	let color2 = createColorStore('69696a', 'neutral');
	let color3 = createColorStore('008a2e', 'success');
	let color4 = createColorStore('ba1820', 'danger');
	let color5 = createColorStore('fc8f3a', 'warning');

	let colors = [color2, color3, color4, color5];
</script>

<section>
	<ColorCard color={color1} nonDismissible />

	{#each colors as color, i}
		{#if i < palletCount}
			<ColorCard {color} />
		{/if}
	{/each}

	{#if palletCount < 4}
		<button onclick={() => palletCount++}>
			{@html Add}
		</button>
	{/if}
</section>

<style>
	:root {
		--palette-container-padding: 1.5rem;
	}

	section {
		display: flex;
		flex-direction: row;
		column-gap: 1.5rem;
		justify-content: flex-start;
		overflow-x: auto;
		height: 100%;
		padding: var(--palette-container-padding);
	}

	button {
		background-color: transparent;
		border: none;
		outline: none;
		height: fit-content;
		margin-top: 16rem;
		flex-shrink: 0;
	}

	button:hover :global(path) {
		fill: var(--color-text);
	}
</style>
