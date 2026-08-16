# Portfolio Multi-Page Restructure Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Split the single-scroll portfolio page into a routed multi-page site (Home, Work index, per-case-study detail, Creative, About) with placeholder content, using HashRouter for GitHub Pages compatibility.

**Architecture:** `react-router-dom`'s `HashRouter` wraps the app in `main.jsx`. A shared `Layout` component (Nav + `<Outlet/>` + Footer) wraps every route so navigation chrome isn't duplicated per page. Each route renders a component from a new `src/pages/` directory; page-specific placeholder content lives in new `src/data/` files, following the existing pattern (`site.js`, `about.js`).

**Tech Stack:** React 19, Vite 8, `react-router-dom` (new dependency), plain CSS (no CSS framework) — matches the existing stack exactly.

**Spec:** `docs/superpowers/specs/2026-08-16-portfolio-multipage-restructure-design.md`

## Global Constraints

- Routing must use `HashRouter`, not `BrowserRouter` — GitHub Pages has no server-side rewrite rules, so a direct load on `/work/case-study-1` would 404 under `BrowserRouter`. (Spec decision 3.)
- No `/contact` route — the mailto CTA lives in the shared `Footer`, present on every page. (Spec decision 4.)
- No testimonials section in this pass. (Spec decision 6.)
- "Other work" items never get individual detail pages — they link out externally or sit static. (Spec decision 7.)
- Every new content field is placeholder text/data — this is the actual deliverable of this plan, not a TODO to fill in later. Do not add comments like `// TODO: real content`.
- The résumé nav button ships with `href="#"` — there is no real PDF yet. (Spec decision 5 / Out of scope.)
- This repo has no unit test framework (no vitest/jest configured, no `test` script in `package.json`). Verification for every task is: `npm run lint`, `npm run build`, then a manual check in the running dev server via the browser tooling already used in this project's earlier sessions (`mcp__Claude_Browser__*`: `preview_start`/`navigate`/`get_page_text`/`read_console_messages`/`computer` screenshot). This matches the spec's own "Testing / verification plan" section.
- Existing GitHub Pages base path (`/portfolio-website/`, set in `vite.config.js`) must keep working — do not touch `vite.config.js`.

---

## Task 1: Routing skeleton — Layout, Nav, Footer, NotFound, Home, About

**Files:**
- Modify: `package.json` (add `react-router-dom` via `npm install`)
- Modify: `src/main.jsx`
- Modify: `src/App.jsx`
- Modify: `src/App.css`
- Modify: `src/data/site.js`
- Create: `src/components/Layout.jsx`
- Modify: `src/components/Nav.jsx`
- Modify: `src/components/Footer.jsx`
- Create: `src/pages/Home.jsx`
- Create: `src/pages/NotFound.jsx`
- Create: `src/pages/About.jsx` (content moved from `src/components/About.jsx`)
- Create: `src/data/caseStudies.js`
- Delete: `src/components/About.jsx` (moved to `src/pages/About.jsx`)
- Delete: `src/components/Contact.jsx` (mailto CTA absorbed into `Footer`)
- Delete: `src/components/Work.jsx` (superseded by `src/pages/Work.jsx` in Task 2)
- Delete: `src/data/projects.js` (superseded by `src/data/caseStudies.js`)

**Interfaces:**
- Produces: `Layout` (`src/components/Layout.jsx`) — default export, no props, renders `Nav` + `<Outlet/>` + arch-divider + `Footer`.
- Produces: `Nav({ name })` (`src/components/Nav.jsx`) — same prop signature as before.
- Produces: `Footer({ name, email })` (`src/components/Footer.jsx`) — **signature changed**, now also takes `email`.
- Produces: `Home` (`src/pages/Home.jsx`) — default export, no props.
- Produces: `About` (`src/pages/About.jsx`) — default export, no props (content identical to the old `src/components/About.jsx`).
- Produces: `NotFound` (`src/pages/NotFound.jsx`) — default export, no props. Task 3 will import and render this directly (not just via the router) for unknown case-study slugs.
- Produces: `caseStudies` (`src/data/caseStudies.js`) — named export, array of `{ slug, title, summary, role, timeline, tools: string[], context, process, solution, outcome }`, 2 entries. Task 2 and Task 3 both consume this.
- Produces: CSS classes `.btn`, `.btn:hover`, `.link-arrow`, `.link-arrow:hover`, `.teaser`, `.nav nav a.nav-resume` (+ `:hover`), updated `.arch-divider` (now purple), updated `#not-found`.
- Consumes: nothing from other tasks (this is the first task).

- [ ] **Step 1: Install react-router-dom**

