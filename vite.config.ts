import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/",
  server: {
    port: 5173,
  },
  ssgOptions: {
    // GitHub Pages resolves clean URLs via directory index.html, not by
    // appending .html, so each route needs its own directory.
    dirStyle: "nested",
  },
});
