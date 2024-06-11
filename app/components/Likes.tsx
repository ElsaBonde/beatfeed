"use client";

import { FavoriteBorderOutlined, FavoriteOutlined } from "@mui/icons-material";
import { useState } from "react";

export default function Likes() {
  const [isLiked, setIsLiked] = useState(false);

  const handleLike = () => {
  setIsLiked(!isLiked);
    };

  return <>
    <button onClick={handleLike}>
      {isLiked ? <FavoriteOutlined color="error" className="h-7 w-7"/> : <FavoriteBorderOutlined className="h-7 w-7"/>}
    </button>
  </>;
}
