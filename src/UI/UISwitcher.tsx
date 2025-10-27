import { useLocation } from "react-router-dom";
import GraveyardUI from "./GraveyardUI";
import BusinessUI from "./BusinessUI";
import PumpkinUI from "./PumpkinUI";
import HalloweenUI from "./HalloweenUI";
import EndPage from "./EndPage";
import AudioToggle from "./AudioToggle";
import SoundDialog from "../dialogs/SoundDialog";

const UISwitcher = () => {
  const { pathname } = useLocation();
  switch (pathname) {
    case "/business":
      {
        return (
          <>
            <BusinessUI />
          </>
        );
      }
      break;

    case "/pumpkin":
      {
        return <PumpkinUI />;
      }
      break;

    case "/halloween":
      {
        return <HalloweenUI />;
      }
      break;

    case "/end":
      {
        return <EndPage />;
      }
      break;

    default: {
      return (
        <>
          <AudioToggle />
          <SoundDialog />
          <GraveyardUI />
        </>
      );
    }
  }
};

export default UISwitcher;
