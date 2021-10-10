import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Collapse from '@material-ui/core/Collapse';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import ArrowBackOutlinedIcon from '@material-ui/icons/ArrowBackOutlined';
import LibraryBooksOutlinedIcon from '@material-ui/icons/LibraryBooksOutlined';
import BookOutlinedIcon from '@material-ui/icons/BookOutlined';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import MenuOutlinedIcon from '@material-ui/icons/MenuOutlined';
import Toolbar from '@material-ui/core/Toolbar';
import { useMediaQuery } from '@material-ui/core';
import makeStyles from '@material-ui/styles/makeStyles';
import getWikis from '../../data/wikis-data';

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
    width: 250
  },
  list: {
    width: '100%'
  },
  nested: {
    paddingLeft: theme.spacing(20)
  },
  text: {
    overflow: 'hidden',
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis'
  },
  title: {
    paddingLeft: theme.spacing(8)
  }
}));

const WikiView = ({ closeWikiHandler }) => {
  const classes = useStyles();
  const mediaQuery = useMediaQuery('(min-width: 1280px)');
  const [drawer, setDrawer] = React.useState(false);
  const [expand, setExpand] = React.useState(false);
  const [wikis, setWikis] = React.useState([]);
  const toggleDrawer = () => setDrawer(!drawer);
  const toggleExpand = () => setExpand(!expand);
  const handleOpenDrawer = () => setDrawer(true);
  const handleCloseDrawer = () => setDrawer(false);
  // for demonstration; api will do this for us and return new entry for insertion
  React.useEffect(() => {
    getWikis().then(
      response => {
        response.json().then(
          json => {
            const fetchedWikis = json.entries;
            setWikis([...fetchedWikis]);
          },
          err => {
            // eslint-disable-next-line no-console
            console.log('%cError:%o', 'background-color: red; color: white;', err);
          }
        );
      },
      err => {
        // eslint-disable-next-line no-console
        console.log('%cError:%o', 'background-color: red; color: white;', err);
      }
    );
  }, []);
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
      <SwipeableDrawer
        anchor="left"
        className={classes.drawer}
        classes={{ paper: classes.drawer }}
        open={drawer}
        onClose={handleCloseDrawer}
        onOpen={handleOpenDrawer}
        variant="temporary"
      >
        <Typography className={classes.title} color="secondary" variant="h6">
          Wiki title
        </Typography>
        <Divider />
        <List className={classes.list}>
          <ListItem button onClick={toggleExpand}>
            <ListItemIcon>
              <LibraryBooksOutlinedIcon />
            </ListItemIcon>
            <ListItemText primary="Library" />
            {expand ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
          <Collapse in={expand} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              {wikis.map(wiki => (
                <ListItem
                  key={wiki.name}
                  button
                  className={classes.nested}
                  onClick={handleCloseDrawer}
                >
                  <ListItemIcon>
                    <BookOutlinedIcon />
                  </ListItemIcon>
                  <ListItemText
                    primary={wiki.name}
                    primaryTypographyProps={{ className: classes.text }}
                  />
                </ListItem>
              ))}
            </List>
          </Collapse>
        </List>
      </SwipeableDrawer>
    </>
  );
};
WikiView.propTypes = {
  closeWikiHandler: PropTypes.func.isRequired
};

export default WikiView;
