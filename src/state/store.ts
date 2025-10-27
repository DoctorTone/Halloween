import { create } from "zustand";
import type { ScreenSize } from "./Config";
import { Howl } from "howler";

type FrameworkState = {
  screenSize: ScreenSize;
  setScreenSize: (size: ScreenSize) => void;
  infoDialogOpen: boolean;
  setShowInfoDialog: (status: boolean) => void;
  currentScene: string;
  setCurrentScene: (sceneName: string) => void;
  ambient: Howl;
  cackle: Howl;
  audioEnabled: boolean;
  setAudioEnabled: (status: boolean) => void;
};

const useStore = create<FrameworkState>((set) => ({
  screenSize: { width: window.innerWidth, height: window.innerHeight },
  setScreenSize: (size) =>
    set((state) => ({ screenSize: { ...state.screenSize, ...size } })),
  infoDialogOpen: false,
  setShowInfoDialog: (status) => set(() => ({ infoDialogOpen: status })),
  currentScene: "graveyard",
  setCurrentScene: (sceneName) => set(() => ({ currentScene: sceneName })),
  ambient: new Howl({
    src: ["./audio/horror-theme-1.wav"],
    loop: true,
    volume: 0.25,
  }),
  cackle: new Howl({
    src: ["./audio/witch-laughing.mp3"],
    loop: false,
    volume: 0.25,
  }),
  audioEnabled: false,
  setAudioEnabled: (status) => set(() => ({ audioEnabled: status })),
}));

export default useStore;
