import { useState, useEffect } from "react";
import Typography from "@mui/material/Typography";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";
import useStore from "../state/store";

const InfoDialog = () => {
  const [dialogOpen, setDialogOpen] = useState(false);
  const infoDialogOpen = useStore((state) => state.infoDialogOpen);
  const setShowInfoDialog = useStore((state) => state.setShowInfoDialog);

  const handleClose = () => {
    setDialogOpen(false);
    setShowInfoDialog(false);
  };

  useEffect(() => {
    setDialogOpen(infoDialogOpen ? true : false);
  }, [infoDialogOpen]);

  return (
    <>
      <Dialog
        onClose={handleClose}
        open={dialogOpen}
        maxWidth={"md"}
        fullWidth={true}
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
        <DialogTitle>Halloween Viz</DialogTitle>
        <DialogContent dividers>
          <Typography variant="h6">
            Thanks to{" "}
            <Link
              variant="h6"
              underline="none"
              href="https://www.kaylousberg.com"
              target="_blank"
              rel="noopener"
            >
              KayKit
            </Link>{" "}
            for all the Halloween models.
          </Typography>
          <Typography variant="h6" sx={{ mb: 2 }}>
            And goosegreen70 for{" "}
            <Link
              variant="h6"
              underline="none"
              href="https://skfb.ly/6VXwS"
              target="_blank"
              rel="noopener"
            >
              Michael Myers
            </Link>
            .
          </Typography>
          <Typography variant="h6" sx={{ mb: 2 }}>
            Sounds from Pixababy and Freesound
          </Typography>
          <Typography variant="h6">
            All assets are licensed under{" "}
            <Link
              variant="h6"
              underline="none"
              href="http://creativecommons.org/licenses/by/4.0/"
              target="_blank"
              rel="noopener"
            >
              Creative Commons Attribution
            </Link>
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button
            variant="contained"
            color="warning"
            onClick={handleClose}
            sx={{ mr: 1, mb: 1 }}
          >
            OK
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default InfoDialog;
