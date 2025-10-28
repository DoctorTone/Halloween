import { useEffect } from "react";
import { useThree } from "@react-three/fiber";
import { getScreenConfiguration } from "../Utils/utils";
import useStore from "../state/store";

interface ResponsiveProps {
  scene: string;
}

const ResponsiveCamera = ({ scene }: ResponsiveProps) => {
  const screenSize = useStore((state) => state.screenSize);
  const setScreenSize = useStore((state) => state.setScreenSize);
  const currentScene = useStore((state) => state.currentScene);

  const { camera } = useThree();

  useEffect(() => {
    const handleResize = () => {
      setScreenSize({ width: window.innerWidth, height: window.innerHeight });
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    // DEBUG
    console.log("Scene changed", scene);
    const configuration = getScreenConfiguration(
      scene,
      screenSize.width,
      screenSize.height
    );
    camera.position.copy(configuration);
    camera.updateProjectionMatrix();
  }, [screenSize.width, screenSize.height, currentScene]);

  return null;
};

export default ResponsiveCamera;
