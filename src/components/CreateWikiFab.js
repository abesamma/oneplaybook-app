import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import TextField from '@material-ui/core/TextField';
import Fab from '@material-ui/core/Fab';

const CreateWikiFab = ({ className, children, variant, createWikiHandler }) => {
  const [textfieldValue, setTextFieldValue] = React.useState('');
  const [open, toggleDialog] = React.useState(false);
  const handleClickOpen = () => toggleDialog(true);
  const handleClose = () => toggleDialog(false);
  const handleChange = event => setTextFieldValue(event.target.value);
  const handleFormSubmission = () => {
    createWikiHandler(textfieldValue);
    setTextFieldValue('');
    handleClose();
  };
  return (
    <>
      <Fab
        aria-label="Create new wiki workspace"
        className={className}
        color="secondary"
        onClick={handleClickOpen}
        variant={variant}
      >
        {children}
      </Fab>
      <Dialog open={open} onClose={handleClose} aria-label="New wiki information">
        <DialogTitle>New wiki workspace details</DialogTitle>
        <DialogContent>
          <DialogContentText>
            What would you like to call your new wiki workspace?
          </DialogContentText>
          <TextField
            autoFocus
            color="secondary"
            margin="dense"
            id="wiki-name"
            label="New wiki workspace title"
            type="text"
            fullWidth
            value={textfieldValue}
            onChange={handleChange}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="secondary">
            Cancel
          </Button>
          <Button onClick={handleFormSubmission} color="secondary">
            Create
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default CreateWikiFab;
