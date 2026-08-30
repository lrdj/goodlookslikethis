---
name: Good looks like this
description: A GOV.UK-echoing portfolio where the build itself is the argument — flat, square, semantic, and annotated in gold.
colors:
  haud-gold: "#af9568"
  ink-black: "#0b0c0c"
  echo-blue: "#BFD6E9"
  govuk-blue: "#1d70b8"
  light-grey: "#eaeaea"
  hairline-grey: "#e0e0e0"
  platinum: "#E5E4E2"
  text-black: "#000000"
  text-dark: "#333333"
  text-mid: "#666666"
  text-muted: "#999999"
  paper-white: "#ffffff"
typography:
  display:
    fontFamily: "'Iowan Old Style', 'Palatino Linotype', 'URW Palladio L', P052, serif"
    fontSize: "2em"
    fontWeight: 400
    lineHeight: 1.1
  headline:
    fontFamily: "system-ui, sans-serif"
    fontWeight: 700
    lineHeight: 1.3
  body:
    fontFamily: "system-ui, sans-serif"
    fontSize: "large"
    fontWeight: 200
    lineHeight: 1.5
  intro:
    fontFamily: "system-ui, sans-serif"
    fontSize: "1.33em"
    fontWeight: 200
  label:
    fontFamily: "system-ui, sans-serif"
    fontSize: "small"
    fontWeight: 700
rounded:
  none: "0"
spacing:
  wrapper-side-small: "1em"
  wrapper-side-full: "15%"
  wrapper-side-max: "20%"
components:
  button:
    backgroundColor: "{colors.paper-white}"
    textColor: "{colors.ink-black}"
    typography: "{typography.label}"
    rounded: "{rounded.none}"
    padding: "0.5em 1em"
  index-tile:
    backgroundColor: "{colors.paper-white}"
    textColor: "{colors.text-black}"
    padding: "1em 1em 2em 2.5em"
  index-tile-hover:
    backgroundColor: "{colors.haud-gold}"
    textColor: "{colors.paper-white}"
  case-highlight:
    backgroundColor: "{colors.light-grey}"
    textColor: "{colors.text-black}"
    padding: "1rem"
---

# Design System: Good looks like this

## Overview

**Creative North Star: "The Annotated White Paper"**

The site reads as a serious government document that someone with taste has marked up. The bones are GOV.UK's — ink-black borders, flat surfaces, disciplined measure, uppercase labels — and the annotations are personal: a Palatino-family serif for page titles, gold marginalia for links and highlights, a pale blue rule across the top of every page. The register is institutional with a wink: the gravity a minister expects of a supplier, carried lightly enough that the quirk is clearly deliberate.

The echo of GOV.UK is a credential, not a costume. Two of its exact palette values are quoted (`#0b0c0c` for button ink, `#1d70b8` for the role timeline), but the system never impersonates it — most visibly, the brandmark and top nav are deliberately *not* set in New Transport, respecting that typeface's usage restrictions. The confirmed anti-reference is the me-too consultancy site: nothing here performs, gradients, or borrows another supplier's visual language.

The build is part of the aesthetic: custom CSS only, no JavaScript for effects, no external fonts, no `<div>`s. Depth is drawn with borders and fills, motion is CSS transitions, and every visual decision should survive being read in the page source.

**Key Characteristics:**
- Flat, square, and border-structured — a document, not an app
- One serif (page titles only) against a light-weight system-ui body
- Haud Gold as the single annotation colour; Echo Blue as the ambient rule colour
- Uppercase, small, bold labels — components feel stamped and certain
- System fonts, keyword font sizes, em-based rhythm — the browser's own defaults, disciplined

## Colors

A paper-white ground annotated with one gold, ruled in one pale blue, and inked in GOV.UK black.

### Primary
- **Haud Gold** (`{colors.haud-gold}`): the annotation colour. Text links, index-tile headings and hover fills, the thick underline on the case-summary block, citation borders on `<q>` quotes, comparison-box outlines. It is desaturated brass — an old door plate, not jewellery — and it never appears as body text or a resting background.

### Secondary
- **Echo Blue** (`{colors.echo-blue}`): the ambient rule colour. The 10px band under the site header, `<hr>` dividers, callout-box headers, and the hairline left borders on question blocks and image captions. Named for what it does: it echoes the civil-service register without quoting it.
- **GOV.UK Blue** (`{colors.govuk-blue}`): quoted verbatim from GOV.UK, used only in the HMRC-style role timeline (its 5px spine and event markers). Do not spread it beyond that component.

