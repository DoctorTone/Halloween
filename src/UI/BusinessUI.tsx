import Typography from "@mui/material/Typography";
import ForwardIcon from "@mui/icons-material/Forward";
import IconButton from "@mui/material/IconButton";
import { useNavigate } from "react-router-dom";

const BusinessUI = () => {
  const navigate = useNavigate();
  return (
    <div id="business" className="panel">
      <Typography variant="h5">
        What about pumpkins?
        <IconButton onClick={() => navigate("/pumpkin")}>
          <ForwardIcon fontSize="large" color="warning" />
        </IconButton>
      </Typography>
    </div>
  );
};

export default BusinessUI;
