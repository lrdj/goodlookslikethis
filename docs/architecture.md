---
layout: 2023/page
title: "Architecture & structure"
---

# Architecture & structure reference

How the site is put together, and — just as important — the parts that are messy on
purpose. This site was migrated from Movable Type (via a MySQL dump) and has grown
organically, so the data is uneven by design. Read this before deleting anything that
looks redundant; some of it is load-bearing.

For the case studies section specifically, see [case-studies.md](case-studies.md).
For day-to-day tasks, see [maintenance.md](maintenance.md).

---

## Tech

- **Jekyll** static site, **no theme**, hosted on **GitHub Pages** (custom domain via
  `CNAME` → goodlookslikethis.com).
- **Custom CSS only**, in `/css23/` (`grid.css`, `typography.css`, `posts-index.css`,
  `leadership.css`). No CSS framework.
- **No JS framework**, no Node build step. Ruby/Bundler is the whole toolchain.
- Plugins (must be on the GitHub Pages allowlist): `jekyll-feed`, `jekyll-paginate`.
- Images in `/i/` (~500MB, ~142 subfolders by case/topic).
- Some external CDN assets are **committed into the repo** as folders
  (`avatars.githubusercontent.com/`, `s3.amazonaws.com/`, `unpkg.com/`, and various `.gov`
  domains). These are cached copies, not source. Don't treat them as things to "fix".

---

## Two generations of layouts and includes

The site has been through a redesign. **Current** templates live under a `2023/`
subfolder; **legacy** ones sit at the root and are still referenced by older content.
Don't delete the legacy ones.

| Concept | Current | Legacy equivalent(s) |
|---|---|---|
| Post layout | `_layouts/2023/post.html` | `_layouts/post_rev.html`, `post_rev2.html` |
| Case layout | `_layouts/2023/case.html` | `_layouts/case.html` (root) |
| Page layout | `_layouts/2023/page.html` | `_layouts/page.html` (root) |
| Includes | `_includes/2023/*` | `_includes/*` (root) |

There are also **rollback/backup** layouts in `_layouts/2023/` — `case-anon.html`,
`case-rollback.html`, `case-pre-exception-revert.html`, `case copy.html`. These are safety
nets from past changes. Leave them alone unless you're deliberately cleaning up.

**Rule of thumb:** new content uses `layout: 2023/post` or `layout: 2023/case`. If you see
an old layout name in a file's front matter, that file is intentionally on the old path.

---

## Front matter: old vs new

The same concept has different field names depending on when the content was written.
Layouts use conditionals to support both, so **don't remove the guards** (see below).

| Concept | Current key | Legacy key(s) |
|---|---|---|
| Hero image | `hero_image` | `featured_image` |
| Hero alt text | `hero_image_alt` | `heroalt` |
| Taxonomy | `categories` (list) | `category` (singular) |
| Case structure | `challenge` / `approach` / `result` | `situation` / `task` / `activity` |

### Post front matter (current)

```yaml
layout: 2023/post
title:
subtitle:
intro: >          # block scalar, shown prominently
  ...
tags: []
categories: []
hero_image: /i/...
hero_image_alt:
hero_image_caption:   # optional
date: YYYY-MM-DD
# newer optional keys:
readit: true          # reading-list feature
audiobook: file.mp3   # links an audio version
```

### Case study front matter

```yaml
layout: 2023/case
title:
subtitle:
intro: >
  ...
challenge:            # the structured STAR-ish summary block
approach:
result:
hero_image:
hero_image_alt:
hero_image_zoom:      # zoom scale on hover, e.g. 1.2
hero_is_video: true   # hero is a video, not an image
hero_image_caption:
subtitle_image:       # media for the subtitle section
subtitle_video:
index_image:          # image used in the collection index
index_video:
noCallOut: "true"     # suppress the "Can I help?" CTA (used by strategy cases)
target:               # URL — wraps the hero image in a link
tags: []              # add `exception` to hide from the section index
```

### Legacy case studies (root `case.html` layout)

```yaml
layout: case
situation:
task:
activity:
result:
bodyclass: cases      # or casesLeadership, etc.
```

---

## Layout conditionals — why they exist

These guards exist purely to cope with the mixed old/new data. Removing one will break some
slice of old content. If you must touch one, rebuild the whole site (`--drafts` too) and
spot-check old posts/cases.

| Conditional | Purpose |
|---|---|
| `if page.challenge` | Render the STAR summary block (cases) |
| `if page.hero_image` / `if page.hero_is_video` | Hero media routing |
| `if page.featured_image` | Legacy hero fallback in older layouts |
| `if page.path contains "_strategy/"` | Strategy-specific CTA and styling |
| `if page.noCallOut != "true"` | Conditional CTA suppression |
| `if page.bodyclass` | Legacy CSS routing in footer/includes |
| `if page.intropara` | Old intro key (blogindex) |

---

## Collections

See [maintenance.md › Collections](maintenance.md#collections) for the table and URLs, and
[case-studies.md](case-studies.md) for how the listing/order/nav actually work.

**Active (built):** `_cases/`, `_cases_leadership/`, `_cases_sdingov/`, `_cases_strategy/`,
`_cases_business/`, `_cases_practitioner/`, `_cases_remote/`.

**Not built (backlog/archive — by design):**

| Folder | What it is |
|---|---|
| `_cases-WIP/` | ~17 in-progress cases |
| `_cases_Zolder/` | ~44 archived cases (~440MB), not in `_config.yml` |
| `_posts-older-to-process/` | ~50 posts awaiting processing |
| `_posts-author-archive-old/` | ~61 author-archive posts |
| `_drafts/` | ~14 drafts, mostly 2020-era stubs with old front matter |

---

## Data files (`_data/`)

| File | Status | Notes |
|---|---|---|
| `constants.yml` | **LIVE** | Section titles/slugs/subtitles; drives case nav + `/cases/` index. **Only 3 entries.** Edit this to add a section to the nav. |
| `constants-rev.yml` | **DEAD** | A 5-entry variant (adds strategy + remote). Referenced nowhere. A trap — ignore unless you rewire the includes. |
| `cases.yml` | partial | Portfolio theme labels. Contains `portfolio_themesA` and `portfolio_themesB` which are **identical** — an unresolved A/B test. |
| `linkedin-recommendations.yml` | dup | Same LinkedIn data as `LI-recommendations-formatted.yaml`. Two formats of one dataset. |
| `LI-recommendations-formatted.yaml` | dup | See above. |
| `roles.json` | live | Role / experience data. |

---

## Known messy bits / unfinished work

A running inventory so you don't waste time "discovering" these:

- `_data/constants.yml` (live, 3 entries) vs `_data/constants-rev.yml` (dead, 5 entries) —
  the strategy/business/remote sections aren't in the live nav as a result. See
  [case-studies.md](case-studies.md#gotcha-the-nav-is-driven-by-constantsyml).
- `_data/cases.yml` has duplicate `portfolio_themesA` / `portfolio_themesB` blocks.
- Two duplicate LinkedIn-recommendation data files.
- `_includes/post-tiles.html` is a 2-byte stub — not functional.
- `_includes/case_indices copy.html`, `_layouts/2023/case copy.html` — stray "copy" files.
- Backlog folders (above) hold a lot of unprocessed content.
- Cached CDN-domain folders are committed to the repo and bloat git history.
- Root-level one-off pages exist (`valtech.html`, `laurabellamy.html`,
  `product-leadership.html`, `roadmap-example.html`, `test.html`, etc.) — bespoke pages,
  not part of any collection. Treat each on its own terms.

> If you clean any of this up, update this list and the relevant doc so the map stays true.
