import { useEffect } from "react";
import { useThree } from "@react-three/fiber";
import Pumpkin from "../components/Pumpkin";
import { Ghost } from "../components/Ghost";
import MoonLight from "../components/MoonLight";
import Crypt from "../components/Crypt";
import { POSITIONS } from "../state/Config";
import { Environment } from "@react-three/drei";
import MoonSpot from "../components/MoonSpot";
import PostLantern from "../components/PostLantern";
import Graves from "../components/Grave";
import ResponsiveCamera from "../components/ResponsiveCamera";
import { Color } from "three";
import Lights from "../components/Lights";

const GraveyardScene = () => {
  const { scene } = useThree();

  useEffect(() => {
    scene.background = new Color().setHex(0x000000);
  }, []);

  return (
    <>
      <ResponsiveCamera scene="Graveyard" />
      <Lights />
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
      <PostLantern position={POSITIONS.LANTERN} scale={0.2} />
      <Graves />
    </>
  );
};

export default GraveyardScene;
