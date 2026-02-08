// frontend/src/pages/AdminVideos.jsx
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function AdminVideos() {
  const navigate = useNavigate();
  const [videos, setVideos] = useState([]);
  const [form, setForm] = useState({
    title: "",
    category: "",
    file: null,
  });
  const [search, setSearch] = useState("");
  const [uploading, setUploading] = useState(false);

  useEffect(() => {
    // client-side guard
    const role = localStorage.getItem("role");
    if (role !== "admin") {
      navigate("/", { replace: true });
      return;
    }
    fetchVideos();
    // eslint-disable-next-line
  }, []);

  const fetchVideos = async () => {
    try {
      const res = await axios.get("/videos");
      setVideos(res.data.videos || []);
    } catch (err) {
      console.error("Fetch videos error:", err);
      setVideos([]);
    }
  };

  const handleUpload = async (e) => {
    e.preventDefault();

    if (!form.file) return alert("Please select a video");
    setUploading(true);

    try {
      const token = localStorage.getItem("token");
      const formData = new FormData();
      formData.append("title", form.title);
      formData.append("category", form.category);
      formData.append("file", form.file);

      await axios.post("/videos/upload", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: token ? `Bearer ${token}` : "",
        },
      });

      alert("Video uploaded!");
      setForm({ title: "", category: "", file: null });
      fetchVideos();
    } catch (err) {
      console.error("Upload error:", err);
      alert(err?.response?.data?.message || "Upload failed");
    } finally {
      setUploading(false);
    }
  };

  const deleteVideo = async (id) => {
    if (!window.confirm("Delete this video?")) return;
    try {
      const token = localStorage.getItem("token");
      await axios.delete(`/videos/${id}`, {
        headers: {
          Authorization: token ? `Bearer ${token}` : "",
        },
      });
      alert("Deleted");
      fetchVideos();
    } catch (err) {
      console.error("Delete error:", err);
      alert(err?.response?.data?.message || "Delete failed");
    }
  };

  const filtered = videos.filter((v) =>
    (v.title || "").toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-5">
      <h1 className="mb-4">🎥 Admin Video Manager</h1>

      {/* Upload Form */}
      <form onSubmit={handleUpload} className="p-4 border rounded mb-4" style={{ background: "#f8f9fa" }}>
        <h4>Upload New Video</h4>

        <input
          type="text"
          placeholder="Video Title"
          className="form-control my-2"
          value={form.title}
          onChange={(e) => setForm({ ...form, title: e.target.value })}
          required
        />

        <input
          type="text"
          placeholder="Category"
          className="form-control my-2"
          value={form.category}
          onChange={(e) => setForm({ ...form, category: e.target.value })}
        />

        <input
          type="file"
          accept="video/*"
          className="form-control my-2"
          onChange={(e) => setForm({ ...form, file: e.target.files[0] })}
          required
        />

        <button className="btn btn-success mt-2" disabled={uploading}>
          {uploading ? "Uploading..." : "Upload"}
        </button>
      </form>

      <input
        type="text"
        placeholder="Search videos..."
        className="form-control my-3"
        onChange={(e) => setSearch(e.target.value)}
      />

      <div className="row">
        {filtered.map((video) => (
          <div key={video._id} className="col-md-4 mb-4">
            <div className="card">
              {video.thumbnail && <img src={video.thumbnail} alt="thumb" className="card-img-top" />}

              <div className="card-body">
                <h5>{video.title}</h5>
                <p>{video.category}</p>

                <div className="d-flex gap-2">
                  <button className="btn btn-danger" onClick={() => deleteVideo(video._id)}>
                    Delete
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}

        {filtered.length === 0 && <p>No videos found...</p>}
      </div>
    </div>
  );
}
