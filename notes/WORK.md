# Platform work queue

> Last updated: 2026-07-28 — apps agent (handoff from compiler-focused work)

## Context

This repo owns **`@project-vyasa/platform`**: viewer, explore, library, and diagnostics UI. It consumes `@vyasa/viewer-wasm` (and eventually compiler WASM for playground) from the **`vyasa`** toolchain — it does not implement compiler logic.

**Sibling repos:** compiler `/Users/anand/Projects/project-vyasa/vyasa` · samples `/Users/anand/Projects/project-vyasa/vyasa-samples` · docs `/Users/anand/Projects/project-vyasa/vyasa-docs` (legacy viewer/playarea — **do not update WASM there**).

Uncommitted WIP on branch (local): ExploreView, ViewerNavBar, urn-renderer, `[...urn]/+page.svelte` — likely reader/nav/grid polish from prior session.

**Design principles:** [`explicit-workspace-design.md`](./explicit-workspace-design.md) — manifest-driven labels, no domain fallbacks in viewer.

Code-review backlog lives in [`assessments/platform/CODE_REVIEW_TASKS.md`](../assessments/platform/CODE_REVIEW_TASKS.md). Cross-repo analysis in [`vyasa/notes/feedback.md`](../../vyasa/notes/feedback.md). Publisher-side doc: [`vyasa-samples/notes/explicit-workspace-design.md`](../../vyasa-samples/notes/explicit-workspace-design.md).

## NOW

- [~] **Reader / nav / layout polish** — in-flight diffs on ExploreView, ViewerNavBar, urn-renderer, +page.svelte; review, finish, or split before next feature.
- [x] **Whitespace handling (apps)** — strip stream artifacts, flex-start row alignment, `\n` segment join; compiler: skip `set` in HTML (repack needed).
- [ ] **Decompose `[...urn]/+page.svelte`** — extract remaining logic per CODE_REVIEW_TASKS (publication-loader, urn-renderer, sidebar runes largely started).
- [ ] **Cache templates at load time** — move `build_templates_query()` out of hot navigation path into `loadPublication()`.
- [ ] **Explore leaf titles** — align Explore fallback labels with Reader sidebar (`Sukta n` vs `Node m:n`); see feedback.md §1.

## NEXT

- [ ] **Manifest-driven vocabulary/localization** — remove hardcoded stream fallbacks in `urn-renderer.ts` (`vocabulary`, `mula`, `devanagari`, `primary`); consume `primary_stream` + merged labels from manifest — see [`explicit-workspace-design.md`](./explicit-workspace-design.md). **Blocked:** vyasac pack changes.
- [ ] **WASM API version check** after `initWasm()` — warn on mismatch.
- [ ] **Dedupe `diagRegistryUrl`** — use settings default, not hardcoded strings.
- [ ] **Fix `getAllPublishers()` deduplication** — `seenIds` in `registry.ts`.
- [ ] **Fix catalog publisher field** — `LibraryContainer.svelte` uses invalid `catalog?.publisher`.
- [ ] **Composite key routing** — `(registry-id, catalog-id, pubid)` instead of fragile `?catalog=` query param (see vyasa BACKLOG §4).
- [ ] **Centralized WASM API wrapper** — avoid BigInt/number coercion bugs at JS boundary.
- [ ] **SQLite single-flight queue** — serialize `ViewerDb` queries (Asyncify safety).

## LATER

- [ ] **Catalog source labels** — custom / registry / url on library cards.
- [ ] **Settings: hide private catalog entries** checkbox.
- [ ] **Multi-range explore selection** — array of URN ranges into Reader.
- [ ] **Density & typography** — tighter layout, smaller base fonts.
- [ ] **GitHub issues** — file from this list after preview release.

## Blocked / upstream (compiler or other repos)

| Item | Repo | Notes |
|------|------|-------|
| **Localization: manifest + primary stream fallback** | `vyasa` | Pack-time merge; viewer must not guess — [`explicit-workspace-design.md`](./explicit-workspace-design.md) |
| Plain-text / weave stream ordering, SQL allow-list | `vyasa` | Deterministic sequencing at concat time; see [`vyasa/notes/viewer.md`](../../vyasa/notes/viewer.md) |
| Grid customizer column span behavior | `vyasa` + apps | CSS grid algorithm may span compiler + viewer |
| Stream / leaf-block layout language | `vyasa` | Publisher-defined columns, stream pickers — [`compiler.md`](../../vyasa/notes/compiler.md) NOW |
| Explorer titles in `block_attributes` | `vyasa` / samples | May need compile-time title emission |
| Rebuild samples after compiler changes | `vyasa-samples` | e.g. vedabase-bg after schema/compiler updates |
| **Whitespace: spurious `\n\n` after block open tags** | `vyasa` | e.g. intimate-note packs `<div class="knowledge">\n\n` — trim at compile time for non-preserve blocks |
| **Whitespace: SegmentBreak → `\n` at compile** | `vyasa` | HTML backend emits `\x1f`; viewer joins with `\n`. Prefer `\n` over HTML tags — blocks are reused outside HTML. |
| **Whitespace: omit `set` / debug-marker HTML from streams** | `vyasa` | `set` skipped in html/simple.rs; `[DEPRECATED]` warning for `vyasa-debug-marker`; samples cleanup in progress. Underscore-prefixed view templates (`_reading.vy`) skipped at pack. |

### Whitespace assessment (2026-07-28)

**Symptoms:** Blank lines and lost line breaks in plain/grid views; erratic flicker when navigating (esp. preserve-whitespace pubs like intimate-note).

**Root causes (apps — fixed):**
1. Weave options used `wrap_tag: 'span'` + `separator: ' '` — collapsed `\x1f` segment breaks into spaces.
2. Viewer injected `white-space: pre-line` on `.urn-content`, fighting publisher `pre-wrap` and collapsing intentional blank lines.
3. `node.content.trim()` stripped leading/trailing whitespace publishers rely on.
4. Async render without generation guard — stale weave results could overwrite fresh ones.
5. `activeStream` not reset on publication switch.

**Root causes (compiler — report, not fixed here):**
1. Packed HTML can include structural blank lines after opening tags (e.g. `<div class="knowledge">\n\n`).
2. Segment breaks stored as `\x1f` in compressed blocks; HTML path never emits `<br />`.
3. No manifest field for whitespace mode — viewer cannot distinguish preserve vs single-space pubs.

## Open questions

1. Finish and land current WIP as one PR slice, or revert and replan?
2. Which NOW item is highest priority after handoff — decomposition vs explore titles vs nav polish?

## Done (recent)

- [x] **Phase A** — cache busting; debug header; **`build` = pack + publish**; **`deploy` runs `build` first** (`predeploy`).
- [x] **Library sections (B6)** — Local Catalogs / Local Registries / Global Registry; banners when catalogs disabled or Caddy down.
- [x] Initial notes folder and work queue (this file).

---

### Exchange log

| Date | From | Note |
|------|------|------|
| 2026-07-28 | User | Separate apps coordination from compiler agent; NOW/NEXT/LATER here, GH issues after preview. |
| 2026-07-28 | User | Assess whitespace task; fix erratic blank lines in apps where possible. |
| 2026-07-28 | User | vyasa-bg reading view blank lines; prefer `\n` not HTML for segment breaks. |
| 2026-07-28 | User | Complete Phase A; B6 local section missing; B7 settings preserved; skip B5 vite middleware. |
| 2026-07-28 | User | Explicit workspace design doc; remove vocabulary heuristics from viewer once manifest lands. |
