<script lang="ts">
	import Download from '$lib/assets/icon/download.svg';
	type Prop = {
		name: string;
		handleCSSDownload: () => void;
		handleJSONDownload: () => void;
	};

	let { name, handleCSSDownload, handleJSONDownload }: Prop = $props();
</script>

<header>
	<span>{name}</span>
	<div class="right-part">
		<button onclick={handleCSSDownload}>
			{@html Download} CSS
		</button>
		<button onclick={handleJSONDownload}>
			{@html Download} JSON
		</button>
	</div>
</header>

<style>
	header {
		display: flex;
		justify-content: space-between;
		align-items: center;
		border-bottom: 1px solid var(--color-border);
		padding: 0 1rem 0 1.5rem;
		color: var(--color-text);
		font-weight: 600;
		margin-bottom: 0.5rem;
		text-transform: uppercase;
		letter-spacing: 0.125em;
		font-size: 0.8125rem;
	}

	button {
		background-color: transparent;
		border: none;
		display: flex;
		align-items: center;
		gap: 0.25rem;
		color: var(--color-text-secondary);
		padding: 0.75rem 0;
	}

	button:hover {
		color: var(--color-text-brand);
	}

	button:hover :global(svg path) {
		fill: var(--color-icon-brand);
	}

	.right-part {
		display: flex;
		gap: 0.75rem;
	}
</style>
