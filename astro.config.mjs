import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel/serverless';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  output: 'server',
  adapter: vercel(),
  integrations: [react(), tailwind()],
  alias: {
    '@components': '/src/components/',
    '@layouts': '/src/layouts/',
    '@img': '/src/img/',
    '@utils': '/src/utils/',
    '@styles': '/src/styles/', // Añadir alias para estilos
  },
});
