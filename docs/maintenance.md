---
layout: 2023/page
title: "Maintenance runbook"
---

# Maintenance runbook

Practical, copy-pasteable steps for keeping the site running and adding content.
For *why* things are structured the way they are, see
[architecture.md](architecture.md) and [case-studies.md](case-studies.md).

---

## Run it locally

```bash
bundle install                       # first time, or after a Gemfile change
bundle exec jekyll serve --drafts    # serves at http://localhost:4000
```

- `--drafts` includes anything in `_drafts/`. Drop it to preview only what will go live.
- **Restart the server after editing `_config.yml` or any `_data/*` file** — Jekyll does
  not hot-reload those. Editing posts, pages, layouts, and includes *does* live-reload.
- Ruby/Bundler is the only toolchain. There is no Node build, no npm, no bundler for JS.

If `bundle install` complains, you probably changed Ruby versions. The Gemfile pins
`github-pages` (which in turn pins the Jekyll version GitHub actually uses) plus `webrick`
(needed on Ruby 3+).

---

## Deploy

There is no manual deploy and no GitHub Actions workflow.

1. Commit your changes.
2. `git push origin main`.
3. GitHub Pages rebuilds automatically. Live within ~1–2 minutes at
   **goodlookslikethis.com** (the custom domain is set by the `CNAME` file).

If a build fails, GitHub emails the commit author. Builds fail most often because of:
a YAML front-matter typo, or a Jekyll plugin that GitHub Pages doesn't allow (only the
plugins in `_config.yml` — `jekyll-feed`, `jekyll-paginate` — are on the allowlist).

> **Tip:** `main` *is* production. There's no staging. Preview locally before pushing.

---

## Common tasks

### Add a blog post

Create `_posts/YYYY-MM-DD-your-slug.md`:

```yaml
---
layout: 2023/post
title: Title here
subtitle: One-liner
intro: >
  Intro paragraph, shown prominently on the post and in listings.
tags: [tag-one, tag-two]
categories: [category]
hero_image: /i/your-image.jpg
hero_image_alt: Plain-language description of the image
date: YYYY-MM-DD
---

Body content in markdown.
```

- The filename date and the `date:` field should match.
- Posts are date-ordered automatically — no need to manage their order by hand.
- Optional newer keys: `audiobook: filename.mp3`, `readit: true` (reading-list feature).

### Add a case study

