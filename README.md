# Portfolio Website

Agnes Bauer's portfolio site — case studies and work samples.

Built with React + Vite.

## Development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

Outputs to `dist/`.

## Routing

This site uses `react-router-dom`'s `HashRouter` (URLs like `/#/work/case-study-1`), not `BrowserRouter`. GitHub Pages is a static host with no server-side rewrite rules, so a direct load or refresh on a `BrowserRouter`-style path would 404. Don't swap to `BrowserRouter` without also adding a GitHub Pages SPA-fallback (a `404.html` redirect trick) or moving to a host that supports server-side rewrites.
