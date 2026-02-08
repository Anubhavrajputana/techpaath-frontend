import React, { useEffect, useState } from "react";
import axios from "axios";
import EventCard from "../components/EventCard";
import RegisterModal from "../components/RegisterModal";

const API_BASE = import.meta.env.VITE_API_URL || "http://localhost:5000";

export default function ContestsPage() {
  const [events, setEvents] = useState([]);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  /* ===============================
     FETCH EVENTS — API ONLY
  =============================== */
  useEffect(() => {
    const fetchEvents = async () => {
      try {
        setLoading(true);
        setError("");

        const res = await axios.get(`${API_BASE}/api/events`);
        console.log("✅ EVENTS FROM API:", res.data);

        // ✅ SAFETY: ensure array only
        setEvents(Array.isArray(res.data) ? res.data : []);
      } catch (err) {
        console.error("❌ Failed to load events:", err);
        setError("Failed to load events. Please try again later.");
        setEvents([]);
      } finally {
        setLoading(false);
      }
    };

    fetchEvents();
  }, []);

  return (
    <div
      className="p-5"
      style={{
        minHeight: "100vh",
        background: "#08121F",
        color: "white",
      }}
    >
      <h1 className="text-center mb-4">TechPaath Contests & Events</h1>

      <p className="text-center text-white-50 mb-5">
        Participate in contests, hackathons & webinars 🚀
      </p>

      {/* LOADING */}
      {loading && (
        <p className="text-center text-white-50">Loading events…</p>
      )}

      {/* ERROR */}
      {error && (
        <p className="text-center text-danger">{error}</p>
      )}

      {/* EVENTS GRID */}
      {!loading && !error && (
        <div className="row g-4">
          {events.map((event) => (
            <div key={event._id} className="col-md-4">
              <EventCard
                event={event}
                onRegister={() => setSelectedEvent(event)}
              />
            </div>
          ))}

          {events.length === 0 && (
            <p className="text-center text-white-50">
              No events available right now.
            </p>
          )}
        </div>
      )}

      {/* REGISTER MODAL */}
      {selectedEvent && (
        <RegisterModal
          event={selectedEvent}
          onClose={() => setSelectedEvent(null)}
        />
      )}
    </div>
  );
}
