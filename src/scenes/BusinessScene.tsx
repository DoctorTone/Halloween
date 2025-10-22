import { useRef } from "react";
import { useGLTF, Clone, Stage } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import ResponsiveCamera from "../components/ResponsiveCamera";
import type { Group } from "three";
import { SCALES } from "../state/Config";

const BusinessScene = () => {
  const candyRef = useRef<Group>(null);
  const { scene } = useGLTF("./models/candyCentre.glb");

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    let candyScale = SCALES.CANDY_START + time / SCALES.CANDY_RATE;
    if (candyScale >= SCALES.CANDY_MAX) {
      candyScale = SCALES.CANDY_MAX;
    }
    if (candyRef.current) {
      candyRef.current.scale.set(candyScale, candyScale, candyScale);
    }
  });

  return (
    <>
      <ResponsiveCamera scene="Business" />
      <Stage adjustCamera={1} environment={"night"} shadows={"contact"}>
        <Clone ref={candyRef} position={[1, -1, -2]} object={scene} />
        <Clone
          scale={SCALES.CANDY_START}
          position={[-1, -1, -2]}
          object={scene}
        />
      </Stage>
    </>
  );
};

export default BusinessScene;

useGLTF.preload("./models/candyCentre.glb");
