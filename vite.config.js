import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import eslintPlugin from 'vite-plugin-eslint'
import svgr from 'vite-plugin-svgr'

export default defineConfig({
  plugins: [eslintPlugin(), react(), svgr()],
})
