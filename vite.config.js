import { fileURLToPath, URL } from 'node:url'
import svgr from 'vite-plugin-svgr'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue(), svgr()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      src: '/src',
      components: '/src/components',
      pages: '/src/views',
      assets: '/src/assets'
    }
  },
  base: '/'
})
