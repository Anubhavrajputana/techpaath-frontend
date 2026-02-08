import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// 🌍 ENV BASE URL
const BACKEND_URL =
  process.env.VITE_API_BASE_URL ||
  "http://localhost:5000";

export default defineConfig({
  plugins: [react()],

  /* ===============================
     🌐 BASE PATH (IMPORTANT FOR VERCEL)
  =============================== */
  base: "/",   // ✅ fixes blank page / asset loading

  /* ===============================
     🧪 DEV SERVER CONFIG
  =============================== */
  server: {
    port: 5173,

    proxy: {
      "/api": {
        target: BACKEND_URL,
        changeOrigin: true,
        secure: false,
      },

      "/socket.io": {
        target: BACKEND_URL,
        changeOrigin: true,
        ws: true,
      },
    },
  },

  /* ===============================
     🏗 BUILD OPTIMIZATION
  =============================== */
  build: {
    outDir: "dist",
    sourcemap: false,

    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ["react", "react-dom"],
        },
      },
    },

    chunkSizeWarningLimit: 1000,
  },
});
