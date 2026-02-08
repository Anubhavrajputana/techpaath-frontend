// src/main.jsx
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { GoogleOAuthProvider } from "@react-oauth/google";

import App from "./App";

/* CONTEXT */
import { AuthProvider } from "./context/AuthContext";

/* GLOBAL STYLES */
// import "./styles/global.css";
import "./styles.css";
import "./styles/courses.css";

/* BOOTSTRAP */
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

/* 🔐 ENV CHECK */
const GOOGLE_CLIENT_ID = import.meta.env.VITE_GOOGLE_CLIENT_ID;

if (!GOOGLE_CLIENT_ID) {
  console.error("❌ VITE_GOOGLE_CLIENT_ID is missing. Check your .env file.");
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <GoogleOAuthProvider clientId={GOOGLE_CLIENT_ID}>
      <BrowserRouter>
        <AuthProvider>
          <App />
        </AuthProvider>
      </BrowserRouter>
    </GoogleOAuthProvider>
  </React.StrictMode>
);
