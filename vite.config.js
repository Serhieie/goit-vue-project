import { fileURLToPath, URL } from 'node:url'
import svgr from 'vite-plugin-svgr'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

const BASE = '/goit-vue-project'

export default defineConfig({
  plugins: [vue(), svgr()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      src: fileURLToPath(new URL('./src', import.meta.url)),
      components: fileURLToPath(new URL('./src/components', import.meta.url)),
      views: fileURLToPath(new URL('./src/views', import.meta.url)),
      assets: fileURLToPath(new URL('./src/assets', import.meta.url))
    }
  },
  build: {
    assetsDir: 'assets'
  },
  base: BASE
})