Run:
```bash
npm install react-router-dom
```

Verify `package.json`'s `dependencies` block now includes a `react-router-dom` entry.

- [ ] **Step 2: Add Home/About teaser copy to site data**

Modify `src/data/site.js` — replace the whole file:

```js
export const site = {
  name: 'Agnes Bauer',
  role: 'Product designer',
  tagline: "Portfolio — case studies, process, and things I've shipped.",
  email: 'agi.bauer4@gmail.com',
  aboutTeaser:
    "I'm a senior product designer and product architect who gravitates toward complex B2B systems — SaaS or on-prem.",
  otherWorkTeaser:
    "There's a broader collection of freelance work and side projects too.",
}
```

- [ ] **Step 3: Create the case studies data file**

Create `src/data/caseStudies.js`:

```js
export const caseStudies = [
  {
    slug: 'case-study-1',
    title: 'Case study one',
    summary: 'One-line description of the problem and outcome.',
    role: 'Lead product designer',
    timeline: '2024 — 2025',
    tools: ['Figma', 'Framer'],
    context:
      'Placeholder context paragraph describing the problem space, business constraints, and user needs.',
    process:
      'Placeholder process paragraph describing research, iteration, and key decisions made along the way.',
    solution: 'Placeholder solution paragraph describing the design that shipped.',
    outcome:
      'Placeholder outcome paragraph describing measurable impact or what shipped.',
  },
  {
    slug: 'case-study-2',
    title: 'Case study two',
    summary: 'One-line description of the problem and outcome.',
    role: 'Lead product designer',
    timeline: '2023 — 2024',
    tools: ['Figma', 'Sketch'],
    context:
      'Placeholder context paragraph describing the problem space, business constraints, and user needs.',
    process:
      'Placeholder process paragraph describing research, iteration, and key decisions made along the way.',
    solution: 'Placeholder solution paragraph describing the design that shipped.',
    outcome:
      'Placeholder outcome paragraph describing measurable impact or what shipped.',
  },
]
```

