/// <reference path="./sanskrit-wasm.d.ts" />
import type {
	AksharaAnalysis,
	GhanaStep,
	JataStep,
	KramaStep,
	ScriptInfo,
	ShivaSutra,
	TaittiriyaSvarita,
	TaittiriyaVarna,
	VarnaAnalysis
} from './sanskrit-wasm-stub';
import { ENGINE_MISSING_MESSAGE, FALLBACK_SCRIPTS } from './sanskrit-wasm-stub';

export type {
	AksharaAnalysis,
	GhanaStep,
	JataStep,
	KramaStep,
	ScriptInfo,
	ShivaSutra,
	TaittiriyaSvarita,
	TaittiriyaVarna,
	VarnaAnalysis
};
export { ENGINE_MISSING_MESSAGE, FALLBACK_SCRIPTS, GOLDEN_PADA, GOLDEN_PADA_PATHA } from './sanskrit-wasm-stub';

export type EngineStatus = 'loading' | 'ready' | 'missing';

type SanskritWasmModule = {
	default: (moduleOrPath?: unknown) => Promise<unknown>;
	SANSKRIT_WASM_STUB?: boolean;
	transliterate: (text: string, from: string, to: string) => string;
	detect_script?: (text: string) => string | undefined;
	get_supported_scripts: () => unknown;
	generate_krama: (pada: string, script: string) => unknown;
	generate_krama_text?: (pada: string, script: string) => string;
	generate_jata: (pada: string, script: string) => unknown;
	generate_jata_text?: (pada: string, script: string) => string;
	generate_ghana?: (pada: string, script: string) => unknown;
	generate_ghana_text?: (pada: string, script: string) => string;
	get_shiva_sutras: () => unknown;
	get_pratyahara_sounds: (name: string) => unknown;
	check_pratyahara_contains?: (pratyahara_name: string, sound_symbol: string) => boolean;
	inspect_varna: (symbol: string) => unknown;
	analyze_syllables?: (text: string, script_name: string) => unknown;
	get_taittiriya_svaritas: () => unknown;
	inspect_taittiriya_varna: (symbol: string) => unknown;
	check_taittiriya_dvitva: (
		prev: string | null | undefined,
		curr: string,
		next?: string | null
	) => boolean;
	classify_taittiriya_svarita_by_context: (context: string) => string | undefined;
};

let modulePromise: Promise<SanskritWasmModule> | null = null;
let wasmMod: SanskritWasmModule | null = null;
let status: EngineStatus = 'loading';
let lastError = '';

export function toArray<T>(value: unknown): T[] {
	if (value == null) return [];
	if (Array.isArray(value)) return value as T[];
	if (typeof value === 'object') {
		if (typeof (value as Iterable<T>)[Symbol.iterator] === 'function') {
			return Array.from(value as Iterable<T>);
		}
		const numeric = Object.keys(value as object)
			.filter((k) => /^\d+$/.test(k))
			.sort((a, b) => Number(a) - Number(b));
		if (numeric.length) {
			return numeric.map((k) => (value as Record<string, T>)[k]);
		}
	}
	return [];
}

async function loadModule(): Promise<SanskritWasmModule> {
	if (!modulePromise) {
		modulePromise = (async () => {
			const mod = (await import('@project-vyasa/sanskrit-wasm')) as SanskritWasmModule;
			if (mod.SANSKRIT_WASM_STUB) {
				status = 'missing';
				lastError = ENGINE_MISSING_MESSAGE;
				throw new Error(ENGINE_MISSING_MESSAGE);
			}
			await mod.default();
			status = 'ready';
			wasmMod = mod;
			return mod;
		})().catch((err: unknown) => {
			status = 'missing';
			lastError = err instanceof Error ? err.message : String(err);
			throw err;
		});
	}
	return modulePromise;
}

export function engineStatus(): EngineStatus {
	return status;
}

export function engineError(): string {
	return lastError || (status === 'missing' ? ENGINE_MISSING_MESSAGE : '');
}

export async function ensureEngine(): Promise<EngineStatus> {
	try {
		await loadModule();
		return 'ready';
	} catch {
		status = 'missing';
		return 'missing';
	}
}

export async function supportedScripts(): Promise<ScriptInfo[]> {
	try {
		const mod = await loadModule();
		const list = toArray<ScriptInfo>(mod.get_supported_scripts());
		return list.length ? list : FALLBACK_SCRIPTS;
	} catch {
		return FALLBACK_SCRIPTS;
	}
}

