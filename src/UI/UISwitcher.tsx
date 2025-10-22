import { useLocation } from "react-router-dom";
import GraveyardUI from "./GraveyardUI";
import BusinessUI from "./BusinessUI";

const UISwitcher = () => {
  const { pathname } = useLocation();
  switch (pathname) {
    case "/business":
      return <BusinessUI />;
    default:
      return <GraveyardUI />;
  }
};

export default UISwitcher;
