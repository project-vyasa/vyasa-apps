# Explicit workspace design (viewer obligations)

> Platform-side companion to publisher-facing principles.  
> Canonical authoring doc: [`vyasa-samples/notes/explicit-workspace-design.md`](../../vyasa-samples/notes/explicit-workspace-design.md)

## Summary for platform work

Vyasa’s **compiler and packed publications** carry domain meaning. The **viewer** serves ~10¹⁰ readers and may optimize UX — but must not re-introduce domain logic that publishers already resolved (or should have resolved) at build time.

**Publisher rule:** explicit workspace definitions, pack-time validation, manifest carries resolved outcomes.

**Viewer rule:** consume the manifest; stay domain-neutral; no hardcoded symbol fallbacks.

---

## What the viewer must not do

Code review regularly flags **hardcoded domain symbols** in runtime paths. The vocabulary lookup in `urn-renderer.ts` is a current example:

```typescript
// Legacy — remove when manifest-driven fallback lands
match = vocabulary.find(v =>
  … && (v.stream_name === 'vocabulary' || !v.stream_name
    || v.stream_name === 'mula' || v.stream_name === 'devanagari'
    || v.stream_name === 'primary'));
```

This hides misconfigured publications and encodes vyasa-bg-specific stream names into a general-purpose viewer.

### Target behaviour

1. Load `primary_stream` id and per-stream **pre-merged** localization tables from manifest.
2. Resolve display labels by stream id + category + key — no `extend` resolution at runtime.
3. If a label is missing at runtime, show the raw key or a generic placeholder — **do not** guess from a built-in stream-name list.

Pack failures are preferable to silent wrong labels: publishers fix `localization.vy`; readers never see inconsistent chrome.

---

## Vocabulary vs localization (viewer impact)

| Layer | Packed as | Viewer uses for |
|-------|-----------|-----------------|
| **Vocabulary** (RFC-019 §4) | Entity aliases, canonical IDs | Annotation labels, search, graph facets — keyed by semantic ID |
| **Localization** | Per-stream display strings | Structure chrome (“adhyāya”, “śloka”, “ṛc”) for active stream |

The viewer should not treat the `vocabulary` SQLite stream name as a magic default bucket. That was a pack artefact, not a design contract.

---

## Primary stream (option C)

Publishers declare in `vyasac.toml`:

```toml
[streams]
primary = { path = "content/mula" }
iast      = { path = "content/iast" }
```

The packer resolves `` `localization { extend = "…" } `` at pack time and writes one flat table per stream. The viewer reads `primary_stream` for context only — not for inferring URNs or walking label inheritance.

---

## Allowed “magic” in the viewer

Acceptable without publisher declaration:

- Responsive layout, font loading, scroll behaviour
- Graceful degradation when optional enrichment tables are absent
- Caching, prefetch, accessibility affordances

Not acceptable:

- Fallback lists of stream names or label languages
- Assuming Devanagari/IAST/English conventions
- Silently substituting structure terms (`verse` → `śloka`) without manifest data

---

## Implementation tracking

| Item | Location | Notes |
|------|----------|-------|
| Remove hardcoded vocabulary stream fallbacks | `apps/platform/src/lib/viewer/urn-renderer.ts` | Blocked on manifest fields from vyasac |
| Load `primary_stream` from manifest | `publication-loader.ts` | |
| Use merged localization table only | `urn-renderer.ts`, explore/nav labels | |
| Pack-time localization merge | `vyasa/vyasac` | See compiler backlog |

Queue: [`notes/WORK.md`](./WORK.md) · samples: [`vyasa-samples/notes/WORK.md`](../../vyasa-samples/notes/WORK.md)

---

## Agent handoff

Before adding viewer logic that references stream names, entity keys, or structure labels:

1. Check whether the packer can emit it in the manifest instead.
2. If publishers must declare it, document the workspace file (`localization.vy`, `vyasac.toml`).
3. Never duplicate vyasa-bg conventions as global defaults in TypeScript.
