import { useGLTF, Clone } from "@react-three/drei";
import type { JSX } from "react";

const Graves = (props: JSX.IntrinsicElements["group"]) => {
  const { scene } = useGLTF("./models/graveDestroyed.glb");

  return (
    <group {...props} dispose={null}>
      <primitive object={scene} />
      <Clone position-x={-5} object={scene} />
      <Clone position-x={-17} object={scene} />
    </group>
  );
};

export default Graves;
