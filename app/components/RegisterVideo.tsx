"use client";

import { Pause, PlayArrow } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import { useRef, useState } from "react";

export default function RegisterVideo() {
  const [isHovered, setIsHovered] = useState(false);
  const [isPlaying, setIsPlaying] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  const togglePlay = () => {
    setIsPlaying((prevState) => !prevState);
    const video = videoRef.current;
    if (!video) return;
    if (isPlaying) {
      video.pause();
    } else {
      video.play();
    }
  };

  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        height: "100%",
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <video
        ref={videoRef}
        src="/dancingandmusic.mp4"
        autoPlay
        loop
        muted
        controls={false}
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          objectPosition: "50% 20%",
        }}
      ></video>
      {isHovered && (
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        >
          <IconButton
            onClick={togglePlay}
            sx={{
              color: "white",
              height: "70px",
              width: "70px",
              opacity: 0.8,
              backgroundColor: "rgba(0, 0, 0, 0.5)",
              " &:hover": {
                opacity: 1,
                backgroundColor: "rgba(0, 0, 0, 0.6)",
              },
            }}
          >
            {isPlaying ? (
              <Pause sx={{ height: "60px", width: "60px" }} />
            ) : (
              <PlayArrow sx={{ height: "60px", width: "60px" }} />
            )}
          </IconButton>
        </div>
      )}
    </div>
  );
}
