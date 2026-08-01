# Annotation syntax review (linguist-friendly authoring)

> **Status:** Backlog — see `vyasa/notes/BACKLOG.md` §9  
> **Repos:** `vyasa` (grammar, graph projection), `vyasa-samples`, publisher workspaces (`sa.wikisource.org`)

## Problem

Graph-backed facets work, but the **interim** attribute-map form is programmer-centric:

```vy
`annotate "1:24:2" { devata=agni, rishi=vamadeva, chandas=gayatri }
```

Linguists and editors may find repeated `{ key=value, … }` maps irritating compared to prose-native or table-native workflows — especially when many leaves share metadata.

The **event-alias** form used in early vyasa-bg (`sanjaya.uvaca` in a block) projects to a different graph shape (`Action` nodes) and is being retired in favour of value-node `annotate` (see [`bg-speaker-annotate-migration.md`](./bg-speaker-annotate-migration.md)).

## Questions to answer

1. **Surface syntax** — alternatives to generic maps for single- and multi-attribute spans:
   - Positional / tabular rows (CSV-like annotation files)
   - Repeated shorthand: `` `annotate 1:1 `dhritarashtra.uvaca `` if compiler normalizes to `{ speaker=dhritarashtra }` at pack time
   - Stream-specific annotation files with column headers
   - Spreadsheet import → `annotations/*.vy` generation

2. **Authoring UX** — what do linguists already use (Excel, TEI, custom CMS)? Can vyasac accept that and project to the canonical graph without authors writing `{}`?

3. **Graph canonical form** — viewer assumes packed **value nodes** (`label` + `{ value: entityKey }` + matching edge type). Author syntax can vary; packer must converge on one projection (schema-neutral in Rust).

4. **Multi-attribute spans** — RV anukramani often sets rishi + devata + chandas on a range. Is one map per line acceptable if the **editor** is a form/grid, even when the on-disk syntax is a map?

5. **Validation** — entity keys must resolve against `vocabulary/entities.vy`; surface syntax should surface friendly errors (unknown key, bad URN range).

## Non-goals (this review)

- Changing explorer facet UI
- Tuple / multi-facet SQL queries
- Weave template `{{ devata }}` resolution in mixed suktas

## Deliverables (when scheduled)

- [ ] Survey 2–3 syntax options with linguist-readable examples (BG speaker + RV anukramani)
- [ ] Prototype in `vyasac` parser or preprocessor (one option)
- [ ] Update `vyasa-docs` annotation guide
- [ ] Decision: deprecate or retain `{ key=value }` as advanced/escape syntax

## References

- RV enrich: `sa.wikisource.org/notes/enrich-rv.md`
- Graph projection: `vyasa/vyasac/src/graph.rs` (`annotate` handler)
- Explorer FR: `sa.wikisource.org/notes/feature-request-explorer-graph-facets.md`
