# Platform Code Review Action Items

Generated from: `assessments/platform/CODE_REVIEW.md` — 2026-07-20  
Updated: 2026-08-18 — publication-heuristic audit

## 🔴 High Priority

- [ ] **Audit publication-specific viewer heuristics** — per [`.agent/workflows/code-review.md`](../../.agent/workflows/code-review.md) §3b and [`notes/explicit-workspace-design.md`](../../notes/explicit-workspace-design.md)
  - [ ] `explore/facet-index.ts` — `resolvePrimaryStream()` must use `manifest.primary_stream` only; remove `mula` preference
  - [ ] `ViewerNavBar.svelte` — neutral grid customizer placeholder (not `mula, devanagari / purport`)
  - [ ] Grep runtime paths for `mula|iast|devanagari|sanskrit|preferredTop`; tests/fixtures exempt
  - [ ] Confirm no implicit stream-order sources remain after `streams_config` / `primary_stream` simplification
- [ ] **Grid stream presentation** — viewer must not set `white-space` on woven HTML. Publisher `theme.vy`: `.vyasa-block-{stream}` + inner tags (`.verse`, `.rik`). Repack vyasa-bg + rigveda. Viewer spacing only: `.urn-row` padding `0.75rem`, WASM grid `gap: 0.5rem`.
- [ ] **Decompose `+page.svelte`** (664 LOC → target < 300 LOC)
  - [ ] Extract `loadPublication()` to `src/lib/viewer/publication-loader.ts`
  - [ ] Extract `renderCurrentUrn()` to `src/lib/viewer/urn-renderer.ts`
  - [ ] Extract `sidebarItems` derived + `traverse()` to `src/lib/viewer/sidebar.svelte.ts` (Rune class)
  - [ ] Extract `sidebarTopContent` snippet to `src/lib/components/ViewerNavBar.svelte`
- [ ] **Cache templates** — move `build_templates_query()` call out of `renderCurrentUrn()` and into `loadPublication()`; store result in `packageData.projections`

## ⚠️ Medium Priority

- [ ] **WASM API version check** — check `VyasaViewerRuntime.api_version()` (if exported) after `initWasm()` and log a warning on mismatch
- [ ] **Deduplicate `diagRegistryUrl`** — replace hardcoded strings in `LibraryContainer.svelte:20` and `+page.svelte:196` with `viewerSettings.globalRegistryUrl || DEFAULT_REGISTRY_URL`
- [ ] **Fix `getAllPublishers()` deduplication** — populate and check `seenIds` Set before pushing from global registry (`registry.ts:141`)
- [ ] **Fix `catalogData.catalog?.publisher`** — invalid property access in `LibraryContainer.svelte:44`; use `catalogData.title` instead

## 🟡 Low Priority

- [ ] **Delete dead no-op `$effect`** at `+page.svelte:46-51` (only contains a comment, never fires any side effect)
