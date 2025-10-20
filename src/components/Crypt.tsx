import { useGLTF } from "@react-three/drei";
import type { JSX } from "react";

const Crypt = (props: JSX.IntrinsicElements["group"]) => {
  const { scene } = useGLTF("./models/crypt.glb");

  return (
    <group {...props} dispose={null}>
      <primitive object={scene} />
    </group>
  );
};

export default Crypt;
