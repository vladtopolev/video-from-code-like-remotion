import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import { useCurrentFrame } from "./library/VideoContext";
import VideoContextProvider from "./library/VideoContextProvider";

const AnimatedScene: React.FC = () => {
  const { frame } = useCurrentFrame();
  return (
    <div
      style={{
        width: 40,
        height: 40,
        background: "green",
        transform: `rotate(${frame}deg)`,
      }}
    />
  );
};

const root = ReactDOM.createRoot(document.getElementById("root")!);

root.render(
  <VideoContextProvider duration={2} fps={24}>
    <AnimatedScene />
  </VideoContextProvider>
);
