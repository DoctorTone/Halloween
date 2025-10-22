import { useRef, useEffect } from "react";
import { PointLight } from "three";

const Lights = () => {
  const lightRef = useRef<PointLight>(null);

  useEffect(() => {
    if (!lightRef.current) return;

    const intervalID = setInterval(() => {
      lightRef.current!.intensity = Math.random() / 50;
    }, 100);

    return () => clearInterval(intervalID);
  }, []);

  return (
    <>
      <pointLight ref={lightRef} intensity={0} position={[0, 0.05, 0]} />
      <ambientLight intensity={0.5} />
      <directionalLight position={[0, 2, -2]} intensity={0.3} color="#b0c4ff" />
    </>
  );
};

export default Lights;
