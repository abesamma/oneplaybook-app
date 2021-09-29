import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Drawer from '@material-ui/core/Drawer';
import IconButton from '@material-ui/core/IconButton';
import ArrowBackOutlinedIcon from '@material-ui/icons/ArrowBackOutlined';
import MenuOutlinedIcon from '@material-ui/icons/MenuOutlined';
import Toolbar from '@material-ui/core/Toolbar';
import { useMediaQuery } from '@material-ui/core';
import makeStyles from '@material-ui/styles/makeStyles';

const useStyles = makeStyles(theme => ({
  appBar: {
    top: 'auto',
    bottom: 0,
    backgroundColor: 'transparent',
    color: 'black'
  },
  backButton: {
    marginLeft: theme.spacing(1)
  },
  drawer: {
    width: 200
  }
}));

const WikiView = ({ closeWikiHandler }) => {
  const classes = useStyles();
  const mediaQuery = useMediaQuery('(min-width: 1280px)');
  const [drawer, setDrawer] = React.useState(false);
  const toggleDrawer = () => setDrawer(!drawer);
  return (
    <>
      <AppBar className={classes.appBar} elevation={0} position="fixed">
        <Toolbar variant={mediaQuery ? 'dense' : 'regular'}>
          <IconButton
            className={classes.backButton}
            color="secondary"
            edge="start"
            aria-label="back to library"
            onClick={closeWikiHandler}
          >
            <ArrowBackOutlinedIcon />
          </IconButton>
          <IconButton color="secondary" aria-label="wiki menu" onClick={toggleDrawer}>
            <MenuOutlinedIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <iframe title="Wiki" className="w-full h-full border-0" src="https://tiddlywiki.com" />
      <Drawer
        anchor="left"
        className={classes.drawer}
        open={drawer}
        onClose={toggleDrawer}
        variant="temporary"
      >
        Drawer contents
      </Drawer>
    </>
  );
};
WikiView.propTypes = {
  closeWikiHandler: PropTypes.func.isRequired
};

export default WikiView;
