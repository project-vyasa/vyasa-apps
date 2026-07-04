# Vyasa-Apps Code Review — 2026-07-02

## Summary

The `vyasa-apps` repository contains the **Vyasa Viewer** — a SvelteKit application that loads, renders, and navigates compiled Vyasa publications (`.vyview` SQLite databases) in the browser. The entire application is ~1,062 lines of TypeScript/Svelte across 11 files.

The codebase is **functionally complete** for its current scope (registry → catalog → publication → URN navigation) but exhibits significant quality issues that will compound as the application grows. The most critical concerns are:

1. **Zero test coverage** — No unit, integration, or E2E tests exist
2. **Pervasive `any` typing** — 24 instances of explicit `any` across the codebase
3. **Massive single-component architecture** — The 422-line URN viewer page is a monolith
4. **100% inline styles** — 38 total `style=` attributes across the two main pages
5. **Dead code** — The `sqlite-service.ts` (315 lines) is largely vestigial from the pre-split PlayArea era

**Risk assessment:** The application works, but lacks the structural foundation for safe iteration. Any non-trivial feature addition (search, bookmarks, settings persistence) will require significant refactoring first.

---

## Architecture Overview

```
vyasa-apps/apps/platform/
├── src/
│   ├── lib/
│   │   ├── ViewerDb.ts          (89 lines)  — Lightweight SQLite query bridge
│   │   ├── sqlite-service.ts    (315 lines) — Legacy PlayArea SQLite service
│   │   ├── schema.ts            (69 lines)  — PlayArea schema SQL (dead code for viewer)
│   │   └── index.ts             (1 line)    — Empty barrel export
│   └── routes/
│       ├── +page.svelte         (15 lines)  — Root redirect → /vysamples
│       ├── +layout.svelte       (21 lines)  — ThemeProvider + ToastProvider
│       ├── [publisher]/
│       │   └── +page.svelte     (117 lines) — Library catalog browser
│       └── [publisher]/[publication]/[...urn]/
│           └── +page.svelte     (422 lines) — Publication viewer + URN nav
└── static/
    ├── favicon.png
    └── wasm/
```

### Dependency Map

| Dependency | Type | Purpose |
|:---|:---|:---|
| `@project-vyasa/vyasa-ui` | `file:` link | Design system components (Button, AppShell, Panel, Input, Icon) |
| `@project-vyasa/vyasa-viewer-wasm` | `file:` link | WASM runtime (VyasaViewerRuntime) |
| `@project-vyasa/vyasa-compiler-wasm` | `file:` link | Compiler WASM (PlayArea use — unused in viewer) |
| `wa-sqlite` | npm | SQLite WASM engine |
| `lucide-svelte` | npm | Icon library |

---

## Findings

### 1. Zero Test Coverage ❌

There are **no test files** in the repository — no `*.test.ts`, `*.spec.ts`, or Playwright/Vitest configuration. This is the single most impactful quality gap.

| Component | Testable Surface | Suggested Test Type |
|:---|:---|:---|
| `ViewerDb.loadFromUrl()` | URL → SQLite → query pipeline | Integration (mock fetch + WASM) |
| `ViewerDb.query()` | SQL parameter binding | Unit |
| Registry → Catalog resolution | Multi-step fetch chain | Integration (mock responses) |
| URN matching logic (`renderCurrentUrn`) | Range parsing, prefix matching | Unit (pure function extraction) |
| Navigation (`navigateNext`, `navigatePrev`) | Boundary conditions (first/last URN) | Unit |
| `flattenTree` | Recursive catalog tree traversal | Unit |

### 2. Pervasive `any` Typing ⚠️

24 instances of explicit `any` undermine TypeScript's value proposition:

**Critical (data model):**
- `packageData.manifest: any` — The central data model has zero type safety
- `packageData.structure: any` — Tree structure untyped
- `catalogData = $state<any>(null)` — Catalog response untyped
- `ViewerDb.sqlite3: any` — All 5 private fields in the SQLite service are `any`

**Suggested types to define** (in a new `$lib/types.ts`):
```typescript
interface RegistryEntry { identifier: string; title: string; catalog_url: string; }
interface Registry { publishers: RegistryEntry[]; }
interface CatalogItem { id: string; name: string; payloadUrl: string; }
interface Catalog { catalog: { publisher: string; description: string; }; items: CatalogItem[]; }
interface Manifest { package_type: string; urn_scheme: string; catalog_tree: string; 
                     streams_config?: string; urn_hierarchy?: string; urn_bit_layout?: string; }
```

### 3. Monolithic Viewer Page (422 lines) ⚠️

