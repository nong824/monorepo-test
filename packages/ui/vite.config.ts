import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  build: {
    lib: {
      entry: 'src/index.ts',
      formats: ['es'],
      fileName: () => 'index.js',
      cssFileName: 'style',
    },
    rollupOptions: {
      // vue 由使用方的 app 提供，不打进产物
      external: ['vue'],
    },
    cssCodeSplit: false,
    emptyOutDir: true,
  },
})