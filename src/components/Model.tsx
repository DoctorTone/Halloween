import { useGLTF } from "@react-three/drei";

const Model = () => {
  const { scene } = useGLTF("./models/pumpkin.glb");

  return <primitive object={scene} />;
};

export default Model;
