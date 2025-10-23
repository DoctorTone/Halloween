import Typography from "@mui/material/Typography";
import ForwardIcon from "@mui/icons-material/Forward";
import IconButton from "@mui/material/IconButton";
import { useNavigate } from "react-router-dom";

const PumpkinUI = () => {
  const navigate = useNavigate();
  return (
    <div id="pumpkin" className="panel">
      <Typography variant="h5">
        End?
        <IconButton onClick={() => navigate("/halloween")}>
          <ForwardIcon fontSize="large" color="warning" />
        </IconButton>
      </Typography>
    </div>
  );
};

export default PumpkinUI;