export async function transliterate(text: string, from: string, to: string): Promise<string> {
	const mod = await loadModule();
	return mod.transliterate(text, from, to);
}

/** Sync after `ensureEngine()`; returns `text` unchanged if the engine is not ready. */
export function transliterateNow(text: string, from: string, to: string): string {
	if (!wasmMod || from === to || !text) return text;
	return wasmMod.transliterate(text, from, to);
}

export async function roundTripLossless(
	text: string,
	from: string,
	to: string
): Promise<boolean> {
	if (!text || from === to) return true;
	const forward = await transliterate(text, from, to);
	const back = await transliterate(forward, to, from);
	return back === text;
}

export async function generateKrama(pada: string, script: string): Promise<KramaStep[]> {
	const mod = await loadModule();
	return toArray<KramaStep>(mod.generate_krama(pada, script));
}

export async function generateJata(pada: string, script: string): Promise<JataStep[]> {
	const mod = await loadModule();
	return toArray<JataStep>(mod.generate_jata(pada, script));
}

export function ghanaSupported(): boolean {
	return typeof wasmMod?.generate_ghana === 'function';
}

export const GHANA_ENGINE_MESSAGE =
	'Ghana is not in this Sanskrit WASM build yet. After vyutils exports generate_ghana, rebuild the package and restart the studio.';

export async function generateGhana(pada: string, script: string): Promise<GhanaStep[]> {
	const mod = await loadModule();
	if (typeof mod.generate_ghana !== 'function') {
		throw new Error(GHANA_ENGINE_MESSAGE);
	}
	return toArray<GhanaStep>(mod.generate_ghana(pada, script));
}

export async function shivaSutras(): Promise<ShivaSutra[]> {
	const mod = await loadModule();
	return toArray<ShivaSutra>(mod.get_shiva_sutras());
}

export async function pratyaharaSounds(name: string): Promise<VarnaAnalysis[]> {
	const mod = await loadModule();
	return toArray<VarnaAnalysis>(mod.get_pratyahara_sounds(name));
}

export async function inspectVarna(symbol: string): Promise<VarnaAnalysis> {
	const mod = await loadModule();
	return mod.inspect_varna(symbol) as VarnaAnalysis;
}

export function guessScript(text: string): string {
	if (/[\u0900-\u097F]/.test(text)) return 'devanagari';
	return 'iast';
}

export async function detectScript(text: string): Promise<string> {
	if (!text.trim()) return 'devanagari';
	try {
		const mod = await loadModule();
		return mod.detect_script?.(text) || guessScript(text);
	} catch {
		return guessScript(text);
	}
}

export async function analyzeSyllables(text: string, script?: string): Promise<AksharaAnalysis[]> {
	const mod = await loadModule();
	if (typeof mod.analyze_syllables !== 'function') {
		throw new Error(
			'Syllable analysis is not in this Sanskrit WASM build. Rebuild vyasa-sanskrit-wasm and restart the studio.'
		);
	}
	const resolved = script || (await detectScript(text));
	return toArray<AksharaAnalysis>(mod.analyze_syllables(text, resolved));
}

export async function checkPratyaharaContains(
	pratyaharaName: string,
	soundSymbol: string
): Promise<boolean> {
	const mod = await loadModule();
	if (typeof mod.check_pratyahara_contains !== 'function') return false;
	try {
		return Boolean(mod.check_pratyahara_contains(pratyaharaName, soundSymbol));
	} catch {
		return false;
	}
}

export async function taittiriyaSvaritas(): Promise<TaittiriyaSvarita[]> {
	const mod = await loadModule();
	return toArray<TaittiriyaSvarita>(mod.get_taittiriya_svaritas());
}

export async function inspectTaittiriyaVarna(symbol: string): Promise<TaittiriyaVarna> {
	const mod = await loadModule();
	return mod.inspect_taittiriya_varna(symbol) as TaittiriyaVarna;
}

export async function checkTaittiriyaDvitva(
	prev: string,
	curr: string,
	next: string
): Promise<boolean> {
	const mod = await loadModule();
	return mod.check_taittiriya_dvitva(emptyToNull(prev), curr, emptyToNull(next));
}

export async function classifyTaittiriyaSvarita(context: string): Promise<string | undefined> {
	const mod = await loadModule();
	return mod.classify_taittiriya_svarita_by_context(context);
}

function emptyToNull(value: string): string | null {
	const trimmed = value.trim();
	return trimmed ? trimmed : null;
}
