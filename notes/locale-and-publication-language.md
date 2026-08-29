# App locale vs publication language

> Design task. Do not implement until we have a rule.

Two independent axes today:

| Layer | Example | What it labels |
| --- | --- | --- |
| **App locale** | `en-US` (BCP 47) | Shell chrome: Library, Settings, activity names, generic buttons |
| **Publication language** | catalog `language: sa` | The work itself (Bhagavad Gita Sanskrit) |
| **Chrome stream** | `mula`, `iast`, `primary` | Publisher-supplied titles, facet value names, nav labels |

The reader **Language** control only switches chrome stream. It is not the app locale.

## Scenario

App locale `en-US`, publication `sa` (BG: that implies **mula**, not an English title set).

- Defaulting Language from app locale would be wrong: there is no `en` stream; `iast` is romanized Sanskrit, not English.
- Defaulting Language from `language: sa` → `mula` is closer, but Latin-script users often want `iast` when the publisher packed it.
- Shell stays English either way (“Facets”, “Language”, “Copy link”). Mixed-script pages are expected.

## Open questions

1. Prefer publisher `primary_stream` always, or prefer a romanization/localization stream when the app locale’s script is Latin and the work is `sa`?
2. How do we map BCP 47 (`sa`, `en`, `en-US`) onto stream ids (`mula`, `iast`, `translation`)? Vocabulary? Manifest table?
3. Per-publication Language choice vs a global preference that leaks across catalogs.
4. Facet *type* headings (“speaker”) vs facet *values* (संजय / sañjaya) — which follow app locale vs chrome stream?
5. Catalog cards in Library already show `language: sa` as metadata; should that drive first-open Language, or only display?

Related: catalog `language` in [`catalog-identity.md`](./catalog-identity.md); chrome streams in `chromeStreamsFromVocabulary`; reader/explore **Language** control.
