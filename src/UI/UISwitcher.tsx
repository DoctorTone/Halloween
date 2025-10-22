import { useLocation } from "react-router-dom";
import GraveyardUI from "./GraveyardUI";
import BusinessUI from "./BusinessUI";
import useStore from "../state/store";

const UISwitcher = () => {
  const setCurrentScene = useStore((state) => state.setCurrentScene);

  const { pathname } = useLocation();
  switch (pathname) {
    case "/business":
      {
        setCurrentScene("business");
        return <BusinessUI />;
      }
      break;
    default: {
      setCurrentScene("graveyard");
      return <GraveyardUI />;
    }
  }
};

export default UISwitcher;
