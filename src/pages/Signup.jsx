// src/pages/Signup.jsx
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axiosInstance from "../api/axiosInstance";
import "../styles/signup.css";

export default function Signup() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axiosInstance.post(
        "/auth/register", // ✅ FIXED
        formData
      );

      alert("Signup successful ✅");
      navigate("/login");
    } catch (err) {
      console.error("Signup error:", err);
      alert(err.response?.data?.message || "Signup failed");
    }
  };

  return (
    <div className="signup-page">
      <div className="signup-card">
        {/* 🔰 LOGO */}
        <div className="signup-logo-wrapper">
          <img
            src="/Logo.png"
            alt="TechPaath Logo"
            className="signup-logo"
          />
        </div>

        {/* 📝 TITLE */}
        <h3 className="signup-title">
          Create Your Account <span>🌱</span>
        </h3>
        <p className="signup-subtitle">
          Start your learning journey with TechPaath
        </p>

        {/* 📋 FORM */}
        <form onSubmit={handleSubmit}>
          <div className="floating-input">
            <input
              type="text"
              placeholder=" "
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              required
            />
            <label>Full Name</label>
          </div>

          <div className="floating-input">
            <input
              type="email"
              placeholder=" "
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              required
            />
            <label>Email</label>
          </div>

          <div className="floating-input">
            <input
              type="password"
              placeholder=" "
              value={formData.password}
              onChange={(e) =>
                setFormData({ ...formData, password: e.target.value })
              }
              required
            />
            <label>Password</label>
          </div>

          <button type="submit" className="signup-btn">
            Sign Up
          </button>
        </form>

        <p className="signup-footer-text">
          Already have an account?
          <Link to="/login" className="login-link">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}
