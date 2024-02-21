import React, {
  PropsWithChildren,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import { VideoContext } from "./VideoContext";

declare global {
  interface Window {
    setFrame: (frame: number) => void;
    duration: number;
    fps: number;
  }
}

const VideoContextProvider = ({
  children,
  duration,
  fps,
}: PropsWithChildren<{ duration: number; fps: number }>) => {
  const [frame, setFrame] = useState(0);

  useEffect(() => {
    window.setFrame = setFrame;
    window.duration = duration;
    window.fps = fps;
  }, [duration, fps]);

  return (
    <VideoContext.Provider value={{ frame, duration, fps }}>
      {children}
    </VideoContext.Provider>
  );
};

export default VideoContextProvider;
