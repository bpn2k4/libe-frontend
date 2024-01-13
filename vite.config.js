import { defineConfig } from 'vite'
import path from 'path';
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '~/assets': path.resolve(__dirname, './src/assets'),
      '~/components': path.resolve(__dirname, './src/components'),
      '~/hooks': path.resolve(__dirname, './src/hooks'),
      '~/layouts': path.resolve(__dirname, './src/layouts'),
      '~/libs': path.resolve(__dirname, './src/libs'),
      '~/pages': path.resolve(__dirname, './src/pages'),
      '~/routers': path.resolve(__dirname, './src/routers'),
      '~/slices': path.resolve(__dirname, './src/slices'),
      '~/utils': path.resolve(__dirname, './src/utils'),
    }
  }
})
