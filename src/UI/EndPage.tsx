import { useEffect } from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Copyright from "./Copyright";
import Info from "./Info";
import useStore from "../state/store";

const EndPage = () => {
  const setCurrentScene = useStore((state) => state.setCurrentScene);

  useEffect(() => {
    setCurrentScene("end");
  }, []);

  return (
    <>
      <div id="end" className="panel">
        <Box sx={{ pl: 1, pr: 1 }}>
          <Typography variant="h5" sx={{ mb: 2 }}>
            Have a safe and enjoyable time on October 31st.
          </Typography>
          <Typography variant="h5" sx={{ mb: 2 }}>
            Don't let all the crazy facts scare you.
          </Typography>
          <Typography variant="h5" sx={{ mb: 6 }}>
            You wouldn't want to get samhainophobia (fear of Halloween!).
          </Typography>
          <h1 className="spooky-text red-text">Happy Halloween!</h1>
        </Box>
      </div>
      <Copyright />
      <Info />
    </>
  );
};

export default EndPage;
