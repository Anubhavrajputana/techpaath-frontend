import "./ReactionBar.css";

const EMOJIS = ["❤️", "🔥", "👍", "😂", "🎉"];

export default function ReactionBar({
  reactions = [],
  onReact,
  currentUserId,
}) {
  // 🛡️ SAFE NORMALIZER
  const safeReactions = Array.isArray(reactions) ? reactions : [];

  const getCount = (emoji) => {
    const found = safeReactions.find((r) => r?.emoji === emoji);
    const users = Array.isArray(found?.users) ? found.users : [];
    return users.length;
  };

  const hasUserReacted = (emoji) => {
    if (!currentUserId) return false;

    const found = safeReactions.find((r) => r?.emoji === emoji);
    const users = Array.isArray(found?.users) ? found.users : [];

    return users.some((u) => String(u) === String(currentUserId));
  };

  return (
    <div className="reaction-bar">
      {EMOJIS.map((emoji) => {
        const count = getCount(emoji);
        const active = hasUserReacted(emoji);

        return (
          <button
            key={emoji}
            type="button"
            className={`reaction-btn ${active ? "active" : ""}`}
            onClick={() => onReact?.(emoji)}
          >
            <span className="emoji">{emoji}</span>
            <span className="count">{count}</span>
          </button>
        );
      })}
    </div>
  );
}
