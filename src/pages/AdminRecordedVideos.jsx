import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";

export default function AdminRecordedVideos() {
  const [selectedVideo, setSelectedVideo] = useState(null);

  // Dummy data – replace with backend API later
  const videos = [
    {
      id: 1,
      title: "Admin – Full Stack Roadmap",
      thumbnail: "/thumbnails/fullstack.png",
      url: "https://www.youtube.com/embed/nu_pCVPKzTk",
    },
    {
      id: 2,
      title: "Admin – DSA Mastery",
      thumbnail: "/thumbnails/dsa.png",
      url: "https://www.youtube.com/embed/8hly31xKli0",
    },
    {
      id: 3,
      title: "Admin – React Deep Dive",
      thumbnail: "/thumbnails/reactadmin.png",
      url: "https://www.youtube.com/embed/bMknfKXIFA8",
    },
  ];

  return (
    <div
      className="min-h-screen text-white pt-24 pb-10 px-6"
      style={{
        background: "linear-gradient(135deg, #0B132B 40%, #1C2541 100%)",
      }}
    >
      <h1 className="text-center text-4xl font-bold mb-10">
        🎥 Admin – Recorded Videos
      </h1>

      <p className="text-center text-gray-300 mb-6">
        Only administrators can view and manage this section.
      </p>

      {/* Grid Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {videos.map((video) => (
          <div
            key={video.id}
            className="rounded-xl overflow-hidden shadow-lg bg-[#1C2541] border border-gray-700 transition transform hover:scale-[1.03] hover:shadow-2xl cursor-pointer"
            onClick={() => setSelectedVideo(video)}
          >
            <img
              src={video.thumbnail}
              alt={video.title}
              className="w-full h-48 object-cover"
            />

            <div className="p-4">
              <h3 className="text-lg font-semibold">{video.title}</h3>
            </div>
          </div>
        ))}
      </div>

      {/* Modal Player */}
      <Modal
        show={!!selectedVideo}
        onHide={() => setSelectedVideo(null)}
        centered
        size="lg"
      >
        <Modal.Body className="p-0 bg-black">
          {selectedVideo && (
            <iframe
              width="100%"
              height="400"
              src={selectedVideo.url}
              title="Video Player"
              frameBorder="0"
              allowFullScreen
            ></iframe>
          )}
        </Modal.Body>

        <Modal.Footer
          style={{ backgroundColor: "#0B132B", borderTop: "1px solid #1C2541" }}
        >
          <Button variant="secondary" onClick={() => setSelectedVideo(null)}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
