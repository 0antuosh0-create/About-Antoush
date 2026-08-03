import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import mdx from '@astrojs/mdx';

export default defineConfig({
  site: 'https://0antuosh0-create.github.io',
  base: '/About-Antoush',
  integrations: [tailwind(), mdx()],
});