import { useGLTF } from "@react-three/drei";

const Fence = () => {
  const { scene } = useGLTF("./models/fence.gltf");

  return <primitive object={scene} />;
};

export default Fence;
