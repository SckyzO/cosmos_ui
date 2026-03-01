import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  plugins: [react(), tailwindcss()],
  optimizeDeps: {
    include: ['apexcharts', 'react-apexcharts'],
  },
  resolve: {
    alias: {
      // Inside the Docker container, packages/react/src is volume-mounted at /app/src/cosmos
      // and styles/ is volume-mounted at /app/styles.
      '@cosmos': '/app/src/cosmos',
      '@cosmos-styles': '/app/styles',
    },
  },
  server: {
    host: true,
    port: 5173,
    allowedHosts: ['demo'],
  },
});
