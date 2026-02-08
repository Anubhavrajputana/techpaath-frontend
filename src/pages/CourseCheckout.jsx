import React, { useEffect, useState } from "react";
import { useLocation, useNavigate, Navigate } from "react-router-dom";
import axiosInstance from "../api/axiosInstance";
import { useAuth } from "../context/AuthContext";
import "./CourseCheckout.css";

/* 🔍 QUERY HELPER */
function useQuery() {
  return new URLSearchParams(useLocation().search);
}

export default function CourseCheckout() {
  const q = useQuery();
  const navigate = useNavigate();
  const courseId = q.get("course");

  const { user, enrolledCourses, refreshEnrollments } = useAuth();

  const [screenshot, setScreenshot] = useState(null);
  const [msg, setMsg] = useState("");
  const [loading, setLoading] = useState(false);

  /* 🔥 SAFETY CHECKS */
  useEffect(() => {
    // no course → go back
    if (!courseId) {
      navigate("/courses");
    }
  }, [courseId, navigate]);

  /* 🔥 ALREADY ENROLLED → SKIP CHECKOUT COMPLETELY */
  if (enrolledCourses?.includes(courseId)) {
    return <Navigate to={`/notes/${courseId}`} replace />;
  }

  /* ❌ OPTIONAL: agar checkout hi use nahi karna */
  // return null;

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!screenshot) {
      setMsg("Please upload payment screenshot");
      return;
    }

    setLoading(true);
    setMsg("");

    try {
      const formData = new FormData();
      formData.append("course", courseId);
      formData.append("paymentScreenshot", screenshot);

      await axiosInstance.post("/enrolls", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      await refreshEnrollments();

      navigate(`/notes/${courseId}`);
    } catch (err) {
      setMsg(err.response?.data?.message || "Enrollment failed ❌");
    }

    setLoading(false);
  };

  /* 🔥 IF YOU WANT TO COMPLETELY REMOVE ENROLL BOX UI */
  return null;

  /* 
  👉 Agar future me wapas chahiye to 
     upar ka `return null` hata dena
  */

  /*
  return (
    <div className="checkout-container">
      <div className="checkout-card">
        <h2 className="checkout-title">Enroll — {courseId}</h2>

        <form onSubmit={handleSubmit} className="form">
          <input value={user?.name || ""} disabled />
          <input value={user?.email || ""} disabled />

          <input
            type="file"
            accept="image/*"
            onChange={(e) => setScreenshot(e.target.files[0])}
          />

          <button className="submit-btn" disabled={loading}>
            {loading ? "Processing..." : "Proceed to Payment"}
          </button>
        </form>

        {msg && <p className="msg">{msg}</p>}
      </div>
    </div>
  );
  */
}
