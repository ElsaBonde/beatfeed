"use client";

import { FavoriteBorderOutlined, FavoriteOutlined } from "@mui/icons-material";
import { useState } from "react";
import { likePost, unlikePost } from "../actions/postActions";
import { useAuth } from "../authContext";

interface LikesProps {
  postId: string;
  startingLikes: number;
}

const Likes: React.FC<LikesProps> = ({ postId, startingLikes }) => {
  const [likes, setLikes] = useState(startingLikes);
  const [isLiked, setIsLiked] = useState(false);
  const { isLoggedIn, user } = useAuth();

  const handleLike = async () => {
    try {
      if (!isLoggedIn) {
        return;
      }
      if (isLiked) {
        const newLikes = await unlikePost(postId);
        setLikes(newLikes);
        setIsLiked(false);
      } else {
        const newLikes = await likePost(postId);
        setLikes(newLikes);
        setIsLiked(true);
      }
    } catch (error) {
      console.error("Error toggle like:", error);
    };
  };

  return (
    <>
    <div className="flex gap-2 items-center">

      <button onClick={handleLike} disabled={!isLoggedIn}>
        {isLoggedIn && isLiked ? (
          <FavoriteOutlined color="error" className="h-7 w-7" data-cy="liked" />
        ) : (
          <FavoriteBorderOutlined className="h-7 w-7" data-cy="notLiked" />
        )}
      </button>
      {startingLikes === 0 ? null :
      <p className="font-bold">Liked by {isLiked ? (<span>you and </span>) : null}{likes} other people</p>
    }
    </div>
    </>
  );
};

export default Likes;
