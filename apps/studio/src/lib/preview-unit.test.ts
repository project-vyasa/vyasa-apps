import { describe, expect, it } from 'vitest';
import { previewUnitReference, readWorkspaceAddress } from './preview-unit';

const GITA = `
[urn]
path_schema = ["chapter"]
hierarchy = ["chapter", "verse"]

[build.default]
target = "view"
`;

const NOTE = `
[urn]
hierarchy = ["number"]

[build.default]
layout = "document"
`;

const VERSE_FILES = `
[urn]
path_schema = ["chapter", "verse"]
hierarchy = ["chapter", "verse"]

[build.default]
layout = "document"
`;

const SEQUENCE_LEAVES = `
[urn]
path_schema = ["chapter", "verse"]
hierarchy = ["chapter", "verse"]
`;

describe('preview unit', () => {
	it('treats a missing layout as a sequence container named by path_schema', () => {
		const address = readWorkspaceAddress(GITA);
		expect(address.addressing).toBe('sequence');
		expect(previewUnitReference('build/html/mula/1.html', address)).toBe('container · chapter 1');
		expect(previewUnitReference('build/html/iast/18.html', address)).toBe('container · chapter 18');
	});

	it('labels a document workspace as a document', () => {
		const address = readWorkspaceAddress(NOTE);
		expect(address.addressing).toBe('document');
		expect(previewUnitReference('build/html/primary/190.html', address)).toBe('document');
	});

	it('includes the document path when the schema names every segment', () => {
		const address = readWorkspaceAddress(VERSE_FILES);
		expect(previewUnitReference('build/html/mula/1/2.html', address)).toBe(
			'document · chapter 1 · verse 2'
		);
	});

	it('names the container above the leaf when a sequence file is one leaf', () => {
		const address = readWorkspaceAddress(SEQUENCE_LEAVES);
		expect(previewUnitReference('content/mula/2/11.vy', address)).toBe('container · chapter 2');
	});

	it('does not call the leaf itself a container', () => {
		const address = readWorkspaceAddress(`
[urn]
path_schema = ["verse"]
hierarchy = ["verse"]
`);
		expect(previewUnitReference('build/html/mula/1.html', address)).toBe('container');
	});

	it('stays unlabeled as a file when toml is missing', () => {
		expect(previewUnitReference('build/html/mula/1.html', readWorkspaceAddress(undefined))).toBe(
			'container'
		);
	});
});
