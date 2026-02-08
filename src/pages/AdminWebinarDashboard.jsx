import React, { useEffect, useState } from "react";
import axios from "axios";
import "../styles/adminWebinar.css";

export default function AdminWebinarDashboard() {
  const [webinars, setWebinars] = useState([]);
  const [title, setTitle] = useState("");
  const [meetLink, setMeetLink] = useState("");
  const [selectedId, setSelectedId] = useState(null);
  const [users, setUsers] = useState([]);

  const BASE = "http://localhost:4000/api";

  useEffect(() => {
    axios.get(`${BASE}/admin/webinars`).then((res) => {
      setWebinars(res.data || []);
    });
  }, []);

  const createWebinar = async () => {
    const res = await axios.post(`${BASE}/admin/webinars`, {
      title,
      description: "Company intro webinar",
      date: "26 Jan 2025",
    });
    setWebinars([...webinars, res.data]);
  };

  const updateLink = async () => {
    await axios.put(
      `${BASE}/admin/webinars/${selectedId}/link`,
      { meetLink }
    );
    alert("Meet link updated");
  };

  const loadUsers = async (id) => {
    const res = await axios.get(
      `${BASE}/admin/webinars/${id}/registrations`
    );
    setUsers(res.data);
    setSelectedId(id);
  };

  return (
    <div className="admin-container">
      <h2>Admin Webinar Dashboard</h2>

      <div className="card">
        <input
          placeholder="Webinar title"
          onChange={(e) => setTitle(e.target.value)}
        />
        <button onClick={createWebinar}>
          Create Webinar
        </button>
      </div>

      {webinars.map((w) => (
        <div className="webinar-card" key={w._id}>
          <h4>{w.title}</h4>
          <button onClick={() => loadUsers(w._id)}>
            View Registrations
          </button>
        </div>
      ))}

      {selectedId && (
        <div className="card">
          <input
            placeholder="Google Meet link"
            onChange={(e) => setMeetLink(e.target.value)}
          />
          <button onClick={updateLink}>
            Add Meet Link
          </button>

          <h4>Registered Users</h4>
          {users.map((u) => (
            <p key={u._id}>{u.name} - {u.email}</p>
          ))}

          <button className="btn-success">
            Generate Certificates
          </button>
        </div>
      )}
    </div>
  );
}
