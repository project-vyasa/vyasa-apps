import type { StreamDescriptor } from '$lib/types';
import {
	isPipeEngine,
	splitPipeStep,
	type GridCell,
	type PipeEngine
} from '$lib/viewer/grid-pipe-parser';

export type SanskritPipeEngine = {
	transliterate: (text: string, from: string, to: string) => string;
	generate_krama_text: (pada: string, script: string) => string;
	generate_jata_text: (pada: string, script: string) => string;
};

type SanskritWasmModule = {
	default: (moduleOrPath?: unknown) => Promise<unknown>;
	SANSKRIT_WASM_STUB?: boolean;
	transliterate?: SanskritPipeEngine['transliterate'];
	generate_krama_text?: SanskritPipeEngine['generate_krama_text'];
	generate_jata_text?: SanskritPipeEngine['generate_jata_text'];
};

/** Lipi `from`/`to` table (vyasa-lipi `Script::from_name`). `Latn` is not a lipi source. */
const LIPI_SCRIPTS = new Set([
	'devanagari',
	'deva',
	'deva-in',
	'telugu',
	'telu',
	'tel',
	'kannada',
	'knda',
	'kan',
	'grantha',
	'gran',
	'malayalam',
	'mlym',
	'mal',
	'bengali',
	'beng',
	'bangla',
	'iso15919',
	'iso',
	'iso-15919',
	'iast',
	'slp1',
	'slp',
	'hk',
	'harvard-kyoto',
	'harvardkyoto',
	'wx'
]);

export function lipiMapsScript(token: string | undefined | null): boolean {
	if (!token?.trim()) return false;
	return LIPI_SCRIPTS.has(token.trim().toLowerCase());
}

export function columnA11yName(cell: GridCell): string {
	if (!cell.pipe?.length) return cell.block;
	const last = splitPipeStep(cell.pipe[cell.pipe.length - 1]);
	if (last.engine === 'lipi' && last.arg) return `${cell.block} (${last.arg})`;
	return `${cell.block} (${last.engine})`;
}

type LayoutColumn = {
	block: string;
	openTag: string;
	inner: string;
	full: string;
	start: number;
	end: number;
};

function findMatchingClose(html: string, innerStart: number): number {
	let depth = 1;
	const re = /<\/?div\b[^>]*>/gi;
	re.lastIndex = innerStart;
	let match: RegExpExecArray | null;
	while ((match = re.exec(html))) {
		if (match[0].startsWith('</')) {
			depth -= 1;
			if (depth === 0) return match.index;
		} else if (!match[0].endsWith('/>')) {
			depth += 1;
		}
	}
	return -1;
}

