import type { KramaStep, ScriptInfo, ShivaSutra, VarnaAnalysis } from './sanskrit-wasm-stub';
import { ENGINE_MISSING_MESSAGE, FALLBACK_SCRIPTS } from './sanskrit-wasm-stub';

export type { KramaStep, ScriptInfo, ShivaSutra, VarnaAnalysis };
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
	get_shiva_sutras: () => unknown;
	get_pratyahara_sounds: (name: string) => unknown;
	inspect_varna: (symbol: string) => unknown;
};

let modulePromise: Promise<SanskritWasmModule> | null = null;
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
