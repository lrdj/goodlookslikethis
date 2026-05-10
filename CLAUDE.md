# goodlookslikethis — context for Claude

Personal portfolio/blog site. Jekyll, hosted on GitHub Pages, no theme. Migrated from Moveable Type via MySQL dump; the site has grown organically and the data is intentionally messy. Read this before touching anything.

## Running locally

```bash
bundle exec jekyll serve --drafts
```

## Architecture

- Custom CSS only — `/css23/` (grid.css, typography.css, posts-index.css, leadership.css)
- No JS framework
- Images live in `/i/` (494MB, 142 subdirs organised by case/topic)
- External CDN resources are committed directly into the repo (avatars.githubusercontent.com/, s3.amazonaws.com/, unpkg.com/) — don't treat these as source files

## Two generations of layouts

Current layouts are in `_layouts/2023/`. Legacy layouts sit at `_layouts/` root and are still referenced by old posts — don't delete them.

| Current | Legacy equivalent |
|---|---|
| `2023/post.html` | `post_rev.html`, `post_rev2.html` |
| `2023/case.html` | `case.html` (root) |
| `2023/page.html` | `page.html` (root) |

Same split in `_includes/`: current components are in `_includes/2023/`, legacy in root `_includes/`.

Rollback/backup layouts also exist in `_layouts/2023/` (case-anon.html, case-rollback.html, case-pre-exception-revert.html) — leave them alone.

## Front matter: old vs new field names

The same concept has multiple field names depending on when a post was written. Layouts use conditionals to handle both; don't remove the guards.

| Concept | Current key | Legacy key(s) |
|---|---|---|
| Hero image | `hero_image` | `featured_image` |
| Hero alt text | `hero_image_alt` | `heroalt` |
| Taxonomy | `categories` (list) | `category` (singular) |
| Case structure | `challenge` / `approach` / `result` | `situation` / `task` / `activity` |

### Full front matter reference

**All posts:**
```yaml
layout: 2023/post       # use this for new posts
title:
subtitle:
intro: >                # block scalar, displayed prominently
  ...
tags: []
categories: []
hero_image: /i/...
hero_image_alt:
hero_image_caption:     # optional
date: YYYY-MM-DD
```

**New posts (2024+):**
```yaml
readit: true            # marks post for reading list feature
audiobook: filename.mp3 # links to audio version
```

**Case studies (2023/case.html):**
```yaml
layout: 2023/case
challenge:              # structured summary block
approach:
result:
hero_image:
hero_image_zoom:        # zoom scale on hover (e.g. 1.2)
hero_is_video: true     # if hero is a video not an image
hero_image_caption:
subtitle_image:         # media for subtitle section
subtitle_video:
index_image:            # image used in collection index
index_video:
noCallOut: "true"       # suppresses "Can I help?" CTA (strategy cases)
target:                 # URL — wraps hero image in a link
```

**Legacy case studies (case.html root layout):**
```yaml
layout: case
situation:
task:
activity:
result:
bodyclass: cases        # or casesLeadership etc.
```

## Collections

Active collections and their slugs:

| Directory | URL prefix | Purpose |
|---|---|---|
| `_cases/` | `/cases/` | Base cases |
| `_cases_leadership/` | `/cases/leadership/` | Design leadership work |
| `_cases_sdingov/` | `/cases/sdingov/` | Service design in government |
| `_cases_strategy/` | `/cases/strategy/` | Strategy work (different CTA behaviour) |
| `_cases_business/` | `/cases/business/` | Business-facing cases |
| `_cases_practitioner/` | `/cases/practitioner/` | Senior IC / hands-on work |
| `_cases_remote/` | `/cases/remote/` | Remote team cases |

**Not collected (unprocessed backlog):**
- `_cases-WIP/` — 17 in-progress cases
- `_cases_Zolder/` — 44 archived cases, 440MB, not in _config.yml
- `_posts-older-to-process/` — 50 posts awaiting processing
- `_posts-author-archive-old/` — 61 author archive posts

## Data files

- `_data/cases.yml` — portfolio themes; contains `portfolio_themesA` and `portfolio_themesB` which are identical (unresolved A/B test)
- `_data/constants.yml` and `_data/constants-rev.yml` — case category slug definitions; two versions exist, purpose of the difference is unclear
- `_data/linkedin-recommendations.yml` and `_data/LI-recommendations-formatted.yaml` — same LinkedIn data in two files
- `_data/roles.json` — role/experience data

## Layout conditionals to know about

These exist to handle old data formats — don't remove them without checking all posts still build cleanly:

- `if page.challenge` — renders STAR summary block (cases)
- `if page.hero_image` / `if page.hero_is_video` — hero media routing
- `if page.featured_image` — legacy image fallback in older layouts
- `if page.path contains "_strategy/"` — strategy-specific CTA and styling
- `if page.noCallOut != "true"` — conditional CTA suppression
- `if page.bodyclass` — legacy CSS routing in footer/includes
- `if page.intropara` — old intro key (blogindex.html)

## Known issues / unfinished work

- 14 drafts in `_drafts/`, mostly 2020-era stubs with old front matter
- `_includes/post-tiles.html` is a 2-byte stub — not functional
- `_data/cases.yml` has duplicate A/B theme entries
- Two duplicate data files for LinkedIn recommendations and constants
- Cached CDN resources committed to repo add bulk to git history
