import { defineConfig } from 'vite'
import RubyPlugin from 'vite-plugin-ruby'
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [
    RubyPlugin(),
    react()
  ],
  server: {
    port: 3036, // Ensure Vite runs on port 3036
    cors: true,
  },
})
