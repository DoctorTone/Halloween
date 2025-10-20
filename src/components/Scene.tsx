import Pumpkin from "./Pumpkin";
import { Ghost } from "./Ghost";
import MoonLight from "./MoonLight";
import Crypt from "./Crypt";
import { POSITIONS } from "../state/Config";
import { Environment } from "@react-three/drei";
import MoonSpot from "./MoonSpot";

const Scene = () => {
  return (
    <>
      <Environment preset="night" environmentIntensity={0.25} />
      <MoonLight />
      <MoonSpot position={POSITIONS.MOON} />
      <Pumpkin />
      <Ghost scale={0.05} position={[-0.5, 0, 0]} />
      <Ghost scale={0.05} position={[0.5, 0, 0]} rotation-y={-Math.PI / 4} />
      <Crypt
        scale={0.15}
        position={POSITIONS.CRYPT}
        rotation-y={Math.PI / 3.5}
      />
    </>
  );
};

export default Scene;
