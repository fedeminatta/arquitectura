import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel/serverless';
import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  output: 'hybrid',
  adapter: vercel(),
  integrations: [react()],
  alias: {
    '@components': '/components/',
    '@layouts': '/layouts/',
    '@img': '/img/',
    '@utils': '/utils/',
  },
});
