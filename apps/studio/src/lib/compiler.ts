import { ENGINE_MISSING_MESSAGE } from './compiler-stub';

export { ENGINE_MISSING_MESSAGE };

export type EngineStatus = 'loading' | 'ready' | 'missing';

export type CompileStats = {
	duration_ms: number;
	file_count: number;
};

export type CompileSuccess = {
	ok: true;
	files: Record<string, string>;
	stats: CompileStats;
	previewHtml: string | null;
	previewPath: string | null;
};

export type CompileFailure = {
	ok: false;
	error: string;
};

export type CompileResult = CompileSuccess | CompileFailure;

type CompilerWasmModule = {
	default: (moduleOrPath?: unknown) => Promise<unknown>;
	COMPILER_WASM_STUB?: boolean;
	compile_workspace: (files: Record<string, string>, templateName?: string | null) => string;
	init_hooks?: () => void;
};

let modulePromise: Promise<CompilerWasmModule> | null = null;
let status: EngineStatus = 'loading';
let lastError = '';

async function loadModule(): Promise<CompilerWasmModule> {
	if (!modulePromise) {
		modulePromise = (async () => {
			const mod = (await import('@project-vyasa/vyasa-compiler-wasm')) as CompilerWasmModule;
			if (mod.COMPILER_WASM_STUB) {
				status = 'missing';
				lastError = ENGINE_MISSING_MESSAGE;
				throw new Error(ENGINE_MISSING_MESSAGE);
			}
			await mod.default();
			try {
				mod.init_hooks?.();
			} catch {
				/* wasm-bindgen may throw if hooks already set */
			}
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

export function builtHtmlPaths(files: Record<string, string>): string[] {
	return Object.keys(files)
		.filter(
			(key) =>
				(key.startsWith('build/') || key.startsWith('output/')) &&
				key.endsWith('.html') &&
				!key.endsWith('/localization.html')
		)
		.sort();
}

/** Compiled HTML for the same chapter as a content file or an existing preview path. */
export function chapterPreviewPaths(sourceOrPreview: string, available: readonly string[]): string[] {
	const fromSource = /^content\/[^/]+\/(.+)\.vy$/.exec(sourceOrPreview);
	const fromHtml = /\/html\/[^/]+\/(.+)\.html$/.exec(sourceOrPreview);
	const chapter = fromSource?.[1] ?? fromHtml?.[1];
	if (!chapter) return [];
	return available.filter((path) => path.endsWith(`/${chapter}.html`));
}

/** `content/iast/1.vy` → `build/html/iast/1.html` when that compile output exists. */
export function previewPathForSource(sourcePath: string, available: readonly string[]): string | null {
	const match = /^content\/([^/]+)\/(.+)\.vy$/.exec(sourcePath);
	if (!match) return null;
	const buildPath = `build/html/${match[1]}/${match[2]}.html`;
	if (available.includes(buildPath)) return buildPath;
	const outputPath = `output/html/${match[1]}/${match[2]}.html`;
	if (available.includes(outputPath)) return outputPath;
	return null;
}

export function pickPreviewHtml(
	files: Record<string, string>,
	preferredPath?: string | null
): {
	path: string | null;
	html: string | null;
} {
	const built = builtHtmlPaths(files);
	const preferred =
		(preferredPath && built.includes(preferredPath) ? preferredPath : null) ??
		built.find((key) => key.endsWith('/mula/1.html')) ??
		built[0] ??
		null;
	if (!preferred) return { path: null, html: null };
	return { path: preferred, html: files[preferred] ?? null };
}

export async function compileWorkspace(files: Record<string, string>): Promise<CompileResult> {
	try {
		const mod = await loadModule();
		const resultStr = mod.compile_workspace({ ...files }, null);
		const result = JSON.parse(resultStr) as {
			files?: Record<string, string>;
			stats?: CompileStats;
		};
		const outFiles = result.files ?? {};
		const preview = pickPreviewHtml(outFiles);
		return {
			ok: true,
			files: outFiles,
			stats: result.stats ?? { duration_ms: 0, file_count: 0 },
			previewHtml: preview.html,
			previewPath: preview.path
		};
	} catch (err) {
		return {
			ok: false,
			error: err instanceof Error ? err.message : String(err)
		};
	}
}
