import type { AksharaAnalysis, VarnaAnalysis } from './sanskrit-wasm-stub';
import { PRATISAKHYA_GROUPS } from './phonetic-sets';

export type SceneSound = {
	key: string;
	akIndex: number;
	part: 'consonant' | 'vowel';
	partIndex: number;
	glyph_iast: string;
	glyph_deva: string;
	analysis: VarnaAnalysis;
};

export type DvitvaWindow = {
	prev: string;
	curr: string;
	next: string;
};

export type DvitvaExplanation = {
	doubles: boolean;
	rule: string | null;
	why: string;
};

const VOWELS = new Set([
	'a',
	'ā',
	'i',
	'ī',
	'u',
	'ū',
	'ṛ',
	'ṝ',
	'ḷ',
	'ḹ',
	'e',
	'ai',
	'o',
	'au'
]);

const NAMIN = new Set(['i', 'ī', 'u', 'ū', 'ṛ', 'ṝ', 'ḷ', 'ḹ', 'e', 'o', 'ai', 'au']);

const R_OR_H = new Set(['r', 'h']);
const SIBILANTS = new Set(['ś', 'ṣ', 's']);
const USHMAN = new Set(['ś', 'ṣ', 's', 'h']);
const VARGA = new Set([
	'k',
	'kh',
	'g',
	'gh',
	'ṅ',
	'c',
	'ch',
	'j',
	'jh',
	'ñ',
	'ṭ',
	'ṭh',
	'ḍ',
	'ḍh',
	'ṇ',
	't',
	'th',
	'd',
	'dh',
	'n',
	'p',
	'ph',
	'b',
	'bh',
	'm'
]);
const ALPA_VARGA = new Set(['k', 'g', 'ṅ', 'c', 'j', 'ñ', 'ṭ', 'ḍ', 'ṇ', 't', 'd', 'n', 'p', 'b', 'm']);

/** Strip inherent-a / virāma so `ka`, `क्`, `k` compare as the same consonant. */
export function normalizeGlyph(raw: string): string {
	const trimmed = raw.trim().normalize('NFC');
	if (!trimmed) return '';
	const noMarks = trimmed.replace(/[\u0900-\u0903\u093A-\u094F\u0951-\u0957\u0962-\u0963]/gu, '');
	const iast = noMarks
		.replace(/[कखगघङचछजझञटठडढणतथदधनपफबभमयरलवशषसहळ]/gu, (ch) => {
			const map: Record<string, string> = {
				क: 'k',
				ख: 'kh',
				ग: 'g',
				घ: 'gh',
				ङ: 'ṅ',
				च: 'c',
				छ: 'ch',
				ज: 'j',
				झ: 'jh',
				ञ: 'ñ',
				ट: 'ṭ',
				ठ: 'ṭh',
				ड: 'ḍ',
				ढ: 'ḍh',
				ण: 'ṇ',
				त: 't',
				थ: 'th',
				द: 'd',
				ध: 'dh',
				न: 'n',
				प: 'p',
				फ: 'ph',
				ब: 'b',
				भ: 'bh',
				म: 'm',
				य: 'y',
				र: 'r',
				ल: 'l',
				व: 'v',
				श: 'ś',
				ष: 'ṣ',
				स: 's',
				ह: 'h',
				ळ: 'ḷ'
			};
			return map[ch] ?? ch;
		})
		.replace(/्/gu, '');
	const lower = iast.toLowerCase();
	if (VOWELS.has(lower)) return lower;
	if (lower.endsWith('a') && lower.length > 1) {
		const stem = lower.slice(0, -1);
		if (!VOWELS.has(stem)) return stem;
	}
	return lower;
}

export function isVowelGlyph(raw: string): boolean {
	return VOWELS.has(normalizeGlyph(raw));
}

export function isNaminVowel(raw: string): boolean {
	return NAMIN.has(normalizeGlyph(raw));
}

