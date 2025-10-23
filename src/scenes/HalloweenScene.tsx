import { useEffect, useRef } from "react";
import { useGLTF, Stage, Text } from "@react-three/drei";
import { useThree, useFrame } from "@react-three/fiber";
import { Color, Group } from "three";
import ResponsiveCamera from "../components/ResponsiveCamera";
import { ARROW } from "../state/Config";

const SPEED = 10;

const HalloweenScene = () => {
  const gltfs = useGLTF([
    "./models/michael_myers.glb",
    "./models/cash_bundle.glb",
    "./models/dollars_money_multiple.glb",
    "./models/stashed_dollars.glb",
    "./models/direction_arrow_orange.glb",
  ]);
  const { scene } = useThree();
  const arrowRef = useRef<Group>(null);
  let elapsedTime = 0;

  useEffect(() => {
    scene.background = new Color().setHex(0x2d2d2d);
  }, []);

  useFrame((_, delta) => {
    elapsedTime += delta;
    if (arrowRef.current) {
      arrowRef.current.position.x += delta * SPEED;
      if (arrowRef.current.position.x >= ARROW.MAX_FIRST) {
        arrowRef.current.position.x = ARROW.START;
      }
    }
  });

  return (
    <>
      <ResponsiveCamera scene="Halloween" />
      <Stage
        adjustCamera={false}
        center={{ disable: true }}
        environment={"night"}
        shadows={"contact"}
      >
        <primitive
          scale={0.06}
          position={[22.5, -4, 11]}
          object={gltfs[0].scene}
          rotation-y={-Math.PI / 8}
        />
        <primitive scale={0.4} position={[-30, 0, 0]} object={gltfs[1].scene} />
        <Text position={[-30, 1.5, 0]} fontSize={1} color="orange">
          $300K
        </Text>
        <group visible={false}>
          <primitive scale={3.5} position={[0, 0, 0]} object={gltfs[2].scene} />
          <Text position={[0, 2, 0]} fontSize={1} color="orange">
            $47M
          </Text>
        </group>
        <group visible={false}>
          <primitive scale={10} position={[30, 0, 0]} object={gltfs[3].scene} />
          <Text position={[30, 6, 0]} fontSize={1} color="orange">
            {`>$150M`}
          </Text>
        </group>
        <primitive
          ref={arrowRef}
          scale={1.2}
          position={[-22.5, 0, 0]}
          object={gltfs[4].scene}
        />
      </Stage>
    </>
  );
};

export default HalloweenScene;

useGLTF.preload("./models/michael_myers.glb");
