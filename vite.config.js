import { fileURLToPath, URL } from 'node:url'
import svgr from 'vite-plugin-svgr'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export const BASE_FRONT = '/goit-vue-project'

export default defineConfig({
  plugins: [vue(), svgr()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  base: BASE_FRONT
})
