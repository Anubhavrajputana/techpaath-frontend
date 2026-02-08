import React, { useEffect, useState } from "react";
import axiosInstance from "../api/axiosInstance";
import { Link } from "react-router-dom";
import "./Blogs.css";

export default function BlogFeed() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    let isMounted = true; // 🛡️ SAFETY FLAG

    const fetchBlogs = async () => {
      try {
        setLoading(true);
        setError("");

        const res = await axiosInstance.get("/blogs?page=1");

        console.log("✅ BLOG FEED DATA:", res.data);

        if (!isMounted) return;

        // ✅ STRICT CHECK
        if (Array.isArray(res.data?.blogs)) {
          setBlogs(res.data.blogs);
        } else {
          setBlogs([]);
        }
      } catch (err) {
        console.error("❌ Error fetching blogs:", err);
        if (isMounted) {
          setError("Failed to load blogs");
          setBlogs([]);
        }
      } finally {
        if (isMounted) setLoading(false);
      }
    };

    fetchBlogs();

    return () => {
      isMounted = false; // 🧹 CLEANUP
    };
  }, []);

  return (
    <section className="blogs-page">
      {/* ================= HERO ================= */}
      <div className="blogs-hero">
        <h1 className="blogs-title">Latest Blogs ✨</h1>
        <p className="blogs-subtitle">
          Insights, announcements & futuristic updates from TechPaath Solutions
        </p>
      </div>

      {/* ================= BLOG LIST ================= */}
      <div className="blogs-container">
        {loading && (
          <p className="no-blogs">Loading blogs...</p>
        )}

        {!loading && error && (
          <div className="no-blogs">
            <p>{error}</p>
            <button
              onClick={() => window.location.reload()}
              className="retry-btn"
            >
              Retry
            </button>
          </div>
        )}

        {!loading && !error && blogs.length === 0 && (
          <p className="no-blogs">
            No blogs available right now.
          </p>
        )}

        {!loading &&
          !error &&
          blogs.length > 0 &&
          blogs.map((blog, index) => (
            <Link
              key={blog._id}
              to={`/blog/${blog._id}`}
              className="blog-card"
              style={{
                animationDelay: `${index * 0.12}s`,
              }}
            >
              <h2 className="blog-title">
                {blog.title}
              </h2>

              <p className="blog-desc">
                {blog.description
                  ? blog.description.slice(0, 160)
                  : "Read full blog to know more..."}
                ...
              </p>

              <div className="blog-footer">
                <span className="read-more">
                  Read Full Blog →
                </span>
              </div>
            </Link>
          ))}
      </div>
    </section>
  );
}
