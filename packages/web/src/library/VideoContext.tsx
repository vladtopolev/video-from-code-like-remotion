import { createContext, useContext } from "react";

export const VideoContext = createContext<{
  frame: number;
  duration: number;
  fps: number;
}>({ frame: 0, duration: 0, fps: 24 });

export const useCurrentFrame = () => {
  const context = useContext(VideoContext);
  return { frame: context.frame };
};
