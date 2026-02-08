import React, { useState } from "react";
import { motion } from "framer-motion";
import axios from "axios";
import "./ContactSales.css";

export default function ContactSales() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    organization: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      await axios.post("http://localhost:5000/api/contact-sales", form);

      alert("Request submitted successfully ✅");

      setForm({
        name: "",
        email: "",
        organization: "",
        message: "",
      });
    } catch (err) {
      console.error(err);
      alert("Submission failed ❌");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="cs-page">
      <motion.div
        className="cs-box"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
      >
        <h2>Contact Our Sales Team 🤝</h2>
        <p>
          We help institutions, training centers & colleges with partnerships.
        </p>

        {/* ✅ CONNECTED FORM */}
        <form className="cs-form" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Your Name"
            required
            value={form.name}
            onChange={(e) =>
              setForm({ ...form, name: e.target.value })
            }
          />

          <input
            type="email"
            placeholder="Email Address"
            required
            value={form.email}
            onChange={(e) =>
              setForm({ ...form, email: e.target.value })
            }
          />

          <input
            type="text"
            placeholder="Organization"
            required
            value={form.organization}
            onChange={(e) =>
              setForm({ ...form, organization: e.target.value })
            }
          />

          <textarea
            rows="4"
            placeholder="How can we help you?"
            required
            value={form.message}
            onChange={(e) =>
              setForm({ ...form, message: e.target.value })
            }
          />

          <motion.button
            type="submit"
            className="cs-btn"
            whileHover={{ scale: 1.07 }}
            disabled={loading}
          >
            {loading ? "Submitting..." : "Submit Request"}
          </motion.button>
        </form>
      </motion.div>
    </div>
  );
}
