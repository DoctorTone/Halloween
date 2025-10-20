import { useState, useEffect, type JSX } from "react";
import { SpotLight, Box } from "@react-three/drei";
import { Object3D, Vector3 } from "three";

const MoonSpot = (props: JSX.IntrinsicElements["group"]) => {
  const [target] = useState(() => new Object3D());

  useEffect(() => {
    target.position.set(0, 0, -1);
  }, []);

  return (
    <group {...props} dispose={null}>
      <SpotLight
        target={target}
        opacity={0.4}
        penumbra={1}
        distance={4}
        angle={0.125}
        attenuation={5}
        anglePower={5}
        intensity={1}
      />
      <Box
        args={[3, 1.75, 3]}
        rotation-x={-Math.PI / 2}
        position={[-1.5, -2.5, 0]}
      >
        <meshBasicMaterial color={"black"} />
      </Box>
    </group>
  );
};

export default MoonSpot;
