// frontend/src/pages/AdminDashboard.jsx
import React from "react";
import { Link } from "react-router-dom";

export default function AdminDashboard() {
  return (
    <div className="max-w-5xl mx-auto p-6">
      {/* HEADER */}
      <h1 className="text-3xl font-bold mb-8">Admin Dashboard</h1>

      {/* QUICK ACTIONS */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* MANAGE BLOGS */}
        <div className="p-6 border rounded-lg shadow-sm bg-white">
          <h2 className="text-xl font-semibold mb-2">Blogs</h2>
          <p className="text-gray-500 mb-4">
            Create, edit, delete and manage all blogs.
          </p>

          <div className="flex gap-3">
            <Link
              to="/admin/blogs"
              className="px-4 py-2 bg-blue-600 text-white rounded-lg"
            >
              Manage Blogs
            </Link>

            <Link
              to="/admin/create"
              className="px-4 py-2 bg-green-600 text-white rounded-lg"
            >
              + Create Blog
            </Link>
          </div>
        </div>

        {/* FUTURE SECTIONS */}
        <div className="p-6 border rounded-lg shadow-sm bg-white">
          <h2 className="text-xl font-semibold mb-2">Coming Soon</h2>
          <p className="text-gray-500">
            Users, Analytics, Courses & more admin features.
          </p>
        </div>
      </div>
    </div>
  );
}
