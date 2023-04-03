import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import markdown, { Mode } from 'vite-plugin-markdown'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueJsx(),
    markdown({
      mode: [Mode.MARKDOWN, Mode.HTML]
      // markdown: (body) => {
      //   console.log('body:', body)
      //   return 'xx'
      // }
    })
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
