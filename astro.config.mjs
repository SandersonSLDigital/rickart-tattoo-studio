import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://rickarttattoo.vercel.app',
  compressHTML: true,
  image: {
    remotePatterns: [],
  },
});
