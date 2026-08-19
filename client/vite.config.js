import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/Ordo-Rpgistas/",

  plugins: [
    react(),
  ],
});
