# Vyasa-Apps Code Review — 2026-07-20

## Summary

The `apps/platform` codebase is **in good health overall**. It is fully Svelte 5-compliant with no deprecated patterns, completely schema-neutral, and correctly delegates all data processing to the WASM/SQLite layer. The primary concern is a single severely bloated component (`+page.svelte` at 664 LOC) that is actively causing fragility — this is the root cause of the "disappearing titles" bug experienced this session. Secondary concerns are a no-op `$effect`, a hardcoded registry URL in two places, and a missing deduplication step in the publisher list.

---

## Findings

### 1. Svelte 5 Compliance — ✅ PASS

No deprecated patterns found:
- `$:` reactive statements: **0 occurrences**
- `svelte/store` imports: **0 occurrences**
- `export let` props: **0 occurrences** (all use `$props()`)
- Legacy `on:event=` directives: **0 occurrences**
- Legacy `<slot>`: **0 occurrences** (snippets used correctly)

**One finding:** A dead `$effect` at `+page.svelte:46-51` that contains only a comment and no body. This should be removed.

```svelte
// +page.svelte:46
$effect(() => {
    if (showDiagnosticsQuery) {
        // Note: We no longer auto-open from query param since state is in AppBar
        // A future enhancement could be to expose an open method or global store
    }
});
```

**Priority: Low** — No functional impact, but adds noise and a potential future trap.

---

### 2. Schema Neutrality — ✅ PASS

No hardcoded domain terms (`uvacha`, `purport`, `devanagari`, `verse`, `shloka`, etc.) found in any `.svelte` or `.ts` file. The three grep hits for `traverse` were for the tree-traversal function in `sidebarItems` logic, which is structural, not domain-specific.

---

### 3. Integration & WASM Contract — ⚠️ MEDIUM RISK

**WASM initialization:** `initWasm()` is called correctly at the start of `loadPublication()`. This is fine.

**No API version check:** The viewer initializes `VyasaViewerRuntime` directly without checking if the WASM API version is compatible with what the app expects. If the WASM package is updated with a breaking change (e.g., a renamed method), the app will crash silently at runtime.

**`build_templates_query()` called twice:** In `loadPublication()` (line 221) and again in `renderCurrentUrn()` (line 348), the templates are fetched from the DB on every single URN navigation. This is a pure performance regression — the templates don't change per-URN and should be fetched once at load time and cached in `packageData.projections`.

**Design System:** All UI primitives (`Button`, `Input`, `Panel`, `ListView`, `AppShell`, `AppHeader`) are correctly imported from `@project-vyasa/vyasa-ui`. No raw HTML elements are substituted for design system components. ✅

**`diagRegistryUrl` hardcoded in two places:**
- `LibraryContainer.svelte:20` — `$derived('https://project-vyasa.github.io/...')`
- `+page.svelte:196` — hardcoded string literal in `loadPublication()`

Both should read from `viewerSettings.globalRegistryUrl` or a shared constant from `registry.ts`.

---

### 4. Complexity & Architecture — 🔴 HIGH RISK

**`+page.svelte` is 664 LOC** — more than double the 300 LOC threshold. This is the primary architectural problem and the root cause of today's "fragile title" bugs. The file currently combines:

1. **Publication loading** (`loadPublication()`, WASM init, catalog fetch, DB query)
2. **URN rendering** (`renderCurrentUrn()`, view weaving, template fetching)
3. **Sidebar navigation** (`sidebarItems` derived, `traverse()`, selection sync)
4. **URN navigation** (`navigateNext/Prev`, `navigateUrn`)
5. **All layout/snippet/style** definitions

This monolithic structure means that any change to one concern risks breaking another (as seen with the `block_attributes` fetch: adding DB queries inside `loadPublication` caused WASM Asyncify stack corruption that silently broke `sidebarItems`).

**Recommended extraction:**

| New File | Extracted From |
|---|---|
| `src/lib/viewer/publication-loader.ts` | `loadPublication()` logic |
| `src/lib/viewer/urn-renderer.ts` | `renderCurrentUrn()` logic |
| `src/lib/viewer/sidebar.svelte.ts` | `sidebarItems` derived + `traverse()` |
| `src/lib/components/ViewerNavBar.svelte` | `sidebarTopContent` snippet |

**`$effect` dependency management is fragile:**
The current pattern where `loadPublication()` is called from a `$effect` that tracks `publisher` and `publication`, and `renderCurrentUrn()` is called from a separate `$effect` that tracks `urn`, `graphRuntime`, and `packageData`, creates an implicit ordering dependency (`packageData` must be set *last* in `loadPublication()` to avoid triggering the render effect prematurely). This is documented in a comment but is easy to violate. A task queue or mutex would be more robust.

**`getAllPublishers()` has no deduplication:** If a publisher appears in both a custom catalog and the global registry, it will appear twice in the library view. The `seenIds` Set is declared but never populated or checked in the current implementation.

**`LibraryContainer.svelte:44`** references `catalogData.catalog?.publisher` — the `catalog` sub-property does not exist on the `Catalog` type (see `types.ts`). This is a bug that Prettier can't catch but TypeScript should. It likely silently falls through to the `publisher` prop fallback.

---

## Recommendations

| Priority | Issue | File | Action |
|---|---|---|---|
| 🔴 High | `+page.svelte` is 664 LOC; monolithic design causes fragility | `+page.svelte` | Extract into `publication-loader.ts`, `urn-renderer.ts`, and a `sidebar.svelte.ts` rune class |
| 🔴 High | Templates fetched from DB on every URN navigation | `+page.svelte:348` | Cache `tplRows`/`templatesJson` in `packageData.projections` at load time |
| ⚠️ Medium | No WASM API version check | `+page.svelte:191` | Call `VyasaViewerRuntime.api_version()` if it exists; log a warning on mismatch |
| ⚠️ Medium | `diagRegistryUrl` hardcoded in two places | `LibraryContainer.svelte:20`, `+page.svelte:196` | Use `viewerSettings.globalRegistryUrl || DEFAULT_REGISTRY_URL` from `registry.ts` |
| ⚠️ Medium | `getAllPublishers()` deduplication is declared but not implemented | `registry.ts:102` | Populate and check `seenIds` when adding from global registry |
| ⚠️ Medium | `catalogData.catalog?.publisher` — invalid property access | `LibraryContainer.svelte:44` | Fix to use `catalogData.title` or the correct property |
| 🟡 Low | Dead no-op `$effect` with only a comment | `+page.svelte:46-51` | Delete the empty effect |
