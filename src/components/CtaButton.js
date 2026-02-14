/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import IconButton from '@material-ui/core/IconButton';
import CloseButton from '@material-ui/icons/HighlightOff';
import Button from './Button';
import AppContainer from './AppContainer';
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
        <div id="app" className="primary w-full">
          <div className="flex justify-end pt-4 pr-4">
            <IconButton
              className="icon-button"
              aria-label="close"
              onClick={handleClose}
              size="small"
            >
              <CloseButton style={{ color: 'white', fontSize: 45 }} />
            </IconButton>
          </div>
          <div className="flex justify-center mt-10 mb-8">
            <CustomThemeProvider>
              <AppContainer controls={handleClose} className="w-8/12 md: w-11/12 h-auto" />
            </CustomThemeProvider>
          </div>
        </div>
      </Dialog>
    </div>
  );
};

export default CtaButton;
