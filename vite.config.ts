import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  input: [
    'index.html',
    'freelance/index.html',
    'now/index.html'
  ]
})
