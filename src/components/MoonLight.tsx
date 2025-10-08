import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { DirectionalLight } from "three";

const MoonLight = () => {
  const lightRef = useRef<DirectionalLight>(null);

  useFrame(({ clock }) => {
    const time = clock.getElapsedTime();
    if (lightRef.current) {
      lightRef.current.position.x = Math.sin(time) * 3;
      lightRef.current.position.z = Math.sin(time) * 3;
    }
  });

  return (
    <directionalLight
      ref={lightRef}
      color="#aaccff"
      intensity={0.3}
      position={[3, 4, 2]}
    />
  );
};

export default MoonLight;
