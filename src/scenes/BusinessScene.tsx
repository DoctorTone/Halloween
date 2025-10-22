import { useGLTF, Clone, Environment } from "@react-three/drei";
import ResponsiveCamera from "../components/ResponsiveCamera";
import Lights from "../components/Lights";

const BusinessScene = () => {
  const { scene } = useGLTF("./models/candyCentre.glb");

  return (
    <>
      <ResponsiveCamera scene="Business" />
      <Lights />
      <Environment preset="night" environmentIntensity={0.25} />
      <Clone position={[1, -1, -2]} object={scene} />
      <Clone scale={0.5} position={[-1, -1, -2]} object={scene} />
    </>
  );
};

export default BusinessScene;

useGLTF.preload("./models/candyCentre.glb");
