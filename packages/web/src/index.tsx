import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import { useCurrentFrame } from "./library/VideoContext";
import VideoContextProvider from "./library/VideoContextProvider";

const AnimatedScene: React.FC = () => {
  const { frame } = useCurrentFrame();
  return (
    <div
      style={{
        width: 70,
        height: 70,
        background: "green",
        transform: `translate(50%, 50%) rotate(${frame}deg)`,
      }}
    />
  );
};

const root = ReactDOM.createRoot(document.getElementById("root")!);

root.render(
  <VideoContextProvider duration={4} fps={24}>
    <AnimatedScene />
  </VideoContextProvider>
);
