import { useState, useEffect } from "react";
import Typography from "@mui/material/Typography";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import Button from "@mui/material/Button";

const SoundDialog = () => {
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
    >
      <DialogTitle>Enable Audio</DialogTitle>
      <DialogContent dividers>
        <Typography variant="h6">
          For the full Halloween experience, turn on sound.
        </Typography>
      </DialogContent>
      <DialogActions>
        <Button
          variant="contained"
          color="warning"
          onClick={handleClose}
          sx={{ mr: 1, mb: 1 }}
        >
          Enable
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default SoundDialog;
