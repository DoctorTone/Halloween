import { useGLTF } from "@react-three/drei";

const Tree = () => {
  const { scene } = useGLTF("./models/tree_dead.glb");

  return <primitive scale={0.15} position={[1.5, 0, -0.5]} object={scene} />;
};

export default Tree;
