<script lang="ts">
	import { Alert, Button, Panel, Select, Tree, type TreeNode } from '@project-vyasa/vyasa-ui';
	import { CodeEditor } from '@project-vyasa/vyasa-ui/code-editor';
	import { getContext, onMount, type Snippet } from 'svelte';
	import { Play, RotateCcw } from 'lucide-svelte';
	import { buttonIcon } from '$lib/button-icon';
	import { sample } from 'virtual:studio-sample';
	import EngineBanner from './EngineBanner.svelte';
	import {
		builtHtmlPaths,
		chapterPreviewPaths,
		compileWorkspace,
		ensureEngine,
		pickPreviewHtml,
		previewPathForSource,
		type EngineStatus
	} from '$lib/compiler';
	import { previewUnitReference, readWorkspaceAddress } from '$lib/preview-unit';
	import { sourceTree, workspaceSourcePaths } from '$lib/source-tree';
	import { SAMPLES_REPO_HREF, VYASA_DOCS_HREF, viewerHref } from '$lib/pages-apps';

	const themeContext = getContext<{ current: 'light' | 'dark' }>('theme');
	const shell = getContext<{
		setSidebarLeft: (snippet: Snippet | undefined) => void;
		setLeftWidth: (width: number) => void;
	}>('studio-shell');
	const original = sample.files;

	function cloneFiles(source: Record<string, string>): Record<string, string> {
		return { ...source };
	}

	function editorLanguage(path: string): 'vy' | 'html' | 'markdown' {
		if (path.endsWith('.html')) return 'html';
		if (path.endsWith('.vy')) return 'vy';
		return 'markdown';
	}

	const initialFile =
		sample.showcaseFile in original ? sample.showcaseFile : (Object.keys(original)[0] ?? '');

	let status = $state<EngineStatus>('loading');
	let files = $state<Record<string, string>>(cloneFiles(original));
	let selectedFile = $state(initialFile);
	let treeSelection = $state(initialFile);
	let expandedIds = $state(
		new Set([
			'dir:content',
			'dir:content/mula',
			'dir:content/iast',
			'dir:templates',
			'dir:templates/html',
			'dir:annotations'
		])
	);
	let generation = $state(0);
	let compiling = $state(false);
	let compileError = $state('');
	let compiledFiles = $state<Record<string, string>>({});
	let previewHtml = $state('');
	let previewPath = $state('');
	let statsLine = $state('');

	const editorTheme = $derived(themeContext?.current === 'light' ? 'light' : 'dark');
	const language = $derived(editorLanguage(selectedFile));
	const sourceNodes = $derived(sourceTree(workspaceSourcePaths(files)));
	const workspaceAddress = $derived(readWorkspaceAddress(files['vyasac.toml']));
	const previewReference = $derived(
		previewPath ? previewUnitReference(previewPath, workspaceAddress) : ''
	);

	const previewOptions = $derived.by(() => {
		const available = builtHtmlPaths(compiledFiles);
		const forChapter =
			chapterPreviewPaths(selectedFile, available).length > 0
				? chapterPreviewPaths(selectedFile, available)
				: chapterPreviewPaths(previewPath, available);
		const paths = forChapter.length ? forChapter : available.filter((path) => path.endsWith('/1.html'));
		return paths.map((path) => ({ label: previewLabel(path), value: path }));
	});

	function previewLabel(path: string): string {
		const match = /\/html\/([^/]+)\/([^/]+)\.html$/.exec(path);
		if (!match) return path;
		const script = match[1] === 'mula' ? 'Devanagari' : match[1] === 'iast' ? 'IAST' : match[1];
		return `${script} ${match[2]}`;
	}

	function showPreview(path: string) {
		const html = compiledFiles[path];
		if (html == null) return;
		previewPath = path;
		previewHtml = html;
	}

	function syncPreviewToSource(sourcePath: string) {
		const next = previewPathForSource(sourcePath, builtHtmlPaths(compiledFiles));
		if (next) showPreview(next);
	}

	function onSourceSelect(node: TreeNode) {
		if (node.children?.length) {
			treeSelection = selectedFile;
			return;
		}
		selectedFile = node.id;
		treeSelection = node.id;
		syncPreviewToSource(node.id);
	}

	$effect(() => {
		shell?.setSidebarLeft(sourceSidebar as unknown as Snippet);
		shell?.setLeftWidth(280);
		return () => shell?.setSidebarLeft(undefined);
	});

	onMount(() => {
		void boot();
	});

	async function boot() {
		status = await ensureEngine();
		if (status === 'ready' && sample.available) {
			await run();
		}
	}

	function resetBuffer() {
		files = cloneFiles(original);
		generation += 1;
		compileError = '';
		compiledFiles = {};
		previewHtml = '';
		previewPath = '';
		statsLine = '';
	}

	async function run() {
		if (status !== 'ready' || compiling) return;
		compiling = true;
		compileError = '';
		statsLine = 'Compiling…';
		try {
			const result = await compileWorkspace(files);
			if (!result.ok) {
				compileError = result.error;
				compiledFiles = {};
				previewHtml = '';
				previewPath = '';
				statsLine = '';
				return;
			}
			compiledFiles = result.files;
			const picked = pickPreviewHtml(
				result.files,
				previewPathForSource(selectedFile, builtHtmlPaths(result.files))
			);
			previewHtml = picked.html ?? '';
			previewPath = picked.path ?? '';
			statsLine = `Compiled ${result.stats.file_count} files in ${Math.round(result.stats.duration_ms)}ms`;
		} finally {
			compiling = false;
		}
	}
