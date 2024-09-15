import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'; 

export default defineConfig({
  plugins: [vue()],
  root: path.resolve(__dirname, './'), //  Обязательно!
  publicDir: 'public', //  По умолчанию
  build: {
    outDir: 'dist' //  По умолчанию
  }
})

