import { useLocation } from "react-router-dom";
import GraveyardScene from "../scenes/GraveyardScene";
import BusinessScene from "../scenes/BusinessScene";
import PumpkinScene from "../scenes/PumpkinScene";

const SceneSwitcher = () => {
  const { pathname } = useLocation();
  switch (pathname) {
    case "/business":
      return <BusinessScene />;
    case "/pumpkin":
      return <PumpkinScene />;
    default:
      return <GraveyardScene />;
  }
};

export default SceneSwitcher;
