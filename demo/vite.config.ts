import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  plugins: [react(), tailwindcss()],
  optimizeDeps: {
    include: ['apexcharts', 'react-apexcharts'],
  },
  server: {
    host: true,
    port: 5173,
    allowedHosts: ['demo'],
  },
});
