import { useGLTF, Clone } from "@react-three/drei";

const BusinessScene = () => {
  const { scene } = useGLTF("./models/candy.gltf");

  return (
    <group>
      <Clone position={[1, 0, -2]} object={scene} />
      <Clone scale={0.4} position={[-1, 0, -2]} object={scene} />
    </group>
  );
};

export default BusinessScene;

useGLTF.preload("./models/candy.gltf");
