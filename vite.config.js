import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import analyze from "rollup-plugin-analyzer"
import { visualizer } from 'rollup-plugin-visualizer'
import { viteExternalsPlugin } from 'vite-plugin-externals'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  optimizeDeps: {
    include: ["qrcode"],
  },
  build: {
    rollupOptions: {
      plugins: [
        analyze(), 
        visualizer(),
        viteExternalsPlugin({
          vue: 'Vue',
        }),
      ]
    },
  },
})