### Neutral
- **Ink Black** (`{colors.ink-black}`): GOV.UK's text black, used for button borders and button text — the "stamp" ink.
- **Text Black / Dark / Mid / Muted** (`#000` / `#333` / `#666` / `#999`): body text is full black; `#333` for figcaption text and social-link hovers; `#666` for callout headers; `#999` for resting social links.
- **Light Grey** (`{colors.light-grey}`): the workhorse fill — header band, figcaption strips, callout list items, case-summary boxes, footer divider.
- **Hairline Grey** (`{colors.hairline-grey}`): 1px grid lines in the article index.
- **Platinum** (`{colors.platinum}`): the 4px left border on `<blockquote>` only.
- **Paper White** (`{colors.paper-white}`): the ground everywhere.

### Named Rules
**The Marginalia Rule.** Haud Gold is annotation: links, highlights, underlines, hover fills. It never sets body copy and never fills a surface at rest — the index-tile hover is the one moment it floods, and that flood is the payoff.

**The Echo Rule.** GOV.UK values are quoted, not cloned: `#0b0c0c` stays on buttons, `#1d70b8` stays on the timeline. New accent colours are not added to this palette.

## Typography

**Display Font:** Iowan Old Style (with Palatino Linotype, URW Palladio L, P052, serif fallbacks)
**Body Font:** system-ui (with sans-serif fallback)

**Character:** a bookish old-style serif surfacing once per page above a very light, entirely native sans. The pairing is the wink: government plumbing, personal byline. No font files are downloaded or linked — the stacks are system-resident by commitment.

### Hierarchy
- **Display** (400, 2em mobile / 3em ≥769px, 1.1): page titles only (`h1#headTitle`). The only serif on the site.
- **Headline** (700, browser-default sizes, 1.3): `h2`–`h6` in body copy; index-tile headings run 1.25em at weight 800 (1.5em ≥769px) in Haud Gold.
- **Intro** (200, 1.33em): the post-intro standfirst under a title.
- **Body** (200, `large`; `x-large` ≥1600px, 1.5): all prose. Weight 200 is load-bearing — it is what makes full-black text read as calm. Desktop prose is held to a 66% measure.
- **Label** (700, `small`, uppercase): buttons, case prev/next nav, tag lists, callout headers, figcaption strips. The stamped register.

### Named Rules
**The One Serif Rule.** The serif stack appears in exactly one place: the page title. Everything else — headings included — is system-ui.

**The No-Transport Rule.** The brandmark and top nav are deliberately not set in New Transport, and it is never introduced. The site evokes GOV.UK; it does not wear its typeface.

**The Keyword Rule.** Font sizes are CSS keywords (`small`, `medium`, `large`, `x-large`) or em multiples — never px. The type scale belongs to the browser.

## Layout

A single centred column defined by side padding, not max-width: `1em` each side on mobile, `15%` from 769px, `20%` from 1760px (the `--wrapper-side-*` variables). Body type steps up to `x-large` at 1600px, so the site grows rather than floats on large screens.

Within the column, desktop prose (`p`, `h2`, `ul` in two-thirds articles) is held to a **66% measure**; full-bleed-within-wrapper is reserved for images, the index grid, and summary blocks. Callout asides float right on desktop with a `1.5em` gutter.

The article index is a 2-column CSS grid (1 column below 769px) drawn with 1px Hairline Grey rules on all sides — a ruled ledger, not cards. The first item may span both columns and takes deeper padding (`2em 0.75em 4em 2.5em`).

Vertical rhythm is em-based: paragraphs `0.25em 0 1em`, headings open `1.5em` above, `main` closes with `2em`. There is no spacing token scale beyond this rhythm; do not invent one.

**Breakpoints:** 769px (layout), 1600px (type), 1760px (wrapper).

## Elevation & Depth

**The Flat-By-Doctrine Rule.** Surfaces are flat. Depth and hierarchy are drawn with borders and fills — 2px ink borders, 1px hairlines, left-border citations, the 10px Echo Blue band — never with shadows or layering. The sole shadow on the site is `0 4px 10px rgba(0, 0, 0, 0.2)` on the zoomable case-image hover, and it exists only as feedback for a user action (the image is lifting toward you). Any new shadow is a violation, not a variation.

## Shapes

Everything is square. There is no `border-radius` anywhere in the system — buttons, tiles, images, summary boxes all keep hard corners, which is what makes components read as stamped and certain. Borders carry the form language: 2px solid ink for interactive emphasis, 1px hairlines for structure, 1px left borders (Echo Blue or Haud Gold) for citation and aside, and single thick bands for punctuation (10px Echo Blue under the header, 0.5rem Haud Gold under the case summary). Index-tile hover images are clipped square by the tile's `overflow: hidden`.

