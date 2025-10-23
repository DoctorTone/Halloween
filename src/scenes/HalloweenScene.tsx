import { useEffect } from "react";
import { useGLTF, Stage, Text } from "@react-three/drei";
import { useThree } from "@react-three/fiber";
import { Color } from "three";
import ResponsiveCamera from "../components/ResponsiveCamera";

const HalloweenScene = () => {
  const gltfs = useGLTF([
    "./models/michael_myers.glb",
    "./models/cash_bundle.glb",
    "./models/dollars_money_multiple.glb",
    "./models/stashed_dollars.glb",
  ]);
  const { scene } = useThree();

  useEffect(() => {
    scene.background = new Color().setHex(0x2d2d2d);
  }, []);

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
        <primitive scale={3.5} position={[0, 0, 0]} object={gltfs[2].scene} />
        <Text position={[0, 2, 0]} fontSize={1} color="orange">
          $47M
        </Text>
        <primitive scale={10} position={[30, 0, 0]} object={gltfs[3].scene} />
        <Text position={[30, 6, 0]} fontSize={1} color="orange">
          {`>$150M`}
        </Text>
      </Stage>
    </>
  );
};

export default HalloweenScene;

useGLTF.preload("./models/michael_myers.glb");
