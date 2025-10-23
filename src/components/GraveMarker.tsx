import { useGLTF } from "@react-three/drei";

const GraveMarker = () => {
  const { scene } = useGLTF("./models/graveMarker.glb");

  return <primitive scale={0.2} position={[-1.3, 0, -1.4]} object={scene} />;
};

export default GraveMarker;
