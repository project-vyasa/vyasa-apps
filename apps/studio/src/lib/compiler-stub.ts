export const COMPILER_WASM_STUB = true;

export const ENGINE_MISSING_MESSAGE =
	'Compiler WASM is not built yet. In vyasa run: (cd vyasac && wasm-pack build --target web --out-dir pkg --release), then restart this dev server.';

export default async function init(): Promise<void> {
	throw new Error(ENGINE_MISSING_MESSAGE);
}

export function compile_workspace(_files: unknown, _templateName?: string | null): string {
	throw new Error(ENGINE_MISSING_MESSAGE);
}

export function init_hooks(): void {}
