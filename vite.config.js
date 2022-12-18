import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import dsv from "@michigandaily/rollup-plugin-dsv";
import nunjucks from "@michigandaily/vite-plugin-transform-nunjucks";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/",
  plugins: [
    react(),
    dsv({ include: ["**.csv", "**.tsv", "**.dsv"] }),
    nunjucks(),
  ],
});
