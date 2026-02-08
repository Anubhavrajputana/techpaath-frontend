import React, { useState, useEffect } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import axiosInstance from "../api/axiosInstance";
import { useAuth } from "../context/AuthContext";
import "../styles/enroll.css";

/* 🔥 COURSE NAME → SHORT ID MAP */
const COURSE_MAP = {
  "C Programming Mastery": "c",
  "C++ Programming Mastery": "cpp",
  "Python Mastery": "python",
  "Java Development": "java",
  "Fullstack Web Development": "fullstack",
};

export default function EnrollPage() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const { user, refreshEnrollments, enrolledCourses } = useAuth();

  // 🔥 FIXED HERE
  const rawCourse = searchParams.get("course");          // "C Programming Mastery"
  const courseId = COURSE_MAP[rawCourse] || rawCourse;  // "c"

  const [phone, setPhone] = useState("");
  const [screenshot, setScreenshot] = useState(null);
  const [showQR, setShowQR] = useState(false);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState(null);

  const alreadyEnrolled = enrolledCourses.includes(courseId);

  /* 🔐 LOGIN + BASIC VALIDATION */
  useEffect(() => {
    if (!user) {
      navigate("/login");
      return;
    }

    if (!courseId) {
      navigate("/courses");
      return;
    }

    setPhone(user.phone || "");
  }, [user, courseId, navigate]);

  /* 🚀 SUBMIT ENROLLMENT */
  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage(null);

    if (alreadyEnrolled) {
      setMessage("You are already enrolled in this course ✅");
      return;
    }

    if (!phone) {
      setMessage("Please enter phone number");
      return;
    }

    if (!screenshot) {
      setMessage("Please upload payment screenshot");
      return;
    }

    try {
      setLoading(true);

      const formData = new FormData();
      formData.append("course", courseId); // 🔥 ALWAYS SHORT ID
      formData.append("phone", phone);
      formData.append("paymentScreenshot", screenshot);

      await axiosInstance.post("/enrolls", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      await refreshEnrollments();

      alert("Enrollment Successful 🚀");
      navigate("/notes");

    } catch (error) {
      setMessage(
        error.response?.data?.message || "Enrollment failed ❌"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="enroll-container">
      <div className="enroll-box">
        <h1 className="title">
          Enroll in <span>{rawCourse}</span>
        </h1>

        <form onSubmit={handleSubmit} className="enroll-form">
          <input value={user?.name || ""} disabled />
          <input value={user?.email || ""} disabled />

          <input
            type="tel"
            placeholder="Phone Number"
            className="input"
            disabled={alreadyEnrolled}
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />

          <button
            type="button"
            className="qr-btn"
            disabled={alreadyEnrolled}
            onClick={() => setShowQR(true)}
          >
            📸 Scan Me!
          </button>

          <input
            type="file"
            accept="image/*"
            disabled={alreadyEnrolled}
            onChange={(e) => setScreenshot(e.target.files[0])}
          />

          {message && <p className="error-msg">{message}</p>}

          <button
            className="submit-btn"
            disabled={loading || alreadyEnrolled}
          >
            {alreadyEnrolled
              ? "Already Enrolled ✅"
              : loading
              ? "Submitting..."
              : "Submit Enrollment 🚀"}
          </button>
        </form>

        {showQR && (
          <div className="qr-modal">
            <div className="qr-box">
              <h3>Scan QR to Pay</h3>
              <img src="/qr.jpg" alt="QR" />
              <button onClick={() => setShowQR(false)}>Close</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
