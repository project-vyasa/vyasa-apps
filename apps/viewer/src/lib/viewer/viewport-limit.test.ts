import { describe, expect, it } from 'vitest';
import { viewportIncludesUrn, viewportLeafFetchLimit } from './viewport-limit';

describe('viewportLeafFetchLimit', () => {
	it('over-fetches so a single leaf is not eaten by the :0 header', () => {
		expect(viewportLeafFetchLimit(1)).toBeGreaterThan(1);
		expect(viewportLeafFetchLimit(2)).toBeGreaterThan(2);
	});

	it('adds a small header buffer instead of doubling the leaf count', () => {
		expect(viewportLeafFetchLimit(27)).toBe(31);
	});
});

describe('viewportIncludesUrn', () => {
	it('keeps matching leaves and drops suffix-colliding or following neighbors', () => {
		const matching = ['4:5:1:1'];
		expect(viewportIncludesUrn('4:5:1:1', matching)).toBe(true);
		expect(viewportIncludesUrn('4:5:1:2', matching)).toBe(false);
		expect(viewportIncludesUrn('2:1:4:5', matching)).toBe(false);
		expect(viewportIncludesUrn('4:6:1:1', matching)).toBe(false);
		expect(viewportIncludesUrn('4:5:0:0', matching)).toBe(false);
	});

	it('keeps descendant leaves of a named-span container', () => {
		const matching = ['4:5:1:1', '4:5:1:2'];
		expect(viewportIncludesUrn('4:5:1:1', matching)).toBe(true);
		expect(viewportIncludesUrn('4:5:1:2', matching)).toBe(true);
		expect(viewportIncludesUrn('4:6:1:1', matching)).toBe(false);
	});
});
