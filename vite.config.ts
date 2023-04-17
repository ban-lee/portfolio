import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import { fileURLToPath, URL } from 'url';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      { find: '@assets', replacement: fileURLToPath(new URL('./src/assets', import.meta.url)) },
    ],
  },
})
