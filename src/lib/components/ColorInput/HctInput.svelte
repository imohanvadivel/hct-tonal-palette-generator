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

		let hct = [...value] as Coord;

		if (index === 0 && targetValue > 360) targetValue = 360;
		if (index === 1 && targetValue > 150) targetValue = 150;
		if (index === 2 && targetValue > 100) targetValue = 100;
		if (targetValue < 0) targetValue = 0;

		hct[index] = targetValue;

		value = hct;
	}
</script>

<div class="color-inp">
	<span class="label">HCT</span>
	<NumberInput
		value={value[0]}
		min={0}
		max={360}
		border={false}
		class="num-inp"
		oninput={(e) => handleInput(e, 0)}
	/>
	<NumberInput
		value={value[1]}
		min={0}
		max={150}
		border={false}
		class="num-inp"
		oninput={(e) => handleInput(e, 1)}
	/>
	<NumberInput
		value={value[2]}
		min={0}
		max={100}
		border={false}
		class="num-inp"
		oninput={(e) => handleInput(e, 2)}
	/>
</div>
