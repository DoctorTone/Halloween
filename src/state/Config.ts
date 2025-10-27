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
  Y: 0.1,
  Z: 0,
};

export const GRAVEYARD_CONFIGURATIONS = {
  phone_portrait: new Vector3(0, 0.125, 2),
  phone_landscape: new Vector3(0, 0.125, 1),
  ipad_portrait: new Vector3(0, 0.125, 1.5),
  ipad_landscape: new Vector3(0, 0.125, 1),
  tablet: new Vector3(0, 0.125, 2),
  large: new Vector3(0, 0.125, 1),
  extraLarge: new Vector3(-0.25, 0.15, 0.75),
};

export const BUSINESS_CONFIGURATIONS = {
  phone_portrait: new Vector3(0, 0.125, 2),
  phone_landscape: new Vector3(0, 0.125, 1),
  ipad_portrait: new Vector3(0, 0.125, 1.5),
  ipad_landscape: new Vector3(0, 0.125, 1),
  tablet: new Vector3(0, 0.125, 2),
  large: new Vector3(0, 0.125, 1),
  extraLarge: new Vector3(0, 0.15, 0.75),
};

export const PUMPKIN_CONFIGURATIONS = {
  phone_portrait: new Vector3(0, 0.5, 7),
  phone_landscape: new Vector3(0, 0.5, 4),
  ipad_portrait: new Vector3(0, 1.5, 6),
  ipad_landscape: new Vector3(0, 1, 4),
  tablet: new Vector3(0, 0.125, 2),
  large: new Vector3(0, 1, 4),
  extraLarge: new Vector3(0, 1, 4),
};

export const HALLOWEEN_CONFIGURATIONS = {
  phone_portrait: new Vector3(0, 35, 110),
  phone_landscape: new Vector3(0, 20, 50),
  ipad_portrait: new Vector3(0, 35, 75),
  ipad_landscape: new Vector3(0, 25, 50),
  tablet: new Vector3(0, 0.125, 2),
  large: new Vector3(0, 20, 40),
  extraLarge: new Vector3(0, 20, 40),
};

export const POSITIONS = {
  CRYPT: new Vector3(-0.4, 0, -1.25),
  MOON: new Vector3(1.5, 1, -1),
  LANTERN: new Vector3(0.4, 0, -1.25),
};

export const SCALES = {
  CANDY_START: 0.5,
  CANDY_RATE: 5,
  CANDY_MAX: 1.8,
};

export const PUMPKIN = {
  START_HEIGHT: 6,
  MAX_SCALE: 4,
};
export const ARROW = {
  START: -22.5,
  START_SECOND: 10,
  MAX_FIRST: -14,
  MAX_SECOND: 17.5,
  PHASE1_TIME: 8,
  PHASE2_TIME: 17,
  SPEED: 7.5,
};

export type ScreenSize = {
  width: number;
  height: number;
};
