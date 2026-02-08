import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:5000/api",
  withCredentials: true,       // ✅ IMPORTANT for auth + sockets
  timeout: 15000,              // ✅ prevents hanging requests
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
   (GLOBAL ERROR SAFETY)
=============================== */
axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    // 🔥 TOKEN EXPIRED / INVALID
    if (error.response?.status === 401) {
      localStorage.removeItem("token");
      localStorage.removeItem("user");

      // soft redirect (NO hard reload)
      if (window.location.pathname !== "/login") {
        window.location.href = "/login";
      }
    }

    return Promise.reject(error);
  }
);

export default axiosInstance;
