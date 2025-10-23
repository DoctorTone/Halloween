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
  Y: 0,
  Z: 0,
};

export const GRAVEYARD_CONFIGURATIONS = {
  small: new Vector3(0, 0.125, 0.5),
  landscape: new Vector3(0, 0.125, 0.5),
  large: new Vector3(0, 0.125, 0.5),
  extraLarge: new Vector3(-0.25, 0.2, 0.75),
};

export const BUSINESS_CONFIGURATIONS = {
  small: new Vector3(0, 0.125, 0.5),
  landscape: new Vector3(0, 0.125, 0.5),
  large: new Vector3(0, 0.125, 0.5),
  extraLarge: new Vector3(0, 0.25, 1),
};

export const PUMPKIN_CONFIGURATIONS = {
  small: new Vector3(0, 0.125, 0.5),
  landscape: new Vector3(0, 0.125, 0.5),
  large: new Vector3(0, 0.125, 0.5),
  extraLarge: new Vector3(0, 2, 4.5),
};

export const HALLOWEEN_CONFIGURATIONS = {
  small: new Vector3(0, 0.125, 0.5),
  landscape: new Vector3(0, 0.125, 0.5),
  large: new Vector3(0, 0.125, 0.5),
  extraLarge: new Vector3(0, 17.5, 40),
};

export const POSITIONS = {
  CRYPT: new Vector3(-0.4, 0, -1.25),
  MOON: new Vector3(1.5, 1, -1),
  LANTERN: new Vector3(0.4, 0, -1.25),
};

export const SCALES = {
  CANDY_START: 0.5,
  CANDY_RATE: 5,
  CANDY_MAX: 1.97,
};

export const ARROW = {
  START: -22.5,
  START_SECOND: 10,
  MAX_FIRST: -14,
  MAX_SECOND: 17.5,
  PHASE1_TIME: 5,
  PHASE2_TIME: 15,
  SPEED: 7.5,
};

export type ScreenSize = {
  width: number;
  height: number;
};
