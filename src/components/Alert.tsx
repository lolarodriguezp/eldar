import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";

interface Props {
  open: boolean;
  handleCancel: () => void;
  handleAccept: () => void;
  title: string;
  contentText: string;
}

export default function Alert({
  open,
  handleCancel,
  handleAccept,
  title,
  contentText,
}: Props) {
  return (
    <Dialog
      open={open}
      onClose={handleCancel}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">{title}</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          {contentText}
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button variant="outlined" onClick={handleCancel}>Cancelar</Button>
        <Button variant="contained" onClick={handleAccept} autoFocus>
          Aceptar
        </Button>
      </DialogActions>
    </Dialog>
  );
}
