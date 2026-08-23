# Platform work queue

> Last updated: 2026-08-18 — grid order simplification + heuristic audit

## Context

This repo owns **`@project-vyasa/platform`**: viewer, explore, library, and diagnostics UI. It consumes `@vyasa/viewer-wasm` from the **`vyasa`** toolchain.

**Sibling repos:** compiler `vyasa` · samples `vyasa-samples` · docs `vyasa-docs` · ui `vyasa-ui`.

**Design principles:** [`explicit-workspace-design.md`](./explicit-workspace-design.md) · catalog vocabulary [`catalog-identity.md`](./catalog-identity.md).

**Library browser FR (ui done — integrate here):** [`vyasa-ui/svelte/notes/feature-request-library-browser.md`](../../vyasa-ui/svelte/notes/feature-request-library-browser.md) § *Handoff: LibraryView integration*

## NOW

- [x] **LibraryView collection primitives** — `SearchInput`, `SummaryRow`, `SegmentedControl`, `CardGrid`, global search (`library-publication-hits.ts`). See [FR handoff](../../vyasa-ui/svelte/notes/feature-request-library-browser.md).
- [x] **Catalog identity routing** — `{registry}/{catalog}/{publication}`, `CatalogRef`, `vyasa://`, `/link?uri=…` resolver.
- [x] **Settings: dual sources** — Adi always on; optional local URL with autodetect.
- [x] **Library: catalog visibility toggles** — per-catalog hide/show (localStorage).
- [x] **Library metadata** — 3-line catalog/publication cards (`library-metadata.ts`).
- [x] **Vyasa URI share/copy** — activity bar + debug header + explore selection.
- [x] **Schema cutover (local)** — `registry.json` + `catalog.json` new shape; legacy shim retained until GH Pages deploy.
- [~] **Reader / nav / layout polish** — in-flight; reader page decomposed.
- [ ] **Audit publication-specific viewer heuristics** — code-review §3b; see [`CODE_REVIEW_TASKS.md`](../assessments/platform/CODE_REVIEW_TASKS.md). Known: `facet-index.ts` `mula` fallback, `ViewerNavBar` placeholder copy.
- [ ] **RV grid vertical whitespace** — viewer spacing only: `.urn-row` padding `0.75rem 0`, WASM grid `gap: 0.5rem`. Stream typography/`white-space` in publisher `theme.vy` (`.vyasa-block-{stream}`). Repack vyasa-bg + rigveda after theme updates.
- [x] **View templates Phase A–B (vyasa-bg)** — `theme.vy` + packed `reading.vy` (stacked); `theme_layout` wraps craft layouts. Verify Grid vs Reading in the view picker.
- [x] **Content themes (reader class)** — Settings sets `html.theme-light` / `theme-dark` on iframe; persist localStorage. Manifest `content_themes[]` still pending vyasac.
- [x] **Content text size** — 3 steps (S/M/L) → `--vyasa-text-scale` on iframe; separate from chrome density.
- [ ] **Decompose `[...urn]/+page.svelte`** — further extraction if page grows again.
- [x] **Cache templates at load time** — `templatesJson` built once in `loadPublication()` (`publication-loader.ts`, `templates-json.ts`).
- [x] **Explore graph facets** — graph ingest, manifest/vocab config; BG speaker on value-node `annotate` (no `Action` shim).
- [x] **BG speaker migration** — `speakers.vy` + `vocabulary/facets.vy`; repacked (repack again after facets.vy if labels missing).
- [x] **RV facets registry** — `vocabulary/facets.vy` (IDs) + `content/samhita/localization.vy` (देवता / ऋषि / छन्दस्); `enrich:rv` emits registry.
- [ ] **RV viewer perf (DevTools)** — profile `[Vyasa perf]` timings; sukta switch ~2s suspect `renderUrn` / viewport SQL. See `vyasa/docs/PERFORMANCE_GUARDS.md`. *Paused for manual debugging.*
- [ ] **Annotation syntax review** — linguist-friendly alternatives to `{ key=value }` maps. **Backlog:** [`annotation-syntax-review.md`](./annotation-syntax-review.md) · cross-repo entry `vyasa/notes/BACKLOG.md` §9.