- [ ] **Step 4: Move About into pages/**

Create `src/pages/About.jsx` with exactly the current contents of `src/components/About.jsx`:

```jsx
import { about } from '../data/about.js'

function About() {
  return (
    <section id="about">
      <h2>About</h2>

      {about.paragraphs.map((segments, i) => (
        <p key={i} className="about-paragraph">
          {segments.map((seg, j) =>
            typeof seg === 'string' ? seg : <strong key={j}>{seg.text}</strong>
          )}
        </p>
      ))}

      <div className="about-columns">
        {about.columns.map((col) => (
          <div className="about-card" key={col.title}>
            <span className="about-badge">{col.title}</span>
            <ul>
              {col.items.map((item, i) => (
                <li key={i}>
                  {item.text}
                  {item.note && <div className="about-note">{item.note}</div>}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="about-stack">
        <span className="about-stack-label">stack</span>
        {about.stack.map((tool) => (
          <span className="about-tag" key={tool}>
            {tool}
          </span>
        ))}
      </div>
    </section>
  )
}

export default About
```

Then delete `src/components/About.jsx`.

- [ ] **Step 5: Delete superseded files**

Delete these three files (nothing will import them after this task):
- `src/components/Contact.jsx`
- `src/components/Work.jsx`
- `src/data/projects.js`

- [ ] **Step 6: Update Footer to absorb the contact CTA**

Replace `src/components/Footer.jsx` entirely:

```jsx
function Footer({ name, email }) {
  return (
    <footer>
      <a className="btn" href={`mailto:${email}`}>
        {email}
      </a>
      <p>
        &copy; {new Date().getFullYear()} {name}
      </p>
    </footer>
  )
}

export default Footer
```

- [ ] **Step 7: Update Nav for routing + résumé button**

Replace `src/components/Nav.jsx` entirely:

```jsx
import { Link } from 'react-router-dom'

function Nav({ name }) {
  return (
    <header className="nav">
      <Link className="nav-name" to="/">
        {name}
      </Link>
      <nav>
        <Link to="/work">Work</Link>
        <Link to="/creative">Creative</Link>
        <Link to="/about">About</Link>
        <a className="nav-resume" href="#" target="_blank" rel="noreferrer">
          Résumé ↓
        </a>
      </nav>
    </header>
  )
}

export default Nav
```

- [ ] **Step 8: Create the Layout shell**

Create `src/components/Layout.jsx`:

```jsx
import { Outlet } from 'react-router-dom'
import Nav from './Nav.jsx'
import Footer from './Footer.jsx'
import { site } from '../data/site.js'

function Layout() {
  return (
    <>
      <Nav name={site.name} />
      <Outlet />
      <div className="arch-divider" aria-hidden="true" />
      <Footer name={site.name} email={site.email} />
    </>
  )
}

export default Layout
```

- [ ] **Step 9: Create the Home page**

Create `src/pages/Home.jsx`:

```jsx
import { Link } from 'react-router-dom'
import { site } from '../data/site.js'
import { caseStudies } from '../data/caseStudies.js'
import Hero from '../components/Hero.jsx'
import WorkCard from '../components/WorkCard.jsx'

function Home() {
  return (
    <>
      <Hero role={site.role} tagline={site.tagline} />
      <div className="scallop" aria-hidden="true" />

      <section id="featured-work">
        <h2>Featured work</h2>
        <div className="grid">
          {caseStudies.map((cs) => (
            <WorkCard
              key={cs.slug}
              title={cs.title}
              description={cs.summary}
              to={`/work/${cs.slug}`}
            />
          ))}
        </div>
      </section>

      <section id="other-work-teaser" className="teaser">
        <p>{site.otherWorkTeaser}</p>
        <Link className="link-arrow" to="/work">
          See more work →
        </Link>
      </section>

      <section id="about-teaser" className="teaser">
        <h2>About</h2>
        <p>{site.aboutTeaser}</p>
        <Link className="link-arrow" to="/about">
          More about me →
        </Link>
      </section>
    </>
  )
}

export default Home
```

Note: this passes `to="/work/${cs.slug}"` to `WorkCard`, which doesn't support that prop yet — Task 2 adds it. Until Task 2 lands, the link simply won't render (see Task 2's `WorkCard` change), which is fine — it's an additive prop.

- [ ] **Step 10: Create the NotFound page**

Create `src/pages/NotFound.jsx`:

```jsx
import { Link } from 'react-router-dom'

function NotFound() {
  return (
    <section id="not-found">
      <h2>Page not found</h2>
      <p>The page you're looking for doesn't exist.</p>
      <Link className="btn" to="/">
        Back to home →
      </Link>
    </section>
  )
}

export default NotFound
```

- [ ] **Step 11: Wrap the app in HashRouter**

Replace `src/main.jsx` entirely:

```jsx
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { HashRouter } from 'react-router-dom'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
  </StrictMode>,
)
```

- [ ] **Step 12: Rewrite App.jsx as route definitions**

Replace `src/App.jsx` entirely:

```jsx
import './App.css'
import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout.jsx'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import NotFound from './pages/NotFound.jsx'

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}

export default App
```

- [ ] **Step 13: Update App.css — nav name link, résumé button**

In `src/App.css`, find:

```css
.nav-name {
  font-family: var(--heading);
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: -0.5px;
}
```

Replace with:

```css
.nav-name {
  font-family: var(--heading);
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: -0.5px;
  text-decoration: none;
}
```

Then find:

```css
.nav nav a:hover {
  background: var(--gold);
  border-color: var(--border);
}
```

Replace with:

```css
.nav nav a:hover {
  background: var(--gold);
  border-color: var(--border);
}

.nav nav a.nav-resume {
  margin-left: 1rem;
  background: var(--gold);
  border-color: var(--border);
  box-shadow: 3px 3px 0 0 var(--border);
  transition: transform 0.15s ease, box-shadow 0.15s ease;
}

.nav nav a.nav-resume:hover {
  background: var(--gold);
  transform: translate(-2px, -2px);
  box-shadow: 5px 5px 0 0 var(--border);
}
```

(The `.nav nav a.nav-resume` selector is deliberately more specific than the plain `.nav nav a` rule above it, so the résumé button's distinct padding/shadow win over the base nav-link styles.)

- [ ] **Step 14: Update App.css — replace #contact styles with generic .btn / .link-arrow**

In `src/App.css`, find this whole block:

```css
#contact {
  background: var(--green);
  border-bottom: 4px solid var(--border);
}

#contact h2 {
  color: var(--cream);
}

#contact a {
  font-weight: 700;
  text-decoration: none;
  border: 3px solid var(--border);
  border-radius: var(--radius-pill);
  padding: 0.6rem 1.3rem;
  display: inline-block;
  background: var(--gold);
  color: var(--text);
  box-shadow: var(--shadow-offset) var(--shadow-offset) 0 0 var(--border);
  transition: transform 0.15s ease, box-shadow 0.15s ease;
}

#contact a:hover {
  transform: translate(-3px, -3px);
  box-shadow: calc(var(--shadow-offset) + 3px) calc(var(--shadow-offset) + 3px) 0 0 var(--border);
}
```

Replace it with:

```css
.btn {
  font-weight: 700;
  text-decoration: none;
  border: 3px solid var(--border);
  border-radius: var(--radius-pill);
  padding: 0.6rem 1.3rem;
  display: inline-block;
  background: var(--gold);
  color: var(--text);
  box-shadow: var(--shadow-offset) var(--shadow-offset) 0 0 var(--border);
  transition: transform 0.15s ease, box-shadow 0.15s ease;
}

.btn:hover {
  transform: translate(-3px, -3px);
  box-shadow: calc(var(--shadow-offset) + 3px) calc(var(--shadow-offset) + 3px) 0 0 var(--border);
}

.link-arrow {
  color: var(--text);
  font-weight: 700;
  text-decoration: none;
  border-bottom: 2px solid var(--border);
  padding-bottom: 1px;
}

.link-arrow:hover {
  color: var(--purple);
  border-bottom-color: var(--purple);
}

.teaser {
  text-align: center;
}

.teaser p {
  font-size: 1.1rem;
  margin-bottom: 1rem;
}

#not-found {
  text-align: center;
  padding-top: 4rem;
  padding-bottom: 4rem;
}
```

- [ ] **Step 15: Update App.css — arch-divider color, footer button spacing**

Find:

```css
.arch-divider {
  height: 22px;
  background-color: var(--green);
  background-image: radial-gradient(circle at 14px 22px, transparent 12px, var(--bg) 13px);
  background-size: 28px 22px;
  background-repeat: repeat-x;
}
```

Replace with:

```css
.arch-divider {
  height: 22px;
  background-color: var(--purple);
  background-image: radial-gradient(circle at 14px 22px, transparent 12px, var(--bg) 13px);
  background-size: 28px 22px;
  background-repeat: repeat-x;
}
```

(This divider used to sit between the About section and a green Contact block. Contact no longer exists as its own section — it's folded into the footer — so the divider now sits between page content and the purple footer everywhere, hence purple instead of green.)

Then find:

```css
footer {
  text-align: center;
  padding: 2rem;
  color: var(--cream);
  background: var(--purple);
  font-size: 0.85rem;
  font-family: var(--heading);
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  margin-top: auto;
}
```

Replace with:

```css
footer {
  text-align: center;
  padding: 2rem;
  color: var(--cream);
  background: var(--purple);
  font-size: 0.85rem;
  font-family: var(--heading);
  margin-top: auto;
}

footer .btn {
  margin-bottom: 1rem;
}

footer p {
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}
```

(The uppercase/letter-spacing moved from the whole `footer` down to `footer p` specifically, so the mailto address in the `.btn` isn't uppercased — matching how the old `#contact a` never uppercased the email either.)

- [ ] **Step 16: Lint and build**

Run:
```bash
npm run lint
npm run build
```
Both must exit 0 with no errors.

- [ ] **Step 17: Manual verification in the browser**

Start the dev server (`mcp__Claude_Browser__preview_start` with the `portfolio-dev` launch config, or `npm run dev` if working outside this tool) and:

1. Navigate to `http://localhost:5173/portfolio-website/#/`. Confirm via `get_page_text` that the page shows the hero ("Product designer"), a "Featured work" heading, two case-study cards ("Case study one", "Case study two" — the "Read case study" link won't render yet, that's expected until Task 2), an "other work" teaser sentence with a "See more work →" link, and an "About" teaser with a "More about me →" link.
2. Click the "About" nav link. Confirm the URL becomes `.../#/about` and the page shows the full About content (bio, achievements/specialisation/philosophy cards, stack tags) — identical to what used to be on the single-page site.
3. Click the "Work" nav link. Confirm the URL becomes `.../#/work` and the page renders the `NotFound` component ("Page not found") — this is correct and expected, since `/work` doesn't have a real route until Task 2.
4. Click "Back to home →" on that 404 page. Confirm it returns to `#/`.
5. Check `read_console_messages` for errors — there should be none.

- [ ] **Step 18: Commit**

```bash
git add package.json package-lock.json src/main.jsx src/App.jsx src/App.css src/data/site.js src/data/caseStudies.js src/components/Layout.jsx src/components/Nav.jsx src/components/Footer.jsx src/pages/Home.jsx src/pages/NotFound.jsx src/pages/About.jsx
git add -u src/components/About.jsx src/components/Contact.jsx src/components/Work.jsx src/data/projects.js
git commit -m "Add HashRouter and route skeleton (Home, About, 404)

Introduce react-router-dom with HashRouter (GitHub Pages has no
server-side rewrites, so BrowserRouter would 404 on direct/refreshed
deep links). Add a shared Layout (Nav + Outlet + Footer), fold the
old Contact section's mailto CTA into Footer, move About to its own
page, and add a catch-all NotFound route. Work/Creative/case-study
routes land in follow-up commits."
```

---

## Task 2: Work index page (case studies + other work)

**Files:**
- Create: `src/data/otherWork.js`
- Modify: `src/components/WorkCard.jsx`
- Create: `src/components/OtherWorkCard.jsx`
- Create: `src/pages/Work.jsx`
- Modify: `src/App.jsx`
- Modify: `src/App.css`

**Interfaces:**
- Consumes: `caseStudies` from `src/data/caseStudies.js` (Task 1).
- Produces: `otherWork` (`src/data/otherWork.js`) — named export, array of `{ title, description, tag, link }` where `link` is a string URL or `null`.
- Produces: `WorkCard({ title, description, to })` — **signature changed**, `to` is now an optional prop (a route path string). When present, renders a "Read case study →" internal link.
- Produces: `OtherWorkCard({ title, description, tag, link })` — default export, `link` is a string URL or `null`.
- Produces: `Work` (`src/pages/Work.jsx`) — default export, no props.

- [ ] **Step 1: Create the other-work data file**

Create `src/data/otherWork.js`:

```js
export const otherWork = [
  {
    title: 'Project one',
    description: 'One-line description of the project and outcome.',
    tag: 'Freelance',
    link: 'https://example.com',
  },
  {
    title: 'Project two',
    description: 'One-line description of the project and outcome.',
    tag: 'Side project',
    link: null,
  },
  {
    title: 'Project three',
    description: 'One-line description of the project and outcome.',
    tag: 'Hackathon',
    link: 'https://example.com',
  },
  {
    title: 'Project four',
    description: 'One-line description of the project and outcome.',
    tag: 'Collaboration',
    link: null,
  },
]
```

- [ ] **Step 2: Add the optional `to` link to WorkCard**

Replace `src/components/WorkCard.jsx` entirely:

```jsx
import { Link } from 'react-router-dom'

function WorkCard({ title, description, to }) {
  return (
    <article className="card">
      <h3>{title}</h3>
      <p>{description}</p>
      {to && (
        <Link className="link-arrow" to={to}>
          Read case study →
        </Link>
      )}
    </article>
  )
}

export default WorkCard
```

- [ ] **Step 3: Create OtherWorkCard**

Create `src/components/OtherWorkCard.jsx`:

```jsx
function OtherWorkCard({ title, description, tag, link }) {
  return (
    <article className="other-work-card">
      <span className="other-work-tag">{tag}</span>
      <h3>{title}</h3>
      <p>{description}</p>
      {link && (
        <a className="link-arrow" href={link} target="_blank" rel="noreferrer">
          View →
        </a>
      )}
    </article>
  )
}

export default OtherWorkCard
```

- [ ] **Step 4: Create the Work index page**

Create `src/pages/Work.jsx`:

```jsx
import { caseStudies } from '../data/caseStudies.js'
import { otherWork } from '../data/otherWork.js'
import WorkCard from '../components/WorkCard.jsx'
import OtherWorkCard from '../components/OtherWorkCard.jsx'

function Work() {
  return (
    <>
      <section id="work">
        <h2>Selected work</h2>
        <div className="grid">
          {caseStudies.map((cs) => (
            <WorkCard
              key={cs.slug}
              title={cs.title}
              description={cs.summary}
              to={`/work/${cs.slug}`}
            />
          ))}
        </div>
      </section>

      <section id="other-work">
        <h2>Other work</h2>
        <div className="other-work-grid">
          {otherWork.map((project) => (
            <OtherWorkCard
              key={project.title}
              title={project.title}
              description={project.description}
              tag={project.tag}
              link={project.link}
            />
          ))}
        </div>
      </section>
    </>
  )
}

export default Work
```

- [ ] **Step 5: Wire the /work route**

In `src/App.jsx`, find:

```jsx
import Layout from './components/Layout.jsx'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import NotFound from './pages/NotFound.jsx'
```

Replace with:

```jsx
import Layout from './components/Layout.jsx'
import Home from './pages/Home.jsx'
import Work from './pages/Work.jsx'
import About from './pages/About.jsx'
import NotFound from './pages/NotFound.jsx'
```

Then find:

```jsx
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotFound />} />
```

Replace with:

```jsx
        <Route path="/" element={<Home />} />
        <Route path="/work" element={<Work />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotFound />} />
```

- [ ] **Step 6: Update App.css — card link spacing, other-work grid**

In `src/App.css`, find:

```css
.card h3 {
  margin-top: 0;
  font-size: 1.25rem;
}
```

Replace with:

```css
.card h3 {
  margin-top: 0;
  font-size: 1.25rem;
}

.card .link-arrow {
  display: inline-block;
  margin-top: 1rem;
}

.other-work-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 1.25rem;
  margin-top: 1.5rem;
}

.other-work-card {
  background: var(--surface);
  border: 2px solid var(--border);
  border-radius: var(--radius-card);
  padding: 1.25rem;
}

.other-work-tag {
  display: inline-block;
  background: var(--cream);
  border: 2px solid var(--border);
  border-radius: var(--radius-pill);
  font-family: var(--heading);
  font-size: 0.7rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  padding: 0.25rem 0.7rem;
  margin-bottom: 0.75rem;
}

.other-work-card h3 {
  font-size: 1.05rem;
  margin: 0 0 0.5rem;
}

.other-work-card p {
  font-size: 0.9rem;
  line-height: 1.4;
  margin-bottom: 0.75rem;
}
```

- [ ] **Step 7: Lint and build**

```bash
npm run lint
npm run build
```
Both must exit 0.

- [ ] **Step 8: Manual verification in the browser**

With the dev server running:

1. Navigate to `.../#/work`. Confirm (via `get_page_text`) it now shows "Selected work" with two case-study cards, each ending in a "Read case study →" link, and an "Other work" section below with 4 cards showing tags ("Freelance", "Side project", "Hackathon", "Collaboration").
2. Confirm exactly 2 of the 4 other-work cards show a "View →" link and 2 don't (matches the `link: null` entries in the data).
3. Navigate to `.../#/` (Home) and confirm the two featured-work cards now also show "Read case study →" (this was missing in Task 1's verification and should appear now that `WorkCard` supports `to`).
4. Check `read_console_messages` for errors — none expected.

- [ ] **Step 9: Commit**

```bash
git add src/data/otherWork.js src/components/WorkCard.jsx src/components/OtherWorkCard.jsx src/pages/Work.jsx src/App.jsx src/App.css
git commit -m "Add Work index page with case studies and other work

WorkCard gains an optional 'to' prop so it can link out to a case
study detail page (used on both Home and this new index). Other
work is a lighter-weight grid with no per-item detail pages, per
the design spec."
```

---

## Task 3: Case study detail page

**Files:**
- Create: `src/pages/CaseStudy.jsx`
- Modify: `src/App.jsx`
- Modify: `src/App.css`

**Interfaces:**
- Consumes: `caseStudies` from `src/data/caseStudies.js` (Task 1), `NotFound` from `src/pages/NotFound.jsx` (Task 1).
- Produces: `CaseStudy` (`src/pages/CaseStudy.jsx`) — default export, no props (reads the `:slug` URL param via `useParams`).

- [ ] **Step 1: Create the case study detail page**

Create `src/pages/CaseStudy.jsx`:

```jsx
import { useParams, Link } from 'react-router-dom'
import { caseStudies } from '../data/caseStudies.js'
import NotFound from './NotFound.jsx'

function CaseStudy() {
  const { slug } = useParams()
  const caseStudy = caseStudies.find((cs) => cs.slug === slug)

  if (!caseStudy) {
    return <NotFound />
  }

  const next = caseStudies.find((cs) => cs.slug !== caseStudy.slug)

  return (
    <section id="case-study">
      <h2>{caseStudy.title}</h2>
      <p className="case-study-summary">{caseStudy.summary}</p>

      <div className="case-study-meta">
        <div>
          <span className="case-study-meta-label">Role</span>
          <span>{caseStudy.role}</span>
        </div>
        <div>
          <span className="case-study-meta-label">Timeline</span>
          <span>{caseStudy.timeline}</span>
        </div>
        <div>
          <span className="case-study-meta-label">Tools</span>
          <span>{caseStudy.tools.join(', ')}</span>
        </div>
      </div>

      <h2>Context</h2>
      <p>{caseStudy.context}</p>
      <div className="image-placeholder" aria-hidden="true">
        Image placeholder
      </div>

      <h2>Process</h2>
      <p>{caseStudy.process}</p>
      <div className="image-placeholder" aria-hidden="true">
        Image placeholder
      </div>

      <h2>Solution</h2>
      <p>{caseStudy.solution}</p>
      <div className="image-placeholder" aria-hidden="true">
        Image placeholder
      </div>

      <h2>Outcome</h2>
      <p>{caseStudy.outcome}</p>

      {next && (
        <Link className="btn case-study-next" to={`/work/${next.slug}`}>
          Next case study: {next.title} →
        </Link>
      )}
    </section>
  )
}

export default CaseStudy
```

- [ ] **Step 2: Wire the /work/:slug route**

In `src/App.jsx`, find:

```jsx
import Layout from './components/Layout.jsx'
import Home from './pages/Home.jsx'
import Work from './pages/Work.jsx'
import About from './pages/About.jsx'
import NotFound from './pages/NotFound.jsx'
```

Replace with:

```jsx
import Layout from './components/Layout.jsx'
import Home from './pages/Home.jsx'
import Work from './pages/Work.jsx'
import CaseStudy from './pages/CaseStudy.jsx'
import About from './pages/About.jsx'
import NotFound from './pages/NotFound.jsx'
```

Then find:

```jsx
        <Route path="/" element={<Home />} />
        <Route path="/work" element={<Work />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotFound />} />
```

Replace with:

```jsx
        <Route path="/" element={<Home />} />
        <Route path="/work" element={<Work />} />
        <Route path="/work/:slug" element={<CaseStudy />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotFound />} />
```

- [ ] **Step 3: Update App.css — case study page styles**

In `src/App.css`, find:

```css
#about {
  padding-bottom: 2rem;
}
```

Replace with:

```css
#about {
  padding-bottom: 2rem;
}

#case-study h2 {
  margin-top: 2rem;
}

#case-study h2:first-child {
  margin-top: 0;
}

.case-study-summary {
  font-size: 1.1rem;
  color: var(--text);
  margin-bottom: 1.5rem;
}

.case-study-meta {
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  padding: 1rem 0;
  border-top: 2px solid var(--border);
  border-bottom: 2px solid var(--border);
  margin-bottom: 1rem;
}

.case-study-meta div {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}

.case-study-meta-label {
  font-family: var(--heading);
  font-size: 0.7rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  color: var(--purple);
}

.image-placeholder {
  aspect-ratio: 16 / 9;
  background: var(--cream);
  border: 2px dashed var(--border);
  border-radius: var(--radius-card);
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: var(--heading);
  font-size: 0.85rem;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  color: #6b6b6b;
  margin: 1rem 0 2rem;
}

.case-study-next {
  margin-top: 2rem;
}
```

- [ ] **Step 4: Lint and build**

```bash
npm run lint
npm run build
```
Both must exit 0.

- [ ] **Step 5: Manual verification in the browser**

With the dev server running:

1. From `.../#/work`, click "Read case study →" on the first card. Confirm the URL is `.../#/work/case-study-1` and the page shows the title, summary, a Role/Timeline/Tools meta row, four `h2` sections (Context/Process/Solution/Outcome) each with placeholder body text, three "Image placeholder" boxes, and a "Next case study: Case study two →" button at the bottom.
2. Click that "Next case study" button. Confirm it navigates to `.../#/work/case-study-2` and shows the second entry's content, with its own "Next case study: Case study one →" button (cycles back).
3. Manually navigate to `.../#/work/does-not-exist`. Confirm the `NotFound` content renders ("Page not found") — this proves the in-page not-found fallback for unrecognized slugs, distinct from the router's catch-all.
4. **Hard-reload the browser directly on `.../#/work/case-study-1`** (not by clicking through — an actual full page reload/re-navigation to that exact URL). Confirm it still renders the case-study-1 content correctly. This is the specific behavior HashRouter exists to guarantee, per the spec, so it must be checked explicitly here rather than assumed from step 1's click-through.
5. Check `read_console_messages` for errors — none expected.

- [ ] **Step 6: Commit**

```bash
git add src/pages/CaseStudy.jsx src/App.jsx src/App.css
git commit -m "Add case study detail page

Reads the :slug route param, looks it up in caseStudies data, and
renders the Context/Process/Solution/Outcome template with a
next-case-study link at the bottom. Unknown slugs render the
NotFound component directly (distinct from the router's catch-all,
which only handles paths that don't match /work/:slug at all)."
```

---

## Task 4: Creative page + final verification

**Files:**
- Create: `src/data/creative.js`
- Create: `src/pages/Creative.jsx`
- Modify: `src/App.jsx`
- Modify: `src/App.css`

**Interfaces:**
- Consumes: nothing from other tasks (self-contained).
- Produces: `creative` (`src/data/creative.js`) — named export, array of `{ id: number, aspect: 'portrait' | 'landscape' | 'square' }`.
- Produces: `Creative` (`src/pages/Creative.jsx`) — default export, no props.

- [ ] **Step 1: Create the creative gallery data file**

Create `src/data/creative.js`:

```js
export const creative = [
  { id: 1, aspect: 'portrait' },
  { id: 2, aspect: 'landscape' },
  { id: 3, aspect: 'square' },
  { id: 4, aspect: 'landscape' },
  { id: 5, aspect: 'portrait' },
  { id: 6, aspect: 'square' },
]
```

- [ ] **Step 2: Create the Creative page**

Create `src/pages/Creative.jsx`:

```jsx
import { creative } from '../data/creative.js'

function Creative() {
  return (
    <section id="creative">
      <h2>Creative</h2>
      <p className="creative-intro">Photography and other work outside product design.</p>
      <div className="gallery-grid">
        {creative.map((item) => (
          <div
            key={item.id}
            className={`gallery-tile gallery-tile-${item.aspect}`}
            aria-hidden="true"
          >
            Photo placeholder
          </div>
        ))}
      </div>
    </section>
  )
}

export default Creative
```

- [ ] **Step 3: Wire the /creative route**

In `src/App.jsx`, find:

```jsx
import Layout from './components/Layout.jsx'
import Home from './pages/Home.jsx'
import Work from './pages/Work.jsx'
import CaseStudy from './pages/CaseStudy.jsx'
import About from './pages/About.jsx'
import NotFound from './pages/NotFound.jsx'
```

Replace with:

```jsx
import Layout from './components/Layout.jsx'
import Home from './pages/Home.jsx'
import Work from './pages/Work.jsx'
import CaseStudy from './pages/CaseStudy.jsx'
import Creative from './pages/Creative.jsx'
import About from './pages/About.jsx'
import NotFound from './pages/NotFound.jsx'
```

Then find:

```jsx
        <Route path="/" element={<Home />} />
        <Route path="/work" element={<Work />} />
        <Route path="/work/:slug" element={<CaseStudy />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotFound />} />
```

Replace with:

```jsx
        <Route path="/" element={<Home />} />
        <Route path="/work" element={<Work />} />
        <Route path="/work/:slug" element={<CaseStudy />} />
        <Route path="/creative" element={<Creative />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotFound />} />
```

- [ ] **Step 4: Update App.css — gallery grid styles**

Append to the end of `src/App.css`:

```css
.creative-intro {
  color: var(--text);
  font-size: 1.05rem;
  margin: 1rem 0 2rem;
}

.gallery-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
  gap: 1.25rem;
}

.gallery-tile {
  background: var(--cream);
  border: 2px dashed var(--border);
  border-radius: var(--radius-card);
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: var(--heading);
  font-size: 0.8rem;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  color: #6b6b6b;
}

.gallery-tile-portrait {
  aspect-ratio: 3 / 4;
}

.gallery-tile-landscape {
  aspect-ratio: 4 / 3;
}

.gallery-tile-square {
  aspect-ratio: 1 / 1;
}
```

- [ ] **Step 5: Lint and build**

```bash
npm run lint
npm run build
```
Both must exit 0.

- [ ] **Step 6: Manual verification — Creative page**

With the dev server running, navigate to `.../#/creative` via the "Creative" nav link. Confirm 6 gallery tiles render with visibly different shapes (2 portrait/tall, 2 landscape/wide, 2 square) and each shows "Photo placeholder" text.

- [ ] **Step 7: Full-site regression verification**

This is the last task, so verify the whole site end-to-end, per the spec's testing plan:

1. Click every nav link (Work, Creative, About, the name/logo) and confirm each lands on the right page with no console errors.
2. From Home, click both "Read case study →" links and confirm both case studies open correctly; click "See more work →" and confirm it reaches `/work`; click "More about me →" and confirm it reaches `/about`.
3. From `/work`, click into both case studies and use "Next case study" to cycle between them.
4. Hard-reload directly on each of these URLs (not via click-through) and confirm each still renders correctly: `#/`, `#/work`, `#/work/case-study-1`, `#/work/case-study-2`, `#/creative`, `#/about`, and one garbage path like `#/nonsense` (should show `NotFound`).
5. Run `npm run build` then `npm run preview` (Vite's local static-file preview, which serves the build the same way GitHub Pages would under the `/portfolio-website/` base). Open the preview URL and repeat a hard-reload check on `#/work/case-study-2` to confirm the production build behaves the same as dev under the real base path. Stop the preview server when done.

- [ ] **Step 8: Commit**

```bash
git add src/data/creative.js src/pages/Creative.jsx src/App.jsx src/App.css
git commit -m "Add Creative page with placeholder photo gallery

Flexible grid with portrait/landscape/square tile variants so real
photos of varying aspect ratios will drop in cleanly later. This
completes the routed site structure from the design spec — full
click-through and hard-reload verification done across every route."
```
