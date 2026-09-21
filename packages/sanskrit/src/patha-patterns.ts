/** Traditional prakṛti (3) + vikṛti (8) recitation patterns. */

export type PathaFamily = 'prakriti' | 'vikriti';

export type PathaPattern = {
	id: string;
	family: PathaFamily;
	name: string;
	formula: string;
	help: string;
	/** Engine can emit this pattern in the studio today. */
	available: boolean;
};

export const PATHA_PATTERNS: PathaPattern[] = [
	{
		id: 'samhita',
		family: 'prakriti',
		name: 'Saṃhitā',
		formula: '1 2 3 … n',
		help: 'Continuous recitation: join padas with forward sandhi. Not generated here yet. Going the other way (saṃhitā → pada) is reverse sandhi and is not unique.',
		available: false
	},
	{
		id: 'pada',
		family: 'prakriti',
		name: 'Pada',
		formula: '1 | 2 | 3 … n',
		help: 'Isolated words. If the editor is already Pada-pāṭha, this is identity (parse and re-emit with daṇḍas). It does not split saṃhitā into padas.',
		available: false
	},
	{
		id: 'krama',
		family: 'prakriti',
		name: 'Krama',
		formula: '1-2 | 2-3 | … | p-iti-p',
		help: 'Pairs each pada with the next, then extra rows with इति in the middle (p-iti-p): parigraha for a pragṛhya pada and for the last pada. Compounds: unified form, iti, then the split form. Padapāṭha may already contain इति as its own word — those show up as ordinary pairs, not as p-iti-p.',
		available: true
	},
	{
		id: 'jata',
		family: 'vikriti',
		name: 'Jaṭā',
		formula: '1-2, 2-1, 1-2',
		help: 'Vikṛti on Krama pairs: forward, reverse, forward (1-2, 2-1, 1-2). Parigraha still uses इति.',
		available: true
	},
	{
		id: 'mala',
		family: 'vikriti',
		name: 'Mālā',
		formula: 'garland chain',
		help: 'Vikṛti. Not generated yet.',
		available: false
	},
	{
		id: 'shikha',
		family: 'vikriti',
		name: 'Śikhā',
		formula: '1-2, 2-1, 1-2-3',
		help: 'Vikṛti. Not generated yet.',
		available: false
	},
	{
		id: 'rekha',
		family: 'vikriti',
		name: 'Rekhā',
		formula: 'triangular inversion',
		help: 'Vikṛti. Not generated yet.',
		available: false
	},
	{
		id: 'dhvaja',
		family: 'vikriti',
		name: 'Dhvaja',
		formula: 'start ↔ end flag',
		help: 'Vikṛti. Not generated yet.',
		available: false
	},
	{
		id: 'danda',
		family: 'vikriti',
		name: 'Daṇḍa',
		formula: '1-2, 2-1, 2-3, 3-2 …',
		help: 'Vikṛti. Not generated yet.',
		available: false
	},
	{
		id: 'ratha',
		family: 'vikriti',
		name: 'Ratha',
		formula: 'hemistich pairs',
		help: 'Vikṛti. Not generated yet.',
		available: false
	},
	{
		id: 'ghana',
		family: 'vikriti',
		name: 'Ghana',
		formula: '1-2, 2-1, 1-2-3, 3-2-1, 1-2-3',
		help: 'The densest vikṛti: forward pair, reverse pair, forward triple, reverse triple, forward triple, then step ahead. Listed last in the pattern menu. Generation is in the Sanskrit WASM engine (vyutils).',
		available: true
	}
];

/** Live menu order: Krama, Jaṭā, Ghana last. The other eight stay in the help overlay. */
export const LIVE_PATHA_IDS = ['krama', 'jata', 'ghana'] as const;

export type LivePathaId = (typeof LIVE_PATHA_IDS)[number];

export const CURRENT_PATHA_PATTERN = PATHA_PATTERNS.find((p) => p.id === 'krama')!;

export function isLivePathaId(id: string): id is LivePathaId {
	return (LIVE_PATHA_IDS as readonly string[]).includes(id);
}

export function livePathaPatterns(): PathaPattern[] {
	return LIVE_PATHA_IDS.map((id) => PATHA_PATTERNS.find((p) => p.id === id)!);
}

export function patternsByFamily(family: PathaFamily): PathaPattern[] {
	return PATHA_PATTERNS.filter((p) => p.family === family);
}
