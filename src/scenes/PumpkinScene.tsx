import { useEffect, useRef } from "react";
import { useGLTF, Clone, Stage, Text, Shadow } from "@react-three/drei";
import { useThree, useFrame } from "@react-three/fiber";
import { Color, Group } from "three";
import ResponsiveCamera from "../components/ResponsiveCamera";

const DELAY = 8;
const PumpkinScene = () => {
  const gltf = useGLTF("./models/pumpkinKit.glb");
  const { scene } = useThree();
  const pumpkinRef = useRef<Group>(null);
  let elapsedTime = 0;

  useFrame((_, delta) => {
    elapsedTime += delta;
    if (elapsedTime < DELAY) return;

    if (pumpkinRef.current) {
      pumpkinRef.current.position.y -= delta * 2;
      if (pumpkinRef.current.position.y <= -1) {
        pumpkinRef.current.position.y = -1;
      }
    }
  });

  useEffect(() => {
    scene.background = new Color().setHex(0x2d2d2d);
  }, []);

  return (
    <>
      <ResponsiveCamera scene="Pumpkin" />
      <Stage
        adjustCamera={false}
        center={{ disable: true }}
        environment={"night"}
        shadows={false}
      >
        <group position={[-2.5, -1, -0.5]}>
          <Clone scale={0.17} object={gltf.scene} />
          <Text position={[0, 0.4, 0]} fontSize={0.15} color="white">
            13lbs
          </Text>
          <Shadow scale={0.4} color={"black"} colorStop={0.3} opacity={0.75} />
        </group>
        <group ref={pumpkinRef} position={[2, 4, -0.5]}>
          <Text position={[0, 3.25, 0]} fontSize={0.15} color="white">
            2749lbs
          </Text>
          <Clone scale={2.34} object={gltf.scene} />
        </group>
        <Shadow
          position={[2, -1, -0.5]}
          scale={5}
          color={"black"}
          colorStop={0.3}
          opacity={0.75}
        />
      </Stage>
    </>
  );
};

export default PumpkinScene;

useGLTF.preload("./models/pumpkinKit.glb");
