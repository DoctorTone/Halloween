import { useGLTF } from "@react-three/drei";

const Pumpkin = () => {
  const { scene } = useGLTF("./models/pumpkin.glb");

  return <primitive position-y={-0.05} scale={1.1} object={scene} />;
};

export default Pumpkin;
