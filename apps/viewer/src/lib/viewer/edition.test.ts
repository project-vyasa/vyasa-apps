import { describe, expect, it } from 'vitest';
import {
	gapNoteForContainer,
	isAbsentContainer,
	noteMarkKind,
	parseEdition,
	parseWorkNotes
} from './edition';

describe('parseEdition', () => {
	it('keeps a complete edition object', () => {
		expect(
			parseEdition({
				title: 'Matsya',
				description: 'A purana',
				license: 'CC-BY-SA-4.0',
				source: 'Sanskrit Wikisource',
				source_root: 'https://sa.wikisource.org',
				snapshot: '2026-09-29'
			})
		).toMatchObject({ title: 'Matsya', snapshot: '2026-09-29' });
	});

	it('drops an incomplete edition instead of filling a title', () => {
		expect(parseEdition({ title: 'Matsya' })).toBeUndefined();
		expect(parseEdition('{"title":""}')).toBeUndefined();
	});
});

describe('parseWorkNotes', () => {
	it('reads work-scope notes from a JSON string', () => {
		expect(
			parseWorkNotes('[{"kind":"source","content":"From the dump.","href":"https://example.test"}]')
		).toEqual([
			{ kind: 'source', content: 'From the dump.', href: 'https://example.test' }
		]);
	});
});

describe('absent containers', () => {
	it('treats 2 and 2:0 as the same absent block', () => {
		const attrs = { '2': { absent: 'true' } };
		expect(isAbsentContainer(attrs, '2')).toBe(true);
		expect(isAbsentContainer(attrs, '2:0')).toBe(true);
		expect(isAbsentContainer(attrs, '1')).toBe(false);
	});

	it('reads the gap sentence for the container only', () => {
		const annotations = [
			{
				urn: '2:0',
				label: 'Note',
				attributes: { kind: 'gap', content: 'Adhyaya 2 is missing in this edition.' }
			},
			{
				urn: '1:1',
				label: 'Note',
				attributes: { kind: 'uncertain', content: 'Reading is doubtful.' }
			}
		];
		expect(gapNoteForContainer(annotations, '2')).toEqual({
			content: 'Adhyaya 2 is missing in this edition.'
		});
		expect(gapNoteForContainer(annotations, '1:1')).toBeUndefined();
	});

	it('matches a gap note stored under the publication prefix', () => {
		const prefix = 'urn:vyasa:sa_wikisource:matsya-purana';
		const annotations = [
			{
				urn: `${prefix}:277:0`,
				label: 'Note',
				attributes: {
					kind: 'gap',
					content: 'This adhyāya is a stub on Sanskrit Wikisource and is not in this edition.',
					href: 'https://sa.wikisource.org/wiki/matsya-277'
				}
			}
		];
		expect(gapNoteForContainer(annotations, '277')).toBeUndefined();
		expect(gapNoteForContainer(annotations, '277', prefix)).toEqual({
			content: 'This adhyāya is a stub on Sanskrit Wikisource and is not in this edition.',
			href: 'https://sa.wikisource.org/wiki/matsya-277'
		});
	});
});

describe('noteMarkKind', () => {
	it('marks an uncertain note without treating a gap as a verse badge', () => {
		expect(noteMarkKind({ kind: 'uncertain', content: 'Reading is doubtful.' })).toBe('uncertain');
		expect(noteMarkKind({ kind: 'gap', content: 'Missing.' })).toBe('gap');
		expect(noteMarkKind({ content: 'Editorial note.' })).toBe('note');
	});
});
