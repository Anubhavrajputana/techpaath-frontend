import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

/* ===============================
   🎨 EVENT TYPE BASED IMAGES
================================ */
const EVENT_IMAGES = {
  webinar: "/events/webinar-event.png",
  hackathon: "/events/hackathon-event.png",
  competition: "/events/frontend-event.png",
};

const FALLBACK_IMAGE = "/events/webinar-event.png";

export default function EventCard({ event, onRegister, onDetails }) {
  if (!event) return null;

  const [showImage, setShowImage] = useState(false);

  const eventType = event.type?.toLowerCase().trim();

  const eventImage =
    event.image ||
    EVENT_IMAGES[eventType] ||
    FALLBACK_IMAGE;

  return (
    <>
      {/* ================= CARD ================= */}
      <motion.div
        whileHover={{ y: -12, scale: 1.04 }}
        transition={{ duration: 0.35 }}
        className="card text-white position-relative"
        style={{
          background:
            "linear-gradient(135deg, rgba(99,102,241,0.25), rgba(14,165,233,0.15))",
          borderRadius: 22,
          border: "1px solid rgba(255,255,255,0.15)",
          boxShadow: "0 20px 40px rgba(0,0,0,0.35)",
          overflow: "hidden",
        }}
      >
        {/* 🏷️ TYPE BADGE */}
        <span
          className={`position-absolute top-0 end-0 badge m-3 ${
            eventType === "webinar"
              ? "bg-warning text-dark"
              : eventType === "hackathon"
              ? "bg-success"
              : "bg-info"
          }`}
          style={{ zIndex: 2 }}
        >
          {eventType?.toUpperCase()}
        </span>

        {/* 🖼️ CARD IMAGE (CLICKABLE) */}
        <div
          onClick={() => setShowImage(true)}
          style={{
            height: 190,
            background: "rgba(0,0,0,0.35)",
            cursor: "zoom-in",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <img
            src={eventImage}
            alt={event.title}
            className="card-img-top"
            style={{
              maxHeight: "100%",
              maxWidth: "100%",
              objectFit: "contain",
            }}
          />
        </div>

        {/* 📄 BODY */}
        <div className="card-body d-flex flex-column">
          <h5 className="fw-bold">{event.title}</h5>

          <small className="text-white-50 mb-2">
            📅 {event.date} • 🌐 {event.mode}
          </small>

          <p className="text-white-75 flex-grow-1">
            {event.description?.length > 110
              ? event.description.slice(0, 110) + "..."
              : event.description}
          </p>

          <div className="d-flex justify-content-between gap-2 mt-3">
            <button
              className="btn btn-outline-light btn-sm w-50"
              onClick={() => onRegister(event)}
            >
              Register
            </button>

            <button
              className="btn btn-primary btn-sm w-50"
              onClick={() => onDetails(event)}
            >
              Details
            </button>
          </div>
        </div>
      </motion.div>

      {/* ================= FULL IMAGE PREVIEW ================= */}
      <AnimatePresence>
        {showImage && (
          <motion.div
            className="position-fixed top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center"
            style={{
              background: "rgba(0,0,0,0.85)",
              zIndex: 9999,
              cursor: "zoom-out",
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShowImage(false)}
          >
            <motion.img
              src={eventImage}
              alt={event.title}
              initial={{ scale: 0.85 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.85 }}
              transition={{ duration: 0.25 }}
              style={{
                maxWidth: "90%",
                maxHeight: "90%",
                objectFit: "contain",
                boxShadow: "0 30px 80px rgba(0,0,0,0.8)",
                borderRadius: 12,
              }}
            />

            {/* ❌ CLOSE BUTTON */}
            <button
              onClick={() => setShowImage(false)}
              className="btn btn-outline-light position-absolute"
              style={{ top: 20, right: 20 }}
            >
              ✕
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
