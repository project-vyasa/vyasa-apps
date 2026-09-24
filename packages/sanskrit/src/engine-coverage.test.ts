import { describe, expect, it } from 'vitest';
import { ENGINE_RULES, engineRulesFor } from './engine-coverage';

describe('ENGINE_RULES', () => {
	it('names live Taittirīya dvitva citations and marks nati absent', () => {
		const tpr = engineRulesFor('taittiriya');
		expect(tpr.find((r) => r.id === 'tpr-14')?.cite).toContain('14.4');
		expect(tpr.find((r) => r.id === 'tpr-14')?.status).toBe('live');
		expect(engineRulesFor('pratisakhya').find((r) => r.id === 'rpr-nati')?.status).toBe('absent');
		expect(ENGINE_RULES.filter((r) => r.status === 'live').length).toBeGreaterThan(3);
	});
});
