import Typography from "@mui/material/Typography";
import ForwardIcon from "@mui/icons-material/Forward";
import IconButton from "@mui/material/IconButton";
import { useNavigate } from "react-router-dom";

const HalloweenUI = () => {
  const navigate = useNavigate();

  return (
    <div id="halloween" className="panel">
      <Typography variant="h5">
        Thanks!
        <IconButton onClick={() => navigate("/end")}>
          <ForwardIcon fontSize="large" color="warning" />
        </IconButton>
      </Typography>
    </div>
  );
};

export default HalloweenUI;
