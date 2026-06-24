import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main:      resolve(__dirname, 'index.html'),
        workplace: resolve(__dirname, 'workplace.html'),
        tasks:     resolve(__dirname, 'tasks.html'),
        about:     resolve(__dirname, 'about.html'),
      }
    }
  }
})
