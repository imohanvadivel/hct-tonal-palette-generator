<script>
	import Github from '$lib/assets/icon/github.svg';
	import DarkMode from '$lib/assets/icon/darkMode.svg';
	import { Theme } from '$lib/store.svelte';
</script>

<section>
	<h1>HCT Tonal Palette Generator</h1>

	<p class="desc passage">
		Create accessible color palettes for your design system with just a click, using HCT—a perpetual
		uniform color space.
	</p>

	<h2>How to use:</h2>

	<ul>
		<li>
			<b>1. Enter Your Base Color:</b> Input the base color in HEX, RGB, HSL, or HCT format.
		</li>
		<li>
			<b>2. Name Your Palette:</b> Give your palette an appropriate name such as “primary,” “success,”
			or “danger.”
		</li>
		<li>
			<b>3. Customize Tones:</b> By default, the tool generates tones from 0 to 100 in increments of
			10. To add custom tones, simply input the value in the “add tone” field and press enter.
		</li>
		<li>
			<b>4. Remove Tones:</b> Hover over any tone and click the “×” to remove it from the palette.
		</li>
		<li>
			<b>5. Download Your Palette:</b> Click the CSS or JSON download button on the top to save your
			palette in the desired format.
		</li>
		<li>
			<b>6. Add More Colors:</b> Click the “+” icon next to the palette card to add a new color.
		</li>
	</ul>

	<p class="passage outlink">
		Check out the article <a
			href="https://mohanvadivel.com/thoughts/building-accessible-color-system"
			>Building an Accessible Color System</a
		> to learn more about creating and refining color palettes, and building an accessible color
		system out of it.
	</p>

	<h2>About HCT:</h2>

	<p class="passage">
		HCT (Hue, Chroma, Tone) is a perceptually uniform color space developed by Google. It combines
		the CAM16 model for hue and chroma with the CIELAB (D65) color space's tone (lightness),
		ensuring consistent visual representation across hues. By converting complex contrast ratios
		into simple tonal differences, HCT makes it easy to meet accessibility standards—simply choose
		colors with sufficient tonal difference, and you’ve got an accessible palette ready to go!
	</p>

	<h2>Learn more about HCT:</h2>
	<ul class="resources">
		<li>
			<a href="https://m3.material.io/blog/science-of-color-design" target="_blank">
				The science of color & design
			</a>
		</li>
		<li>
			<a href="https://onlinelibrary.wiley.com/doi/book/10.1002/9781118653128" target="_blank">
				Color Appearance Models
			</a>
		</li>
		<li>
			<a
				href="https://www.cambridge.org/core/books/handbook-of-color-psychology/5A29A2BBA251510F1DCB9CBB746EE7D5"
				target="_blank"
			>
				Handbook of Color Psychology
			</a>
		</li>
	</ul>

	<footer>
		<div class="left-part">
			<a
				href="https://github.com/imohanvadivel/hct-tonal-palette-generator"
				class="icon-container"
				target="_blank"
				aria-label="View on GitHub"
				><span class="sr-only" data-svelte-h="svelte-nlso4u">View on GitHub</span>
				{@html Github}
			</a>

			<button class="icon-container" onclick={Theme.toggle}>
				{@html DarkMode}
			</button>
		</div>

		<p>Built by <a href="https://mohanvadivel.com" target="_blank">Mohan Vadivel</a></p>
	</footer>
</section>

<style>
	:root {
		--header-height: 3.5rem;
	}

	.passage {
		font-size: 0.875rem;
		line-height: 1.5;
		padding-bottom: 2rem;
	}

	ul li {
		font-size: 0.875rem;
		line-height: 1.5;
		padding-bottom: 0.5rem;
	}

	ul li:last-child {
		padding-bottom: 0;
	}

	ul {
		padding-bottom: 2rem;
	}

	a {
		text-decoration-color: var(--color-text-tertiary);
	}

	h2 {
		font-size: 1rem;
		font-weight: 550;
		line-height: 1.125;
		padding-bottom: 1rem;
	}

	b {
		font-weight: 550;
	}

	section {
		height: var(--header-height);
		background-color: var(--color-bg);
		border-bottom: 1px solid var(--color-border);
		display: flex;
		align-items: flex-start;
		flex-direction: column;
		padding: 2rem 1.25rem 0rem 1.25rem;
		height: 100%;
		border-right: 0.0625rem solid var(--color-border);
		width: 22rem;
		overflow-y: auto;
		position: relative;
		flex-shrink: 0;
		font-family: inter, var(--sans-font-stack);
	}

	h1 {
		font-size: 1.5rem;
		font-weight: 600;
		line-height: 1.125;
		padding-bottom: 2rem;
		font-family: var(--sans-font-stack);
	}

	footer {
		display: flex;
		align-items: center;
		justify-content: space-between;
		position: sticky;
		bottom: 0;
		margin-top: auto;
		background-color: var(--color-bg);
		width: 100%;
		padding: 1rem 0;
	}

	.left-part {
		display: flex;
		column-gap: 0.5rem;
	}

	footer p,
	footer a {
		color: var(--color-text-secondary);
		font-size: 0.875rem;
	}

	.icon-container {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 2.5rem;
		height: 2.5rem;
		border-radius: 6px;
	}

	.icon-container:hover {
		background-color: var(--color-bg-secondary);
	}

	.icon-container:hover :global(path) {
		fill: var(--color-text);
	}

	button {
		background-color: var(--color-bg);
		border: none;
		padding: 0;
	}

	.outlink a {
		white-space: normal;
	}
</style>
