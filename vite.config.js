import { copyFileSync, writeFileSync } from 'node:fs'
import { resolve } from 'node:path'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'vite'

function githubPagesStatic() {
  return {
    name: 'github-pages-static',
    closeBundle() {
      const docs = resolve('docs')
      copyFileSync(resolve(docs, 'index.html'), resolve(docs, '404.html'))
      writeFileSync(resolve(docs, '.nojekyll'), '')
    },
  }
}

export default defineConfig({
  base: '/',
  plugins: [react(), tailwindcss(), githubPagesStatic()],
  build: {
    outDir: 'docs',
    emptyOutDir: true,
  },
})