export function extractLayoutColumns(html: string): LayoutColumn[] {
	const cols: LayoutColumn[] = [];
	const openRe = /<div\b[^>]*\bclass="[^"]*\bvyasa-layout-col\b[^"]*"[^>]*>/gi;
	let match: RegExpExecArray | null;
	while ((match = openRe.exec(html))) {
		const openTag = match[0];
		const blockMatch = openTag.match(/\bvyasa-block-([^\s"']+)/);
		if (!blockMatch) continue;
		const start = match.index;
		const innerStart = start + openTag.length;
		const closeAt = findMatchingClose(html, innerStart);
		if (closeAt < 0) break;
		const fullEnd = closeAt + '</div>'.length;
		cols.push({
			block: blockMatch[1],
			openTag,
			inner: html.slice(innerStart, closeAt),
			full: html.slice(start, fullEnd),
			start,
			end: fullEnd
		});
		openRe.lastIndex = fullEnd;
	}
	return cols;
}

export function mapHtmlTextNodes(html: string, map: (text: string) => string): string {
	return html.replace(/(<[^>]+>)|([^<]+)/g, (_all, tag: string | undefined, text: string | undefined) => {
		if (tag) return tag;
		return map(text ?? '');
	});
}

export function htmlInnerText(html: string): string {
	return html
		.replace(/<[^>]+>/g, ' ')
		.replace(/&nbsp;/gi, ' ')
		.replace(/&amp;/g, '&')
		.replace(/&lt;/g, '<')
		.replace(/&gt;/g, '>')
		.replace(/&quot;/g, '"')
		.replace(/&#39;/g, "'")
		.replace(/\s+/g, ' ')
		.trim();
}

function escapeHtml(value: string): string {
	return value.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

function decorateOpenTag(openTag: string, cell: GridCell, isError: boolean): string {
	const engines = (cell.pipe ?? []).map((step) => splitPipeStep(step).engine);
	const extra = [...engines.map((engine) => `vyasa-pipe-${engine}`), isError ? 'vyasa-pipe-error' : '']
		.filter(Boolean)
		.join(' ');
	let tag = openTag;
	if (extra) {
		if (/\bclass="/.test(tag)) {
			tag = tag.replace(/\bclass="([^"]*)"/, (_m, existing: string) => `class="${existing} ${extra}"`);
		} else {
			tag = tag.replace(/^<div\b/, `<div class="${extra}"`);
		}
	}
	const a11y = escapeHtml(columnA11yName(cell));
	const pipeAttr = escapeHtml((cell.pipe ?? []).join('|'));
	tag = tag.replace(
		/>$/,
		` data-pipe="${pipeAttr}" aria-label="${a11y}" title="${a11y}">`
	);
	return tag;
}

function errorColumn(col: LayoutColumn, cell: GridCell, message: string): string {
	return `${decorateOpenTag(col.openTag, cell, true)}<div class="vyasa-pipe-error-msg">${escapeHtml(message)}</div></div>`;
}

function wrapPatha(block: string, engine: PipeEngine, text: string): string {
	return `<div class="vyasa-block-${block} vyasa-pipe-${engine}">${escapeHtml(text)}</div>`;
}

type PipeOp =
	| { kind: 'lipi'; to: string }
	| { kind: 'krama' | 'jata'; to: string };

function validateAndPlan(
	cell: GridCell,
	meta: Record<string, StreamDescriptor>
): { ops: PipeOp[]; error?: string } {
	const packed = meta[cell.block];
	const ops: PipeOp[] = [];
	const steps = cell.pipe ?? [];
	for (let i = 0; i < steps.length; i++) {
		const { engine, arg } = splitPipeStep(steps[i]);
		if (!isPipeEngine(engine)) {
			return { ops, error: `Unknown engine: ${engine}` };
		}
		const next = steps[i + 1] ? splitPipeStep(steps[i + 1]) : null;
		if ((engine === 'krama' || engine === 'jata') && next?.engine === 'lipi') {
			if (!next.arg) return { ops, error: 'lipi needs a target script, e.g. lipi(Mlym)' };
			if (!lipiMapsScript(next.arg)) {
				return { ops, error: `lipi cannot map target script ${next.arg}` };
			}
			if (!packed?.script) {
				return { ops, error: `packed script missing for ${cell.block}` };
			}
			ops.push({ kind: engine, to: next.arg });
			i += 1;
			continue;
		}
		if (engine === 'lipi') {
			if (!arg) return { ops, error: 'lipi needs a target script, e.g. lipi(Mlym)' };
			if (!packed?.script) {
				return { ops, error: `packed script missing for ${cell.block}` };
			}
			if (!lipiMapsScript(packed.script)) {
				return { ops, error: `lipi cannot map packed script ${packed.script}` };
			}
			if (!lipiMapsScript(arg)) {
				return { ops, error: `lipi cannot map target script ${arg}` };
			}
			ops.push({ kind: 'lipi', to: arg });
			continue;
		}
		if (!packed?.script) {
			return { ops, error: `packed script missing for ${cell.block}` };
		}
		ops.push({ kind: engine, to: packed.script });
	}
	return { ops };
}

function applyOps(
	inner: string,
	ops: PipeOp[],
	fromScript: string,
	block: string,
	engine: SanskritPipeEngine
): string {
	let html = inner;
	let script = fromScript;
	for (const op of ops) {
		if (op.kind === 'lipi') {
			html = mapHtmlTextNodes(html, (text) => {
				if (!text.trim()) return text;
				return engine.transliterate(text, script, op.to);
			});
			script = op.to;
			continue;
		}
		html = wrapPatha(block, op.kind, engine[op.kind === 'krama' ? 'generate_krama_text' : 'generate_jata_text'](htmlInnerText(html), op.to));
		script = op.to;
	}
	return html;
}

function transformColumn(
	col: LayoutColumn,
	cell: GridCell,
	meta: Record<string, StreamDescriptor>,
	engine: SanskritPipeEngine | null
): string {
	const planned = validateAndPlan(cell, meta);
	if (planned.error) return errorColumn(col, cell, planned.error);
	if (!engine) return col.full;
	try {
		const fromScript = meta[cell.block]?.script ?? '';
		const inner = applyOps(col.inner, planned.ops, fromScript, cell.block, engine);
		return `${decorateOpenTag(col.openTag, cell, false)}${inner}</div>`;
	} catch (err) {
		const message = err instanceof Error ? err.message : String(err);
		return errorColumn(col, cell, message);
	}
}

export function applyGridPipesWithEngine(
	html: string,
	cells: GridCell[],
	meta: Record<string, StreamDescriptor> | undefined,
	engine: SanskritPipeEngine | null
): string {
	if (!cells.some((cell) => (cell.pipe?.length ?? 0) > 0)) return html;
	const cols = extractLayoutColumns(html);
	if (cols.length === 0) return html;
	const pending = cells.slice();
	const descriptors = meta ?? {};
	let out = '';
	let cursor = 0;
	for (const col of cols) {
		out += html.slice(cursor, col.start);
		const idx = pending.findIndex((cell) => cell.block === col.block);
		if (idx === -1) {
			out += col.full;
		} else {
			const cell = pending.splice(idx, 1)[0];
			out += (cell.pipe?.length ?? 0) > 0 ? transformColumn(col, cell, descriptors, engine) : col.full;
		}
		cursor = col.end;
	}
	out += html.slice(cursor);
	return out;
}

let loadPromise: Promise<SanskritPipeEngine | null> | null = null;

export async function loadPipeEngine(): Promise<SanskritPipeEngine | null> {
	if (!loadPromise) {
		loadPromise = (async () => {
			try {
				const mod = (await import('@project-vyasa/sanskrit-wasm')) as SanskritWasmModule;
				if (mod.SANSKRIT_WASM_STUB) return null;
				await mod.default();
				if (
					typeof mod.transliterate !== 'function' ||
					typeof mod.generate_krama_text !== 'function' ||
					typeof mod.generate_jata_text !== 'function'
				) {
					return null;
				}
				return {
					transliterate: mod.transliterate,
					generate_krama_text: mod.generate_krama_text,
					generate_jata_text: mod.generate_jata_text
				};
			} catch {
				return null;
			}
		})();
	}
	return loadPromise;
}

export function resetPipeEngineForTests(): void {
	loadPromise = null;
}

/** Post-weave rewrite. `engine === undefined` lazy-loads WASM; `null` is missing WASM. */
export async function applyGridPipes(
	html: string,
	cells: GridCell[],
	meta: Record<string, StreamDescriptor> | undefined,
	engine?: SanskritPipeEngine | null
): Promise<string> {
	const resolved = engine === undefined ? await loadPipeEngine() : engine;
	return applyGridPipesWithEngine(html, cells, meta, resolved);
}