[`[...urn]/+page.svelte`](file:///Users/anand/Projects/project-vyasa/vyasa-apps/apps/platform/src/routes/%5Bpublisher%5D/%5Bpublication%5D/%5B...urn%5D/+page.svelte) handles:
- WASM initialization (lines 70-72)
- Registry/catalog resolution (lines 73-101)
- SQLite loading (lines 103-142)
- URN tree flattening (lines 145-159)
- Content rendering with template weaving (lines 181-277)
- Navigation state management (lines 280-309)
- All UI snippets — header, app bar, sidebar, nav bar, viewer (lines 312-422)

**Extraction candidates:**

| Concern | Suggested Module | Lines |
|:---|:---|:---|
| Registry/Catalog resolution | `$lib/registry.ts` | ~50 |
| URN matching + flat tree | `$lib/urn-utils.ts` | ~40 |
| Content rendering pipeline | `$lib/renderer.ts` | ~100 |
| Navigation logic | `$lib/navigation.ts` or Svelte store | ~30 |

### 4. Inline Styles Everywhere ⚠️

**38 inline `style=` attributes** across the two main page files. This makes styling:
- Impossible to override from parent/theme
- Impossible to share between components
- Invisible to responsive media queries
- Difficult to maintain (repeated token references like `var(--space-4)`)

**Examples of repeated patterns:**
```svelte
<!-- This exact pattern appears in BOTH publisher page and viewer page -->
style="display: flex; flex-direction: column; align-items: center; justify-content: space-between; 
       padding: var(--space-4) 0; width: 100%; height: 100%; background-color: var(--bg-surface);"
```

**Recommendation:** Extract to `<style>` blocks using CSS classes. The `vyasa-ui` design system provides tokens; use them via proper selectors rather than inline.

### 5. Dead Code: `sqlite-service.ts` + `schema.ts` (~384 lines) ⚠️

[`sqlite-service.ts`](file:///Users/anand/Projects/project-vyasa/vyasa-apps/apps/platform/src/lib/sqlite-service.ts) (315 lines) and [`schema.ts`](file:///Users/anand/Projects/project-vyasa/vyasa-apps/apps/platform/src/lib/schema.ts) (69 lines) are legacy from the PlayArea era. They contain:
- `bulkPutFiles()`, `getAllFiles()`, `updateFile()`, `clearFiles()` — VFS file management (PlayArea only)
- `bulkPutNodes()`, `insertNodeRecursive()` — Node insertion (PlayArea only)
- `importJson()` — Deprecated (contains `console.warn`)
- `SCHEMA_SQL` — PlayArea node/stream schema (not used by viewer)

The viewer only uses `sqliteService.init()` and `sqliteService['sqlite3']` / `sqliteService['memoryVfs']` — internal fields accessed via bracket notation from `ViewerDb.ts`, which is a code smell.

**Recommendation:** Either:
- **(A)** Delete `sqlite-service.ts` + `schema.ts` and inline the ~30 lines of WASM init into `ViewerDb.ts`
- **(B)** If PlayArea will move here, keep but extract into `$lib/playarea/` directory

### 6. Resource Leak: No `onDestroy` Cleanup ⚠️

The [`[...urn]/+page.svelte`](file:///Users/anand/Projects/project-vyasa/vyasa-apps/apps/platform/src/routes/%5Bpublisher%5D/%5Bpublication%5D/%5B...urn%5D/+page.svelte#L7) imports `onDestroy` from Svelte but **never calls it**. The `ViewerDb` opens SQLite connections that are never explicitly closed when navigating away. While the MemoryVFS files accumulate with unique names (`viewer-db-${Date.now()}`), they are never cleaned up.

```typescript
// Line 7: imported but unused
import { onMount, onDestroy, untrack, getContext } from 'svelte';
```

**Fix:** Add cleanup:
```typescript
onDestroy(() => {
    // Close the SQLite connection
    viewerDb?.close();
});
```

### 7. Console Logging Pollution ⚠️

**20+ `console.log/warn/error` statements** scattered throughout the codebase. In production these create noise in the browser console.

Notable offenders:
- `sqlite-service.ts`: 14 log statements (mostly from PlayArea era)
- `ViewerDb.ts`: 2 log statements
- `+page.svelte` (viewer): `console.log("RENDER URN:", ...)` on every navigation

**Recommendation:** Remove production console.logs or gate behind `import.meta.env.DEV`.

### 8. Accessibility Suppressions ⚠️

The publisher page contains `a11y_click_events_have_key_events` and `a11y_no_static_element_interactions` suppressions for clickable `<div>` cards. These should be `<button>` or `<a>` elements with proper keyboard navigation.

### 9. Duplicated Registry Fetch Logic ⚠️

The registry resolution logic (fetch registry → find publisher → fetch catalog) is **duplicated** between:
- [`[publisher]/+page.svelte`](file:///Users/anand/Projects/project-vyasa/vyasa-apps/apps/platform/src/routes/%5Bpublisher%5D/+page.svelte#L15-L44) (lines 15-44)
- [`[...urn]/+page.svelte`](file:///Users/anand/Projects/project-vyasa/vyasa-apps/apps/platform/src/routes/%5Bpublisher%5D/%5Bpublication%5D/%5B...urn%5D/+page.svelte#L73-L101) (lines 73-101)

Both do the exact same fetch → find publisher → fetch catalog dance. This should be extracted to a shared `$lib/registry.ts` module.

### 10. Favicon Conflict

[`+layout.svelte`](file:///Users/anand/Projects/project-vyasa/vyasa-apps/apps/platform/src/routes/+layout.svelte#L4) imports a local SVG favicon from `$lib/assets/favicon.svg`, while [`app.html`](file:///Users/anand/Projects/project-vyasa/vyasa-apps/apps/platform/src/app.html) also references `favicon.png` in the `<head>`. Two competing favicons exist.

---

## Feature Inventory

### Viewer Application

| Feature | Route/Component | Test Coverage | Doc Coverage |
| :--- | :--- | :--- | :--- |
| Root redirect to `/vysamples` | `+page.svelte` | ❌ | ❌ |
| Registry → Publisher resolution | `[publisher]/+page.svelte` | ❌ | ❌ |
| Catalog grid display | `[publisher]/+page.svelte` | ❌ | ❌ |
| Publication loading (SQLite via MemoryVFS) | `[...urn]/+page.svelte` | ❌ | ❌ |
| WASM runtime initialization | `[...urn]/+page.svelte` | ❌ | ❌ |
| URN-based content rendering | `[...urn]/+page.svelte` | ❌ | ❌ |
| URN range matching (e.g. `1-5`) | `[...urn]/+page.svelte` | ❌ | ❌ |
| View switching (reference/interlinear) | `[...urn]/+page.svelte` | ❌ | ❌ |
| Next/Previous URN navigation | `[...urn]/+page.svelte` | ❌ | ❌ |
| URN input field editing | `[...urn]/+page.svelte` | ❌ | ❌ |
| Theme toggle (light/dark) | `+layout.svelte` via context | ❌ | ❌ |
| Density cycling | `+layout.svelte` via context | ❌ | ❌ |
| Embed mode (`?embed=true`) | `[...urn]/+page.svelte` | ❌ | ❌ |
| Stream name mapping | `[...urn]/+page.svelte` | ❌ | ❌ |
| Local dev intercept for samples | `[...urn]/+page.svelte` L85-87 | ❌ | ❌ |

### SQLite/Data Layer

| Feature | File | Test Coverage | Doc Coverage |
| :--- | :--- | :--- | :--- |
| `ViewerDb.loadFromUrl()` | `ViewerDb.ts` | ❌ | ❌ |
| `ViewerDb.query()` with param binding | `ViewerDb.ts` | ❌ | ❌ |
| MemoryVFS database loading | `ViewerDb.ts` via `sqlite-service.ts` | ❌ | ❌ |
| PlayArea file VFS (dead code) | `sqlite-service.ts` | ❌ | N/A |
| PlayArea node insertion (dead code) | `sqlite-service.ts` | ❌ | N/A |

---

## Recommendations

### High Priority
1. **Add Vitest + testing foundation** — Configure Vitest, extract pure functions (`flattenTree`, URN matching, registry resolution) and write unit tests for them. This is the single most impactful improvement.
2. **Define TypeScript interfaces** — Create `$lib/types.ts` with `Registry`, `Catalog`, `CatalogItem`, `Manifest`, `PackageData` types. Replace all `any` in data models.
3. **Extract registry resolution** — Move the duplicated fetch logic into `$lib/registry.ts` with a single `resolvePublisher(publisherSlug)` function.

### Medium Priority
4. **Clean up dead code** — Remove or isolate `sqlite-service.ts` PlayArea methods. The viewer uses `ViewerDb.ts` exclusively.
5. **Add `onDestroy` cleanup** — Close SQLite connections when navigating away from the viewer page.
6. **Replace inline styles with CSS classes** — Move the 38 inline `style=` attributes to `<style>` blocks. Design system tokens should be referenced via CSS, not inline JS.
7. **Fix favicon conflict** — Remove the SVG favicon from `$lib/assets/` and `+layout.svelte`; the PNG favicon in `static/` + `app.html` is the correct one.

### Low Priority
8. **Remove console.log statements** — Gate behind `import.meta.env.DEV` or remove entirely.
9. **Fix accessibility** — Replace clickable `<div>` cards with `<button>` elements; remove a11y suppressions.
10. **Decompose viewer page** — Extract the 422-line URN page into smaller components (URN navigation bar, content renderer, viewer shell). This becomes critical as more features are added.
11. **Remove duplicate TODO comment** — Lines 410-413 contain the same `srcdoc` TODO comment twice.
