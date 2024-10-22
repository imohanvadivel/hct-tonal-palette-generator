import Color from 'colorjs.io';
import type { Coord } from './type';
import { getTonalPallet } from './util.svelte';

export type ColorStore = {
	hex: string;
	hct: Coord;
	rgb: Coord;
	hsl: Coord;
	name: string;
};
export function createColorStore(hex: string, name: string) {
	let state: ColorStore = $state(getOtherColorsFromHex(hex) as ColorStore);
	let colorName: string = $state(name);
	let tones = $state([0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100]);
	let tonalPalettes = $derived(getTonalPallet(state.hex, tones));

	// Utility Methods
	function round(e: number) {
		return Math.round(e);
	}

	function handleNaN(e: number) {
		if (Number.isNaN(e)) return 0;
		return e;
	}

	function getOtherColorsFromHex(hex: string): ColorStore | null {
		if (hex.charAt(0) !== '#') hex = `#${hex}`;
		let color: Color;

		try {
			color = new Color(hex).toGamut({ space: 'srgb' });
		} catch (err) {
			return null;
		}

		let hctAry = color.hct;
		let rgbAry = color.srgb;
		let hslAry = color.hsl;

		let hct = hctAry.map(round) as Coord;
		let rgb = rgbAry.map((e) => e * 255).map(round) as Coord;
		let hsl = hslAry.map(round).map(handleNaN) as Coord;
		hex = hex.substring(1).toUpperCase();

		return { hex, hct, rgb, hsl };
	}

	function getOtherColorsFromRgb(rgb: Coord): ColorStore | null {
		let srgb = rgb.map((e) => e / 255) as Coord;
		let color: Color;

		try {
			color = new Color('srgb', srgb).toGamut({ space: 'srgb' });
		} catch (err) {
			return null;
		}
		let hctAry = color.hct;
		let hslAry = color.hsl;

		let hex = color.toString({ format: 'hex' }).toUpperCase();
		if (hex.charAt(0) === '#') hex = hex.substring(1);
		let hsl = hslAry.map(round).map(handleNaN) as Coord;
		let hct = hctAry.map(round) as Coord;

		return { hsl, hct, rgb, hex };
	}

	function getOtherColorsFromHsl(hsl: Coord): ColorStore | null {
		let color: Color;

		try {
			color = new Color('hsl', hsl).to('srgb').toGamut({ space: 'srgb' });
		} catch (err) {
			return null;
		}
		let hctAry = color.hct;
		let rgbAry = color.srgb;
		let hex = color.toString({ format: 'hex' }).toUpperCase();

		if (hex.charAt(0) === '#') hex = hex.substring(1);
		let hct = hctAry.map(round) as Coord;
		let rgb = rgbAry.map((e) => e * 255).map(round) as Coord;

		return { hsl, hct, rgb, hex };
	}

	function getOtherColorsFromHct(hct: Coord): ColorStore | null {
		let color: Color;

		try {
			color = new Color('hct', hct).to('srgb').toGamut({ space: 'srgb' });
		} catch (err) {
			return null;
		}
		let rgbAry = color.srgb;
		let hslAry = color.hsl;
		let hex = color.toString({ format: 'hex' }).toUpperCase();

		if (hex.charAt(0) === '#') hex = hex.substring(1);
		let rgb = rgbAry.map((e) => e * 255).map(round) as Coord;
		let hsl = hslAry.map(round).map(handleNaN) as Coord;

		return { hct, rgb, hsl, hex };
	}

	return {
		// Color Name
		get name() {
			return colorName;
		},
		set name(name: string) {
			colorName = name;
		},

		//  HEX
		get hex() {
			return state.hex;
		},
		set hex(hex: string) {
			let value = getOtherColorsFromHex(hex);
			if (value) state = value;
		},

		// HCT
		get hct() {
			return state.hct;
		},
		set hct(hct: Coord) {
			let value = getOtherColorsFromHct(hct);
			if (value) state = value;
		},

		// RGB
		get rgb() {
			return state.rgb;
		},
		set rgb(rgb: Coord) {
			let value = getOtherColorsFromRgb(rgb);
			if (value) state = value;
		},

		// HSL
		get hsl() {
			return state.hsl;
		},
		set hsl(hsl: Coord) {
			let value = getOtherColorsFromHsl(hsl);
			if (value) state = value;
		}
	};
}

function createThemeStore() {
	let theme = $state('light');

	function toggle() {
		const root = document.documentElement.classList;

		if (theme === 'light') {
			if (root.contains('light-mode')) root.remove('light-mode');
			root.add('dark-mode');
			theme = 'dark';
		} else {
			if (root.contains('dark-mode')) root.remove('dark-mode');
			root.add('light-mode');
			theme = 'light';
		}
	}

	return {
		get theme() {
			return theme;
		},
		toggle
	};
}

export const Theme = createThemeStore();
