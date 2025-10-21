import { useGLTF, Clone } from "@react-three/drei";

const Graves = () => {
  const { scene } = useGLTF("./models/graveDestroyed.glb");

  return (
    <group>
      <Clone scale={0.15} position={[1, 0, -1]} object={scene} />
      <Clone scale={0.15} position={[0.25, 0, -1]} object={scene} />
      <Clone
        scale={0.15}
        position={[-1.4, 0, -1.75]}
        rotation-y={0}
        object={scene}
      />
    </group>
  );
};

export default Graves;
