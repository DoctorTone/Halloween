import { BrowserRouter } from "react-router-dom";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { INTERACTIONS, TARGET_POSITION } from "./state/Config";
import SceneSwitcher from "./components/SceneSwitcher";
import UISwitcher from "./UI/UISwitcher";
import useStore from "./state/store";

function App() {
  const currentScene = useStore((state) => state.currentScene);

  return (
    <BrowserRouter>
      <Canvas
        camera={{ fov: 60 }}
        style={{
          background: currentScene === "graveyard" ? "black" : "#2d2e2d",
        }}
      >
        <SceneSwitcher />
        <OrbitControls
          makeDefault
          enablePan={INTERACTIONS.PAN}
          enableRotate={INTERACTIONS.ROTATE}
          enableDamping={true}
          minPolarAngle={0}
          maxPolarAngle={Math.PI / 2}
          target={[TARGET_POSITION.X, TARGET_POSITION.Y, TARGET_POSITION.Z]}
        />
      </Canvas>
      <UISwitcher />
    </BrowserRouter>
  );
}

export default App;
