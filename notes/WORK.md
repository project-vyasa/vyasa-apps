# Platform work queue

> Last updated: 2026-08-18 — grid order simplification + heuristic audit

## Context

This repo owns **`@project-vyasa/viewer`**: viewer, explore, library, and diagnostics UI. It consumes `@vyasa/viewer-wasm` from the **`vyasa`** toolchain.

**Sibling repos:** compiler `vyasa` · samples `vyasa-samples` · docs `vyasa-docs` · ui `vyasa-ui`.

**Design principles:** [`explicit-workspace-design.md`](./explicit-workspace-design.md) · catalog vocabulary [`catalog-identity.md`](./catalog-identity.md).

**Library browser FR (ui done — integrate here):** [`vyasa-ui/svelte/notes/feature-request-library-browser.md`](../../vyasa-ui/svelte/notes/feature-request-library-browser.md) § *Handoff: LibraryView integration*

## NOW

- [x] **Viewer WASM ABI 2** — `api_version()` check after init; `get_urn` / weave row ids as `bigint`; `last_weave_diagnostics()` immediately after each weave. Contract: [`vyasa/notes/vyasa-apps-weave-diagnostics.md`](../../vyasa/notes/vyasa-apps-weave-diagnostics.md).
- [x] **Named spans + 4-level nav** — prefix-only Explore coverage (no suffix collision); 4-level sidebar groups by labeled ancestor path (no `(Type n)` tautology); named spans in reader nav when graph annotate is on a container. Viewport SQL no longer paints the following praśna. FR: [`feature-request-named-spans-and-4level-nav.md`](./feature-request-named-spans-and-4level-nav.md). **Live TTS check** still needs `taittiriya-samhita.vyview` (Explore FEATURED 27/39; reader span → 4.5 / 4.7).
- [x] **LibraryView collection primitives** — `SearchInput`, `SummaryRow`, `SegmentedControl`, `CardGrid`, global search (`library-publication-hits.ts`). See [FR handoff](../../vyasa-ui/svelte/notes/feature-request-library-browser.md).
- [x] **Catalog identity routing** — `{registry}/{catalog}/{publication}`, `CatalogRef`, `vyasa://`, `/link?uri=…` resolver.
- [x] **Settings: dual sources** — Adi always on; optional local URL with autodetect.
- [x] **Library: catalog visibility toggles** — per-catalog hide/show (localStorage).
- [x] **Library metadata** — 3-line catalog/publication cards (`library-metadata.ts`).
- [x] **Vyasa URI share/copy** — activity bar + debug header + explore selection.
- [x] **Schema cutover (local)** — `registry.json` + `catalog.json` new shape; legacy shim retained until GH Pages deploy.
- [~] **Reader / nav / layout polish** — in-flight; reader page decomposed.
- [ ] **Audit publication-specific viewer heuristics** — code-review §3b; see [`CODE_REVIEW_TASKS.md`](../assessments/platform/CODE_REVIEW_TASKS.md). `resolvePrimaryStream()` now uses `manifest.primary_stream` only. Remaining: `ViewerNavBar` placeholder copy.
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

**Done in apps (gutter chrome):** Hash icon (not `PanelLeft`); navbar toggles `showReferenceGutter` and hides the whole `.left-gutter` (URN + annotation badges).

**Inherit after ui compact shell:**
- 02a tuck `sidebarTop` into bottom bar or Settings.
- 02b immersive chrome — **done**: AppShell `chromeHidden`; reader tap toggles all three strips; scroll-up reveals. Compact leaf swipe (left = next, right = prev) replaces navbar chevrons. Handset defaults: gutter off; prefer non-grid view.

**Still deferred:** chapter go-to (`book01:`) / viewer search guide.

- [x] **Settings compact** — UI shipped; consume local `vyasa-ui/svelte/dist` (`prepack`, not npm). Verify activity-bar Settings at ~400px.
- [x] **Diagnostics uses AppShell left** — Tree in `setSidebarLeft` (`Panel` + `Tree`); handset re-click bug icon toggles the overlay.

- [x] **Compact URN entry** — Handset top bar accepts a full URN (`1:0:5`); last 8 typed/sidebar jumps remembered per publication. Desktop still uses the leaf field. Recents open on field focus (no History button).
- [x] **Book ↔ Explore pack cache** — shared `publication-session` SQLite + package; LoadingBrand only while the pack is fetching.
- [x] **Explore facet UX** — filter/presence default (no auto Map); top-k + More; unique palette (no wrap, cap 8); copy histogram; collapsible facets; relative-frequency bars. Map-all only when `values.length ≤ palette`.
- [x] **Select: single option is a static label** — `vyasa-ui` `Select` (Language, Lipi, etc.).

## NEXT

- [ ] **User guides** — Internal Studio notes: [`docs/guides/sanskrit-studio-guide.md`](../docs/guides/sanskrit-studio-guide.md). Viewer notes later (`docs/guides/viewer-guide.md`). Not published HTML; vyasa-docs stays publisher/linguist toolchain docs. Roadmap: [`sanskrit-studio-roadmap.md`](./sanskrit-studio-roadmap.md).

- [ ] **App locale vs publication language** — shell `en-US` vs work `sa` (BG → `mula`, not English). Chrome stream is not BCP 47. Design: [`locale-and-publication-language.md`](./locale-and-publication-language.md).
- [ ] **Bitmask facet index** — leaf ordinals + `Uint32Array` bitsets replacing `Map<string, Set<string>>`; speeds Explore today, prerequisite for Atlas.
- [x] **Facet palette collision** — filter/presence default; top-k + unique palette (no wrap). Remaining Atlas work is still in [`atlas-activity-design.md`](./atlas-activity-design.md).
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
- **vyasac:** RV packed stream id is still `primary` (not `samhita`) — grid order + verse CSS. Defect: [`defect-rv-grid-packed-stream-names.md`](./defect-rv-grid-packed-stream-names.md). Also: emit `content_themes` in manifest. **TODO:** deprecate per-file `default.html` SSG for platform-targeted pubs.

## Done (recent)

- [x] **CSS files (HTML target)** — samples pack `publisher_css` / `css` (vyasa-bg + vedabase-bg share `styles/indic-verse.css`; intimate-note `styles/prose.css`; bible self-contained `theme.css`).

- [x] Catalog identity WIP slice — routes, registry shim, library drill-down, visibility, metadata.
- [x] vysamples richer `catalog.json` + `vyasac publish` catalog metadata.
- [x] Reader page decomposition — `ReaderNavigationPanel`, `reader-navigation.ts`.
- [x] BG speaker value-node annotate + viewer shim removal.
- [x] `vocabulary/facets.vy` pattern for vyasa-bg.
- [x] LibraryView vyasa-ui integration — SummaryRow hidden catalogs, global search, CardGrid/list toggle.
