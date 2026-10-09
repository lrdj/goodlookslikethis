# Migration note: GLLT_01 to the dug-llm account

Written 9 Oct 2026 on the old machine. Target clone path: `/Users/dug-llm/Sites/GLLT_01`.
Nothing was committed or changed by the prep session except this file. No braces appear in
this note on purpose: loose `.md` at the repo root is rendered through Liquid on GitHub Pages.

## 1. Working tree

`git status --short --ignored` reports a clean tracked tree and five ignored entries:
`_site/`, `.jekyll-cache/`, `.sass-cache/`, `_sass/`, `transfer/`, plus `.DS_Store` files.

| Path | What it is | Action |
|---|---|---|
| `.sass-cache/` (152 KB) | Old Sass compiler cache | Leave behind |
| `_sass/` | Contains only `.DS_Store`; shown as ignored because it is otherwise empty | Leave behind |
| `transfer/` | Contains only `.DS_Store` | Leave behind |
| `.claude/settings.local.json` | Tracked (three commits, last `1a6347b`) despite the global ignore rule in `/Users/dug/.gitignore_global` | Keep tracked; see section 4 |

No `.env`, `.env.*`, `CLAUDE.local.md`, `.mcp.json` or `.bundle/` exists in the repo.

## 2. Absolute paths in tracked files

`git grep -n -e '/Users/dug' -e '-Users-dug-Sites'` hits one file only,
`migration-prep-goodlookslikethis.md`, at lines 10, 17, 28, 34, 36, 37, 38 and 55. Every hit is
inside the pasted instruction or its narrative and describes the migration itself. Proposed edit:
none. Leave the file as a record. Optionally add it and `MIGRATION.md` to the `exclude` list in
`_config.yml` so neither publishes to the live site (the prep note already renders at
`/migration-prep-goodlookslikethis.html`).

The project's own source, layouts, includes, data files and docs contain no home-directory paths.

## 3. Claude memory (read only)

`/Users/dug/.claude/projects/-Users-dug-Sites-GLLT-01/memory/` holds two files, both dated
23 May 2026 15:27:22: `MEMORY.md` (191 bytes) and `github-pages-forces-liquid-on-loose-md.md`
(1693 bytes). Nothing else is present. Unchanged since copy.

## 4. Project instructions

| File | Exists | Tracked | References old home path |
|---|---|---|---|
| `CLAUDE.md` | yes | yes | no |
| `CLAUDE.local.md` | no | | |
| `.claude/settings.local.json` | yes | yes | no; it allows `rm -rf /tmp/gh_site /tmp/gh-overlay.yml` and reads under `/private/tmp/gh_site/`, which are machine-neutral |
| `.claude/settings.json` | no | | |
| `.mcp.json` | no | | |

`CLAUDE.md` is listed in the `_config.yml` exclude list so it does not publish. The tracked
`settings.local.json` is a permissions allow-list only, no secrets, and the global ignore on the
new machine will stop future edits from being staged unless added with `git add -f`.

## 5. Build and dependencies

- `Gemfile`: `github-pages` (lockfile pins version 231, which brings `jekyll 3.9.5`), `jekyll-feed`,
  `jekyll-paginate`, `webrick`, `csv`, `logger`. No `package.json`, `Makefile`, `Rakefile`,
  `.ruby-version` or `.tool-versions`. No `.github/` workflows; GitHub Pages builds from the branch.
- `Gemfile.lock`: `BUNDLED WITH 2.5.6`. No `RUBY VERSION` stanza.
- `_config.yml`: plugins `jekyll-feed`, `jekyll-paginate`, `jekyll-relative-links`; seven case
  collections; `exclude` list repeats Jekyll defaults plus `PRODUCT.md` and `CLAUDE.md`.
