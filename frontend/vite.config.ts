import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
  ],
  base: '/',
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  // Налаштовуємо шлях до .env файлу в корені проекту
  envDir: '../',
  server: {
    port: 8080,
    strictPort: true,
    proxy: {
      // Proxy Strapi API requests (testimonials)
      '/api/testimonials': {
        target: 'http://localhost:1337',
        changeOrigin: true,
        secure: false,
        rewrite: (path) => path,
      },
      '/api/upload': {
        target: 'http://localhost:1337',
        changeOrigin: true,
        secure: false,
        rewrite: (path) => path,
      },
      // Proxy Express backend requests (auth, contact)
      '/api/auth': {
        target: 'http://localhost:3001',
        changeOrigin: true,
        secure: false,
        rewrite: (path) => path,
      },
      '/api/contact': {
        target: 'http://localhost:3001',
        changeOrigin: true,
        secure: false,
        rewrite: (path) => path,
      },
    },
  },
})
