import { Suspense } from "react";
import { BrowserRouter } from "react-router-dom";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { INTERACTIONS, TARGET_POSITION } from "./state/Config";
import SceneSwitcher from "./components/SceneSwitcher";
import Loading from "./UI/Loading";
import UISwitcher from "./UI/UISwitcher";
import AudioManager from "./components/AudioManager";

function App() {
  return (
    <BrowserRouter>
      <Canvas camera={{ fov: 60 }}>
        <Suspense fallback={<Loading />}>
          <SceneSwitcher />
        </Suspense>
        <OrbitControls
          makeDefault
          enablePan={INTERACTIONS.PAN}
          enableRotate={INTERACTIONS.ROTATE}
          enableDamping={true}
          maxDistance={250}
          target={[TARGET_POSITION.X, TARGET_POSITION.Y, TARGET_POSITION.Z]}
        />
      </Canvas>
      <UISwitcher />
      <AudioManager />
    </BrowserRouter>
  );
}

export default App;
