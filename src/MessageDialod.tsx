import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, TextField } from "@mui/material";
import { FormEvent } from "react";

export const MessageDialog = ({onConfirm, handleClose}: {onConfirm: (message: string) => void; handleClose: () => void}) => {
  
    return (
      <>
        <Dialog
          open={true}
          onClose={handleClose}
          PaperProps={{
            component: 'form',
            onSubmit: (event: FormEvent<HTMLFormElement>) => {
              event.preventDefault();
              const formData = new FormData(event.currentTarget);
              const formJson = Object.fromEntries((formData).entries());
              const message = formJson.message;
              console.log(message);
              onConfirm(message as string)
              handleClose();
            },
          }}
        >
          <DialogTitle>Enter Message</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Enter the text below to sign
            </DialogContentText>
            <TextField
              autoFocus
              required
              margin="dense"
              id="name"
              name="message"
              label="Mesage"
              type="text"
              fullWidth
              variant="standard"
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Cancel</Button>
            <Button type="submit">Sign</Button>
          </DialogActions>
        </Dialog>
      </>
    );
  }