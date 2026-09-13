// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  site: "https://bhavleensingh.com",
  trailingSlash: "never",

  build: {
    // Inline the stylesheet rather than linking it. It is small, and a linked
    // file would be the only render-blocking request left on the critical path.
    inlineStylesheets: "always",
  },

  vite: {
    plugins: [tailwindcss()],
  },
});
