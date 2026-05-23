---
layout: 2023/page
title: "Site maintenance docs"
permalink: /docs/
---

# Maintenance docs

Internal docs for running and updating **goodlookslikethis** (the portfolio/blog at
[goodlookslikethis.com](https://goodlookslikethis.com)). These are for you, future-you,
or anyone helping out. They're published as styled pages on the live site at
**[goodlookslikethis.com/docs/](https://goodlookslikethis.com/docs/)** and are also
browsable as plain markdown on GitHub.

If you've been away from this for a while, read the 60-second model below, then go to the
doc you need.

## The 60-second mental model

- It's a **Jekyll** static site, **no theme**, hosted on **GitHub Pages**. Push to
  `main` → GitHub rebuilds → live in a minute or two. There is no build server to babysit.
- **Posts** (blog/articles) live in `_posts/`, named `YYYY-MM-DD-slug.md`.
- **Case studies** live in `_cases_*/` folders. Each folder is a Jekyll **collection** and
  maps to a URL like `/cases/leadership/`. A case study is just a markdown file dropped in
  the right folder.
- **Order of cases is alphabetical by filename.** That's why you'll see files named
  `a-…`, `b-…`, `c-…`. Rename to reorder. (There's no clever sort config.)
- **To hide a case** but keep the file: add `exception` to its `tags`.
- The site has **two generations of layouts**. New stuff uses `_layouts/2023/` and
  `_includes/2023/`. The old ones at the root are still used by old content — leave them.
- The data is **intentionally messy** (migrated from Movable Type, grown organically).
  Some files are duplicated or half-finished. The known traps are written down so you don't
  have to rediscover them. See `architecture.md`.

## Which doc do I want?

| I want to… | Read |
|---|---|
| Run it locally, deploy, do a common task, fix a build | **[maintenance.md](maintenance.md)** |
| Understand / change the case studies section | **[case-studies.md](case-studies.md)** |
| Understand the overall structure, front matter, data files, gotchas | **[architecture.md](architecture.md)** |
| Write good case-study *content* (the words, not the plumbing) | `../case-study-howto.md` |
| Quick orientation for the repo as a whole | `../README.md` |
| Context for Claude / AI assistants | `../CLAUDE.md` |

## The two-minute "add something" cheat sheet

- **New blog post** → new file in `_posts/` called `YYYY-MM-DD-slug.md`, `layout: 2023/post`.
- **New case study** → new file in the right `_cases_*/` folder, `layout: 2023/case`.
- **Reorder cases** → rename the files (`a-`, `b-`, `c-` prefixes).
- **Hide a case** → add `- exception` under `tags:` in its front matter.
- **New case section** → it's a few coordinated steps; see
  [maintenance.md › Add a whole new case section](maintenance.md#add-a-whole-new-case-section).
- **Always preview locally first** with `bundle exec jekyll serve --drafts`.

Full step-by-step for each of these is in [maintenance.md](maintenance.md).
