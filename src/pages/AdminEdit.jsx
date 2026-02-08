import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

export default function AdminEdit() {
  const { id } = useParams(); // Blog ID
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);

  // Fetch existing blog data
  const fetchBlog = async () => {
    try {
      const res = await axios.get(`/api/blogs/${id}`);
      setTitle(res.data.title);
      setDescription(res.data.description);
    } catch (err) {
      console.error("Failed to load blog:", err);
      alert("Blog not found!");
      navigate("/admin");
    }
  };

  useEffect(() => {
    fetchBlog();
  }, []);

  // Update blog handler
  const updateBlog = async (e) => {
    e.preventDefault();

    if (!title.trim() || !description.trim()) {
      alert("Please fill all fields");
      return;
    }

    setLoading(true);

    const form = new FormData();
    form.append("title", title);
    form.append("description", description);
    if (file) form.append("file", file);

    try {
      await axios.put(`/api/blogs/${id}`, form, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      alert("Blog Updated Successfully!");
      navigate("/admin");
    } catch (err) {
      console.error("Update error:", err);
      alert("Failed to update blog");
    }

    setLoading(false);
  };

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Edit Blog</h1>

      <form onSubmit={updateBlog} className="space-y-5">
        
        {/* Title */}
        <div>
          <label className="block mb-1 font-medium">Blog Title</label>
          <input
            type="text"
            className="w-full border p-2 rounded"
            placeholder="Edit blog title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        {/* Description */}
        <div>
          <label className="block mb-1 font-medium">Blog Description</label>
          <textarea
            className="w-full border p-2 rounded"
            rows="5"
            placeholder="Edit blog description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
        </div>

        {/* New Media Upload */}
        <div>
          <label className="block mb-1 font-medium">
            Update Image / Video (Optional)
          </label>
          <input
            type="file"
            accept="image/*,video/*"
            onChange={(e) => setFile(e.target.files[0])}
          />
        </div>

        {/* Update Button */}
        <button
          disabled={loading}
          className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50"
        >
          {loading ? "Updating..." : "Update Blog"}
        </button>
      </form>
    </div>
  );
}
