import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  // Served from the custom domain https://peterpaige.tv (see public/CNAME),
  // so assets live at the root rather than under a project-site subpath.
  base: '/',
})
