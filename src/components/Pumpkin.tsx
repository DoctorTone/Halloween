import { useGLTF } from "@react-three/drei";

const Pumpkin = () => {
  const { scene } = useGLTF("./models/pumpkin.glb");

  return (
    <primitive
      position-y={-0.15}
      scale={1.3}
      rotation-y={-Math.PI / 9}
      object={scene}
    />
  );
};

export default Pumpkin;
