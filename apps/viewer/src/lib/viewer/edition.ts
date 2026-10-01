import type { AnnotationEntry, Edition, WorkNote } from '$lib/types';
import { toRelativeUrn } from '$lib/explore/urn-utils';

export type { Edition, WorkNote };

const EDITION_FIELDS = [
	'title',
	'description',
	'license',
	'source',
	'source_root',
	'snapshot'
] as const;

function nonempty(value: unknown): string | undefined {
	if (typeof value !== 'string') return undefined;
	const trimmed = value.trim();
	return trimmed ? trimmed : undefined;
}

/** Packed `manifest.edition`. Incomplete objects are omitted; nothing is filled in. */
export function parseEdition(raw: unknown): Edition | undefined {
	let value = raw;
	if (typeof raw === 'string') {
		if (!raw.trim()) return undefined;
		try {
			value = JSON.parse(raw) as unknown;
		} catch {
			return undefined;
		}
	}
	if (!value || typeof value !== 'object' || Array.isArray(value)) return undefined;
	const rec = value as Record<string, unknown>;
	const out = {} as Edition;
	for (const field of EDITION_FIELDS) {
		const text = nonempty(rec[field]);
		if (!text) return undefined;
		out[field] = text;
	}
	return out;
}

/** Packed `manifest.work_notes`. Entries without kind and content are dropped. */
export function parseWorkNotes(raw: unknown): WorkNote[] {
	let value = raw;
	if (typeof raw === 'string') {
		if (!raw.trim()) return [];
		try {
			value = JSON.parse(raw) as unknown;
		} catch {
			return [];
		}
	}
	if (!Array.isArray(value)) return [];
	const notes: WorkNote[] = [];
	for (const entry of value) {
		if (!entry || typeof entry !== 'object') continue;
		const rec = entry as Record<string, unknown>;
		const kind = nonempty(rec.kind);
		const content = nonempty(rec.content);
		if (!kind || !content) continue;
		const note: WorkNote = { kind, content };
		const detail = nonempty(rec.detail);
		const href = nonempty(rec.href);
		if (detail) note.detail = detail;
		if (href) note.href = href;
		notes.push(note);
	}
	return notes;
}

/** `absent=true` on the container. `2:0` and `2` are the same block. */
export function isAbsentContainer(
	blockAttributesByUrn: Record<string, Record<string, string>> | undefined,
	urn: string
): boolean {
	if (!blockAttributesByUrn || !urn) return false;
	const key = toRelativeUrn(urn);
	return blockAttributesByUrn[key]?.absent === 'true' || blockAttributesByUrn[urn]?.absent === 'true';
}

export interface GapNote {
	content: string;
	href?: string;
	detail?: string;
}

/** Packed `global_prefix`. Empty means the default `urn:vyasa:` strip. */
export function manifestPrefix(manifest: { global_prefix?: string } | undefined): string {
	const prefix = manifest?.global_prefix?.trim();
	return prefix || 'urn:vyasa:';
}

/** Gap sentence for an absent container. Not copied onto verses. */
export function gapNoteForContainer(
	annotations: AnnotationEntry[] | undefined,
	urn: string,
	globalPrefix = 'urn:vyasa:'
): GapNote | undefined {
	if (!annotations?.length || !urn) return undefined;
	const key = toRelativeUrn(urn, globalPrefix);
	for (const ann of annotations) {
		if (ann.label !== 'Note') continue;
		if (ann.attributes?.kind !== 'gap') continue;
		const annKey = toRelativeUrn(String(ann.urn ?? ''), globalPrefix);
		if (annKey !== key) continue;
		const text = nonempty(ann.attributes.content) ?? nonempty(ann.attributes.text);
		if (!text) continue;
		const note: GapNote = { content: text };
		const href = nonempty(ann.attributes.href);
		const detail = nonempty(ann.attributes.detail);
		if (href) note.href = href;
		if (detail) note.detail = detail;
		return note;
	}
	return undefined;
}

/** Reader HTML for one absent container. The sentence stays out of the verse stream. */
export function gapNoticeHtml(urnLabel: string, note: GapNote | undefined): string {
	const label = escapeNoticeText(urnLabel);
	if (!note) {
		return `<div id="${label}" class="urn-row edition-gap"><div class="urn-gutter left-gutter"><div class="urn-badge-wrapper"><span class="urn-badge">${label}</span></div></div><div class="urn-content"></div></div>`;
	}
	const text = escapeNoticeText(note.content);
	const body = note.href
		? `<a href="${escapeNoticeText(note.href)}" target="_blank" rel="noreferrer">${text}</a>`
		: text;
	const detail = note.detail
		? `<span class="gap-note-detail">${escapeNoticeText(note.detail)}</span>`
		: '';
	return `<div id="${label}" class="urn-row edition-gap"><div class="urn-gutter left-gutter"><div class="urn-badge-wrapper"><span class="urn-badge">${label}</span></div></div><div class="urn-content"><p class="gap-note">${body}${detail}</p></div></div>`;
}

/** How a Note annotation is shown. Gap stays on the absent container, not on verses. */
export function noteMarkKind(
	attributes: Record<string, unknown> | undefined
): 'gap' | 'uncertain' | 'note' {
	const kind = attributes?.kind;
	if (kind === 'gap' || kind === 'uncertain') return kind;
	return 'note';
}

export function escapeNoticeText(value: string): string {
	return value
		.replace(/&/g, '&amp;')
		.replace(/</g, '&lt;')
		.replace(/>/g, '&gt;')
		.replace(/"/g, '&quot;');
}
