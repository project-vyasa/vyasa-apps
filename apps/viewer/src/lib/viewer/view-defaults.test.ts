import { describe, expect, it } from 'vitest';
import { defaultReferenceGutterVisible, pickInitialActiveView } from './view-defaults';

describe('pickInitialActiveView', () => {
	it('prefers reading for document layout', () => {
		expect(pickInitialActiveView(['grid', 'reading'], { isDocumentLayout: true })).toBe('reading');
	});

	it('prefers a non-grid view on handset when one exists', () => {
		expect(pickInitialActiveView(['grid', 'reading'], { preferNonGrid: true })).toBe('reading');
	});

	it('falls back to grid when it is the only view', () => {
		expect(pickInitialActiveView(['grid'], { preferNonGrid: true })).toBe('grid');
	});
});

describe('defaultReferenceGutterVisible', () => {
	it('hides the gutter on handset and shows it on desktop', () => {
		expect(defaultReferenceGutterVisible(true)).toBe(false);
		expect(defaultReferenceGutterVisible(false)).toBe(true);
	});
});
