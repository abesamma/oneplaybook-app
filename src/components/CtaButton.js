/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import Button from './Button';
import App from './App';
import CustomThemeProvider from './CustomThemeProvider';
import CloudAccess from './CloudAccess';
import LoginList from './LoginList';

const CtaButton = props => {
  const [openApp, toggleOpenApp] = React.useState(false);
  const [openLogin, toggleOpenLogin] = React.useState(false);
  const handleCloseLogin = () => toggleOpenLogin(false);
  const handleOpen = cloud => {
    const entries = Object.entries(cloud.services);
    const filteredEntries = entries.filter(entry => entry[1] === true);
    if (filteredEntries.length > 0) {
      toggleOpenApp(true);
    } else toggleOpenLogin(true);
  };
  const handleCloseApp = () => {
    toggleOpenApp(false);
  };
  const loginHandler = (serviceName, cloud) => {
    cloud.setAccess({ [serviceName]: true });
    handleOpen(cloud);
    handleCloseLogin();
  };
  return (
    <div>
      <CloudAccess.Consumer>
        {cloud => (
          <>
            <Button
              {...props}
              onClick={() => {
                handleOpen(cloud);
              }}
            >
              {props.children}
            </Button>
            <Dialog scroll="paper" open={openLogin} onClose={handleCloseLogin}>
              <DialogTitle>Welcome to Oneplaybook</DialogTitle>
              <DialogContent>
                <DialogContentText>
                  Login to the cloud service you would like to save your data to, or select
                  &ldquo;Local device&rdquo; to save to this device only.
                </DialogContentText>
                <LoginList loginHandler={loginHandler} />
              </DialogContent>
            </Dialog>
          </>
        )}
      </CloudAccess.Consumer>
      <Dialog fullScreen open={openApp} onClose={handleCloseApp}>
        <div id="app" className="w-full">
          <CustomThemeProvider>
            <CloudAccess.Provider>
              <App appExitHandler={handleCloseApp} />
            </CloudAccess.Provider>
          </CustomThemeProvider>
        </div>
      </Dialog>
    </div>
  );
};

export default CtaButton;
