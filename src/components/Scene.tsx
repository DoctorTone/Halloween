import Pumpkin from "./Pumpkin";
import { Ghost } from "./Ghost";
import MoonLight from "./MoonLight";

const Scene = () => {
  return (
    <>
      <MoonLight />
      <Pumpkin />
      <Ghost scale={0.05} position={[-0.5, 0, 0]} />
      <Ghost scale={0.05} position={[0.5, 0, 0]} rotation-y={-Math.PI / 4} />
    </>
  );
};

export default Scene;
