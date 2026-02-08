// frontend/src/pages/RecordedVideos.jsx
import React, { useEffect, useState } from "react";
import axios from "axios";

export default function RecordedVideos() {
  const [videos, setVideos] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchVideos();
  }, []);

  const fetchVideos = async () => {
    try {
      setLoading(true);
      const res = await axios.get("/videos");
      setVideos(res.data.videos || []);
    } catch (err) {
      console.error("Fetch videos error:", err);
      setVideos([]);
    } finally {
      setLoading(false);
    }
  };

  const filteredVideos = videos.filter((v) =>
    (v.title || "").toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div
      style={{
        background: "linear-gradient(135deg, #0072BC 40%, #5CB85C 100%)",
        minHeight: "100vh",
      }}
      className="p-5"
    >
      <h1 className="text-center text-white mb-4">Recorded Video Lectures 🎥</h1>

      <div className="text-center mb-4">
        <input
          type="text"
          placeholder="Search videos..."
          className="p-2 rounded w-50"
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {loading ? (
        <p className="text-center text-white">Loading videos...</p>
      ) : (
        <div className="row">
          {filteredVideos.map((video) => (
            <div key={video._id} className="col-md-4 mb-4">
              <div
                className="card"
                style={{
                  borderRadius: "15px",
                  boxShadow: "0 5px 15px rgba(0,0,0,0.2)",
                }}
              >
                {video.thumbnail ? (
                  <img
                    src={video.thumbnail}
                    alt="thumb"
                    className="card-img-top"
                    style={{
                      borderRadius: "15px 15px 0 0",
                      height: "180px",
                      objectFit: "cover",
                    }}
                  />
                ) : (
                  <div
                    style={{
                      height: 180,
                      background: "#eee",
                      borderRadius: "15px 15px 0 0",
                    }}
                  />
                )}

                <div className="card-body">
                  <h5 className="card-title">{video.title}</h5>
                  <p className="text-muted">{video.category}</p>

                  <video
                    controls
                    src={video.videoUrl}
                    style={{ width: "100%", borderRadius: "10px" }}
                  />
                </div>
              </div>
            </div>
          ))}

          {filteredVideos.length === 0 && (
            <p className="text-center text-white mt-5">No videos found.</p>
          )}
        </div>
      )}
    </div>
  );
}
