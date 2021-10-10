import React from 'react';
import clsx from 'clsx';
import AppBar from '@material-ui/core/AppBar';
import Avatar from '@material-ui/core/Avatar';
import ToolBar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import IconButton from '@material-ui/core/IconButton';
import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined';
import MenuOutlinedIcon from '@material-ui/icons/MenuOutlined';
import MoreVertOutlinedIcon from '@material-ui/icons/MoreVertOutlined';
import Drawer from '@material-ui/core/Drawer';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import AddCircleOutlineOutlinedIcon from '@material-ui/icons/AddCircleOutlineOutlined';
import { useMediaQuery } from '@material-ui/core';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Typography from '@material-ui/core/Typography';
import AddOutlinedIcon from '@material-ui/icons/AddOutlined';
import ExitToAppOutlinedIcon from '@material-ui/icons/ExitToAppOutlined';
import Hidden from '@material-ui/core/Hidden';
import makeStyles from '@material-ui/styles/makeStyles';
import CreateWikiFab from './CreateWikiFab';
import menuItems from './MenuItems';
import LogoIcon from '../svg/LogoIcon';

const drawerWidth = 200;
const mobileBreakpoints = ['xs', 'sm', 'md'];
const desktopBreakpoints = ['lg', 'xl'];
const useStyles = makeStyles(theme => ({
  appBar: {
    zIndex: theme.zIndex.drawer + 1
  },
  fab: {
    marginTop: theme.spacing(40),
    marginBottom: theme.spacing(4),
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2)
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap'
  },
  drawerOpen: {
    overflowX: 'hidden',
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  drawerClose: {
    overflowX: 'hidden',
    width: theme.spacing(32),
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    })
  },
  extendedButtonIcon: {
    marginRight: theme.spacing(1)
  },
  desktopOffset: {
    // necessary for drawer items to be below app bar in desktop
    minHeight: 48
  },
  mobileOffset: {
    // necessary for drawer items to be below app bar in mobile
    minHeight: 65
  },
  appMenuButton: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(4)
  },
  moreMenuButton: {
    marginLeft: theme.spacing(4)
  },
  profileMenuButton: {
    marginRight: theme.spacing(1)
  }
}));

const TopNavigation = ({ appExitHandler, createWikiHandler, drawerOpenHandler, viewHandler }) => {
  const classes = useStyles();
  const mediaQuery = useMediaQuery('(min-width: 960px)');
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [open, setOpen] = React.useState(true);
  const [selectedIndex, setSelectedIndex] = React.useState(0);
  const handleClick = event => setAnchorEl(event.currentTarget);
  const handleClose = () => setAnchorEl(null);
  const handleMenuItemClick = (event, index) => {
    viewHandler(event);
    setSelectedIndex(index);
  };
  const toggleDrawer = () => {
    setOpen(!open);
    drawerOpenHandler(!open);
  };
  return (
    <>
      <AppBar position="fixed" className={classes.appBar}>
        <ToolBar variant={mediaQuery ? 'dense' : 'regular'}>
          <Hidden only={mobileBreakpoints}>
            <IconButton
              className={classes.appMenuButton}
              color="secondary"
              edge="start"
              aria-label="app menu"
              onClick={toggleDrawer}
            >
              <MenuOutlinedIcon />
            </IconButton>
          </Hidden>
          <div className="flex-grow">
            <LogoIcon className="w-52" />
          </div>
          <Hidden only={desktopBreakpoints}>
            <IconButton
              aria-controls="mobile profile menu"
              aria-label="profile menu"
              className={classes.profileMenuButton}
              edge="end"
              color="secondary"
              onClick={handleClick}
            >
              <AccountCircleOutlinedIcon />
            </IconButton>
          </Hidden>
          <Hidden only={mobileBreakpoints}>
            <Button variant="outlined" color="secondary" startIcon={<AccountCircleOutlinedIcon />}>
              Login
            </Button>
            <IconButton
              aria-controls="more menu"
              className={classes.moreMenuButton}
              color="secondary"
              aria-label="more"
              aria-haspopup="menu"
              edge="end"
              onClick={handleClick}
            >
              <MoreVertOutlinedIcon />
            </IconButton>
          </Hidden>
          <Hidden only={mobileBreakpoints}>
            <Menu
              id="more menu"
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              keepMounted
              onClose={handleClose}
            >
              <MenuItem onClick={appExitHandler} onClose={handleClose}>
                <ListItemIcon>
                  <ExitToAppOutlinedIcon color="secondary" fontSize="small" />
                </ListItemIcon>
                Exit
              </MenuItem>
            </Menu>
          </Hidden>
          <Hidden only={desktopBreakpoints}>
            <Menu
              id="mobile profile menu"
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              keepMounted
              onClose={handleClose}
            >
              <MenuItem>
                <ListItemIcon>
                  <AccountCircleOutlinedIcon />
                </ListItemIcon>
                Login
              </MenuItem>
              <Divider />
              <MenuItem onClick={appExitHandler} onClose={handleClose}>
                <ListItemIcon>
                  <ExitToAppOutlinedIcon />
                </ListItemIcon>
                Exit
              </MenuItem>
            </Menu>
          </Hidden>
        </ToolBar>
      </AppBar>
      <div id="offset" className={mediaQuery ? classes.desktopOffset : classes.mobileOffset} />
      <Hidden only={mobileBreakpoints}>
        <Drawer
          className={clsx(classes.drawer, {
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open
          })}
          classes={{ paper: clsx({ [classes.drawerOpen]: open, [classes.drawerClose]: !open }) }}
          variant="permanent"
        >
          <div className={classes.offset} />
          <CreateWikiFab
            className={classes.fab}
            createWikiHandler={createWikiHandler}
            variant={open ? 'extended' : 'round'}
          >
            <AddOutlinedIcon className={clsx({ [classes.extendedButtonIcon]: open })} />
            <Typography>{open ? 'New notebook' : ''}</Typography>
          </CreateWikiFab>
          <List>
            {menuItems.map((item, index) => {
              return (
                <ListItem
                  id={item[0]}
                  button
                  key={item[0]}
                  onClick={event => handleMenuItemClick(event, index)}
                  selected={index === selectedIndex}
                >
                  <ListItemIcon>{item[1]}</ListItemIcon>
                  <ListItemText>{item[0]}</ListItemText>
                </ListItem>
              );
            })}
          </List>
        </Drawer>
      </Hidden>
    </>
  );
};

export default TopNavigation;