- Serve locally: `bundle exec jekyll serve --drafts` (CLAUDE.md, README.md, docs/maintenance.md).
- Old machine toolchain: Ruby 3.2.2 via rbenv 1.3.2 and ruby-build 20250724 (Homebrew), RubyGems
  3.4.10, Bundler 2.5.6 installed into the rbenv Ruby. Gems install to the rbenv gem dir; no
  `bundle config path`. `bundle check` passes. Nothing the site needs is installed outside the
  lockfile. Global gems not in the lockfile are Ruby's bundled defaults plus `sass-embedded` and
  `google-protobuf`, neither used (the lockfile's `jekyll-sass-converter 1.5.2` uses `sass 3.7.4`).
  A stale Ruby 2.7 user gem dir at `/Users/dug/.gem/ruby/2.7.0/bin` is on PATH; not needed.
- Fresh Mac with Homebrew:

```bash
brew install rbenv ruby-build libyaml
rbenv install 3.2.2 && rbenv global 3.2.2      # add 'eval "$(rbenv init - zsh)"' to ~/.zshrc first
gem install bundler -v 2.5.6
cd ~/Sites/GLLT_01 && bundle install
```

- GitHub-faithful build, as `docs/architecture.md` lines 191-192 describe it:

```bash
bundle exec jekyll build --config _config.yml,_gh-overlay.yml -d /tmp/ghtest --trace
```

  `_gh-overlay.yml` is not tracked and has never been committed (`git log --all` finds nothing);
  it was a throwaway in `/tmp` and is gone. The prep session rebuilt it in the scratchpad with
  the content below and the build passed (exit 0, 2.6 s, 109 top-level outputs, `docs/*.html`
  present). Recreate it in the clone, or commit it and add it to the exclude list.

```yaml
plugins:
  - jekyll-feed
  - jekyll-paginate
  - jekyll-relative-links
  - jekyll-optional-front-matter
  - jekyll-readme-index
  - jekyll-default-layout
  - jekyll-titles-from-headings
  - jekyll-seo-tag
```

## 6. Large or sensitive files

Repo: 3651 tracked files, `.git` is 1.5 GB (pack 1.46 GiB). Public repo `lrdj/goodlookslikethis`,
so anything tracked is also world-readable, and anything not excluded in `_config.yml` is served
on goodlookslikethis.com. Ten largest tracked files:

| KB | Path |
|---|---|
| 37304 | `www.gsa.gov/system/files/gsagov_homepage_hero_h264_08252021.mp4` |
| 19952 | `cdn/from_insight_to_experience.mp4` |
| 18624 | `i/cases/jctf/prod-CPO-map-lg.png` |
| 16168 | `cdn/energy-transition.mp4` |
| 15488 | `readit/Helpfulness_vs_accuracy.mp3` |
| 15152 | `cv/Dug_Falby_work.pdf` |
| 12260 | `i/adoption-formula.mp4` |
| 12192 | `readit/Value_prop_and_positioning.mp3` |
| 11500 | `hmrc/methods.pdf` |
| 11324 | `readit/The_Human_Touch_vs.mp3` |

Flagged against the cv-skill rule (never commit primary-research transcripts or PID-bearing raw
research; the repo is public here, not private). Flag only, nothing deleted:

- `_cases-WIP/embark-futures/Ranila-update.txt`: line 1 says the work is under NDA and names the
  real client, parent and brand that the case must anonymise. Served 404 (underscore dir) but public in git.
- `_cases-WIP/*.pdf`, `_cases-WIP/embark-futures/thread-design-effectiveness.pptx`: client decks and PDFs.
- `BP-for-Andy/` (19 MB): `Research-team-onsite.jpg`, service blueprints, `hmrc-pta-hirez.png`, `tubemap.mov`.
  Looks like raw research and internal HMRC artefacts shared with a named colleague.
- `hmrc/book.pdf`, `hmrc/methods.pdf` (19 MB): served live at `/hmrc/`.
- `cv/` (20 MB): two CVs, a work-sample PDF and a Lipton deck. `cv/Dug_Falby_work.pdf` contains a
  phone number. All served live at `/cv/`. `.impeccable/` is tool output, not sensitive.
- `JG-and-JS-6June2025.md`: interview case-study presentation page, served live.
- `Haud/case-study-*.html`, `NOT_cases/` (62 files): client case drafts, served live.
- `_includes/header.html` line 25 prints a personal mobile number on every page.
- `_data/roles.json`, `_data/linkedin-recommendations.yml`, `_data/LI-recommendations-formatted.yaml`:
  named recommenders; already public by design.

No `.env`, keys or credentials were found. Word-boundary greps for confidential, NDA, API key and
private-key markers hit only the Embark note above and public US-government mirror content.

## 7. Hand-off for the first session in the new account

1. Clone: `git clone https://github.com/lrdj/goodlookslikethis.git /Users/dug-llm/Sites/GLLT_01`
   (path must stay `~/Sites/GLLT_01` because cv-skill's `CLAUDE.md` and `index/` point at it).
2. Toolchain: run the four Homebrew and rbenv lines in section 5, then `bundle install`.
3. Path edits: none required. Optional: add `MIGRATION.md`, `migration-prep-goodlookslikethis.md`
   and `_gh-overlay.yml` to the `exclude` list in `_config.yml`.
4. Recreate `_gh-overlay.yml` from section 5 (or commit it after step 3).
5. Smoke test: `bundle exec jekyll build --config _config.yml,_gh-overlay.yml -d /tmp/ghtest --trace && ls /tmp/ghtest/index.html`
6. Open a Claude Code session there and confirm the Liquid-braces memory loads from
   `~/.claude/projects/-Users-dug-llm-Sites-GLLT-01/memory/`.
7. Decide on the section 6 flags before the next push; git history keeps whatever is already there.
