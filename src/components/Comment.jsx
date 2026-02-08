import { useState } from "react";
import axiosInstance from "../api/axiosInstance";
import Reply from "./Reply";
import ReactionBar from "./ReactionBar";
import "./Comment.css";

export default function Comment({ blogId, comment, refresh }) {
  const [replyText, setReplyText] = useState("");
  const [showReplyBox, setShowReplyBox] = useState(false);
  const [loading, setLoading] = useState(false);

  // 🛡️ SAFE COMMENT
  const safeComment = {
    ...comment,
    reactions: Array.isArray(comment?.reactions) ? comment.reactions : [],
    replies: Array.isArray(comment?.replies) ? comment.replies : [],
  };

  /* ================= COMMENT REACTION ================= */
  const reactToComment = async (emoji) => {
    if (!emoji || loading) return;

    try {
      setLoading(true);

      await axiosInstance.post(`/blogs/${blogId}/comment/react`, {
        commentId: safeComment._id,
        emoji,
      });

      if (typeof refresh === "function") {
        refresh();
      }
    } catch (err) {
      console.error("Comment reaction failed:", err);
    } finally {
      setLoading(false);
    }
  };

  /* ================= ADD REPLY ================= */
  const submitReply = async () => {
    if (!replyText.trim() || loading) return;

    try {
      setLoading(true);

      const res = await axiosInstance.post(
        `/blogs/${blogId}/comment/${safeComment._id}/reply`,
        { text: replyText.trim() }
      );

      setReplyText("");
      setShowReplyBox(false);

      if (typeof refresh === "function") {
        refresh(res.data);
      }
    } catch (err) {
      console.error("Reply API error:", err);
      alert("Reply failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="comment-card">
      <strong>{safeComment.name || "User"}</strong>
      <p>{safeComment.text}</p>

      <ReactionBar
        reactions={safeComment.reactions}
        onReact={reactToComment}
      />

      <button onClick={() => setShowReplyBox((p) => !p)}>
        {showReplyBox ? "Cancel" : "Reply"}
      </button>

      {showReplyBox && (
        <div className="reply-box">
          <input
            value={replyText}
            onChange={(e) => setReplyText(e.target.value)}
            disabled={loading}
            placeholder="Write a reply..."
          />
          <button onClick={submitReply} disabled={loading}>
            {loading ? "Posting..." : "Post Reply"}
          </button>
        </div>
      )}

      {safeComment.replies.map((r) => (
        <Reply
          key={r._id}
          reply={r}
          blogId={blogId}
          commentId={safeComment._id}
          refresh={refresh}
        />
      ))}
    </div>
  );
}
