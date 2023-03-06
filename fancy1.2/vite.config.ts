import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import Icons from 'unplugin-icons/vite'
import IconsResolver from 'unplugin-icons/resolver'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { AntDesignVueResolver } from 'unplugin-vue-components/resolvers'
import vitePluginImp from 'vite-plugin-imp'
// import path from 'path'
import { resolve } from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    AutoImport({
      resolvers: [
        IconsResolver({
          prefix: 'Icon',
        }),
        AntDesignVueResolver()
      ]
    }),
    Components({
      resolvers: [
        AntDesignVueResolver(),
        IconsResolver({
          enabledCollections: ['ep'],
        }),
      ],
    }),
    Icons({
      autoInstall: true,
    }),
    react(),
    vitePluginImp({
      libList: [
        {
          libName: 'antd'
        }
      ]
    })
  ],
  resolve: {
    alias: {
      '@': resolve(__dirname, './src')
    },
    extensions: ['.js', '.vue', '.json', '.less', '*']
  },
  server: {
    host: '0.0.0.0',
    port: 9894,
    hmr: true,
    proxy: {
      '/api': {
        target: '',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '')
      }
    }
  }
})
