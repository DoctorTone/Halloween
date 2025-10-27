import Switch from "@mui/material/Switch";
import MusicNoteIcon from "@mui/icons-material/MusicNote";
import Box from "@mui/material/Box";

const AudioToggle = () => {
  return (
    <div id="audio" className="panel">
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <Switch defaultChecked />
        <MusicNoteIcon color="primary" />
      </Box>
    </div>
  );
};

export default AudioToggle;
