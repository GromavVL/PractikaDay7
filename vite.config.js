import { defineConfig } from 'vite'

export default defineConfig({
  base: '/PractikaDay7/',
  resolve: {
    alias: {
      'vue': 'vue/dist/vue.esm-bundler.js'
    }
  }
})
