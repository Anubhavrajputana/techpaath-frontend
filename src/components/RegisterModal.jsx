import { useState, useEffect } from "react";
import axios from "axios";
import { motion } from "framer-motion";

const API_BASE = import.meta.env.VITE_API_URL || "http://localhost:5000";

export default function RegisterModal({ event, onClose }) {
  const [registered, setRegistered] = useState(false);
  const [loading, setLoading] = useState(false);

  // 🛡️ HARD SAFETY CHECK
  const isInvalid =
    !event ||
    typeof event !== "object" ||
    event.type === "click" ||
    !event._id;

  useEffect(() => {
    if (isInvalid) {
      console.error("❌ Invalid event passed to RegisterModal:", event);
    } else {
      console.log("✅ EVENT RECEIVED (VALID):", event);
    }
  }, [event]);

  if (isInvalid) return null;

const submit = async (e) => {
  e.preventDefault();
  if (registered || loading) return;

  try {
    setLoading(true);

    const eventId = event._id;
    const eventType = event.type;

    const payload = {
      name: e.target.name.value,
      email: e.target.email.value,
      phone: e.target.phone.value,
    };

    let url = "";

    if (eventType === "competition") {
      url = "/api/competitions/register";
      payload.competitionId = eventId;
    }

    if (eventType === "hackathon") {
      url = "/api/hackathons/register";
      payload.hackathonId = eventId;
    }

    if (eventType === "webinar") {
      url = "/api/webinars/register";
      payload.webinarId = eventId;
    }

    if (!url) {
      alert("Invalid event type ❌");
      return;
    }

    await axios.post(`${API_BASE}${url}`, payload);

    alert("Registered Successfully 🎉");
    setRegistered(true);
    setTimeout(onClose, 800);

  } catch (err) {
    if (err.response?.status === 400) {
      alert("Already registered ✅");
      setRegistered(true);
    } else {
      alert("Registration failed ❌");
    }
  } finally {
    setLoading(false);
  }
};


  return (
    <div
      className="position-fixed top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center"
      style={{ background: "rgba(0,0,0,0.7)", zIndex: 9999 }}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="bg-dark text-white p-4 rounded-4"
        style={{ width: 380 }}
      >
        <div className="d-flex justify-content-between mb-3">
          <h5>{event.title}</h5>
          <button onClick={onClose} className="btn btn-sm btn-outline-light">
            ✕
          </button>
        </div>

        <p className="text-white-50 small">
          📅 {event.date} • 🌐 {event.mode || "Online"}
        </p>

        <p className="text-white-50 small">{event.description}</p>

        {event.type === "webinar" && (
          event.meetLink ? (
            <a
              href={event.meetLink}
              target="_blank"
              rel="noreferrer"
              className="btn btn-success w-100 mb-3"
            >
              Join Google Meet 🚀
            </a>
          ) : (
            <p className="text-warning text-center mb-3">
              Meet link will be shared by admin
            </p>
          )
        )}

        <form onSubmit={submit} className="d-grid gap-2">
          <input name="name" placeholder="Your Name" className="form-control" required />
          <input name="email" type="email" placeholder="Email" className="form-control" required />
          <input name="phone" placeholder="Phone" className="form-control" required />

          <button className="btn btn-primary" disabled={loading || registered}>
            {registered ? "Registered ✅" : loading ? "Registering..." : "Register Now"}
          </button>
        </form>
      </motion.div>
    </div>
  );
}
