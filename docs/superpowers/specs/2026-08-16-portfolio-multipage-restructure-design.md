# Portfolio multi-page restructure — design spec

Date: 2026-08-16
Status: Approved by Agnes, pending implementation plan

## Context

The portfolio site (`agibauer4/portfolio-website`, deployed to GitHub Pages
at `/portfolio-website/`) is currently a single scrolling page: `Nav` /
`Hero` / `Work` (2 placeholder cards) / `About` (real content) / `Contact`
sections joined by anchor links, no client-side router.

Agnes wants to grow this into a real portfolio structure: two deep UX case
studies, a broader "other work" showcase, a creative/photography section,
and a dedicated about page. This spec covers the **structure** only —
routing, page templates, component/data architecture, and placeholder
content. Real case study write-ups, creative work images, and other-work
project entries are a separate, later content pass.

## Decisions made during brainstorming

1. **Multi-page, not single-scroll.** Each major section becomes its own
   route with a real, shareable URL — case studies specifically benefit
   from a link a hiring manager can be sent directly.
2. **Placeholders first.** No real case study/creative/other-work content
   exists yet; this pass builds the structure and templates, content comes
   later.
3. **Routing strategy: HashRouter.** GitHub Pages is a static host with no
   server-side rewrite rules, so a direct load or refresh on a path like
   `/work/case-study-1` would 404 under `BrowserRouter`. `HashRouter`
   (URLs like `.../#/work/case-study-1`) sidesteps this entirely with no
   extra server configuration, at the cost of the `#` in the URL. This can
   be swapped for `BrowserRouter` + a custom domain later — it's a
   contained, one-router change, not revisited here.
4. **Contact stays a footer CTA.** No dedicated `/contact` route or form
   in this pass — the existing mailto pill in the footer, present on every
   page via the shared layout, is enough for now.
5. **Résumé button added.** A pill button in the nav (visually distinct
   from the nav links, since it's an action/download, not a destination).
   Links to a static PDF asset (path TBD when the actual resume file is
   provided — placeholder `href="#"` until then).
6. **No testimonials section** in this pass.
7. **"Other work" has no per-item detail pages.** Items in the other-work
   grid either link out externally or sit static with no link — they are
   lighter-weight than the two deep case studies by design.
8. **About becomes its own full page**, moving the existing About content
   (bio paragraphs, achievements/specialisation/philosophy cards, stack
   tags) off the homepage entirely. Home gets a short teaser instead.

## Site map

```
#/                Home — hero, 2 featured case-study cards, "other work"
                  teaser, about teaser, footer
#/work            Work index — both case studies (full-size cards) +
                  "other work" grid below
#/work/:slug      Case study deep dive (2 placeholder entries:
                  case-study-1, case-study-2)
#/creative         Photography / other creative work — placeholder gallery
                  grid
#/about           Full about page (existing About content, relocated)
```

No `/contact` route. Nav: `Work · Creative · About` as links, `Résumé ↓`
as a pill button, site name/logo links to `#/`.

## Page content

**Home (`#/`)**
Nav → Hero (existing) → "Featured work": 2 case-study teaser cards (image
placeholder, title, one-liner, "Read case study →" → `#/work/:slug`) →
"Other work" teaser (one line + "See more work →" → `#/work`) → About
teaser (2-3 line intro + "More about me →" → `#/about`) → Footer.

**Work index (`#/work`)**
Nav → header → the 2 case-study cards (larger than the Home teaser
variant) → "Other work" grid: smaller cards (title, one-liner, tag e.g.
"Freelance"/"Side project", optional external-link icon) → Footer.

**Case study (`#/work/:slug`)**
Nav → header (title, one-line summary, role, timeline, tools — all
placeholder metadata) → Context → Process → Solution (image placeholder
blocks) → Outcome → "Next case study →" link to the other slug → Footer.

**Creative (`#/creative`)**
Nav → header → flexible gallery grid of placeholder tiles, built to
tolerate mixed aspect ratios (real photos will vary) → Footer.

**About (`#/about`)**
Nav → existing About content moved here wholesale (unchanged) → Footer.

## Component & file architecture

```
src/
  main.jsx                — wraps <App/> in <HashRouter>
  App.jsx                 — <Routes> definitions only
  components/
    Layout.jsx             — Nav + <Outlet/> + Footer (shared shell)
    Nav.jsx                 — Work · Creative · About links + Résumé pill,
                              logo/name links to "/"
    Footer.jsx              — unchanged
    WorkCard.jsx             — unchanged, reused on Home + Work index
    OtherWorkCard.jsx        — new, smaller card variant for "other work"
  pages/
    Home.jsx
    Work.jsx                 — index page
    CaseStudy.jsx              — reads :slug param, renders matching entry
    Creative.jsx
    About.jsx                  — existing About content moves here as a page
    NotFound.jsx               — catch-all 404 fallback
  data/
    site.js                   — existing, unchanged
    about.js                   — existing, unchanged
    caseStudies.js             — new: array of 2 placeholder entries
                                 { slug, title, summary, role, timeline,
                                 tools, context, process, solution, outcome }
    otherWork.js                — new: array of placeholder entries
                                 { title, description, tag, link? }
    creative.js                  — new: array of placeholder gallery items
                                 { id, aspect } where aspect is one of
                                 'portrait' | 'landscape' | 'square', so the
                                 grid can vary tile sizes before real photos
                                 exist
```

New dependency: `react-router-dom`.

## Error handling

A catch-all `*` route renders `NotFound` (short message + link back to
Home). This matters specifically because HashRouter means any string
after the `#` is a possible "URL," including garbage — the app needs a
defined fallback rather than a blank page.

## Testing / verification plan

After implementation:
1. `npm run lint` and `npm run build` both pass.
2. Click through every nav link and every case-study "Next case study"
   link in the browser preview.
3. Confirm a direct load / hard refresh on a nested hash route (e.g.
   `#/work/case-study-1`) resolves correctly — this is the specific
   failure mode HashRouter is chosen to avoid, so it must be verified,
   not assumed.
4. Confirm the existing GitHub Pages deployment (base path
   `/portfolio-website/`) still works with the router in place.

## Out of scope (explicitly deferred)

- Real content for both case studies, creative/photography images, and
  other-work project entries.
- A `/contact` page or contact form.
- Testimonials/recommendations section.
- Custom domain / `BrowserRouter` migration.
- The actual résumé PDF file — the nav button ships with `href="#"` as a
  placeholder and needs a real link once the file exists.
