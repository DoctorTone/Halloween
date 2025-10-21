import { useGLTF } from "@react-three/drei";
import type { JSX } from "react";

const PostLantern = (props: JSX.IntrinsicElements["group"]) => {
  const { scene } = useGLTF("./models/postLantern.glb");

  return (
    <group {...props} dispose={null}>
      <primitive object={scene} />
    </group>
  );
};

export default PostLantern;
