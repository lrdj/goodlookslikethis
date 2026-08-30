# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Primary audiences, in priority order:

1. **Potential clients** — buyers in UK public sector consultancy, up to and including ministers and senior civil servants, evaluating Dug (and his small group of associates) for engagements in service design and delivery, business change, org design and strategy.
2. **Recruiters** — assessing fit for senior design leadership and consulting roles.
3. **Potential partners or employees** — associates and collaborators deciding whether to work with Dug.

Buyers typically arrive via a shared link to a case collection tailored to their concern (leadership, service design in government, strategy, business, practitioner, remote work).

## Product Purpose

goodlookslikethis.com is a tool for Dug to land thought-leadership and secure clients. It supports blogging and case studies as the two core content types. Success for a visit is that it **starts a conversation** — a visitor gets in touch or agrees to a call; future work should nudge towards contact.

The desired effect on the primary buyer: when a minister or senior civil servant considering hiring Dug reads the site and its case studies, they should feel confident this is a supplier with deep expertise in public sector digital transformation, trusted and respected by his clients and peers.

The site is also built with a point of view — an ethical/political element expressed through how it is made, not just what it says. The build itself (accessible, dependency-free, semantic) is part of the argument; the technical constraints below are commitments, not incidental implementation detail.

## Positioning

Gov + commercial breadth: 18+ years spanning government (HMRC, Defra, Irish Department of Social Protection) and commercial work at scale (Coca-Cola Enterprises, Diageo, Dixons turnaround, building Accenture/Avanade's UK experience-led digital practice). A neighbouring portfolio could not truthfully claim both.

## Operating Context

- The market is UK public sector consultancy; Dug offers consulting with the support of a small group of associates.
- Case studies are organised into per-audience collections under `/cases/…` (leadership, sdingov, strategy, business, practitioner, remote) so a tailored link can be sent to a specific buyer.
- The blog carries thought-leadership posts; newer posts (2024+) may include an audio version (`readit`/`audiobook` front matter).
- Strategy cases suppress the contact call-out (`noCallOut`) — the CTA behaviour is deliberate per collection.

## Capabilities and Constraints

- Jekyll static site on GitHub Pages, no theme, custom CSS only (`/css23/`), no JS framework. Portable, works-without-internet builds are preferred; dependencies are vendored into the repo.
- **No JavaScript.** Where a unique or specific example genuinely needs it, the exception must be tracked and documented. Known exceptions as of August 2026: the copyright-year one-liner in `_includes/2023/footer-rev-js.html`, and the locally-hosted comments client (`/js/client.js`, loaded by `_includes/2023/comments.html`).
- **No external JavaScript libraries.** Motion effects and, where possible, all visual effects are created with CSS.
- **No external fonts** — the site neither downloads nor links to third-party font services.
- **Semantic markup.** No `<div>` tags; `<span>` tags kept to a minimum. Target behaviour is markup that realistically describes each DOM element semantically. ARIA is used where appropriate. No known deviations in the current generation as of August 2026.
- These constraints apply to the current (2023) generation of layouts and to new work; the legacy generation predates them and is preserved as-is under the respect-the-archive principle.
- Two generations of layouts and front matter coexist (`_layouts/2023/` current, root legacy); old posts depend on legacy layouts and field names, and layout conditionals guard both. This messiness is intentional and must be preserved — see `CLAUDE.md` and `docs/architecture.md`.
- Content archive migrated from Movable Type; large unprocessed backlogs exist (`_cases-WIP/`, `_cases_Zolder/`, `_posts-older-to-process/`).
- UK English spelling; sentence case by default.

## Brand Commitments

- Name: **Good looks like this** — the name itself is the show-don't-tell stance: real work shown, not marketing claims.
- Voice and tone: **serious, measured, reliable** — conveying the seriousness a minister or senior civil servant expects of a supplier — with just enough quirk to be interesting or challenging. Plain-spoken, first-person. The site does not do a me-too against other suppliers' sites.
- Visual direction (binding, carried into DESIGN.md when it is written): the site **evokes/echoes the design of GOV.UK**, reflecting Dug's expertise in GOV.UK service delivery. It respects the usage restrictions on the New Transport typeface — the top nav and the "goodlookslikethis" brandmark, for example, are deliberately *not* set in Transport.
- Identity assets: existing custom CSS system in `/css23/`; photography and work artefacts in `/i/`.

## Evidence on Hand

- Real case studies with named clients across seven collections (`_cases*/` directories).
- LinkedIn recommendations, quoted on `/about.html` and held in `_data/linkedin-recommendations.yml`, from named senior roles (M&S Digital, Accenture SVP, HMRC Head of Design, Tesco.com CTO, EPAM, Glasshouse).
- BIMA100 recognition in service design consulting; advisory board seat at the New Breed innovation network.
- Role/experience data in `_data/roles.json`; audio versions of some posts in `/readit/`.
- Do not fabricate testimonials, client names, metrics or outcomes beyond what these sources contain.

## Product Principles

1. **Show the work** — real artefacts, real clients, real outcomes beat abstract claims; every page should demonstrate rather than assert.
2. **Every case earns a conversation** — content and CTAs should make getting in touch the natural next step for a buyer (except where deliberately suppressed, e.g. strategy cases).
3. **Tailored routes for different buyers** — preserve and use the per-audience collection structure rather than flattening to one generic portfolio.
4. **Respect the archive** — old posts, legacy layouts and messy data are part of the record; new work must not break or erase them.
5. **The build is the argument** — the site practises what its author sells: accessible, semantic, dependency-free, portable. Static, custom CSS, no frameworks, no external anything; it should build and read anywhere. Cutting a corner here undermines the positioning.

## Accessibility & Inclusion

Target **WCAG AAA** where possible. As a marketing site there may be exceptions, and in those cases compliance goes no lower than **AA**. ARIA is used where appropriate. Hero images carry alt text via `hero_image_alt`/`heroalt`; keep that discipline.
