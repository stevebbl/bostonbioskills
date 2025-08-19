import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: './', // good default; for GitHub Pages, replace with '/<repo>/' if needed
})
