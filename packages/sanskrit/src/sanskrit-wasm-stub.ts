/** Ṛgveda 1.1.1 opening — Lipi/Patha fixture from the vyutils handoff. */
export const GOLDEN_PADA = 'अ॒ग्निमी॑ळे पु॒रोहि॑तम्';

export const GOLDEN_PADA_PATHA = 'अ॒ग्निम् । ई॒ळे॒ । पु॒रो-हि॑तम् ।';

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

export const FALLBACK_SCRIPTS: ScriptInfo[] = [
	{ id: 'devanagari', name: 'Devanagari (देवनागरी)', is_indic: true, has_vedic_pitch: true },
	{ id: 'telugu', name: 'Telugu (తెలుగు)', is_indic: true, has_vedic_pitch: true },
	{ id: 'kannada', name: 'Kannada (ಕನ್ನಡ)', is_indic: true, has_vedic_pitch: true },
	{ id: 'grantha', name: 'Grantha (𑌗𑍍𑌰𑌨𑍍𑌥)', is_indic: true, has_vedic_pitch: true },
	{ id: 'malayalam', name: 'Malayalam (മലയാളം)', is_indic: true, has_vedic_pitch: true },
	{ id: 'bengali', name: 'Bengali (বাংলা)', is_indic: true, has_vedic_pitch: true },
	{ id: 'iast', name: 'IAST (Roman Diacritics)', is_indic: false, has_vedic_pitch: true },
	{ id: 'iso15919', name: 'ISO 15919', is_indic: false, has_vedic_pitch: true }
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

export function inspect_varna(_symbol: string): VarnaAnalysis {
	return missing();
}
