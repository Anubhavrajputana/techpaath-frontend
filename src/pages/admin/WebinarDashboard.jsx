import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

function WebinarDashboard() {
  const { id } = useParams(); // webinarId
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!id) return;

    axios
      .get(
        `${import.meta.env.VITE_API_BASE}/api/admin/webinars/${id}/registrations`
      )
      .then((res) => {
        setUsers(res.data || []);
      })
      .catch((err) => {
        console.error(err);
        alert("Failed to load registrations");
      })
      .finally(() => setLoading(false));
  }, [id]);

  return (
    <div className="container py-4 text-white">
      <h3 className="mb-4">📋 Webinar Registrations</h3>

      {loading ? (
        <p>Loading...</p>
      ) : users.length === 0 ? (
        <p>No users registered yet.</p>
      ) : (
        <div className="table-responsive">
          <table className="table table-dark table-hover align-middle">
            <thead>
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Registered At</th>
              </tr>
            </thead>
            <tbody>
              {users.map((u, i) => (
                <tr key={u._id}>
                  <td>{i + 1}</td>
                  <td>{u.name}</td>
                  <td>{u.email}</td>
                  <td>{u.phone}</td>
                  <td>
                    {u.createdAt
                      ? new Date(u.createdAt).toLocaleString()
                      : "-"}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default WebinarDashboard;
