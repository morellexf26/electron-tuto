import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  base: path.resolve(__dirname, "./dist/"),
  resolve: {
    /**
     * This is where you define your path shortcuts. 
     * Basically, you can abreviate your paths by defining an alias.
     */
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@.': path.resolve(__dirname, './')
    }
  }
})
