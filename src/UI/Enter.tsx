import Typography from "@mui/material/Typography";
import ForwardIcon from "@mui/icons-material/Forward";
import IconButton from "@mui/material/IconButton";
import { useNavigate } from "react-router-dom";

const Enter = () => {
  const navigate = useNavigate();
  return (
    <div id="enter" className="panel">
      <Typography variant="h5">Want to see some spooky facts?</Typography>
      <IconButton onClick={() => navigate("/business")}>
        <ForwardIcon fontSize="large" color="warning" />
      </IconButton>
    </div>
  );
};

export default Enter;
