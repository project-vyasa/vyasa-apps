# Platform work queue

> Last updated: 2026-07-31 — Catalog identity slice landed (routes, library, settings, metadata, share/copy, schema cutover).

## Context

This repo owns **`@project-vyasa/platform`**: viewer, explore, library, and diagnostics UI. It consumes `@vyasa/viewer-wasm` from the **`vyasa`** toolchain.

**Sibling repos:** compiler `vyasa` · samples `vyasa-samples` · docs `vyasa-docs`.

**Design principles:** [`explicit-workspace-design.md`](./explicit-workspace-design.md) · catalog vocabulary [`catalog-identity.md`](./catalog-identity.md).

## NOW

- [x] **Catalog identity routing** — `{registry}/{catalog}/{publication}`, `CatalogRef`, `vyasa://`, `/link?uri=…` resolver.
- [x] **Settings: dual sources** — Adi always on; optional local URL with autodetect.
- [x] **Library: catalog visibility toggles** — per-catalog hide/show (localStorage).
- [x] **Library metadata** — 3-line catalog/publication cards (`library-metadata.ts`).
- [x] **Vyasa URI share/copy** — activity bar + debug header + explore selection.
- [x] **Schema cutover (local)** — `registry.json` + `catalog.json` new shape; legacy shim retained until GH Pages deploy.
- [~] **Reader / nav / layout polish** — in-flight; reader page decomposed.
- [ ] **Decompose `[...urn]/+page.svelte`** — further extraction if page grows again.
- [ ] **Cache templates at load time** — move `build_templates_query()` into `loadPublication()`.
- [ ] **Explore leaf titles** — align Explore fallback labels with Reader sidebar.

## NEXT

- [ ] **Remove registry legacy shim** — after vyasa-docs GH Pages serves `catalogs[]` / `id: adi`.
- [ ] **Book activity UX (RV)** — `default_view` manifest key; revisit document layout gutter.
- [ ] **Manifest-driven vocabulary/localization** — blocked on vyasac pack changes.
- [ ] **Cross-publication links** — `CatalogLink` resolver, commentary → source verse.
- [ ] **Catalog schema RFC** — `deliveries[]`, `webUrl` vs `homepage`, `type` enum in vyasa-docs.
- [ ] **Diagnostics polish** — link catalog entries to library routes.
- [ ] See [`assessments/platform/CODE_REVIEW_TASKS.md`](../assessments/platform/CODE_REVIEW_TASKS.md) for remaining items.

## Blocked / upstream

See prior table in git history; compiler catalog-tree ranges, whitespace pack fixes, RV repack.

## Done (recent)

- [x] Catalog identity WIP slice — routes, registry shim, library drill-down, visibility, metadata.
- [x] vysamples richer `catalog.json` + `vyasac publish` catalog metadata.
- [x] Reader page decomposition — `ReaderNavigationPanel`, `reader-navigation.ts`.
- [x] Diagnostics catalog vocabulary cleanup.
