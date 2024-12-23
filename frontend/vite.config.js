import { fileURLToPath, URL } from 'url';

import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { prototype } from 'events';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  server: {
    host: true,
    port: 3000, //порт запуску додатку
    watch: {
      //для того щоб функція hot reload працювала (при зміні у файлах frontend в контейнері вони теж відображались)
      usePolling: true,
    },
  },
});
