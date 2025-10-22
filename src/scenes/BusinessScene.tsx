import { useGLTF, Clone, Environment } from "@react-three/drei";
import ResponsiveCamera from "../components/ResponsiveCamera";
import Lights from "../components/Lights";

const BusinessScene = () => {
  const { scene } = useGLTF("./models/candy.gltf");

  return (
    <>
      <ResponsiveCamera scene="Business" />
      <Lights />
      <Environment preset="night" environmentIntensity={0.25} />
      <Clone position={[1, 0, -2]} object={scene} />
      <Clone scale={0.4} position={[-1, 0, -2]} object={scene} />
    </>
  );
};

export default BusinessScene;

useGLTF.preload("./models/candy.gltf");
