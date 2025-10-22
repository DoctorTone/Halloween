import { useRef, useEffect } from "react";
import { useGLTF, Clone, Stage } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import ResponsiveCamera from "../components/ResponsiveCamera";
import { Color, type Group } from "three";
import { SCALES } from "../state/Config";

const BusinessScene = () => {
  const candyRef = useRef<Group>(null);
  const gltf = useGLTF("./models/candyCentre.glb");
  const { scene } = useThree();

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

  useEffect(() => {
    scene.background = new Color().setHex(0x2d2d2d);
  }, []);

  return (
    <>
      <ResponsiveCamera scene="Business" />
      <Stage adjustCamera={1} environment={"night"} shadows={"contact"}>
        <Clone ref={candyRef} position={[1, -1, -2]} object={gltf.scene} />
        <Clone
          scale={SCALES.CANDY_START}
          position={[-1, -1, -2]}
          object={gltf.scene}
        />
      </Stage>
    </>
  );
};

export default BusinessScene;

useGLTF.preload("./models/candyCentre.glb");
