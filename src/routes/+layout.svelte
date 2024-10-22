<script lang="ts">
	import InfoCard from '$lib/components/InfoCard.svelte';
	import '$lib/styles/global.css';
</script>

<main>
	<InfoCard />
	<slot />
</main>

<style>
	main {
		background-color: var(--color-bg-secondary);
		height: 100%;
		display: flex;
	}
</style>
