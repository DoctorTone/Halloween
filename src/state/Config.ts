import { Vector3 } from "three";

export const RESOLUTIONS = {
  SMALL: 600,
  MEDIUM: 900,
  LARGE: 1200,
  X_LARGE: 1536,
};

export const INTERACTIONS = {
  PAN: true,
  ROTATE: true,
};

export const TARGET_POSITION = {
  X: 0,
  Y: 0.15,
  Z: 0,
};

export const CONFIGURATIONS = {
  small: new Vector3(0, 0.125, 0.5),
  landscape: new Vector3(0, 0.125, 0.5),
  large: new Vector3(0, 0.125, 0.5),
  extraLarge: new Vector3(-0.25, 0.2, 0.75),
};

export const POSITIONS = {
  CRYPT: new Vector3(-0.4, 0, -1.25),
  MOON: new Vector3(1.5, 1, -1),
  LANTERN: new Vector3(0.4, 0, -1.25),
  GRAVE1: new Vector3(1.25, 0, -1),
  GRAVE2: new Vector3(-1.25, 0, -1),
};

export type ScreenSize = {
  width: number;
  height: number;
};
