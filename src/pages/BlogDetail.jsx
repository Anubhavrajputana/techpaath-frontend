import React, {
  useEffect,
  useState,
  useCallback,
  useRef,
} from "react";
import { useParams } from "react-router-dom";
import axiosInstance from "../api/axiosInstance";
import { io } from "socket.io-client";

import Comment from "../components/Comment";
import ReactionBar from "../components/ReactionBar";
import "./BlogDetail.css";

const BlogDetail = () => {
  const { id: blogId } = useParams();

  const [blog, setBlog] = useState(null);
  const [commentText, setCommentText] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [viewerOpen, setViewerOpen] = useState(false);

  const socketRef = useRef(null);

  /* ================= SAFE NORMALIZER (DEEP) ================= */
  const normalizeBlog = (raw) => {
    if (!raw) return null;

    return {
      ...raw,
      reactions: Array.isArray(raw.reactions) ? raw.reactions : [],
      comments: Array.isArray(raw.comments)
        ? raw.comments.map((c) => ({
            ...c,
            reactions: Array.isArray(c.reactions) ? c.reactions : [],
            replies: Array.isArray(c.replies)
              ? c.replies.map((r) => ({
                  ...r,
                  reactions: Array.isArray(r.reactions)
                    ? r.reactions
                    : [],
                }))
              : [],
          }))
        : [],
    };
  };

  /* ================= FETCH BLOG ================= */
  const fetchBlog = useCallback(
    async (updatedBlog) => {
      try {
        if (
          updatedBlog &&
          String(updatedBlog._id) === String(blogId)
        ) {
          setBlog(normalizeBlog(updatedBlog));
          return;
        }

        const res = await axiosInstance.get(`/blogs/${blogId}`);
        setBlog(normalizeBlog(res.data));
      } catch (err) {
        console.error("Fetch blog error:", err);
        setError("Failed to load blog");
      }
    },
    [blogId]
  );

  useEffect(() => {
    fetchBlog();
  }, [fetchBlog]);

  /* ================= SOCKET ================= */
  useEffect(() => {
    if (!socketRef.current) {
      socketRef.current = io(import.meta.env.VITE_SOCKET_URL, {
        withCredentials: true,
        transports: ["websocket"],
      });
    }

    const socket = socketRef.current;

    socket.emit("joinBlogRoom", blogId);

    const onBlogUpdated = (updatedBlog) => {
      if (String(updatedBlog?._id) === String(blogId)) {
        setBlog(normalizeBlog(updatedBlog));
      }
    };

    socket.off("blogUpdated"); // 🔒 prevent duplicate
    socket.on("blogUpdated", onBlogUpdated);

    return () => {
      socket.off("blogUpdated", onBlogUpdated);
      socket.emit("leaveBlogRoom", blogId);
    };
  }, [blogId]);

  /* ================= BLOG REACTION ================= */
  const handleReact = async (emoji) => {
    if (!emoji) return;

    const user = JSON.parse(localStorage.getItem("user"));
    const realUserId = user?._id;

    if (!realUserId) {
      alert("Please login to react");
      return;
    }

    try {
      setBlog((prev) => {
        if (!prev) return prev;

        let reactions = prev.reactions.map((r) => ({
          ...r,
          users: Array.isArray(r.users) ? [...r.users] : [],
        }));

        const idx = reactions.findIndex((r) => r.emoji === emoji);

        if (idx === -1) {
          reactions.push({ emoji, users: [realUserId] });
        } else {
          const users = reactions[idx].users;
          const uIndex = users.findIndex(
            (u) => String(u) === String(realUserId)
          );

          if (uIndex > -1) {
            users.splice(uIndex, 1);
            if (users.length === 0) reactions.splice(idx, 1);
          } else {
            users.push(realUserId);
          }
        }

        return { ...prev, reactions };
      });

      await axiosInstance.post(`/blogs/${blogId}/react`, { emoji });
    } catch (err) {
      console.error("Reaction failed:", err);
      fetchBlog(); // rollback
    }
  };

  /* ================= ADD COMMENT ================= */
  const postComment = async (e) => {
    e.preventDefault();
    if (!commentText.trim()) return;

    try {
      setLoading(true);
      await axiosInstance.post(`/blogs/${blogId}/comment`, {
        text: commentText.trim(),
      });
      setCommentText("");
    } catch (err) {
      console.error("Post comment error:", err);
      alert("Failed to post comment");
    } finally {
      setLoading(false);
    }
  };

  /* ================= UI STATES ================= */
  if (error) {
    return (
      <div className="loading">
        <p>Failed to load blog</p>
        <button onClick={() => window.location.reload()}>
          Retry
        </button>
      </div>
    );
  }

  if (!blog) return <div className="loading">Loading...</div>;

  return (
    <div className="blog-detail-page">
      <div className="blog-card">
        {/* ================= MEDIA ================= */}
        {blog.mediaType && (
          <div
            className="blog-media"
            onClick={() => setViewerOpen(true)}
          >
            {blog.mediaType === "image" && (
              <img
                src={blog.mediaUrl || "/blog-placeholder.png"}
                alt={blog.title}
                className="blog-poster"
              />
            )}

            {blog.mediaType === "video" && blog.mediaUrl && (
              <video
                src={blog.mediaUrl}
                controls
                playsInline
                controlsList="nodownload"
              />
            )}
          </div>
        )}

        <h1 className="blog-title">{blog.title}</h1>
        <p className="blog-description">{blog.description}</p>

        <ReactionBar
          reactions={blog.reactions}
          onReact={handleReact}
        />

        <form onSubmit={postComment} className="comment-box">
          <textarea
            value={commentText}
            onChange={(e) => setCommentText(e.target.value)}
            disabled={loading}
            placeholder="Share your thoughts..."
          />
          <button disabled={loading}>
            {loading ? "Posting..." : "Post Comment"}
          </button>
        </form>

        <div className="comments-section">
          {blog.comments.map((c) => (
            <Comment
              key={c._id}
              blogId={blogId}
              comment={c}
            />
          ))}
        </div>
      </div>

      {viewerOpen && (
        <div
          className="media-viewer"
          onClick={() => setViewerOpen(false)}
        >
          {blog.mediaType === "image" ? (
            <img
              src={blog.mediaUrl || "/blog-placeholder.png"}
              alt="fullscreen"
            />
          ) : (
            <video src={blog.mediaUrl} controls autoPlay />
          )}
        </div>
      )}
    </div>
  );
};

export default BlogDetail;
