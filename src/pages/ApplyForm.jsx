import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axiosInstance from "../api/axiosInstance"; // ✅ token auto attach
import { useAuth } from "../context/AuthContext"; // ✅ logged-in user
import "./ApplyForm.css";

export default function ApplyForm() {
  const navigate = useNavigate();
  const location = useLocation();
  const { user } = useAuth(); // ✅ AUTH USER

  const params = new URLSearchParams(location.search);
  const preSelected = params.get("internship") || "";

  const [form, setForm] = useState({
    fullName: "",
    email: "",
    phone: "",
    internshipName: preSelected,
    skills: "",
    resume: null,
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState(null);

  /* ===============================
     🔐 LOGIN + AUTO-FILL
  ================================ */
  useEffect(() => {
    if (!user) {
      navigate("/login");
      return;
    }

    setForm((prev) => ({
      ...prev,
      fullName: user.name || "",
      email: user.email || "",
      phone: user.phone || "",
    }));
  }, [user, navigate]);

  useEffect(() => {
    if (preSelected) {
      setForm((prev) => ({ ...prev, internshipName: preSelected }));
    }
  }, [preSelected]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleFile = (e) => {
    setForm((prev) => ({ ...prev, resume: e.target.files[0] }));
  };

  /* ===============================
     🚀 SUBMIT APPLICATION (CONFIRMED)
  ================================ */
  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage(null);

    try {
      setLoading(true);

      const fd = new FormData();

      // ✅ EXPLICIT APPENDS (SAFE & CLEAR)
      fd.append("fullName", form.fullName);
      fd.append("email", form.email);
      fd.append("phone", form.phone); // 🔥 IMPORTANT (CONFIRMED FIX)
      fd.append("internshipName", form.internshipName);
      fd.append("skills", form.skills || "");

      if (form.resume) {
        fd.append("resume", form.resume);
      }

      const res = await axiosInstance.post(
        "/internships/apply",
        fd,
        { headers: { "Content-Type": "multipart/form-data" } }
      );

      setMessage({
        type: "success",
        text: res.data.message || "Application submitted successfully",
      });

      setTimeout(() => navigate("/internships"), 1200);
    } catch (err) {
      console.error("Apply error:", err);
      setMessage({
        type: "error",
        text: err.response?.data?.message || "Login required",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="applypage-wrap">
      <div className="apply-card">
        {/* BRAND */}
        <div className="brand">
          <img
            src="/Logo.png"
            alt="TechPaath Solutions Logo"
            className="brand-logo"
          />
          <div>
            <h2>Apply for Internship</h2>
            <p>Kickstart your professional journey 🚀</p>
          </div>
        </div>

        {/* FORM */}
        <form className="apply-form" onSubmit={handleSubmit}>
          <div className="field">
            <label>Full Name *</label>
            <input name="fullName" value={form.fullName} disabled />
          </div>

          <div className="field">
            <label>Email *</label>
            <input type="email" value={form.email} disabled />
          </div>

          <div className="field">
            <label>Phone *</label>
            <input
              name="phone"
              value={form.phone}
              onChange={handleChange}
            />
          </div>

          <div className="field">
            <label>Internship *</label>
            <input
              name="internshipName"
              value={form.internshipName}
              onChange={handleChange}
            />
          </div>

          <div className="field">
            <label>Skills</label>
            <input
              name="skills"
              placeholder="HTML, CSS, React"
              value={form.skills}
              onChange={handleChange}
            />
          </div>

          <div className="field">
            <label>Resume (PDF / DOCX)</label>
            <input
              type="file"
              accept=".pdf,.doc,.docx"
              onChange={handleFile}
            />
          </div>

          {message && (
            <div className={`msg ${message.type}`}>
              {message.text}
            </div>
          )}

          <div className="actions">
            <button className="submit-btn" disabled={loading}>
              {loading ? "Submitting..." : "Submit Application"}
            </button>
            <button
              type="button"
              className="cancel-btn"
              onClick={() => navigate(-1)}
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
