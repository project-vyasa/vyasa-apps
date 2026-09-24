// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import { vyasaStarlight } from '@project-vyasa/starlight-theme';

const isDev = process.argv.includes('dev');

// https://astro.build/config
export default defineConfig({
	site: 'https://project-vyasa.github.io',
	base: isDev ? '/' : '/vyasa-apps/docs/',
	server: { port: 5375 },
	preview: { port: 5375 },
	integrations: [
		starlight(
			vyasaStarlight({
				title: 'Vyasa Apps',
				logo: {
					src: './src/assets/vyasa-logo.png',
					alt: 'Project Vyasa'
				},
				social: [
					{
						icon: 'github',
						label: 'GitHub',
						href: 'https://github.com/project-vyasa/vyasa-apps'
					}
				],
				sidebar: [
					{
						label: 'Viewer',
						items: [{ autogenerate: { directory: 'viewer' } }]
					},
					{
						label: 'Vyasa Studio',
						items: [{ autogenerate: { directory: 'studio' } }]
					},
					{
						label: 'Sanskrit Studio',
						items: [{ autogenerate: { directory: 'sanskrit-studio' } }]
					}
				]
			})
		)
	]
});
