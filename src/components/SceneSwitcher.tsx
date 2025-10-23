import { useLocation } from "react-router-dom";
import GraveyardScene from "../scenes/GraveyardScene";
import BusinessScene from "../scenes/BusinessScene";
import PumpkinScene from "../scenes/PumpkinScene";
import HalloweenScene from "../scenes/HalloweenScene";

const SceneSwitcher = () => {
  const { pathname } = useLocation();
  switch (pathname) {
    case "/business":
      {
        return <BusinessScene />;
      }
      break;

    case "/pumpkin":
      {
        return <PumpkinScene />;
      }
      break;

    case "/halloween":
      {
        return <HalloweenScene />;
      }
      break;

    case "/end":
      {
        return null;
      }
      break;

    default:
      return <GraveyardScene />;
  }
};

export default SceneSwitcher;
