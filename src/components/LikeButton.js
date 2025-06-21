import { useState, useEffect } from "react";
import { FaThumbsUp } from "react-icons/fa";
import { db } from "./firebase";
import {
  doc,
  getDoc,
  setDoc,
  updateDoc,
  increment,
} from "firebase/firestore";

const LikeButton = () => {
  const [liked, setLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(0);
  const [loading, setLoading] = useState(true);

  

  useEffect(() => {
    const docRef = doc(db, "likes", "portfolio");

    const fetchLikes = async () => {
      try {
        console.log("Fetching likes from Firestore...");
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          const data = docSnap.data();
          console.log("Document data:", data);
          setLikeCount(data.count || 0);
        } else {
          console.log("Document does not exist. Creating with count=0");
          await setDoc(docRef, { count: 0 });
          setLikeCount(0);
        }

        const localLiked = localStorage.getItem("likedPortfolio");
        setLiked(localLiked === "true");
      } catch (fetchError) {
        console.error("Error fetching likes:", fetchError);
      } finally {
        setLoading(false);
      }
    };

    fetchLikes();
  }, []);

  const handleLikeToggle = async () => {
     const docRef = doc(db, "likes", "portfolio"); 
    const newLiked = !liked;
    const change = newLiked ? 1 : -1;

    setLiked(newLiked);
    setLikeCount((prev) => Math.max(0, prev + change));
    localStorage.setItem("likedPortfolio", newLiked.toString());

    try {
      const docSnap = await getDoc(docRef);

      if (!docSnap.exists()) {
        console.log("Document missing during toggle. Creating count: 0");
        await setDoc(docRef, { count: 0 });
      }

      const currentCount = docSnap.data()?.count ?? 0;

      // Prevent negative likes
      if (currentCount <= 0 && change === -1) {
        console.warn("Prevented negative like count");
        return;
      }

      await updateDoc(docRef, {
        count: increment(change),
      });

      console.log("Like count updated successfully:", change > 0 ? "👍" : "👎");
    } catch (error) {
      console.error("Error updating like count:", error);

      // Revert local state
      setLiked(!newLiked);
      setLikeCount((prev) => Math.max(0, prev - change));
      localStorage.setItem("likedPortfolio", (!newLiked).toString());
    }
  };

  if (loading) {
    return (
      <button
        disabled
        style={{
          padding: "10px 15px",
          height: "50px",
          fontSize: "16px",
          borderRadius: "8px",
          cursor: "not-allowed",
          opacity: 0.6,
        }}
      >
        Loading...
      </button>
    );
  }

  return (
    <button
      onClick={handleLikeToggle}
      style={{
        position: "relative",
        left: "10px",
        backgroundColor: liked ? "#040727" : "#e4e6eb",
        color: liked ? "white" : "#333",
        padding: "1px 15px",
        height: "50px",
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
      <span>
        {likeCount} {likeCount === 1 ? "Like" : "Likes"}
      </span>
    </button>
  );
};

export default LikeButton;
