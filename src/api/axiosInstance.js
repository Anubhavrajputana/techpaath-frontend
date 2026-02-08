import axios from "axios";

/* =========================================================
   🌍 BASE URL (ENV SAFE + PRODUCTION FALLBACK)
========================================================= */
const BASE_URL =
  import.meta.env.VITE_API_BASE_URL ||
  "https://techpaath-backend-main.onrender.com";

/* =========================================================
   🚀 AXIOS INSTANCE (PRODUCTION READY)
========================================================= */
const axiosInstance = axios.create({
  baseURL: `${BASE_URL}/api`,   // 👈 backend routes prefix
  withCredentials: true,        // 👈 required for cookies/auth
  timeout: 60000,               // 👈 Render cold start safe
  headers: {
    "Content-Type": "application/json",
  },
});

/* =========================================================
   🔐 REQUEST INTERCEPTOR
   → Auto attach token
========================================================= */
axiosInstance.interceptors.request.use(
  (config) => {
    try {
      const token = localStorage.getItem("token");

      if (token) {
        config.headers = config.headers || {};
        config.headers.Authorization = `Bearer ${token}`;
      }
    } catch (err) {
      console.warn("Token read error:", err);
    }

    return config;
  },
  (error) => Promise.reject(error)
);

/* =========================================================
   🚨 RESPONSE INTERCEPTOR
   → Global error handling
========================================================= */
axiosInstance.interceptors.response.use(
  (response) => response,

  (error) => {
    /* ===============================
       🔒 TOKEN EXPIRED / INVALID
    =============================== */
    if (error.response?.status === 401) {
      console.warn("🔒 Session expired. Redirecting to login...");

      localStorage.removeItem("token");
      localStorage.removeItem("user");

      if (window.location.pathname !== "/login") {
        window.location.href = "/login";
      }
    }

    /* ===============================
       🚫 FORBIDDEN
    =============================== */
    if (error.response?.status === 403) {
      console.warn("🚫 Access forbidden");
    }

    /* ===============================
       🌐 SERVER / NETWORK ERROR
    =============================== */
    if (!error.response) {
      console.error(
        "🚨 Server unreachable / Network error / CORS issue"
      );
    }

    /* ===============================
       ⏱ TIMEOUT ERROR
    =============================== */
    if (error.code === "ECONNABORTED") {
      console.error("⏱ Request timeout — Server cold start");
    }

    return Promise.reject(error);
  }
);

export default axiosInstance;
