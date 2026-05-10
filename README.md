# goodlookslikethis

Personal portfolio and blog. Jekyll static site hosted on GitHub Pages.

## Running locally

```bash
bundle exec jekyll serve --drafts
```

Drafts live in `_drafts/` and are only built with the `--drafts` flag.

## Adding a post

Create a file in `_posts/` named `YYYY-MM-DD-title-slug.md`. Minimum front matter:

```yaml
---
layout: 2023/post
title: Title here
subtitle: One-liner
intro: >
  Intro paragraph shown prominently on the post and in listings.
tags: [tag-one, tag-two]
categories: [category]
hero_image: /i/your-image.jpg
hero_image_alt: Description of image
date: YYYY-MM-DD
---

Post content here.
```

Images go in `/i/` — create a subdirectory for the topic if there are multiple images.

## Adding a case study

Pick the right collection for the work, create a file there, and use the `2023/case` layout:

```yaml
---
layout: 2023/case
title: Project name
subtitle: One-liner
intro: >
  Short summary.
challenge: What the problem was.
approach: How you tackled it.
result: What happened.
hero_image: /i/cases/project-slug/hero.jpg
hero_image_alt: Description
tags: [service-design, leadership]
---

Full case study content.
```

For strategy cases, add `noCallOut: "true"` to suppress the default CTA footer.

## Collections

| Directory | URL | Use for |
|---|---|---|
| `_cases_leadership/` | `/cases/leadership/` | Design leadership, people management |
| `_cases_sdingov/` | `/cases/sdingov/` | Service design in government |
| `_cases_strategy/` | `/cases/strategy/` | Strategy, direction-setting |
| `_cases_business/` | `/cases/business/` | Commercial / business-facing work |
| `_cases_practitioner/` | `/cases/practitioner/` | Senior IC, hands-on craft |
| `_cases_remote/` | `/cases/remote/` | Remote teams and distributed work |

## Layouts

Current layouts are in `_layouts/2023/`. There are older layouts at `_layouts/` root — these are still used by old posts, don't delete them.

## CSS

All styles are in `/css23/`:
- `grid.css` — layout and grid
- `typography.css` — type scale
- `posts-index.css` — blog listing styles
- `leadership.css` — leadership case styles

## Backlog

Things that exist but aren't wired up or finished:

- `_drafts/` — 14 draft posts, mostly 2020 stubs
- `_cases-WIP/` — 17 in-progress case studies
- `_posts-older-to-process/` — 50 old posts not yet reviewed or published
- `_posts-author-archive-old/` — 61 author archive posts
- `_cases_Zolder/` — 44 archived cases (not in config, won't build)

## Data

- `_data/cases.yml` — portfolio theme labels
- `_data/constants.yml` — case collection slugs and display names
- `_data/linkedin-recommendations.yml` — LinkedIn recommendation text
- `_data/roles.json` — role/experience data
