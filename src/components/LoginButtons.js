import React from 'react';
import Button from '@material-ui/core/Button';
import DevicesIcon from '@material-ui/icons/Devices';
import withStyles from '@material-ui/styles/withStyles';
import blueGrey from '@material-ui/core/colors/blueGrey';
import Dropbox from '../svg/brands/Dropbox';
import GoogleDrive from '../svg/brands/GoogleDrive';

const DropboxButton = withStyles({
  root: {
    color: '#fffffd',
    backgroundColor: '#0061fe',
    width: '200px',
    '&:hover': {
      backgroundColor: '#0d2481'
    }
  }
})(Button);

const GoogleDriveButton = withStyles({
  root: {
    color: '#ffffff',
    backgroundColor: '#db4437',
    width: '200px',
    '&:hover': {
      backgroundColor: '#a8160a'
    }
  }
})(Button);

const LocalDeviceButton = withStyles({
  root: {
    color: '#ffffff',
    backgroundColor: blueGrey[500],
    width: '200px',
    '&:hover': {
      backgroundColor: blueGrey[700]
    }
  }
})(Button);

const loginButtons = [
  [
    'dropbox',
    <DropboxButton
      variant="contained"
      disableElevation
      size="large"
      startIcon={<Dropbox className="filter invert w-5" />}
    >
      Dropbox
    </DropboxButton>
  ],
  [
    'googledrive',
    <GoogleDriveButton
      variant="contained"
      disableElevation
      size="large"
      startIcon={<GoogleDrive className="filter invert w-5" />}
    >
      Google Drive
    </GoogleDriveButton>
  ],
  [
    'localdevice',
    <LocalDeviceButton
      variant="contained"
      disableElevation
      size="large"
      startIcon={<DevicesIcon />}
    >
      Local device
    </LocalDeviceButton>
  ]
];

export default loginButtons;
