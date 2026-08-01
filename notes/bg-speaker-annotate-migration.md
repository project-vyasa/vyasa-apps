# vyasa-bg speaker annotations — migrate to value-node `annotate`

> **Owner:** `vyasa-samples` (source + repack) · **Viewer:** `vyasa-apps` (shim removal)  
> **Status:** Done (2026-08-01) — source migrated, viewer shims removed, repacked.

## Goal

One graph projection for categorical entity facets (BG speaker = RV devatā/ṛṣi):

| Packed row | Example |
|------------|---------|
| `label` | `Speaker` |
| `attributes` | `{"value":"sanjaya"}` |
| Edge type | `SPEAKER` |

Explorer and reader use the **generic annotate ingest path** only.

## Source change

**File:** `vyasa-samples/workspaces/vyasa-bg/annotations/speakers.vy`

### Before (event alias — projects to `Action`)

```vy
`annotate 1:2..1:20 [
    `sanjaya.uvaca
]
```

### After (value-node annotate)

```vy
`annotate 1:2..1:20 { speaker=sanjaya }
```

### Entity key mapping

| Alias block | `speaker=` value |
|-------------|------------------|
| `` `dhritarashtra.uvaca `` | `dhritarashtra` |
| `` `sanjaya.uvaca `` | `sanjaya` |
| `` `arjuna.uvaca `` | `arjuna` |
| `` `krishna.uvaca `` | `krishna` |

`uvaca` is implicit in the publication domain; it is **not** stored as a separate facet unless needed later.

## Optional vocabulary (recommended)

**`vocabulary/facets.vy`** (or entries in existing vocab):

```vy
`facets speaker [ वक्ता ]
```

**`manifest` / `facet_attributes`** (optional tighten block-attribute ingest):

```json
["speaker"]
```

## Repack & verify

```bash
cd vyasa-samples
bun run build:vyasa-bg   # or pack + publish per your scripts
# Serve via Caddy; reload platform
```

### Acceptance

- [ ] Explorer: `attr:speaker` facet with krishna / arjuna / sanjaya / dhritarashtra counts
- [ ] Reader gutter: 🗣️ badge with vocabulary entity label
- [ ] SQLite: no speaker rows with `label = 'Action'` for verse attributions (Notes may still use `Note`)

### WASM query check (optional)

```sql
-- expect Speaker value nodes on sample verse
SELECT d.value, n.attributes FROM graph_edges e
JOIN graph_nodes n ON e.source_id = n.id
JOIN graph_dict d ON n.label_id = d.id
WHERE d.value = 'Speaker' LIMIT 5;
```

## Viewer changes (vyasa-apps)

Remove after repack:

- `graphFacetBindings` `Action` branch
- `SPEAKER_FACET_TYPE` constant
- `urn-renderer` `Action` badge branch → generic value-node badge helper
- ExploreView hard-coded default map facet → first categorical facet

## Compiler note

No `vyasac` change required for this migration — `annotate { speaker=… }` already uses the same handler as RV `devata=…`.

Longer term: **annotation syntax review** may add linguist-friendly surface forms that still pack to value nodes ([`annotation-syntax-review.md`](./annotation-syntax-review.md)).
