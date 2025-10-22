import { useGLTF, Clone, Stage, Box } from "@react-three/drei";
import ResponsiveCamera from "../components/ResponsiveCamera";

const PumpkinScene = () => {
  const { scene } = useGLTF("./models/pumpkinKit.glb");

  return (
    <>
      <ResponsiveCamera scene="Pumpkin" />
      <Stage adjustCamera={1.3} environment={"night"} shadows={"contact"}>
        <Clone scale={0.25} position={[-1, 0, -0.5]} object={scene} />
        <Clone position={[1, 0, -0.5]} object={scene} />
      </Stage>
    </>
  );
};

export default PumpkinScene;

useGLTF.preload("./models/pumpkinKit.glb");