1. Pick the collection that fits the work (see the table in [Collections](#collections)).
2. Create a markdown file in that folder. **The filename controls ordering** — see
   [Reorder cases](#reorder-cases-in-a-section).
3. Use the `2023/case` layout:

```yaml
---
layout: 2023/case
title: Project name
subtitle: One-liner
intro: >
  Short summary.
challenge: What the problem was.
approach: How you tackled it.
result: What happened (ideally with a number or two).
hero_image: /i/cases/project-slug/hero.jpg
hero_image_alt: Plain-language description
tags: [service-design, leadership]
---

Full case study content.
```

- Strategy cases: add `noCallOut: "true"` to suppress the "Can I help?" CTA footer.
- Want the hero to be a video? `hero_is_video: true`. Want it to link out? `target: <url>`.
- For the full list of case front-matter keys, see
  [architecture.md › Case study front matter](architecture.md#case-study-front-matter).
- For *what to write*, see `../case-study-howto.md`.

### Reorder cases in a section

Cases in a section are listed **alphabetically by filename** (there is no sort config).
Control the order by prefixing filenames with letters:

```
_cases_sdingov/a-environmental-regulator.md   ← shown first
_cases_sdingov/b-hmrc-PTA.md
_cases_sdingov/c-funding-agency.md
...
```

To move a case, rename it. To insert one between `b-` and `c-`, either renumber or use
`bb-`. Unprefixed files sort after… well, alphabetically by their real name, so mixing
prefixed and unprefixed files in one folder gets unpredictable — prefix them all if order
matters.

### Hide a case (without deleting it)

Add `exception` to its tags:

```yaml
tags:
  - service-design
  - exception      # ← removes it from the section's index listing
```

- The case **page still builds and is reachable at its URL** — `exception` only removes it
  from the section listing.
- Convention in this repo: parked/alternate versions are also renamed with an `x-` prefix
  (e.g. `x-defra-LIP.md`) so they sort to the bottom and read as "excluded" at a glance.

### Add images

- Images live in `/i/`. For a case with several images, make a subfolder:
  `/i/cases/your-project/`.
- Reference them with an absolute path from the site root: `/i/cases/your-project/hero.jpg`.
- `/i/` is large (~500MB). Be mindful adding big files — they're committed to git history.

### Publish a draft

Move the file from `_drafts/` into `_posts/` and rename it to
`YYYY-MM-DD-slug.md`. Check/refresh its front matter — many drafts are old stubs with
legacy field names (see [architecture.md](architecture.md#front-matter-old-vs-new)).

### Add a whole new case section

This is the one multi-step task — a section is a Jekyll collection, so several files must
agree. To add, say, a "research" section at `/cases/research/`:

1. **Register the collection** in `_config.yml` under `collections:`:
   ```yaml
   cases_research:
     output: true
     permalink: /cases/research/:name
   ```
2. **Create the folder** `_cases_research/`.
3. **Add an index page** `_cases_research/index.html` (copy an existing one, e.g.
   `_cases_practitioner/index.html`) and set:
   ```yaml
   parent: "cases_research"   # tells the listing loop which collection to iterate
   theme: "research"          # key into _data/constants.yml for the title/subtitle
   bodyclass: "cases"
   ```
4. **Add the nav/labels** in `_data/constants.yml` (this is what drives the section nav and
   the `/cases/` category index — see the gotcha in
   [case-studies.md](case-studies.md#gotcha-the-nav-is-driven-by-constantsyml)):
   ```yaml
   research:
     title: "Research"
     slug: "research"
     subtitle: "…"
   ```
5. **Restart** `jekyll serve` (config + data changes need a restart) and check the section
   lists, the nav button appears, and `/cases/` shows the new category.

---

## Collections

| Folder | URL | Use for |
|---|---|---|
| `_cases/` | `/cases/` | Base collection. Its `index.html` lists the *categories*, not cases. |
| `_cases_leadership/` | `/cases/leadership/` | Design leadership, people management |
| `_cases_sdingov/` | `/cases/sdingov/` | Service design in government |
| `_cases_strategy/` | `/cases/strategy/` | Strategy, direction-setting |
| `_cases_business/` | `/cases/business/` | Commercial / business-facing work |
| `_cases_practitioner/` | `/cases/practitioner/` | Senior IC, hands-on craft |
| `_cases_remote/` | `/cases/remote/` | Remote teams and distributed work |

**Not collected (won't build, by design):** `_cases-WIP/`, `_cases_Zolder/` (archive),
`_posts-older-to-process/`, `_posts-author-archive-old/`. To bring any of these live, treat
it like content to add — move files into a real collection/`_posts`, refresh front matter.

---

## Troubleshooting

| Symptom | Likely cause / fix |
|---|---|
| New case doesn't appear in its section | Tagged `exception`? In a folder that's actually in `_config.yml`? Restart `serve` if you touched config. |
| New case in wrong position | Ordering is by filename — rename with a letter prefix. |
| A whole section is missing from the nav | The nav reads `_data/constants.yml`, which only lists *some* sections. Add an entry there. See [case-studies.md](case-studies.md#gotcha-the-nav-is-driven-by-constantsyml). |
| Image 404s | Path must be absolute from site root, e.g. `/i/...`, and the file must be committed. |
| Config/data change not showing locally | Restart the server — Jekyll doesn't reload `_config.yml` or `_data/`. |
| Build passes locally but fails on GitHub | Usually a non-allowlisted plugin or a YAML front-matter error. Check the email from GitHub. |
| Old post renders weirdly | It probably uses legacy front-matter keys or a root layout — see [architecture.md](architecture.md). |
| GitHub build fails but local `serve` is fine | GitHub force-enables `jekyll-optional-front-matter`, which renders **every** loose `.md` — including `README.md` and `CLAUDE.md` — through Liquid. A literal Liquid tag or output expression (the curly-brace / percent syntax) in those files fails the build, even though local `serve` copies them raw and never catches it. Avoid Liquid syntax in prose, or wrap code samples in raw/endraw tags. See [architecture.md › Local build ≠ GitHub build](architecture.md#local-build--github-build). |
