import { useLocation } from "react-router-dom";
import Graveyard from "../scenes/Graveyard";

const SceneSwitcher = () => {
  const { pathname } = useLocation();
  switch (pathname) {
    default:
      return <Graveyard />;
  }
};

export default SceneSwitcher;
