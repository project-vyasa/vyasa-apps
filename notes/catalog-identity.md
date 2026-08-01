# Catalog identity & linking

> Locked vocabulary (2026-07-30). Promote to vyasa-docs RFC when schema lands.

## Scale

- ~10⁶ publications ecosystem-wide
- ~50 publications per catalog on average
- **`local`** registry — vyasac / dev only

## Three layers

| Layer | Route segment | Role |
|-------|---------------|------|
| **Registry** | `{registry}` | Directory of catalogs (`adi`, `local`, …) |
| **Catalog** | `{catalog}` | Index of publications (a `catalog.json`) |
| **Publication** | `{publication}` | One logical work in that catalog (identified by `publication_id`) |

A **publication** is the catalog entry — a distinct edition or package of content (`vyasa-bg`, `intimate-note`, …). It is **not** tied to a single file format. The same publication may be available in several **delivery formats**:

| Format | Role today | Notes |
|--------|------------|-------|
| **`.vyview`** | Platform viewer | SQLite package; primary path for Vyasa apps |
| **IR** | Tooling / compiler pipeline | May sidestep corporate binary blocking vs opaque `.vyview` |
| **PDF, EPUB, …** | Export / mobile / print | Out of band; same `publication_id`, different URL |

`vyasa://…/{publication_id}` identifies the **publication**, not the bytes. Catalog JSON lists one or more format URLs; the platform viewer currently requires `vyviewUrl`. Other clients pick the format they support.

**Catalog ref** (discovery): `(registry_id, catalog_id, publication_id)`

**Publisher** is **metadata on the catalog**, not a route segment — one org may host several catalogs (`wikisource-works`, `wikisource-commentaries`) with the same publisher attribute.

## Content address (inside a publication)

Separate from catalog ref. **No prefix required** — use the relative structure path only:

```
2:47
1:1:1
```

Defined by the publication manifest (`urn_hierarchy`, structure). Same path may mean different things in different publications; that is why content URNs never appear in `vyasa://` and we do not rely on publishers to enforce global uniqueness.

Optional full form (`urn:vyasa:…`) may exist in packed manifests for WASM — **routes and durable links use the numeric/colon path only** after the publication segment.

Example combined:

```
vyasa://adi/vysamples/vyasa-bg/2:47
         │    │          │        └── content address (structure-relative)
         │    │          └── publication_id
         │    └── catalog_id
         └── registry_id
```

HTTP: `/adi/vysamples/vyasa-bg/2:47`

## Registry ids

| id | Role |
|----|------|
| `adi` | Default global registry |
| `local` | Dev source in Settings |
| `global` | Reserved |

Reserved (not valid as catalog or publication ids): `adi`, `local`, `global`.

No backward-compatibility shims — update all workspaces together.

## Settings (target)

| Source | Behavior |
|--------|----------|
| **adi** | Always loaded |
| **local** | Optional URL; autodetect registry vs catalog JSON |

## Schema versioning

`type:semver` only:

| Document | Example |
|----------|---------|
| Registry | `registry:1.0.3` |
| Catalog | `catalog:1.1.0` |
| Publication entry | `publication:1.0.0` (optional per item) |

## JSON shape

### Registry

```json
{
  "schemaVersion": "registry:1.0.3",
  "id": "adi",
  "title": "Adi Registry",
  "catalogs": [
    {
      "id": "vysamples",
      "title": "Vyasa Samples",
      "catalog_url": "https://…/catalog.json"
    }
  ]
}
```

### Catalog

```json
{
  "schemaVersion": "catalog:1.1.0",
  "id": "vysamples",
  "title": "Vyasa Samples",
  "publisher": {
    "id": "project-vyasa",
    "title": "Project Vyasa",
    "homepage": "https://…"
  },
  "publications": [
    {
      "id": "vyasa-bg",
      "title": "Bhagavad Gita",
      "type": "work",
      "vyviewUrl": "vyasa-bg.vyview"
    }
  ]
}
```

