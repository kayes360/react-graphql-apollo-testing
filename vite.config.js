// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'jsdom', // 👈 this is needed
    globals: true,         // optional, but handy for cleaner syntax
    setupFiles: ['./vitest.setup.js'], // optional for custom setups
  },
})
