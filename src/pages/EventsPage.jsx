import { useEffect, useState } from "react";
import axios from "axios";
import EventCard from "../components/EventCard";
import RegisterModal from "../components/RegisterModal";
import EventDetailsModal from "../components/EventDetailsModal";
import "./EventsPage.css";

const API_BASE = import.meta.env.VITE_API_URL || "http://localhost:5000";

export default function EventsPage() {
  const [events, setEvents] = useState([]);
  const [filter, setFilter] = useState("all");
  const [loading, setLoading] = useState(true);

  // 🔥 SEPARATE STATES (IMPORTANT)
  const [registerEvent, setRegisterEvent] = useState(null);
  const [detailsEvent, setDetailsEvent] = useState(null);

  // ===============================
  // FETCH EVENTS FROM BACKEND
  // ===============================
  useEffect(() => {
    const fetchEvents = async () => {
      try {
        setLoading(true);
        const res = await axios.get(`${API_BASE}/api/events`);
        setEvents(Array.isArray(res.data) ? res.data : []);
      } catch (err) {
        console.error("❌ Failed to fetch events:", err);
        setEvents([]);
      } finally {
        setLoading(false);
      }
    };

    fetchEvents();
  }, []);

  // ===============================
  // FILTER LOGIC
  // ===============================
  // ===============================
// FILTER LOGIC (🔥 FIXED)
// ===============================
const filteredEvents =
  filter === "all"
    ? events
    : events.filter(
        (e) =>
          e.type &&
          e.type.toString().trim().toLowerCase() === filter
      );

  return (
    /* 🔒 PAGE WRAPPER (PREVENTS CSS CLASH) */
    <div className="events-page">
      <div
        className="container py-5 text-white"
        style={{ minHeight: "100vh" }}
      >
        {/* TITLE */}
        <h2 className="text-center mb-4">TechPaath Events</h2>

        {/* FILTER BUTTONS */}
        <div className="events-filters">
          {["all", "competition", "hackathon", "webinar"].map((t) => (
            <button
              key={t}
              onClick={() => setFilter(t)}
              className={`btn btn-sm ${
                filter === t ? "btn-primary" : "btn-outline-light"
              }`}
            >
              {t.toUpperCase()}
            </button>
          ))}
        </div>

        {/* LOADING */}
        {loading && (
          <div className="events-loading">
            Loading events…
          </div>
        )}

        {/* EMPTY */}
        {!loading && filteredEvents.length === 0 && (
          <div className="events-empty">
            No events available.
          </div>
        )}

        {/* EVENTS GRID */}
        <div className="events-grid">
          {filteredEvents.map((event) => (
            <EventCard
              key={event._id}
              event={event}
              onRegister={(ev) => setRegisterEvent(ev)}   // ✅ REGISTER
              onDetails={(ev) => setDetailsEvent(ev)}     // ✅ DETAILS
            />
          ))}
        </div>

        {/* REGISTER MODAL */}
        {registerEvent && (
          <RegisterModal
            event={registerEvent}
            onClose={() => setRegisterEvent(null)}
          />
        )}

        {/* DETAILS MODAL */}
        {detailsEvent && (
          <EventDetailsModal
            event={detailsEvent}
            onClose={() => setDetailsEvent(null)}
          />
        )}
      </div>
    </div>
  );
}
