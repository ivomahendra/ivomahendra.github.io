import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://ivomahendra.github.io",
  output: "static",
  trailingSlash: "always",
  build: { format: "directory" }
});