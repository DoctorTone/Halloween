import { useGLTF, Clone } from "@react-three/drei";

const PumpkinScene = () => {
  const { scene } = useGLTF("./models/pumpkin.glb");

  return (
    <group>
      <Clone position={[1, 0, -2]} object={scene} />
      <Clone scale={0.4} position={[-1, 0, -2]} object={scene} />
    </group>
  );
};

export default PumpkinScene;

useGLTF.preload("./models/pumpkin.glb");
