import { useState, useEffect } from "react";
import Typography from "@mui/material/Typography";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import MusicNoteIcon from "@mui/icons-material/MusicNote";
import MusicOffIcon from "@mui/icons-material/MusicOff";

const AudioDialog = () => {
  const [dialogOpen, setDialogOpen] = useState(true);

  const handleClose = () => {
    setDialogOpen(false);
  };

  return (
    <Dialog
      onClose={handleClose}
      open={dialogOpen}
      maxWidth={"md"}
      fullWidth={true}
      sx={{ backdropFilter: "blur(10px)" }}
      slotProps={{
        paper: {
          sx: {
            opacity: 0.75,
            backgroundColor: "#222222",
            color: "#cccccc",
            borderRadius: "30px",
            border: "1px solid rgba(255, 255, 255, 0.3)",
          },
        },
      }}
    >
      <DialogTitle>Enable Audio</DialogTitle>
      <DialogContent dividers>
        <Typography variant="h6">
          For the full Halloween experience, turn on sound!
        </Typography>
      </DialogContent>
      <DialogActions>
        <IconButton
          color="warning"
          onClick={handleClose}
          sx={{ mr: 3, mb: 1, border: "1px solid orange" }}
        >
          <MusicOffIcon />
        </IconButton>
        <IconButton
          color="warning"
          onClick={handleClose}
          sx={{ mr: 1, mb: 1, border: "1px solid orange" }}
        >
          <MusicNoteIcon />
        </IconButton>
      </DialogActions>
    </Dialog>
  );
};

export default AudioDialog;
