import { useEffect, useRef } from "react";
import { useGLTF, Stage, Text } from "@react-three/drei";
import { useThree, useFrame } from "@react-three/fiber";
import { Color, Group } from "three";
import ResponsiveCamera from "../components/ResponsiveCamera";
import { ARROW } from "../state/Config";

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
  const mediumRef = useRef<Group>(null);
  const maximumRef = useRef<Group>(null);
  const phaseRef = useRef(0);
  let elapsedTime = 0;

  useEffect(() => {
    scene.background = new Color().setHex(0x2d2d2d);
  }, []);

  useFrame((_, delta) => {
    elapsedTime += delta;
    if (arrowRef.current) {
      arrowRef.current.position.x += delta * ARROW.SPEED;
      if (elapsedTime >= ARROW.PHASE1_TIME) {
        phaseRef.current = 1;
      }
      if (elapsedTime >= ARROW.PHASE2_TIME) {
        phaseRef.current = 2;
      }

      switch (phaseRef.current) {
        case 0:
          {
            if (arrowRef.current.position.x >= ARROW.MAX_FIRST) {
              arrowRef.current.position.x = ARROW.START;
            }
          }
          break;

        case 1:
          {
            mediumRef.current!.visible = true;
            if (arrowRef.current.position.x >= ARROW.MAX_SECOND) {
              arrowRef.current.position.x = ARROW.START_SECOND;
            }
          }
          break;

        case 2:
          {
            maximumRef.current!.visible = true;
            arrowRef.current.visible = false;
          }
          break;

        default:
          break;
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
        <group ref={mediumRef} visible={false}>
          <primitive scale={3.5} position={[0, 0, 0]} object={gltfs[2].scene} />
          <Text position={[0, 2, 0]} fontSize={1} color="orange">
            $47M
          </Text>
        </group>
        <group ref={maximumRef} visible={false}>
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
