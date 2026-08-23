import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  // GitHub Pages project site: https://Morganhtrotter.github.io/caitlin/
  // If a custom domain is added later, change this to '/' and add public/CNAME.
  base: '/caitlin/',
})
