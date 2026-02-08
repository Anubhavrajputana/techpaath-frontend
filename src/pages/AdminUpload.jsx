// src/pages/AdminUpload.jsx
import React, { useState } from "react";
import axios from "axios";

export default function AdminUpload() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [file, setFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);
  const [loading, setLoading] = useState(false);

  const onFileChange = (e) => {
    const f = e.target.files[0];
    if (!f) return;
    setFile(f);
    setPreviewUrl(URL.createObjectURL(f));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title || !description) {
      alert("Please enter title and description");
      return;
    }
    setLoading(true);
    try {
      const form = new FormData();
      form.append("title", title);
      form.append("description", description);
      if (file) form.append("file", file);

      // endpoint will upload to Cloudinary and create Blog
      const res = await axios.post("/api/blogs/upload-and-create", form, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      if (res.data?.success) {
        alert("Blog created successfully");
        setTitle("");
        setDescription("");
        setFile(null);
        setPreviewUrl(null);
      } else {
        alert("Failed to create blog");
      }
    } catch (err) {
      console.error(err);
      alert("Error uploading blog");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Admin - Create Blog</h1>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block mb-1">Title</label>
          <input value={title} onChange={(e) => setTitle(e.target.value)} className="w-full border rounded p-2" />
        </div>

        <div>
          <label className="block mb-1">Description</label>
          <textarea value={description} onChange={(e) => setDescription(e.target.value)} rows="5" className="w-full border rounded p-2" />
        </div>

        <div>
          <label className="block mb-1">Image / Video (optional)</label>
          <input type="file" accept="image/*,video/*" onChange={onFileChange} />
        </div>

        {previewUrl && (
          <div className="mt-2">
            {file.type.startsWith("image") ? (
              <img src={previewUrl} alt="preview" className="w-full rounded" />
            ) : (
              <video src={previewUrl} controls className="w-full rounded" />
            )}
          </div>
        )}

        <div>
          <button type="submit" disabled={loading} className="px-4 py-2 bg-blue-600 text-white rounded">
            {loading ? "Uploading..." : "Create Blog"}
          </button>
        </div>
      </form>
    </div>
  );
}
