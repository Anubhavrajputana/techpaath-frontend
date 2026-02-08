import { useState } from "react";
import "./Reply.css";
import ReactionBar from "./ReactionBar";
import axiosInstance from "../api/axiosInstance";

export default function Reply({ reply, blogId, commentId, refresh }) {
  const [showReplyBox, setShowReplyBox] = useState(false);
  const [replyText, setReplyText] = useState("");
  const [loading, setLoading] = useState(false);

  // 🛡️ SAFE REPLY
  const safeReply = {
    ...reply,
    reactions: Array.isArray(reply?.reactions) ? reply.reactions : [],
  };

  /* ================= REPLY REACTION ================= */
  const reactToReply = async (emoji) => {
    if (!emoji || loading) return;

    try {
      setLoading(true);

      await axiosInstance.post(
        `/blogs/${blogId}/comment/${commentId}/reply/${safeReply._id}/react`,
        { emoji }
      );

      if (typeof refresh === "function") {
        refresh();
      }
    } catch (err) {
      console.error("Reply reaction failed:", err);
    } finally {
      setLoading(false);
    }
  };

  /* ================= ADD NESTED REPLY ================= */
  const submitNestedReply = async () => {
    if (!replyText.trim() || loading) return;

    try {
      setLoading(true);

      const res = await axiosInstance.post(
        `/blogs/${blogId}/comment/${commentId}/reply`,
        { text: replyText.trim() }
      );

      setReplyText("");
      setShowReplyBox(false);

      if (typeof refresh === "function") {
        refresh(res.data);
      }
    } catch (err) {
      console.error("Nested reply failed:", err);
      alert("Reply failed. Try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="reply-card">
      <strong>{safeReply.name || "User"}</strong>
      <p>{safeReply.text}</p>

      <ReactionBar
        reactions={safeReply.reactions}
        onReact={reactToReply}
      />

      <button onClick={() => setShowReplyBox((p) => !p)}>
        Reply
      </button>

      {showReplyBox && (
        <div className="reply-box">
          <input
            value={replyText}
            onChange={(e) => setReplyText(e.target.value)}
            disabled={loading}
            placeholder="Write a reply..."
          />
          <button onClick={submitNestedReply} disabled={loading}>
            {loading ? "Posting..." : "Post Reply"}
          </button>
        </div>
      )}
    </div>
  );
}
