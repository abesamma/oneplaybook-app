/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import Button from './Button';
import App from './App';
import CustomThemeProvider from './CustomThemeProvider';

const CtaButton = props => {
  const [open, toggleOpen] = React.useState(false);
  const handleOpen = () => {
    toggleOpen(true);
  };
  const handleClose = () => {
    toggleOpen(false);
  };
  return (
    <div>
      <Button {...props} onClick={handleOpen}>
        {props.children}
      </Button>
      <Dialog fullScreen open={open} onClose={handleClose}>
        <div id="app" className="w-full">
          <CustomThemeProvider>
            <App appExitHandler={handleClose} />
          </CustomThemeProvider>
        </div>
      </Dialog>
    </div>
  );
};

export default CtaButton;
