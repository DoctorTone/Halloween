import { useGLTF } from "@react-three/drei";

const Pumpkin = () => {
  const { scene } = useGLTF("./models/pumpkin.glb");

  return <primitive position-y={-0.05} object={scene} />;
};

export default Pumpkin;