export function flattenSounds(syllables: AksharaAnalysis[]): SceneSound[] {
	const out: SceneSound[] = [];
	syllables.forEach((ak, akIndex) => {
		ak.consonants.forEach((analysis, partIndex) => {
			out.push({
				key: `${akIndex}-c-${partIndex}-${analysis.glyph_iast}`,
				akIndex,
				part: 'consonant',
				partIndex,
				glyph_iast: analysis.glyph_iast,
				glyph_deva: analysis.glyph_deva,
				analysis
			});
		});
		if (ak.vowel) {
			out.push({
				key: `${akIndex}-v-0-${ak.vowel.glyph_iast}`,
				akIndex,
				part: 'vowel',
				partIndex: 0,
				glyph_iast: ak.vowel.glyph_iast,
				glyph_deva: ak.vowel.glyph_deva,
				analysis: ak.vowel
			});
		}
	});
	return out;
}

export function dvitvaWindow(
	sounds: SceneSound[],
	selected: SceneSound | undefined
): DvitvaWindow | null {
	if (!selected || selected.part !== 'consonant') return null;
	const idx = sounds.findIndex((s) => s.key === selected.key);
	if (idx < 0) return null;
	return {
		prev: idx > 0 ? sounds[idx - 1].glyph_iast : '',
		curr: selected.glyph_iast,
		next: idx + 1 < sounds.length ? sounds[idx + 1].glyph_iast : ''
	};
}

/**
 * Local citation for TPr Ch. 14. Mirrors `should_double_in_taittiriya` in vyasa-phonetics.
 * The WASM boolean is still the authority when the engine is loaded.
 */
export function explainTaittiriyaDvitva(
	prevRaw: string,
	currRaw: string,
	nextRaw: string
): DvitvaExplanation {
	const prev = normalizeGlyph(prevRaw);
	const curr = normalizeGlyph(currRaw);
	const next = normalizeGlyph(nextRaw);
	if (!curr || !prev) {
		return { doubles: false, rule: null, why: 'Needs a preceding sound and a consonant to test.' };
	}

	if (R_OR_H.has(prev) && (VARGA.has(curr) || USHMAN.has(curr))) {
		return {
			doubles: true,
			rule: 'TPr 14.4',
			why: `A stop or sibilant after r/h doubles: …${prev}${curr}… → …${prev}${curr}${curr}…`
		};
	}

	if (VOWELS.has(prev) && SIBILANTS.has(curr) && next && !VOWELS.has(next)) {
		return {
			doubles: true,
			rule: 'TPr 14.8',
			why: `A sibilant after a vowel and before a consonant doubles: …${prev}${curr}${next}…`
		};
	}

	if (
		VOWELS.has(prev) &&
		VARGA.has(curr) &&
		ALPA_VARGA.has(curr) &&
		next &&
		!VOWELS.has(next) &&
		normalizeGlyph(next) !== curr
	) {
		return {
			doubles: true,
			rule: 'TPr 14.1',
			why: `An unaspirated stop after a vowel, starting a cluster, doubles: …${prev}${curr}${next}…`
		};
	}

	return {
		doubles: false,
		rule: null,
		why: 'No Taittirīya Ch. 14 doubling rule matches this window.'
	};
}

export function rprGroupIdsForSound(iast: string): string[] {
	const n = normalizeGlyph(iast);
	return PRATISAKHYA_GROUPS.filter((group) =>
		group.glyphs.some((g) => normalizeGlyph(g.glyph_iast) === n)
	).map((g) => g.id);
}

export function formatSvara(svara: string | null | undefined): string {
	if (!svara) return '';
	return svara.replace(/([a-z])([A-Z])/g, '$1 $2');
}

export function formatAyogavaha(value: string | null | undefined): string {
	if (!value) return '';
	return value.replace(/([a-z])([A-Z])/g, '$1 $2');
}
