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
      // Inside the Docker container:
      //   packages/react/src → /app/src/cosmos  (volume mount)
      //   styles/            → /app/styles       (volume mount)
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
