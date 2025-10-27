import { styled } from "@mui/material/styles";
import Switch, { switchClasses } from "@mui/material/Switch";
import MusicNoteIcon from "@mui/icons-material/MusicNote";
import Box from "@mui/material/Box";
import type { ChangeEvent } from "react";
import useStore from "../state/store";

const AudioSwitch = styled(Switch)({
  [`& .${switchClasses.track}`]: {
    backgroundColor: "red",
  },
});

const AudioToggle = () => {
  const setAudioEnabled = useStore((state) => state.setAudioEnabled);
  const audioEnabled = useStore((state) => state.audioEnabled);

  const onToggleAudio = (event: ChangeEvent<HTMLInputElement>) => {
    setAudioEnabled(event.target.checked);
  };

  return (
    <div id="audio" className="panel">
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <AudioSwitch checked={audioEnabled} onChange={onToggleAudio} />
        <MusicNoteIcon color="primary" />
      </Box>
    </div>
  );
};

export default AudioToggle;
