// frontend/src/pages/AdminBlogs.jsx
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../api/axiosInstance";

function AdminBlogs() {
  const [blogs, setBlogs] = useState([]);
  const navigate = useNavigate();

  /* ================= FETCH BLOGS ================= */
  const fetchBlogs = async () => {
    try {
      const res = await axiosInstance.get("/blogs?page=1&limit=100");
      setBlogs(res.data.blogs || []);
    } catch (err) {
      console.error("Fetch blogs error:", err);
      alert("Failed to fetch blogs");
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  /* ================= DELETE BLOG ================= */
  const deleteBlog = async (id) => {
    if (!window.confirm("Are you sure you want to delete this blog?")) return;

    try {
      await axiosInstance.delete(`/blogs/admin/blog/${id}`);
      alert("Blog deleted successfully");
      fetchBlogs(); // refresh list
    } catch (err) {
      console.error("Delete blog error:", err);
      alert(err?.response?.data?.message || "Failed to delete blog");
    }
  };

  /* ================= EDIT BLOG ================= */
  const editBlog = (blog) => {
    navigate(`/admin/edit/${blog._id}`);
  };

  return (
    <div className="max-w-5xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">🛠 Admin Blogs</h1>

      {blogs.length === 0 && (
        <p className="text-gray-400">No blogs found.</p>
      )}

      <div className="space-y-4">
        {blogs.map((blog) => (
          <div
            key={blog._id}
            className="p-4 border rounded-lg flex justify-between items-center shadow-sm"
          >
            <div>
              <h3 className="text-lg font-semibold">{blog.title}</h3>
              <p className="text-sm text-gray-500">
                {new Date(blog.createdAt).toLocaleString()}
              </p>
            </div>

            {/* 🔘 ACTION BUTTONS */}
            <div className="space-x-3">
              <button
                onClick={() => editBlog(blog)}
                className="px-3 py-1 bg-yellow-500 text-white rounded"
              >
                ✏️ Edit
              </button>

              <button
                onClick={() => deleteBlog(blog._id)}
                className="px-3 py-1 bg-red-600 text-white rounded"
              >
                🗑 Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AdminBlogs;
