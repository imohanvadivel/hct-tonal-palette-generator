<script lang="ts">
	import type { Snippet } from 'svelte';
	import type { HTMLInputAttributes } from 'svelte/elements';

	type Props = {
		variant?: 'small' | 'medium';
		border?: boolean;
		class?: string;
		value?: string | number;
		label?: Snippet;
		placeholder?: string;
	};

	let {
		variant = 'medium',
		border = true,
		value = $bindable(),
		class: className,
		label,
		placeholder
	}: Props = $props();
</script>

<label class={className} class:variant-small={variant === 'small'}>
	{#if label}
		<div class="inp-label">
			{@render label()}
		</div>
	{/if}

	<div class="inp-cnt" class:border>
		<input type="text" bind:value {placeholder} />
	</div>
</label>

<style>
	input {
		font-size: 0.875rem;
		font-family: var(--sans-font-stack);
		line-height: 1.5rem;
		border: none;
		outline: none;
		background-color: transparent;
		flex-grow: 1;
		width: 100%;
		caret-color: var(--color-text-brand);
		color: var(--color-text);
	}
	.variant-small input {
		font-size: 0.75rem;
		line-height: 1rem;
	}

	.inp-cnt {
		border: 1px solid var(--color-border);
		border-radius: 0.25rem; /* 4px */
		padding: 0 0.5rem;
		display: flex;
		height: 2rem;
		align-items: center;
	}
	.inp-cnt:not(.border) {
		border: 1px solid transparent;
	}
	.inp-cnt.variant-small {
		height: 1.5rem;
	}

	.inp-cnt:hover {
		border: 1px solid var(--color-border-strong);
	}

	.inp-cnt:not(.border):hover {
		border: 1px solid var(--color-border);
	}

	.inp-cnt:focus-within, .inp-cnt:not(.border):focus-within {
		border: 1px solid var(--color-border-brand-strong);
		outline: 1px solid var(--color-border-brand-strong);
	}

	.inp-label {
		color: var(--color-text-secondary);
		font-size: 0.875rem;
		font-family: var(--sans-font-stack);
		line-height: 1.5rem;
		margin-bottom: 0.25rem;
		margin-left: 0.5rem;
	}

	.variant-small .inp-label {
		font-size: 0.75rem;
	}
</style>
