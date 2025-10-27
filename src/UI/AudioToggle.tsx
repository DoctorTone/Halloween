import Switch from "@mui/material/Switch";
import MusicNoteIcon from "@mui/icons-material/MusicNote";
import Box from "@mui/material/Box";
import type { ChangeEvent } from "react";
import useStore from "../state/store";

const AudioToggle = () => {
  const setAudioEnabled = useStore((state) => state.setAudioEnabled);
  const audioEnabled = useStore((state) => state.audioEnabled);

  const onToggleAudio = (event: ChangeEvent<HTMLInputElement>) => {
    setAudioEnabled(event.target.checked);
  };

  return (
    <div id="audio" className="panel">
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <Switch checked={audioEnabled} onChange={onToggleAudio} />
        <MusicNoteIcon color="primary" />
      </Box>
    </div>
  );
};

export default AudioToggle;
