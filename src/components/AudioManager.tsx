import { useEffect } from "react";
import useStore from "../state/store";

const AudioManager = () => {
  const currentScene = useStore((state) => state.currentScene);
  const audioEnabled = useStore((state) => state.audioEnabled);
  const ambient = useStore((state) => state.ambient);

  useEffect(() => {
    if (currentScene === "graveyard" && audioEnabled) {
      ambient.play();
    } else {
      ambient.stop();
    }
  }, [currentScene, audioEnabled]);

  return null;
};

export default AudioManager;
