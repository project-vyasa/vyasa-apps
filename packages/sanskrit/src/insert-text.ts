export function insertAtCursor(
	value: string,
	insert: string,
	start: number,
	end: number
): { value: string; caret: number } {
	const lo = Math.max(0, Math.min(start, value.length));
	const hi = Math.max(lo, Math.min(end, value.length));
	const next = `${value.slice(0, lo)}${insert}${value.slice(hi)}`;
	return { value: next, caret: lo + insert.length };
}

export type PaletteGroupId = 'pitch' | 'signs';

export type PaletteMark = {
	id: string;
	/** Glyph shown on the key, often on अ so combining marks are visible. */
	label: string;
	name: string;
	char: string;
	title: string;
	group: PaletteGroupId;
};

export const PALETTE_GROUPS: { id: PaletteGroupId; label: string; hint: string }[] = [
	{
		id: 'pitch',
		label: 'Pitch accents',
		hint: 'Vedic svara. Click to insert at the caret — Lipi keeps these when converting scripts.'
	},
	{
		id: 'signs',
		label: 'Signs',
		hint: 'Not pitch. Hard-to-type letters that still belong in the source text.'
	}
];

export const VEDIC_PALETTE: PaletteMark[] = [
	{
		id: 'anudatta',
		label: 'अ॒',
		name: 'Anudātta',
		char: '\u0952',
		title: 'Insert anudātta (low pitch) at the caret',
		group: 'pitch'
	},
	{
		id: 'svarita',
		label: 'अ॑',
		name: 'Udātta / Svarita',
		char: '\u0951',
		title: 'Insert udātta / svarita (raised pitch) at the caret',
		group: 'pitch'
	},
	{
		id: 'dirgha',
		label: 'अ᳚',
		name: 'Dīrgha svarita',
		char: '\u1CDA',
		title: 'Insert dīrgha svarita (long raised pitch) at the caret',
		group: 'pitch'
	},
	{
		id: 'avagraha',
		label: 'ऽ',
		name: 'Avagraha',
		char: 'ऽ',
		title: 'Insert avagraha (vowel elision) at the caret',
		group: 'signs'
	},
	{
		id: 'anunasika',
		label: 'अँ',
		name: 'Anunāsika',
		char: 'ँ',
		title: 'Insert anunāsika (nasalization) at the caret',
		group: 'signs'
	},
	{
		id: 'visarga',
		label: 'अः',
		name: 'Visarga',
		char: 'ः',
		title: 'Insert visarga at the caret',
		group: 'signs'
	},
	{
		id: 'jihvamuliya',
		label: 'ᳵ',
		name: 'Jihvāmūlīya',
		char: '\u1CF5',
		title: 'Insert jihvāmūlīya (velar visarga) at the caret',
		group: 'signs'
	},
	{
		id: 'upadhmaniya',
		label: 'ᳶ',
		name: 'Upadhmānīya',
		char: '\u1CF6',
		title: 'Insert upadhmānīya (labial visarga) at the caret',
		group: 'signs'
	}
];