## Components

### Buttons
- **Character:** a rubber stamp — bordered, uppercase, certain.
- **Shape:** hard corners (0 radius).
- **Default:** Paper White ground, Ink Black text and 2px solid Ink Black border, uppercase `small` bold, padding `0.5em 1em`.
- **Hover:** a `0.25s ease-out` transition is declared and `--but-brdr-col-hover` (Haud Gold) exists in `:root`, but no hover rule is currently applied — declared intent, unused. If a hover state is ever added, it should use that variable.
- **Pagination variant:** `#postPagination .button` drops the border and sets Haud Gold at `medium` size — a text-button.

### Index tile (signature component)
- **Character:** the site's one moment of theatre — restraint until touch, then the gold flood.
- **At rest:** Paper White cell in the hairline-ruled grid; Haud Gold heading, black excerpt text.
- **On hover:** background floods Haud Gold over `0.5s ease`; all text inverts to white; the case's image fades in behind (`opacity 0 → 0.8`) greyscaled, `mix-blend-mode: multiply`, easing from `scale(1.05)` to `scale(1)`. Text stays above the image (`z-index: 2`).
- Built with a `figure::before` background image (`--bg-image` custom property) — CSS only, no JS.

### Case summary ("Challenge / Approach / Result")
- Three Light Grey boxes in a 3-column grid (stacked on mobile), `1rem` internal padding, closed by a **0.5rem solid Haud Gold bottom border** — the gold underline that certifies the case.
- Rendered as a `ul.project-details` with `aria-label="Case highlights"`; headings are `h3`.

### Quotes
- **`<blockquote>`** (editorial quote): 4px Platinum left border, 125% size (133% and indented `2em` each side on desktop).
- **`<q>`** (testimonial/citation): 1px Haud Gold left border, block-displayed, 150% line-height, desktop right margin 25% — the gold border marks quoted praise.

### Callout box (strategy pages / leadership index)
- Floats right on desktop. Echo Blue header strip (uppercase, `small`/`x-small` bold, `#666` or `#333` text, 4px white bottom border), stacked Light Grey list items separated by 1px white rules. Reads as an index card stapled to the page.

### Figure captions
- `figcaption`: Light Grey strip under the image, `1em` padding, `small` size, `#333`.
- `.heroimagecaption`: `x-small` bold, held to 66% width on desktop.
- `.imagecaption`: `small` with the 1px Echo Blue left border.

### Role timeline (HMRC-style)
- 5px solid GOV.UK Blue left spine; each event is a `li` with a 7×5px GOV.UK Blue tick positioned at its title line. The one component where the government blue appears.

### Navigation
- **Header:** 50px Light Grey band (51–53px on larger screens); logo and nav links are inline SVG images; nav items separated by 2px Ink Black vertical rules. Below it, the 10px Echo Blue band on `nav.first`.
- **Case prev/next:** uppercase `small` bold text links, flex row on desktop with "back to [collection]" growing left.
- **Links in prose:** Haud Gold, transitioning to black on hover over `0.1s ease-in-out`.

### Social list (footer)
- 20px SVG icons with 14px bold labels, both `#999` at rest, darkening to `#333` on hover over `0.3s`.

## Do's and Don'ts

### Do:
- **Do** draw structure with borders: 2px Ink Black for interactive emphasis, 1px Hairline Grey for grids, 1px left borders for citations and asides.
- **Do** keep desktop prose at the 66% measure inside the wrapper.
- **Do** set labels uppercase, `small`, weight 700 — the stamped register is the component voice.
- **Do** use CSS keyword font sizes and em-based spacing; let the browser own the scale.
- **Do** build all motion as CSS transitions (0.1s links, 0.25s buttons, 0.3s zooms, 0.5s tile reveals) — no JavaScript, no keyframe spectacle.
- **Do** keep alt text discipline on every hero and nav image; the site targets WCAG AAA where possible, AA as the floor.

### Don't:
- **Don't** add `border-radius` anywhere — the system is square by doctrine.
- **Don't** add shadows at rest; the zoom-hover shadow is the documented sole exception.
- **Don't** download or link external fonts, and never set anything in New Transport.
- **Don't** introduce new accent colours, spread GOV.UK Blue beyond the timeline, or use Haud Gold for body text or resting backgrounds.
- **Don't** write `<div>`s; keep `<span>`s to a minimum — markup describes the content semantically (this constrains what visual structures are buildable, by design).
- **Don't** touch the legacy generation (`_layouts/` root, root `_includes/`, old posts) — this system governs `_layouts/2023/` and new work only.
