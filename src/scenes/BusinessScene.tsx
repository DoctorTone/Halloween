import { useRef, useEffect } from "react";
import { useGLTF, Clone, Stage, Text } from "@react-three/drei";
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
      <Stage adjustCamera={1.3} environment={"night"} shadows={"contact"}>
        <Clone ref={candyRef} position={[1.25, -1, -2]} object={gltf.scene} />
        <Clone
          scale={SCALES.CANDY_START}
          position={[-1.25, -1, -2]}
          object={gltf.scene}
        />
      </Stage>
      <Text position={[1.1, -0.6, 0.6]} fontSize={0.15} color="white">
        US
      </Text>
      <Text position={[-1.35, -0.6, 0.6]} fontSize={0.15} color="white">
        UK
      </Text>
    </>
  );
};

export default BusinessScene;

useGLTF.preload("./models/candyCentre.glb");
