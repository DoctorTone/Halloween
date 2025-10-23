import { useEffect } from "react";
import { useGLTF, Stage } from "@react-three/drei";
import { useThree } from "@react-three/fiber";
import { Color } from "three";
import ResponsiveCamera from "../components/ResponsiveCamera";

const HalloweenScene = () => {
  const gltf = useGLTF("./models/michael_myers.glb");
  const { scene } = useThree();

  useEffect(() => {
    scene.background = new Color().setHex(0x2d2d2d);
  }, []);

  return (
    <>
      <ResponsiveCamera scene="Halloween" />
      <Stage
        adjustCamera={2}
        center={{ disable: false }}
        environment={"night"}
        shadows={"contact"}
      >
        <primitive object={gltf.scene} />
      </Stage>
    </>
  );
};

export default HalloweenScene;

useGLTF.preload("./models/michael_myers.glb");
