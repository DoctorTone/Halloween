import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Mesh, BackSide, MeshStandardMaterial, MeshBasicMaterial } from "three";

const Atmosphere = () => {
  const mistRef = useRef<Mesh>(null);
  const glowRef = useRef<Mesh>(null);

  // Gentle movement for mist and glow pulsation
  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    if (mistRef.current) {
      (mistRef.current.material as MeshStandardMaterial).opacity =
        0.03 + Math.sin(t * 0.2) * 0.01;
    }
    if (glowRef.current) {
      (glowRef.current.material as MeshBasicMaterial).opacity =
        0.08 + Math.sin(t * 0.5) * 0.02;
    }
  });

  return (
    <>
      {/* Background mist plane behind the ghosts */}
      <mesh ref={mistRef} position={[0, 0.7, -2]} rotation={[-0.1, 0, 0]}>
        <planeGeometry args={[12, 6]} />
        <meshStandardMaterial
          color="#aaaaaa"
          transparent
          opacity={0.05}
          depthWrite={false}
        />
      </mesh>

      {/* Large, faint glow behind ghosts */}
      {/* <mesh ref={glowRef} position={[0, 1, -1.5]}>
        <sphereGeometry args={[2.5, 32, 32]} />
        <meshBasicMaterial
          color="#aaccff"
          transparent
          opacity={0.1}
          side={BackSide}
        />
      </mesh> */}
    </>
  );
};

export default Atmosphere;
