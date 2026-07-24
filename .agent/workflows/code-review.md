---
description: Code review workflow for vyasa-apps frontend applications (SvelteKit)
---

# Vyasa-Apps Code Review Workflow

This workflow performs a critical code review of the `vyasa-apps` monorepo, which houses the end-user applications (like the `platform` viewer). The review focuses on application architecture, Svelte 5 compliance, integration with the WASM runtimes, and strict adherence to the project invariants (especially schema neutrality).

## Steps

### 1. Scan for Deprecated Svelte 3/4 Patterns

As with the design system, the apps must use modern Svelte 5 patterns exclusively. Check for:

```bash
# Check for deprecated reactive statements ($:)
grep -r '\$:' --include="*.svelte" apps/

# Check for deprecated stores (writable, readable, derived)
grep -r 'from "svelte/store"' --include="*.svelte" apps/

# Check for deprecated export let (should use $props())
grep -r 'export let' --include="*.svelte" apps/

# Check for deprecated on: directive (should use onclick, oninput, etc.)
grep -rE '\bon:[a-z]+=' --include="*.svelte" apps/
```

### 2. Verify Svelte 5 Pattern Adherence

Check for proper usage of:
- **`$state()`** and **`$derived()`** for local state and computed values.
- **`$effect()`**: Audit `$effect()` usage closely. Ensure they don't trigger infinite loops by mutating `$state()` variables they depend on, and ensure they return cleanup functions where necessary.
- **Snippets**: Ensure snippets (`{@render snippet()}`) are used instead of legacy `<slot>`.

### 3. Verify Schema Neutrality (Hardcoded Domain Terms)

> **Invariant:** The frontend apps, like the compiler, must remain 100% agnostic to the content domain.

- Scan `apps/` for domain-specific terminology (e.g., `"uvacha"`, `"purport"`, `"devanagari"`, `"verse"`, `"speaker"`).
- If terms like these are found, they must be flagged as a **High Priority** violation. Formatting and domain-specific display logic should be handled by CSS or the `stdlib.vy`/`context.vy` layer, never hardcoded in Svelte components.

### 4. Cross-Repo Integration Checks

The `vyasa-apps` layer connects the `vyasa` (WASM) and `vyasa-ui` (Design System) repositories.

- **WASM Contract (`@vyasa/viewer-wasm`, `@vyasa/compiler-wasm`)**:
  - Verify that the app handles initialization of the WASM runtime correctly.
  - Check for API version checks (e.g., calling `api_version()` if exported) to prevent runtime crashes when the compiler updates.
  - Verify that all complex data processing (sorting, querying) is offloaded to the WASM SQLite layer, rather than being re-implemented in JavaScript.
- **Design System (`@vyasa-ui/svelte`)**:
  - Check imports for the design system. `vyasa-apps` should *not* build raw atomic UI primitives (Buttons, Inputs) — these must be imported from `@vyasa-ui/svelte`.
  - Flag any inline CSS that duplicates styling available in the design system tokens.
  - **Context Boundaries**: Check for Context API boundary issues. Ensure that foundational layout components explicitly accept context via props to bypass Svelte 5 module resolution bugs across workspace boundaries. See the [Monorepo Context Architecture](file:///Users/anand/Projects/project-vyasa/vyasa-docs/astro-starlight/src/content/docs/notes/monorepo-context-architecture.md) note for details.

### 5. Architectural Scoping & Complexity

- **SvelteKit Routing**: Are the `+page.ts` / `+page.server.ts` load functions clean and fast?
- **State Management**: Are context Runes (`setContext`/`getContext` with classes) used correctly to avoid prop-drilling in complex viewer hierarchies?
- **Component Bloat**: Flag any `.svelte` files exceeding ~300 LOC. Suggest extracting logic to `.ts` files or breaking the component into smaller snippets.

### 6. Performance and Footprint

- **Zero Runtime Errors**: Shift-left logic to the compiler. The viewer should not crash on invalid data; it should gracefully fallback (e.g., render unknown nodes using default styles).
- **Bundle Size**: Run the build (`bun run build`) and audit the chunk sizes. Ensure heavy dependencies are lazy-loaded where possible.

### 7. Generate Review Report

Generate the review report in `assessments/platform/CODE_REVIEW.md`, structured as follows:

```markdown
# Vyasa-Apps Code Review — {date}

## Summary
Brief overview of codebase health and key risks.

## Findings
### Svelte 5 Compliance
- List any deprecated patterns found

### Schema Neutrality
- List any hardcoded domain terms found

### Integration & WASM Contract
- Assessment of WASM API usage and Design System integration

### Complexity & Architecture
- Highlight bloated files, complex load functions, or state issues

## Recommendations
Prioritized list of fixes (High/Medium/Low)
```

Finally, create a tracking document in `assessments/platform/CODE_REVIEW_TASKS.md` with checkboxes for each action item.