## Deferred — handset morph (one app, not a second)

> 2026-08-22. One app. **UI agent:** [`vyasa-ui/svelte/notes/feature-request-appshell-compact.md`](../../vyasa-ui/svelte/notes/feature-request-appshell-compact.md).

**Verified in apps:** re-click active activity toggles left.

**Done in apps (gutter chrome):** Hash icon (not `PanelLeft`); navbar toggles `showReferenceGutter` and hides the whole `.left-gutter`. Sidebar **Annotations** switch still only hides badges inside a visible URN column.

**Inherit after ui compact shell:**
- 02a tuck `sidebarTop` into bottom bar or Settings.
- 02b immersive chrome — **done**: AppShell `chromeHidden`; reader tap toggles all three strips; scroll-up reveals. Compact leaf swipe (left = next, right = prev) replaces navbar chevrons. Handset defaults: gutter off; prefer non-grid view.

**Still deferred:** chapter go-to (`book01:`) / viewer search guide.

- [x] **Compact URN entry** — Handset top bar accepts a full URN (`1:0:5`); last 8 typed/sidebar jumps remembered per publication. Desktop still uses the leaf field. Recents open on field focus (no History button).

## NEXT

- [ ] **Bitmask facet index** — leaf ordinals + `Uint32Array` bitsets replacing `Map<string, Set<string>>`; speeds Explore today, prerequisite for Atlas.
- [ ] **Facet palette collision** — `facetColor()` cycles every 8; ~80-value facets render duplicate colours. Top-N + neutral "Other".
- [ ] **Atlas activity** — high-density spine + on-demand graph fidelity; design in [`atlas-activity-design.md`](./atlas-activity-design.md).
- [ ] **Remove registry legacy shim** — after vyasa-docs GH Pages serves `catalogs[]` / `id: adi`.
- [ ] **Book activity UX (RV)** — `default_view` manifest key; revisit document layout gutter.
- [ ] **Manifest-driven vocabulary/localization** — explorer reads `vocabulary/facets` + `manifest.facet_attributes`; full pack-time merge still upstream in vyasac.
- [ ] **Cross-publication links** — `CatalogLink` resolver, commentary → source verse.
- [ ] **Catalog schema RFC** — `deliveries[]`, `webUrl` vs `homepage`, `type` enum in vyasa-docs.
- [ ] **Diagnostics polish** — link catalog entries to library routes.
- [ ] See [`assessments/platform/CODE_REVIEW_TASKS.md`](../assessments/platform/CODE_REVIEW_TASKS.md) for remaining items.

## Blocked / upstream

- **vyasa-samples:** repack vyasa-bg after `vocabulary/facets.vy` + localization `facets` blocks (if explorer speaker *type* label still title-case).
- **sa.wikisource.org:** repack rigveda after facets registry + samhita localization (`bun run build:rv`).
- **vyasac:** emit `content_themes` in manifest. **TODO:** deprecate per-file `default.html` SSG for platform-targeted pubs.

## Done (recent)

- [x] **CSS files (HTML target)** — samples pack `publisher_css` / `css` (vyasa-bg + vedabase-bg share `styles/indic-verse.css`; intimate-note `styles/prose.css`; bible self-contained `theme.css`).

- [x] Catalog identity WIP slice — routes, registry shim, library drill-down, visibility, metadata.
- [x] vysamples richer `catalog.json` + `vyasac publish` catalog metadata.
- [x] Reader page decomposition — `ReaderNavigationPanel`, `reader-navigation.ts`.
- [x] BG speaker value-node annotate + viewer shim removal.
- [x] `vocabulary/facets.vy` pattern for vyasa-bg.
- [x] LibraryView vyasa-ui integration — SummaryRow hidden catalogs, global search, CardGrid/list toggle.
