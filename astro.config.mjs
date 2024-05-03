import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://foliofy.me",
  integrations: [tailwind(), mdx(), sitemap()],
  output: "static",
  build: {
    format: "file",
  },
  outDir: "landing-page",
  compressHTML: true,
});
