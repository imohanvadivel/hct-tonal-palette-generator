import JSZIP from 'jszip';
import FileSaver from 'file-saver';
import {
	Hct,
	argbFromHex,
	TonalPalette,
	rgbaFromArgb,
	hexFromArgb
} from '@material/material-color-utilities';

export function getTonalPallet(hex: string, tones: number[]) {
	let color = Hct.fromInt(argbFromHex(hex));

	let tonalPalette = TonalPalette.fromHct(color);

	return tones.map((e) => {
		let tone = tonalPalette.tone(e);
		let hex = hexFromArgb(tone).toUpperCase();
		let rgba = rgbaFromArgb(tone);
		let hctObj = Hct.fromInt(tone);

		let hct = {
			h: Math.round(hctObj.hue),
			c: Math.round(hctObj.chroma),
			t: Math.round(hctObj.tone)
		};

		return { hex, hct, rgba };
	});
}

export function downloadFile(data: string, filename: string) {
	const blob = new Blob([data], { type: 'text/plain;charset=utf-8' });
	FileSaver.saveAs(blob, filename);
}
