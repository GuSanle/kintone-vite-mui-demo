import { defineConfig } from 'vite'
import { fileURLToPath, URL } from 'node:url'
import react from '@vitejs/plugin-react'
import kintoneDev from 'vite-plugin-kintone-dev'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), kintoneDev({ outputName: 'mui-mobile', upload: true })],

  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
})
