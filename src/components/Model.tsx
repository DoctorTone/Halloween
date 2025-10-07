import { useGLTF } from "@react-three/drei";

const Model = () => {
  const { scene } = useGLTF("./models/pumpkin.glb");

  return <primitive position-y={-0.05} object={scene} />;
};

export default Model;
