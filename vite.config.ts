import {defineConfig} from 'vite';
import reactRefresh from '@vitejs/plugin-react-refresh';
import {getBabelOutputPlugin} from '@rollup/plugin-babel';
import path from 'path';
import legacy from '@vitejs/plugin-legacy';
import Src2Import from './scripts/src2import';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    reactRefresh(),
    Src2Import(),
    legacy({
      targets: ['defaults'],
    }),
  ],
  resolve: {
    alias: {
      '@': path.join(__dirname, './src'),
    },
  },
});