Required per publication: `id`, `title`  
Required for platform viewer: `vyviewUrl` (until alternate loaders exist)  
Recommended: `description`, `license`, `type`, `language`  
Optional: `packaged_by`, `source_works[]`, `cover_url`, `schemaVersion`, other format URLs (e.g. `irUrl`, `pdfUrl`) — TBD in schema

## Vyasa URI surfacing

| Place | Status |
|-------|--------|
| Debug header | Done |
| Library (debug) | Done |
| Share / copy | Done |
| `vyasa://` resolver (`/link?uri=…`) | Done |

## Library UI (target)

- Catalog visibility toggles on library page
- Show publisher name from catalog metadata, not as route id

## Schema cutover (2026-07-31)

- **vyasa-docs** `registry.json` — `schemaVersion: registry:1.0.3`, `id: adi`, `catalogs[]`
- **vyasa-samples** `catalog.json` — `schemaVersion: catalog:1.1.0`, `id` (replaces legacy `identifier`)
- **vyasa-apps** — `registry-document.ts` legacy shim retained until GH Pages deploy catches up; remove in follow-up once live JSON is new-format everywhere

## Corporate environments

Some networks block unknown binary downloads (including `.vyview`). Alternate delivery formats (HTTPS-served IR, PDF, etc.) attached to the same publication id are one mitigation — see WORK.md.

## Open questions

Decisions deferred until schema RFC in vyasa-docs. Platform may parse fields before UI uses them.

### `publications[].type` enum

Start with a small closed set; defer freeform `tags[]` until browse volume warrants facets.

| Value | Meaning |
|-------|---------|
| `work` | Primary text — scripture, book, corpus |
| `commentary` | Commentary or annotation layer on a work |
| `translation` | Distinct translated edition (if not folded into `commentary`) |
| `note` | Informal / personal / knowledge-sheet style |
| `sample` | Demo or smoke-test publication (vysamples only; may stay out of production enum) |

`language` is separate (BCP 47, e.g. `sa`, `en`). `type` classifies the publication, not the language.

Related optional fields: `source_works[]`, `packaged_by` (link commentary → source work).

### Delivery formats (`vyviewUrl` vs array)

A publication is not tied to one file format. `vyasa://…/{publication_id}` identifies the logical edition, not the bytes.

**Today:** platform viewer requires `vyviewUrl` (only loader implemented).

**Target (lean):** `deliveries[]` with `{ "format": "vyview" | "ir" | "pdf" | …, "url": "…" }`. Keep `vyviewUrl` as a deprecated convenience (or derive from `deliveries`) through cutover. Avoid proliferating top-level `*Url` keys.

### Web link field name (`homepage` vs `webUrl`)

Used on registry, catalog, catalog-registry entries, and `publisher` — parsed by platform, **not rendered in UI yet** (library shows `publisher.title` only).

`homepage` is skeuomorphic (1990s “home page”). Alternatives under consideration:

| Name | Pros |
|------|------|
| `homepage` | Familiar in library/metadata ecosystems (Dublin Core `identifier` cousins, OPDS, etc.) |
| `webUrl` | Neutral — any canonical HTTPS landing page (org site, catalog repo, docs) |
| `url` | Short; ambiguous at registry vs catalog vs publication level |

**Open:** pick one name for schema cutover; avoid duplicating the same URL at catalog level and `publisher.*` when they point to the same place.

### `vyasac publish` and schema strictness

`publish` should **emit known fields** from structured sources (`vyasac.toml`, `publisher.toml`), not round-trip arbitrary keys from hand-edited `catalog.json`. Extra JSON keys are out of schema and may be dropped on rebuild. Forward compatibility via explicit `schemaVersion` bumps, not silent passthrough.

### License values on samples

Sample publications use license string **`Sample`** (not SPDX codes like CC0) to signal “demo content, not a rights statement.” Real publications should use SPDX or a clear rights string.
