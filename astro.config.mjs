
import { defineConfig } from 'astro/config';
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";

export default defineConfig({
  integrations: [
    // Enable React components in Astro
    react(),
    // Enable Tailwind CSS
    tailwind({
      // Configuration options
      config: { path: './tailwind.config.ts' },
    }),
  ],
  // Use existing directory structures
  srcDir: './src',
  publicDir: './public',
  // Configure for server-side rendering
  output: 'server',
  // Make sure Astro handles the routing properly
  server: {
    host: true
  }
});
