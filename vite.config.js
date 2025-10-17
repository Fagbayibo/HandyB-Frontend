import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [tailwindcss(), react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  // The 'build' object should be here, at the top level
  build: {
    esbuild: {
      // This will remove all console.* calls in production builds
      drop: ['console', 'debugger'],
    },
  },
});