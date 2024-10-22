<script lang="ts">
	import { createColorStore, type ColorStore } from '$lib/store.svelte';
	import { downloadFile, getTonalPallet } from '$lib/util.svelte';
	import ColorInputs from './ColorInput/ColorInputs.svelte';
	import ColorTile from './ColorTile.svelte';
	import Config from './Config.svelte';
	import CardHeader from './CardHeader.svelte';

	type Prop = {
		color: ColorStore;
		nonDismissible?: boolean;
	};

	let { color }: Prop = $props();

	// let keyColor = createColorStore(color);
	let tones = $state([0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100]);
	let tonalPalettes = $derived(getTonalPallet(color.hex, tones));

	function removeTone(tone: number) {
		tones = tones.filter((t) => t !== tone);
	}

	function handleCSSDownload() {
		let data = tones
			.map((e, i) => `\t--${color.name}-${e}: ${tonalPalettes[i].hex.toUpperCase()}`)
			.join(';\n');
		downloadFile(`:root {\n${data}\n}`, `${color.name}.css`);
	}

	function handleJSONDownload() {
		let data = tones
			.map((e, i) => `\t"${color.name}-${e}": "${tonalPalettes[i].hex.toUpperCase()}"`)
			.join(',\n');
		downloadFile(`{\n${data}\n}`, `${color.name}.json`);
	}
</script>

<section class="cnt">
	<CardHeader name={color.name} {handleCSSDownload} {handleJSONDownload} />
	<ColorInputs bind:color />

	<Config bind:name={color.name} bind:tones />

	<div class="list">
		{#each tonalPalettes as pallet}
			<ColorTile name={color.name} {removeTone} {...pallet} />
		{/each}
	</div>
	{#if tones.length === 0}
		<p>Palette is empty, kindly add some tones.</p>
	{/if}
</section>

<style>
	.cnt {
		border: 1px solid var(--color-border);
		width: 24rem; /* 400px */
		background-color: var(--color-bg);
		border-radius: 0.375rem;
		display: flex;
		flex-direction: column;
		height: fit-content;
		padding-bottom: 1rem;
	}
	p {
		padding: 0.5rem;
		text-align: center;
	}
</style>
