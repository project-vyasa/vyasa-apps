import { describe, expect, it } from 'vitest';
import {
	initialReaderUrn,
	navigateReaderNext,
	navigateReaderPrev,
	readerNavUrl,
	readerWeaveUrn,
	resolveReaderAddress
} from './reader-navigation';

describe('reader-navigation', () => {
	const ref = { registryId: 'adi', catalogId: 'vysamples', publicationId: 'vyasa-bg' };
	const bgLeaves = ['1:1', '1:2', '1:3', '2:1', '2:2'];
	const rvLeaves = ['1:1:1', '1:1:2', '1:2:1', '2:1:1', '2:1:2'];

	it('builds reader paths', () => {
		expect(readerNavUrl(ref, '2:47', '/vyasa-apps')).toBe('/vyasa-apps/adi/vysamples/vyasa-bg/2:47');
	});

	it('opens a publication on the first leaf-container, not the first leaf', () => {
		expect(initialReaderUrn(rvLeaves, 3)).toBe('1:1');
		expect(initialReaderUrn(bgLeaves, 2)).toBe('1');
		expect(readerWeaveUrn('root', rvLeaves, 3)).toBe('1:1');
		expect(readerWeaveUrn('', bgLeaves, 2)).toBe('1');
	});

	it('resolves RV mandala to the first sukta', () => {
		expect(resolveReaderAddress('1', rvLeaves, 3)).toEqual({ urn: '1:1', mode: 'container' });
		expect(resolveReaderAddress('1:2', rvLeaves, 3)).toEqual({ urn: '1:2', mode: 'container' });
		expect(resolveReaderAddress('1:1:2', rvLeaves, 3)).toEqual({ urn: '1:1:2', mode: 'leaf' });
	});

	it('treats a BG chapter as a leaf-container', () => {
		expect(resolveReaderAddress('2', bgLeaves, 2)).toEqual({ urn: '2', mode: 'container' });
		expect(resolveReaderAddress('2:1', bgLeaves, 2)).toEqual({ urn: '2:1', mode: 'leaf' });
	});

	it('returns null when the prefix matches nothing', () => {
		expect(resolveReaderAddress('9', rvLeaves, 3)).toBeNull();
	});

	it('steps by leaf when the address is a leaf', () => {
		const visited: string[] = [];
		navigateReaderNext(bgLeaves, '1:1', 2, (url) => visited.push(url), (urn) => urn);
		expect(visited).toEqual(['1:2']);
		visited.length = 0;
		navigateReaderPrev(bgLeaves, '1:2', 2, (url) => visited.push(url), (urn) => urn);
		expect(visited).toEqual(['1:1']);
	});

	it('steps by sukta when the address is a container', () => {
		const visited: string[] = [];
		navigateReaderNext(rvLeaves, '1:1', 3, (url) => visited.push(url), (urn) => urn);
		expect(visited).toEqual(['1:2']);
		visited.length = 0;
		navigateReaderPrev(rvLeaves, '1:2', 3, (url) => visited.push(url), (urn) => urn);
		expect(visited).toEqual(['1:1']);
	});

	it('steps to the next mandala first sukta from the last sukta', () => {
		const visited: string[] = [];
		navigateReaderNext(rvLeaves, '1:2', 3, (url) => visited.push(url), (urn) => urn);
		expect(visited).toEqual(['2:1']);
	});

	it('expands a typed mandala then steps by sukta', () => {
		const visited: string[] = [];
		navigateReaderNext(rvLeaves, '1', 3, (url) => visited.push(url), (urn) => urn);
		expect(visited).toEqual(['1:2']);
	});

	it('steps RV rik by leaf', () => {
		const visited: string[] = [];
		navigateReaderNext(rvLeaves, '1:1:1', 3, (url) => visited.push(url), (urn) => urn);
		expect(visited).toEqual(['1:1:2']);
	});
});
