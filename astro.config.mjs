import image from "@astrojs/image";
import mdx from "@astrojs/mdx";
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  integrations: [image(), mdx()],
});
