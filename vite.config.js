import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    {
      "name": "vite-plugin-proxy",
      "targets": [
        {
          "target": "https://newsapi.org/v2/everything",
          "changeOrigin": true,
          "rewrite": (path) => path.replace(/^\/api/, ""),
        },
      ],
    },
  ],
  server: {
    proxy: {
      '/fonts': 'https://fonts.gstatic.com',
    },
  },
})
