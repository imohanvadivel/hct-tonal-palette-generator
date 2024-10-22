import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import svgLoader from 'vite-svg-loader'; // Vite plugin: loads SVG files as components

export default defineConfig({
	plugins: [sveltekit(), svgLoader({ defaultImport: 'raw' })]
});
