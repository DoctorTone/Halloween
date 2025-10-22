import { useLocation } from "react-router-dom";
import GraveyardUI from "./GraveyardUI";
import BusinessUI from "./BusinessUI";
import PumpkinUI from "./PumpkinUI";

const UISwitcher = () => {
  const { pathname } = useLocation();
  switch (pathname) {
    case "/business":
      {
        return <BusinessUI />;
      }
      break;

    case "/pumpkin":
      {
        return <PumpkinUI />;
      }
      break;

    default: {
      return <GraveyardUI />;
    }
  }
};

export default UISwitcher;
