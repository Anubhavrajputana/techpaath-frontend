import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function AdminCreate() {
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [file, setFile] = useState(null);

  const submitBlog = async (e) => {
    e.preventDefault();

    if (!title.trim() || !description.trim()) {
      alert("Please fill all fields");
      return;
    }

    const form = new FormData();
    form.append("title", title);
    form.append("description", description);
    if (file) form.append("file", file);

    try {
      await axios.post("/api/blogs/upload-and-create", form, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      alert("Blog Created Successfully!");
      navigate("/admin");
    } catch (err) {
      console.error("Blog creation error:", err);
      alert("Failed to create blog");
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Create New Blog</h1>

      <form onSubmit={submitBlog} className="space-y-5">
        <div>
          <label className="block mb-1 font-medium">Blog Title</label>
          <input
            type="text"
            className="w-full border p-2 rounded"
            placeholder="Enter blog title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">Blog Description</label>
          <textarea
            className="w-full border p-2 rounded"
            rows="5"
            placeholder="Enter blog description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
        </div>

        <div>
          <label className="block mb-1 font-medium">Upload Image / Video</label>
          <input
            type="file"
            accept="image/*,video/*"
            onChange={(e) => setFile(e.target.files[0])}
          />
        </div>

        <button className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
          Create Blog
        </button>
      </form>
    </div>
  );
}
