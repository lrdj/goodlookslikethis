---
layout: 2023/page
title: "Case studies — how the section works"
---

# The case studies section, end to end

This is the part that's easy to forget. It's only a few moving parts, but they're spread
across config, data, includes and filenames, so here's the whole chain in one place.

For step-by-step "how do I add/reorder/hide", jump to
[maintenance.md › Common tasks](maintenance.md#common-tasks). This doc explains how it
*works* so you can change it safely.

---

## The chain, in order

### 1. Collections decide what exists

`_config.yml` defines seven case collections. Each is a `_cases_*` folder with a URL prefix:

```yaml
collections:
  cases:               { output: true, permalink: /cases/:name }
  cases_leadership:    { output: true, permalink: /cases/leadership/:name }
  cases_sdingov:       { output: true, permalink: /cases/sdingov/:name }
  cases_strategy:      { output: true, permalink: /cases/strategy/:name }
  cases_business:      { output: true, permalink: /cases/business/:name }
  cases_practitioner:  { output: true, permalink: /cases/practitioner/:name }
  cases_remote:        { output: true, permalink: /cases/remote/:name }
```

A case study is just a `.md` file in one of these folders. If a folder isn't listed here,
it doesn't build — that's why `_cases_Zolder/` (archive) and `_cases-WIP/` never appear.
**First lever for "does it show up": which folder the file is in.**

### 2. Each collection has its own `index.html`

e.g. `_cases_practitioner/index.html`. The front matter that matters:

```yaml
parent: "cases_practitioner"   # which collection the listing loop iterates
theme: "serviceDesign"         # key into _data/constants.yml for title + subtitle
bodyclass: "cases"             # or "casesLeadership" for the table layout
```

The body barely does anything itself — it pulls in two includes: the section header/nav,
and the listing loop.

### 3. The listing loop decides what shows + in what order

`_includes/2023/case-index-loop.html`:

```liquid
{% raw %}{% for case in site[page.parent] %}
  {% unless case.path contains "index.html" or case.tags contains "exception" %}
    ... render the card ...{% endraw %}
```

- **`site[page.parent]`** is the clever bit: the loop iterates whatever collection the index
  page named in `parent`. One include serves every section.
- **What's shown** is controlled by the `unless`: it skips `index.html` itself, and skips
  any case tagged **`exception`**. So `tags: - exception` hides a case from the listing
  (the page itself still builds and is reachable at its URL).
- There's a branch on `bodyclass == "casesLeadership"` that renders a table
  (`caseOrgName / caseType / caseAction / caseImpact`) instead of the default title +
  subtitle card.

**Ordering:** there is **no `sort_by`** in `_config.yml` and **no `order:`/`weight:`** field
anywhere, so Jekyll uses its default for collections: **alphabetical by filename.** That's
why the files are named with letter prefixes:

```
_cases_sdingov/a-environmental-regulator.md
_cases_sdingov/b-hmrc-PTA.md
_cases_sdingov/c-funding-agency.md
...
_cases_sdingov/i-cui.md
_cases_sdingov/x-defra-LIP.md            ← x- = parked, also tagged `exception`
_cases_sdingov/x-environmental-regulator.md
```

> ⚠️ The `date:` field on a case does **not** affect this order. Collections aren't
> date-sorted unless you tell them to be. **Rename the file to reorder — nothing else works.**

### 4. The section header + nav come from a data file

`_includes/2023/cases-header-submenu.html`:

```liquid
{% raw %}<h1>{{ site.data.constants[page.theme].title }}</h1>
<p>{{ site.data.constants[page.theme].subtitle }}</p>
<nav>
  {% for item in site.data.constants %}
    <a href="/cases/{{ item[1].slug }}/">{{ item[1].title }}</a>
  {% endfor %}
</nav>{% endraw %}
```

So the page's H1/subtitle and the row of "jump to another section" buttons are **all driven
by `_data/constants.yml`**.

### 5. The top-level `/cases/` page lists categories, not cases

`_cases/index.html` loops `site.data.constants` to render the category cards
("case studies by nature of engagement") — again, driven by `constants.yml`.

---

## Gotcha: the nav is driven by `constants.yml`

This is the one that'll bite. Steps 4 and 5 both read **`_data/constants.yml`**, and that
file currently lists only **three** sections:

```
sdInGov, designLeadership, serviceDesign
```

There is a second file, **`_data/constants-rev.yml`**, with **five** entries (it adds
`strategy` and `remoteTeams`) — but **nothing references it.** It's dead.

**Consequence:** the `strategy`, `business`, and `remote` collections build fine and are
reachable at their URLs, but they are **not linked from the section nav or from the
`/cases/` category index.** If you ever think "this section isn't showing up" even though
the cases exist — this is why.

**To surface a section in the nav/category index:** add its entry to `constants.yml` (the
live file). The `key` must match the index page's `theme:` value; `slug` must match the URL
(`/cases/<slug>/`). Don't bother with `constants-rev.yml` unless you decide to make it the
live one and rewire the includes — right now it's a trap, not a feature.

---

## Quick reference: the levers

| Want to… | Do this |
|---|---|
| Add a case to a section | Drop a `.md` into the matching `_cases_*` folder |
| Reorder cases in a section | Rename files — alphabetical, use `a- b- c-` prefixes |
| Hide a case but keep the file | `tags: - exception` (and conventionally an `x-` prefix) |
| Add / remove a section *from the nav* | Edit `_data/constants.yml` |
| Add a brand-new section | Config + folder + `index.html` + `constants.yml` — see [maintenance.md](maintenance.md#add-a-whole-new-case-section) |
| Switch a section to the table layout | Set `bodyclass: "casesLeadership"` on its `index.html` |

## Files involved (so you know where to look)

```
_config.yml                                  # registers collections
_data/constants.yml                          # LIVE: section titles, slugs, nav  ← edit this
_data/constants-rev.yml                      # DEAD: unused 5-entry variant       ← ignore
_cases_*/index.html                          # per-section index (parent + theme)
_includes/2023/case-index-loop.html          # the listing loop (order + exception filter)
_includes/2023/cases-header-submenu.html     # section H1/subtitle + nav buttons
_cases/index.html                            # the /cases/ category landing page
_layouts/2023/case.html                      # the layout each case study uses
```
