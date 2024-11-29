<script lang="ts">
	import Close from '$lib/assets/icon/close.svg';
	type Props = {
		hex: string;
		hct: { h: number; c: number; t: number };
		name: string;
		removeTone: (tone: number) => void;
	};

	let { hct, hex, name, removeTone }: Props = $props();
</script>

<div class="cnt">
	<div class="tile" class:white={hex === '#FFFFFF'} style="background-color: {hex};"></div>

	<div class="info">
		<div class="name"><span>{name}</span> – {hct.t}</div>
		<div class="color">
			<span class="hct">
				<span>{hct.h}</span> <span>{hct.c}</span> <span>{hct.t}</span>
			</span>
			<span>{hex}</span>
		</div>
	</div>

	<button onclick={() => removeTone(hct.t)}>
		{@html Close}
	</button>
</div>

<style>
	.cnt {
		border: 1px solid var(--color-border);
		border-radius: 0.625rem;
		padding: 0.5rem;
		display: flex;
		align-items: center;
		margin: 0 1rem 0.5rem 1rem;

	}
	.cnt:hover {
		border: 1px solid var(--color-border-strong);
	}
	.tile {
		width: 3rem;
		height: 3rem;
		border-radius: 0.25rem;
		margin-right: 1rem;
	}
	.info {
		display: flex;
		flex-direction: column;
		row-gap: 0.25rem;
	}
	.name {
		font-size: 0.875rem;
		line-height: 1.5rem;
		user-select: none;
		display: flex;
	}
	.name span {
		max-width: 13rem;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
		display: block;
	}
	.hct {
		width: 5.25rem;
	}
	.color {
		display: flex;
		flex-direction: row;
		font-size: 0.75rem;
		color: var(--color-text-secondary);
	}
	.white {
		border: 1px solid var(--color-border);
	}

	.cnt:hover button {
		display: block;
	}

	button {
		background-color: transparent;
		border: none;
		outline: none;
		margin-left: auto;
		display: none;
	}

	button:hover :global(path) {
		fill: var(--color-text);
	}
</style>
