import { useRef, useEffect } from "react";
import { useFrame } from "@react-three/fiber";
import { PointLight } from "three";

const Lights = () => {
  const lightRef = useRef<PointLight>(null);

  useEffect(() => {
    if (!lightRef.current) return;

    setInterval(() => {
      lightRef.current!.intensity = Math.random() / 50;
    }, 100);
  }, []);

  return (
    <>
      <pointLight ref={lightRef} intensity={0} position={[0, 0.05, 0]} />
      <ambientLight intensity={0.5} />
    </>
  );
};

export default Lights;