</script>

<div class="play">
	<EngineBanner {status} />

	{#if !sample.available}
		<div class="banner">
			<Alert variant="warning" title="Sample not loaded">
				{sample.missingMessage}
			</Alert>
		</div>
	{/if}

	<header class="intro">
		<p>
			Vyasa is a <strong>language</strong> for packing meaning with text. This screen compiles the
			{sample.title} source in the browser. The
			<a href={viewerHref()} data-sveltekit-reload>Viewer</a> reads packed publications;
			<a href={VYASA_DOCS_HREF}>vyasa-docs</a> explains the grammar;
			<a href={SAMPLES_REPO_HREF}>vyasa-samples</a> is the workspace this showcase is copied from.
		</p>
		<p class="hint">Edits live only in this tab. Reset restores the sample. Nothing is saved.</p>
	</header>

	<div class="toolbar">
		<Button
			variant="ghost"
			size="sm"
			icon={buttonIcon(RotateCcw)}
			onclick={resetBuffer}
			disabled={!sample.available}
		>
			Reset
		</Button>
		<Button
			variant="primary"
			size="sm"
			icon={buttonIcon(Play)}
			onclick={run}
			disabled={!sample.available || status !== 'ready' || compiling}
		>
			{compiling ? 'Running…' : 'Run'}
		</Button>
		{#if statsLine}
			<span class="stats">{statsLine}</span>
		{/if}
	</div>

	{#if compileError}
		<div class="banner">
			<Alert variant="danger" title="Compile failed">{compileError}</Alert>
		</div>
	{/if}

	<div class="split">
		<section class="pane editor" aria-label="Source">
			{#if selectedFile && files[selectedFile] !== undefined}
				{#key `${selectedFile}:${generation}`}
					<CodeEditor
						bind:value={files[selectedFile]}
						{language}
						theme={editorTheme}
						lineWrapping={true}
						class="editor-host"
					/>
				{/key}
			{:else}
				<p class="empty">No source file selected.</p>
			{/if}
		</section>
		<section class="pane preview" aria-label="Preview">
			<div class="preview-bar">
				<div class="preview-select">
					<Select
						options={previewOptions}
						bind:value={previewPath}
						onchange={showPreview}
						placeholder="Preview"
						disabled={!previewOptions.length}
					/>
				</div>
				{#if previewReference}
					<p class="preview-unit">{previewReference}</p>
				{/if}
			</div>
			{#if previewHtml}
				{#key previewPath}
					<iframe
						title="Compile preview"
						srcdoc={previewHtml}
						sandbox="allow-scripts allow-same-origin"
					></iframe>
				{/key}
			{:else}
				<p class="empty">
					{compiling ? 'Compiling…' : 'Click Run to compile this workspace to HTML.'}
				</p>
			{/if}
		</section>
	</div>
</div>

{#snippet sourceSidebar()}
	<div class="source-sidebar">
		<Panel title="Source" class="source-panel">
			<Tree
				data={sourceNodes}
				bind:selectedId={treeSelection}
				bind:expandedIds
				onSelect={onSourceSelect}
			/>
		</Panel>
	</div>
{/snippet}

<style>
	.source-sidebar {
		height: 100%;
		min-height: 0;
	}

	:global(.source-panel) {
		border: none;
		background: transparent;
	}

	.play {
		display: flex;
		flex-direction: column;
		min-height: 0;
		height: 100%;
		width: 100%;
	}

	.intro {
		padding: var(--space-3) var(--space-4) 0;
	}

	.intro p {
		margin: 0 0 var(--space-2);
		color: var(--text-secondary);
		font-size: var(--text-sm);
		line-height: 1.45;
	}

	.hint {
		color: var(--text-tertiary);
	}

	.intro a {
		color: var(--text-primary);
	}

	.toolbar {
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		gap: var(--space-2);
		padding: var(--space-3) var(--space-4);
	}

	.stats {
		font-size: var(--text-xs);
		color: var(--text-tertiary);
	}

	.banner {
		padding: 0 var(--space-4) var(--space-2);
	}

	.split {
		display: grid;
		grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
		gap: 1px;
		flex: 1 1 auto;
		min-height: 0;
		background: var(--border-base);
	}

	.pane {
		min-height: 0;
		background: var(--surface-base);
		display: flex;
		flex-direction: column;
	}

	.editor :global(.editor-host),
	.editor :global(.cm-editor) {
		flex: 1 1 auto;
		height: 100%;
		min-height: 0;
	}

	.preview-bar {
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		gap: var(--space-2) var(--space-3);
		padding: var(--space-2) var(--space-3);
		border-bottom: 1px solid var(--border-base);
	}

	.preview-select {
		min-width: 11rem;
		flex: 0 1 14rem;
	}

	.preview-unit {
		margin: 0;
		font-size: var(--text-xs);
		color: var(--text-secondary);
		line-height: 1.4;
	}

	iframe {
		border: 0;
		width: 100%;
		flex: 1 1 auto;
		min-height: 0;
		background: #fff;
	}

	.empty {
		margin: auto;
		padding: var(--space-4);
		color: var(--text-tertiary);
		font-size: var(--text-sm);
	}

	@media (max-width: 48rem) {
		.split {
			grid-template-columns: 1fr;
			grid-template-rows: minmax(12rem, 1fr) minmax(12rem, 1fr);
		}
	}
</style>
