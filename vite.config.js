import { sentryVitePlugin } from "@sentry/vite-plugin";
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), sentryVitePlugin({
    org: "vit-en",
    project: "javascript-react"
  })],

  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom', 'three'], // Moves heavy libs into a separate chunk
        },
      },
    },
    chunkSizeWarningLimit: 1000, // (optional) Increase warning limit
  },
});