import { defineConfig } from 'vite';

export default defineConfig({
  appType: 'spa',
  resolve: {
    extensions: ['.mjs', '.js', '.mts', '.ts', '.jsx', '.tsx', '.json'],
  },
  css: {
    devSourcemap: true,
  },
  server: {
    host: '0.0.0.0',
    port: 5001,
    open: true,
  },
  build: {
    sourcemap: true,
  },
});
