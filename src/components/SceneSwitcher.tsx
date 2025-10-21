import { useLocation } from "react-router-dom";
import Graveyard from "../scenes/Graveyard";
import Business from "../scenes/Business";

const SceneSwitcher = () => {
  const { pathname } = useLocation();
  switch (pathname) {
    case "/business":
      return <Business />;
    default:
      return <Graveyard />;
  }
};

export default SceneSwitcher;
