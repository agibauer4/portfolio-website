import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
// The site is served from the root of the custom domain (agnesbauer.design),
// not from /portfolio-website/ as it was on the github.io project URL — so
// assets resolve from / in both dev and build.
export default defineConfig({
  base: '/',
  plugins: [react()],
  server: {
    port: Number(process.env.PORT) || 5173,
    strictPort: true,
  },
})
