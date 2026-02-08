import axios from "axios";

/* ===============================
   🌍 BASE URL (ENV SAFE)
=============================== */
const BASE_URL =
  import.meta.env.VITE_API_BASE_URL ||
  "https://techpaath-backend-main.onrender.com";

/* ===============================
   🚀 AXIOS INSTANCE
=============================== */
const axiosInstance = axios.create({
  baseURL: `${BASE_URL}/api`,   // 👈 add /api if backend uses it
  withCredentials: true,
  timeout: 30000,               // 👈 higher for Render cold start
  headers: {
    "Content-Type": "application/json",
  },
});

/* ===============================
   🔐 REQUEST INTERCEPTOR
=============================== */
axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");

    if (token) {
      config.headers = config.headers || {};
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => Promise.reject(error)
);

/* ===============================
   🚨 RESPONSE INTERCEPTOR
   =============================== */
axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    /* TOKEN EXPIRED / INVALID */
    if (error.response?.status === 401) {
      localStorage.removeItem("token");
      localStorage.removeItem("user");

      if (window.location.pathname !== "/login") {
        window.location.href = "/login";
      }
    }

    /* SERVER DOWN / NETWORK ERROR */
    if (!error.response) {
      console.error("Server unreachable or network error");
    }

    return Promise.reject(error);
  }
);

export default axiosInstance;
