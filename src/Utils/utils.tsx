import { Vector3 } from "three";
import {
  RESOLUTIONS,
  GRAVEYARD_CONFIGURATIONS,
  BUSINESS_CONFIGURATIONS,
} from "../state/Config";

export const getScreenConfiguration = (
  scene: string,
  width: number,
  height: number
) => {
  switch (scene) {
    case "Graveyard":
      {
        // Small screens
        if (width <= RESOLUTIONS.SMALL) {
          return GRAVEYARD_CONFIGURATIONS["small"];
        }

        // Phone in landscape
        if (width <= RESOLUTIONS.MEDIUM && width > height) {
          return GRAVEYARD_CONFIGURATIONS["landscape"];
        }

        if (width <= RESOLUTIONS.LARGE && width > height) {
          return GRAVEYARD_CONFIGURATIONS["large"];
        }

        // if (width <= RESOLUTIONS.LARGE) {
        //   return GRAVEYARD_CONFIGURATIONS["large"];
        // }

        // if (width <= RESOLUTIONS.X_LARGE) {
        //   return GRAVEYARD_CONFIGURATIONS[CONFIG_TYPE.TABLET];
        // }

        if (width >= RESOLUTIONS.X_LARGE) {
          return GRAVEYARD_CONFIGURATIONS["extraLarge"];
        }

        return GRAVEYARD_CONFIGURATIONS["small"];
      }
      break;

    case "Business":
      {
        // Small screens
        if (width <= RESOLUTIONS.SMALL) {
          return BUSINESS_CONFIGURATIONS["small"];
        }

        // Phone in landscape
        if (width <= RESOLUTIONS.MEDIUM && width > height) {
          return BUSINESS_CONFIGURATIONS["landscape"];
        }

        if (width <= RESOLUTIONS.LARGE && width > height) {
          return BUSINESS_CONFIGURATIONS["large"];
        }

        // if (width <= RESOLUTIONS.LARGE) {
        //   return BUSINESS_CONFIGURATIONS["large"];
        // }

        // if (width <= RESOLUTIONS.X_LARGE) {
        //   return BUSINESS_CONFIGURATIONS[CONFIG_TYPE.TABLET];
        // }

        if (width >= RESOLUTIONS.X_LARGE) {
          return BUSINESS_CONFIGURATIONS["extraLarge"];
        }

        return BUSINESS_CONFIGURATIONS["small"];
      }
      break;

    default:
      return new Vector3();
  }
};
