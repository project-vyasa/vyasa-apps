/** Ṛgveda 1.1.1 — Lipi fixture (saṃhitā opening). */
export const GOLDEN_PADA = 'अ॒ग्निमी॑ळे पु॒रोहि॑तम्';

/** Ṛgveda 1.1.1 pada-pāṭha (Śākala). */
export const GOLDEN_PADA_PATHA =
	'अ॒ग्निम् । ई॒ळे॒ । पु॒रःऽहि॑तम् । य॒ज्ञस्य॑ । दे॒वम् । ऋ॒त्विज॑म् । होता॑रम् । र॒त्न॒ऽधात॑मम् ॥';

export type ScriptInfo = {
	id: string;
	name: string;
	is_indic: boolean;
	has_vedic_pitch: boolean;
};

export type KramaStep = {
	step_number: number;
	formula: string;
	first_index: number;
	second_index: number | null;
	raw_pada: string;
	sandhied: string;
	is_parigraha: boolean;
	pragrhya_detected: boolean;
};

export type JataStep = {
	step_number: number;
	formula: string;
	first_index: number;
	second_index: number | null;
	forward_text: string;
	reverse_text: string;
	sandhied: string;
	is_parigraha: boolean;
};

export type GhanaStep = {
	step_number: number;
	formula: string;
	first_index: number;
	second_index: number | null;
	third_index?: number | null;
	forward_text?: string;
	reverse_text?: string;
	raw_pada?: string;
	sandhied: string;
	is_parigraha: boolean;
};

export type TaittiriyaSvarita = {
	id: string;
	name_deva: string;
	name_iast: string;
	is_nitya: boolean;
};

export type TaittiriyaVarna = {
	glyph_deva: string;
	glyph_iast: string;
	varna_type: string;
	sthana: string[];
	karana: string;
	abhyantara_prayatna: string;
	is_ghosha: boolean;
	is_alpaprana: boolean;
	matra: number;
};

export type ShivaSutra = {
	index: number;
	name: string;
	it_marker_deva: string;
	it_marker_iast: string;
	sounds_deva: string[];
	sounds_iast: string[];
};

export type VarnaAnalysis = {
	glyph_deva: string;
	glyph_iast: string;
	varna_type: string;
	sthana: string[];
	abhyantara_prayatna: string;
	is_ghosha: boolean;
	is_alpaprana: boolean;
	matra: number;
};

export type AksharaAnalysis = {
	surface: string;
	consonants: VarnaAnalysis[];
	vowel: VarnaAnalysis | null;
	ayogavaha: string | null;
	svara: string | null;
	total_matra: number;
};

export const FALLBACK_SCRIPTS: ScriptInfo[] = [
	{ id: 'devanagari', name: 'Devanagari (देवनागरी)', is_indic: true, has_vedic_pitch: true },
	{ id: 'telugu', name: 'Telugu (తెలుగు)', is_indic: true, has_vedic_pitch: true },
	{ id: 'kannada', name: 'Kannada (ಕನ್ನಡ)', is_indic: true, has_vedic_pitch: true },
	{ id: 'grantha', name: 'Grantha (𑌗𑍍𑌰𑌨𑍍𑌥)', is_indic: true, has_vedic_pitch: true },
	{ id: 'malayalam', name: 'Malayalam (മലയാളം)', is_indic: true, has_vedic_pitch: true },
	{ id: 'bengali', name: 'Bengali (বাংলা)', is_indic: true, has_vedic_pitch: true },
	{ id: 'iast', name: 'IAST (Roman Diacritics)', is_indic: false, has_vedic_pitch: true },
	{ id: 'iso15919', name: 'ISO 15919', is_indic: false, has_vedic_pitch: true },
	{ id: 'slp1', name: 'SLP1', is_indic: false, has_vedic_pitch: false },
	{ id: 'harvardkyoto', name: 'Harvard-Kyoto', is_indic: false, has_vedic_pitch: false },
	{ id: 'wx', name: 'WX', is_indic: false, has_vedic_pitch: false }
];

export const SANSKRIT_WASM_STUB = true;

export const ENGINE_MISSING_MESSAGE =
	'Sanskrit WASM is not built yet. In vyutils run: wasm-pack build --target web --scope project-vyasa (crates/vyasa-sanskrit-wasm), then restart this dev server.';

const missing = (): never => {
	throw new Error(ENGINE_MISSING_MESSAGE);
};

export default async function init(): Promise<void> {
	return;
}

export function transliterate(_text: string, _from: string, _to: string): string {
	return missing();
}

export function detect_script(_text: string): string | undefined {
	return undefined;
}

export function get_supported_scripts(): ScriptInfo[] {
	return FALLBACK_SCRIPTS;
}

export function generate_krama(_pada: string, _script: string): KramaStep[] {
	return missing();
}

export function generate_krama_text(_pada: string, _script: string): string {
	return missing();
}

export function get_shiva_sutras(): ShivaSutra[] {
	return missing();
}

export function get_pratyahara_sounds(_name: string): VarnaAnalysis[] {
	return missing();
}

export function check_pratyahara_contains(_pratyahara_name: string, _sound_symbol: string): boolean {
	return missing();
}

export function inspect_varna(_symbol: string): VarnaAnalysis {
	return missing();
}

export function analyze_syllables(_text: string, _script_name: string): AksharaAnalysis[] {
	return missing();
}

export function generate_jata(_pada: string, _script: string): JataStep[] {
	return missing();
}

export function generate_jata_text(_pada: string, _script: string): string {
	return missing();
}

export function generate_ghana(_pada: string, _script: string): GhanaStep[] {
	return missing();
}

export function generate_ghana_text(_pada: string, _script: string): string {
	return missing();
}

export function get_taittiriya_svaritas(): TaittiriyaSvarita[] {
	return missing();
}

export function inspect_taittiriya_varna(_symbol: string): TaittiriyaVarna {
	return missing();
}

export function check_taittiriya_dvitva(
	_prev: string | null | undefined,
	_curr: string,
	_next?: string | null
): boolean {
	return missing();
}

export function classify_taittiriya_svarita_by_context(_context: string): string | undefined {
	return missing();
}
