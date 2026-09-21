import { describe, expect, it } from 'vitest';
import { LIPI_SEED } from './seed-texts';

describe('LIPI_SEED', () => {
	it('has three blank-line-separated excerpts', () => {
		const blocks = LIPI_SEED.split(/\n\n/);
		expect(blocks).toHaveLength(3);
		expect(blocks[0]).toContain('अ॒ग्निमी॑ळे');
		expect(blocks[1]).toContain('नम॑स्ते रु॒द्र');
		expect(blocks[1]).toContain('नमः॑ ।\nनम॑स्ते अस्तु॒');
		expect(blocks[2]).toContain('कर्मण्येवाधिकारस्ते');
	});
});
