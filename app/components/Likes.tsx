"use client";

import { FavoriteBorderOutlined, FavoriteOutlined } from "@mui/icons-material";
import { useEffect, useState } from "react";
import { checkIfLiked, likePost, unlikePost } from "../actions/postActions"; // Lägg till checkIfLiked från actions
import { useAuth } from "../authContext";

interface LikesProps {
  postId: string;
  startingLikes: number;
}

const Likes: React.FC<LikesProps> = ({ postId, startingLikes }) => {
  const [likes, setLikes] = useState(startingLikes);
  const [isLiked, setIsLiked] = useState(false);
  const { isLoggedIn, user } = useAuth();

  useEffect(() => {
    const fetchLikeStatus = async () => {
      if (isLoggedIn && user) {
        const liked = await checkIfLiked(postId, user.id);
        setIsLiked(liked);
      }
    };

    fetchLikeStatus();
  }, [postId, isLoggedIn, user]);

  const handleLike = async () => {
    try {
      if (!isLoggedIn || !user) {
        console.log(
          "You have to be logged in to like a post, redirecting to login page."
        );
        window.location.href = "/login";
        
      }
      if (isLiked) {
        const newLikes = await unlikePost(postId, user.id);
        setLikes(newLikes);
        setIsLiked(false);
      } else {
        const newLikes = await likePost(postId, user.id);
        setLikes(newLikes);
        setIsLiked(true);
      }
    } catch (error) {
      console.error("Error toggle like:", error);
    }
  };

  return (
    <>
      <div className="flex gap-2 items-center">
        <button onClick={handleLike} data-cy="like">
          {isLoggedIn && isLiked ? (
            <FavoriteOutlined
              color="error"
              className="h-7 w-7"
              data-cy="liked"
            />
          ) : (
            <FavoriteBorderOutlined className="h-7 w-7" data-cy="notLiked" />
          )}
        </button>
        {startingLikes === 0 ? null : (
          <p className="font-bold">
            Liked by{" "}
            {isLiked ? (
              <span>
                <span> you </span>
                {likes > 1 && (
                  <span data-cy="likeCount">
                    and {likes - 1} other person{likes > 2 ? "s" : ""}
                  </span>
                )}
              </span>
            ) : (
              <span data-cy="likeCount">
                {likes === 1 ? "1 person" : `${likes} people`}
              </span>
            )}
          </p>
        )}
      </div>
    </>
  );
};

export default Likes;
