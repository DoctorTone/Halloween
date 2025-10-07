import Pumpkin from "./Pumpkin";
import { Ghost } from "./Ghost";

const Scene = () => {
  return (
    <>
      <Pumpkin />
      <Ghost scale={0.05} position={[-0.5, 0, 0]} />
      <Ghost scale={0.05} position={[0.5, 0, 0]} />
    </>
  );
};

export default Scene;
