import { useState, useEffect } from "react";
import { FaThumbsUp } from "react-icons/fa";

const LikeButton = () => {
  const [liked, setLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(0);

  // Load like state from localStorage on page load
  useEffect(() => {
    const hasLiked = localStorage.getItem("likedPortfolio");
    const storedCount = localStorage.getItem("likeCount");
    if (hasLiked === "true") {
      setLiked(true);
    }
    if (storedCount) {
      setLikeCount(parseInt(storedCount));
    }
  }, []);

  const handleLikeToggle = () => {
    if (liked) {
      // Unlike
      const newCount = Math.max(0, likeCount - 1);
      setLiked(false);
      setLikeCount(newCount);
      localStorage.setItem("likedPortfolio", "false");
      localStorage.setItem("likeCount", newCount.toString());
    } else {
      // Like
      const newCount = likeCount + 1;
      setLiked(true);
      setLikeCount(newCount);
      localStorage.setItem("likedPortfolio", "true");
      localStorage.setItem("likeCount", newCount.toString());
    }
  };

  return (
    <button
      onClick={handleLikeToggle}
      style={{
        position:'relative',
        left:'150px',
        backgroundColor: liked ? "#040727" : "#e4e6eb",
        color: liked ? "white" : "#333",
        padding: "10px 15px",
        height:"50px",
        fontSize: "16px",
        borderRadius: "8px",
        display: "flex",
        alignItems: "center",
        gap: "8px",
        border: "none",
        cursor: "pointer",
        boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
        transition: "0.2s ease-in-out",
      }}
    >
      <FaThumbsUp size={18} />
      <span>{likeCount} {likeCount === 1 ? "Like" : "Likes"}</span>
    </button>
  );
};

export default LikeButton;
