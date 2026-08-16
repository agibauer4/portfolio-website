import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
// The GitHub Pages project site is served from /portfolio-website/, but the dev
// server is served from the root — otherwise / redirects and breaks the preview.
export default defineConfig(({ command }) => ({
  base: command === 'build' ? '/portfolio-website/' : '/',
  plugins: [react()],
}))
