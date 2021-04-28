import {defineConfig} from 'vite';
import reactRefresh from '@vitejs/plugin-react-refresh';
import path from 'path';
import Src2Import from './scripts/src2import';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [reactRefresh(), Src2Import()],
  resolve: {
    alias: {
      '@': path.join(__dirname, './src'),
    },
  },
});
