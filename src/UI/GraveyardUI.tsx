import ForwardIcon from "@mui/icons-material/Forward";
import IconButton from "@mui/material/IconButton";
import { useNavigate } from "react-router-dom";

const GraveyardUI = () => {
  const navigate = useNavigate();
  return (
    <div id="enter" className="panel">
      <p className="spooky-text red-text text-large">
        Want to see some spooky Halloween facts?
        <IconButton onClick={() => navigate("/business")}>
          <ForwardIcon fontSize="large" color="error" />
        </IconButton>
      </p>
    </div>
  );
};

export default GraveyardUI;
