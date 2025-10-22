import { create } from "zustand";
import type { ScreenSize } from "./Config";

type FrameworkState = {
  screenSize: ScreenSize;
  setScreenSize: (size: ScreenSize) => void;
  infoDialogOpen: boolean;
  setShowInfoDialog: (status: boolean) => void;
  currentScene: string;
  setCurrentScene: (sceneName: string) => void;
};

const useStore = create<FrameworkState>((set) => ({
  screenSize: { width: window.innerWidth, height: window.innerHeight },
  setScreenSize: (size) =>
    set((state) => ({ screenSize: { ...state.screenSize, ...size } })),
  infoDialogOpen: false,
  setShowInfoDialog: (status) => set(() => ({ infoDialogOpen: status })),
  currentScene: "graveyard",
  setCurrentScene: (sceneName) => set(() => ({ currentScene: sceneName })),
}));

export default useStore;
