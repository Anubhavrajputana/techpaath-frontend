import { motion, AnimatePresence } from "framer-motion";

/* ===============================
   🎨 EVENT TYPE BASED IMAGES
================================ */
const EVENT_IMAGES = {
  webinar: "/events/webinar-event.png",
  hackathon: "/events/hackathon-event.png",
  competition: "/events/frontend-event.png",
};

export default function EventDetailsModal({ event, onClose }) {
  if (!event) return null;

  const {
    title,
    description,
    date,
    mode,
    type,
    seats,
    organizer = "TechPaath Solutions",
    meetLink,
  } = event;

  // ✅ HARD NORMALIZATION
  const eventType = type?.toString().trim().toLowerCase();

  // ✅ FORCE IMAGE FROM PATH (NO FALLBACK)
  const headerImage = EVENT_IMAGES[eventType];

  return (
    <AnimatePresence>
      <motion.div
        className="position-fixed top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center"
        style={{
          background: "rgba(0,0,0,0.75)",
          backdropFilter: "blur(6px)",
          zIndex: 9999,
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <motion.div
          initial={{ scale: 0.85, opacity: 0, y: 40 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.85, opacity: 0, y: 40 }}
          transition={{ type: "spring", stiffness: 220, damping: 18 }}
          className="text-white position-relative"
          style={{
            width: "92%",
            maxWidth: 820,
            borderRadius: 22,
            background:
              "linear-gradient(180deg, rgba(15,23,42,0.95), rgba(2,6,23,0.95))",
            boxShadow: "0 40px 80px rgba(0,0,0,0.6)",
            overflow: "hidden",
          }}
        >
          {/* ❌ CLOSE BUTTON */}
          <button
            onClick={onClose}
            className="btn btn-sm btn-outline-light position-absolute"
            style={{
              top: 16,
              right: 16,
              zIndex: 10,
              borderRadius: "50%",
            }}
          >
            ✕
          </button>

          {/* 🖼️ HEADER IMAGE (TYPE BASED) */}
          {headerImage && (
            <div style={{ position: "relative" }}>
              <img
                src={headerImage}
                alt={title}
                style={{
                  width: "100%",
                  height: 260,
                  objectFit: "cover",
                }}
              />

              {/* TYPE BADGE */}
              <span
                className={`badge position-absolute top-0 end-0 m-3 px-3 py-2 ${
                  eventType === "webinar"
                    ? "bg-warning text-dark"
                    : eventType === "hackathon"
                    ? "bg-success"
                    : "bg-info"
                }`}
                style={{ fontSize: 13, letterSpacing: 0.5 }}
              >
                {eventType?.toUpperCase()}
              </span>
            </div>
          )}

          {/* 📄 BODY */}
          <div className="p-4 p-md-5">
            <h3 className="fw-bold mb-2">{title}</h3>

            <p className="text-white-50 mb-3">{organizer}</p>

            {/* META */}
            <div className="d-flex flex-wrap gap-3 mb-4 text-white-50">
              <span>📅 {date}</span>
              <span>🌐 {mode || "Online"}</span>
              <span>👥 Seats: {seats ?? "Unlimited"}</span>
            </div>

            {/* DESCRIPTION */}
            <p
              className="text-white-75"
              style={{ lineHeight: 1.7, fontSize: 15 }}
            >
              {description || "No description available for this event."}
            </p>

            {/* WEBINAR LINK */}
            {eventType === "webinar" && (
              <div className="mt-4">
                {meetLink ? (
                  <a
                    href={meetLink}
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-success px-4 py-2"
                  >
                    🚀 Join Google Meet
                  </a>
                ) : (
                  <p className="text-warning">
                    Meet link will be shared by admin before webinar.
                  </p>
                )}
              </div>
            )}

            {/* FOOTER */}
            <div className="mt-5 d-flex justify-content-end">
              <button
                onClick={onClose}
                className="btn btn-outline-light px-4"
              >
                Close
              </button>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
