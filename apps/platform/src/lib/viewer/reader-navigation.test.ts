import { describe, expect, it } from 'vitest';
import { navigateReaderNext, navigateReaderPrev, readerNavUrl } from './reader-navigation';

describe('reader-navigation', () => {
	const ref = { registryId: 'adi', catalogId: 'vysamples', publicationId: 'vyasa-bg' };
	const flat = ['1:1', '1:2', '1:3'];

	it('builds reader paths', () => {
		expect(readerNavUrl(ref, '2:47', '/vyasa-apps')).toBe('/vyasa-apps/adi/vysamples/vyasa-bg/2:47');
	});

	it('navigates to next urn', () => {
		const visited: string[] = [];
		navigateReaderNext(flat, ['1:1'], (url) => visited.push(url), (urn) => urn);
		expect(visited).toEqual(['1:2']);
	});

	it('navigates to previous urn', () => {
		const visited: string[] = [];
		navigateReaderPrev(flat, ['1:2'], '1:2', (url) => visited.push(url), (urn) => urn);
		expect(visited).toEqual(['1:1']);
	});
});
