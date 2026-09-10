declare module '@project-vyasa/sanskrit-wasm' {
	const init: (moduleOrPath?: unknown) => Promise<unknown>;
	export default init;
	export const SANSKRIT_WASM_STUB: boolean | undefined;
	export function transliterate(text: string, from: string, to: string): string;
	export function detect_script(text: string): string | undefined;
	export function get_supported_scripts(): unknown;
	export function generate_krama(pada: string, script: string): unknown;
	export function generate_krama_text(pada: string, script: string): string;
	export function get_shiva_sutras(): unknown;
	export function get_pratyahara_sounds(name: string): unknown;
	export function inspect_varna(symbol: string): unknown;
}
