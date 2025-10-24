import { Vector3 } from "three";
import {
  RESOLUTIONS,
  GRAVEYARD_CONFIGURATIONS,
  BUSINESS_CONFIGURATIONS,
  PUMPKIN_CONFIGURATIONS,
  HALLOWEEN_CONFIGURATIONS,
} from "../state/Config";

export const getScreenConfiguration = (
  scene: string,
  width: number,
  height: number
) => {
  switch (scene) {
    case "Graveyard":
      {
        // Phone in portrait
        if (width <= RESOLUTIONS.SMALL) {
          return GRAVEYARD_CONFIGURATIONS["phone_portrait"];
        }

        // Phone in landscape
        if (width <= RESOLUTIONS.MEDIUM && width > height) {
          return GRAVEYARD_CONFIGURATIONS["phone_landscape"];
        }

        // iPad in portrait
        if (width <= RESOLUTIONS.MEDIUM && width < height) {
          return GRAVEYARD_CONFIGURATIONS["ipad_portrait"];
        }

        // iPad in landscape
        if (width <= RESOLUTIONS.LARGE && width > height) {
          return GRAVEYARD_CONFIGURATIONS["ipad_landscape"];
        }

        // Large tablet
        if (width <= RESOLUTIONS.LARGE) {
          return GRAVEYARD_CONFIGURATIONS["tablet"];
        }

        // Laptop or some macs
        if (width <= RESOLUTIONS.X_LARGE) {
          return GRAVEYARD_CONFIGURATIONS["large"];
        }

        // Desktop
        return GRAVEYARD_CONFIGURATIONS["extraLarge"];
      }
      break;

    case "Business":
      {
        {
          // Phone in portrait
          if (width <= RESOLUTIONS.SMALL) {
            return BUSINESS_CONFIGURATIONS["phone_portrait"];
          }

          // Phone in landscape
          if (width <= RESOLUTIONS.MEDIUM && width > height) {
            return BUSINESS_CONFIGURATIONS["phone_landscape"];
          }

          // iPad in portrait
          if (width <= RESOLUTIONS.MEDIUM && width < height) {
            return BUSINESS_CONFIGURATIONS["ipad_portrait"];
          }

          // iPad in landscape
          if (width <= RESOLUTIONS.LARGE && width > height) {
            return BUSINESS_CONFIGURATIONS["ipad_landscape"];
          }

          // Large tablet
          if (width <= RESOLUTIONS.LARGE) {
            return BUSINESS_CONFIGURATIONS["tablet"];
          }

          // Laptop or some macs
          if (width <= RESOLUTIONS.X_LARGE) {
            return BUSINESS_CONFIGURATIONS["large"];
          }

          // Desktop
          return BUSINESS_CONFIGURATIONS["extraLarge"];
        }
      }
      break;

    case "Pumpkin":
      {
        {
          // Phone in portrait
          if (width <= RESOLUTIONS.SMALL) {
            return PUMPKIN_CONFIGURATIONS["phone_portrait"];
          }

          // Phone in landscape
          if (width <= RESOLUTIONS.MEDIUM && width > height) {
            return PUMPKIN_CONFIGURATIONS["phone_landscape"];
          }

          // iPad in portrait
          if (width <= RESOLUTIONS.MEDIUM && width < height) {
            return PUMPKIN_CONFIGURATIONS["ipad_portrait"];
          }

          // iPad in landscape
          if (width <= RESOLUTIONS.LARGE && width > height) {
            return PUMPKIN_CONFIGURATIONS["ipad_landscape"];
          }

          // Large tablet
          if (width <= RESOLUTIONS.LARGE) {
            return PUMPKIN_CONFIGURATIONS["tablet"];
          }

          // Laptop or some macs
          if (width <= RESOLUTIONS.X_LARGE) {
            return PUMPKIN_CONFIGURATIONS["large"];
          }

          // Desktop
          return PUMPKIN_CONFIGURATIONS["extraLarge"];
        }
      }
      break;

    case "Halloween":
      {
        {
          // Phone in portrait
          if (width <= RESOLUTIONS.SMALL) {
            return HALLOWEEN_CONFIGURATIONS["phone_portrait"];
          }

          // Phone in landscape
          if (width <= RESOLUTIONS.MEDIUM && width > height) {
            return HALLOWEEN_CONFIGURATIONS["phone_landscape"];
          }

          // iPad in portrait
          if (width <= RESOLUTIONS.MEDIUM && width < height) {
            return HALLOWEEN_CONFIGURATIONS["ipad_portrait"];
          }

          // iPad in landscape
          if (width <= RESOLUTIONS.LARGE && width > height) {
            return HALLOWEEN_CONFIGURATIONS["ipad_landscape"];
          }

          // Large tablet
          if (width <= RESOLUTIONS.LARGE) {
            return HALLOWEEN_CONFIGURATIONS["tablet"];
          }

          // Laptop or some macs
          if (width <= RESOLUTIONS.X_LARGE) {
            return HALLOWEEN_CONFIGURATIONS["large"];
          }

          // Desktop
          return HALLOWEEN_CONFIGURATIONS["extraLarge"];
        }
      }
      break;

    default:
      return new Vector3();
  }
};
