import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel';
import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  output: 'server',
  adapter: vercel(),
  integrations: [react()],
  vite: {
    plugins: [tailwindcss()],
  },
  alias: {
    '@components': '/src/components/',
    '@layouts': '/src/layouts/',
    '@img': '/src/img/',
    '@utils': '/src/utils/',
    '@styles': '/src/styles/',
  },
});