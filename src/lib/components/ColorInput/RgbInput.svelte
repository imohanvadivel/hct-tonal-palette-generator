<script lang="ts">
	import type { Coord } from '$lib/type';
	import NumberInput from '../Input/NumberInput.svelte';
	type Prop = {
		value: Coord;
	};
	let { value = $bindable() }: Prop = $props();

	function handleInput(e: Event, index: number) {
		let target = e.target as HTMLInputElement;
		let targetValue = target && parseInt(target.value);

		let rgb = [...value] as Coord;

		if (targetValue > 255) targetValue = 255;
		if (targetValue < 0) targetValue = 0;

		rgb[index] = targetValue;

		value = rgb;
	}
</script>

<div class="color-inp">
	<span class="label">RGB</span>
	<NumberInput
		value={value[0]}
		min={0}
		max={255}
		border={false}
		class="num-inp"
		oninput={(e) => handleInput(e, 0)}
	/>
	<NumberInput
		value={value[1]}
		min={0}
		max={255}
		border={false}
		class="num-inp"
		oninput={(e) => handleInput(e, 1)}
	/>
	<NumberInput
		value={value[2]}
		min={0}
		max={255}
		border={false}
		class="num-inp"
		oninput={(e) => handleInput(e, 2)}
	/>
</div>
