import { useGLTF, Clone } from "@react-three/drei";

const Graves = () => {
  const { scene } = useGLTF("./models/graveDestroyed.glb");

  return (
    <group>
      <Clone scale={0.15} position={[0.75, 0, -0.5]} object={scene} />
      <Clone
        scale={0.15}
        position={[0.65, 0, -0.85]}
        rotation-y={-Math.PI / 8}
        object={scene}
      />
    </group>
  );
};

export default Graves;
