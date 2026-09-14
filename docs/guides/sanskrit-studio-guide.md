---
title: Sanskrit Studio
description: Beginner guide to Lipi, Pāṭha, and Varṇa in the browser studio.
status: draft
live: https://project-vyasa.github.io/vyasa-apps/sanskrit/
local: http://localhost:5374/
---

# Sanskrit Studio

> **Status:** Internal notes in **vyasa-apps** (`docs/guides/`). Not a published HTML docs site.  
> **Live:** [project-vyasa.github.io/vyasa-apps/sanskrit/](https://project-vyasa.github.io/vyasa-apps/sanskrit/)  
> **Local:** `cd apps/sanskrit-studio && bun run dev` → http://localhost:5374/  
> **Viewer** (catalogs and reading) is a different app; its guide is not written yet.

Sanskrit Studio is a small, **experimental** workbench. It runs in the browser (no account, no upload). The engine is WebAssembly from `vyutils`. If the engine is missing, a banner says so — restart the dev server after `wasm-pack`.

It is **not** a reader of packed publications. Use the [Viewer](https://project-vyasa.github.io/vyasa-apps/) for that.

---

## The window

| Region | What it is |
|--------|------------|
| **Header** | Logo, *Sanskrit Studio*, activity title, **Labels**, theme and density |
| **Activity bar** (left) | Three tools: Lipi, Pāṭha, Varṇa |
| **Main pane** | The tool you picked |

**Labels** change how *Sanskrit words in the chrome* are written (menus, titles, pattern names). Canonical source is IAST; the picker converts into Devanagari, Telugu, Grantha, … English glosses stay English. This is separate from “output script” inside Lipi or Pāṭha.

On a narrow screen (about phone width), chrome tightens; the same three activities remain.

---

## Lipi — transliteration

**What:** Rewrite the same Sanskrit between **11 scripts**, keeping Vedic pitch marks.

**Do this:**

1. Open **Lipi**.
2. Choose **from** and **to** scripts.
3. Type or paste in the left box (or tap a Vedic mark from the palette into the cursor).
4. Read the right box. The **lossless** badge means a round-trip back to the source script matches.

Use this when you know a verse in Devanagari (or IAST) and want Grantha, Telugu, Tamil, … without losing accents.

---

## Pāṭha — recitation patterns

**What:** Start from **Pada-pāṭha** (words already split, usually with `|` or daṇḍas). The studio can emit **Krama** and **Jaṭā**. Other traditional patterns are listed so you can see the family; they are not generated yet.

**Do this:**

1. Open **Pāṭha**.
2. Put pada text in the **left** editor (a golden pada is there to try).
3. Pick **Krama** or **Jaṭā**.
4. Switch **table** vs **trainer**: table is the full expansion; trainer is one step at a time.
5. Set the **output script** for the generated text (independent of Labels).

**Mental model:**

- Left pane is **padas**. If you paste continuous saṃhitā, the tool will not magically split it into words.
- **Pada** as an output pattern would just re-emit those words. **Saṃhitā** would join them with sandhi. Neither is a live button yet.
- **Krama** pairs each word with the next, then extra *iti* rows where tradition requires them.
- **Jaṭā** is the braid on those pairs: forward, reverse, forward.

---

## Varṇa — phonetics

**What:** Inspect one sound (or a short string) against a tradition: **Pāṇini**, **Ṛgveda-Prātiśākhya**, or **Taittirīya**.

**Do this:**

1. Open **Varṇa**.
2. Pick a tradition.
3. Type a syllable or use the inspector.
4. Read place of articulation, effort, quantity, and (where the engine knows it) dvitva / juncture notes.

Use this when a grammar or prātiśākhya line talks about a *varṇa* and you want the articulatory description, not when you want a translation of a verse.

---

## What this app is not

- Not a dictionary, morphology analyser, or meter scanner.
- Not a full Vedic recitation trainer for Mālā, Śikhā, Rekha, Dhvaja, Daṇḍa, Ratha, Ghana.
- Not the place to open a packed Ṛgveda or Gītā — that is the Viewer.

If the page shows tofu (empty boxes) for a script, the webfont for that script is not loaded yet. Labels and content still convert; the glyph may be missing.
