import { useGLTF } from "@react-three/drei";

const Ghost = () => {
  const { scene } = useGLTF("./models/ghost.glb");

  return <primitive position-y={-0.0} object={scene} />;
};

export default Ghost;
