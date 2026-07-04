import { describe, it, expect } from 'vitest';
import { flattenTree, matchUrns } from './urn-utils';

describe('urn-utils', () => {
	describe('flattenTree', () => {
		it('should flatten a simple array', () => {
			const result = flattenTree(['1', '2', '3']);
			expect(result).toEqual(['1', '2', '3']);
		});

		it('should flatten a nested object tree and maintain numerical order', () => {
			const tree = {
				'2': ['1', '2'],
				'1': ['1', '2']
			};
			const result = flattenTree(tree);
			expect(result).toEqual(['1:1', '1:2', '2:1', '2:2']);
		});

		it('should handle deep nesting', () => {
			const tree = {
				'1': {
					'1': ['1']
				}
			};
			const result = flattenTree(tree);
			expect(result).toEqual(['1:1:1']);
		});
	});

	describe('matchUrns', () => {
		const flatUrns = ['1:1', '1:2', '2:1', '2:2:1', '2:2:2'];

		it('should match a full leaf URN exact match', () => {
			const result = matchUrns('1:1', flatUrns);
			expect(result).toEqual(['1:1']);
		});

		it('should match all children of a prefix', () => {
			const result = matchUrns('2:2', flatUrns);
			expect(result).toEqual(['2:2:1', '2:2:2']);
		});

		it('should match a range of URNs', () => {
			const result = matchUrns('1:1-2', flatUrns);
			expect(result).toEqual(['1:1', '1:2']);
		});

		it('should handle root', () => {
			const result = matchUrns('root', flatUrns);
			expect(result.length).toBeGreaterThan(0);
			expect(result).toContain('1:1'); // because '1' matches 1:1, 1:2
		});

		it('should not match out of range', () => {
			const result = matchUrns('3:1', flatUrns);
			expect(result).toEqual([]);
		});
	});
});
