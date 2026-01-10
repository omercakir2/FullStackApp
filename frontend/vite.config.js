import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    host: true, // Docker için dış erişime izin verir
    port: 5173,
    watch: {
      usePolling: true, // Windows/Mac dosya değişimlerini yakalaması için
    },
  },
})