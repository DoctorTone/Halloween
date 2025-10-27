import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";

const AudioToggle = () => {
  return (
    <div id="audio" className="panel">
      <FormGroup>
        <FormControlLabel control={<Switch />} label="Audio" />
      </FormGroup>
    </div>
  );
};

export default AudioToggle;
