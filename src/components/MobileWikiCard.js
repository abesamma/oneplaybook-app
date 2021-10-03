/* eslint-disable react/require-default-props */
import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Checkbox from '@material-ui/core/Checkbox';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import TextField from '@material-ui/core/TextField';
import Drawer from '@material-ui/core/Drawer';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import DeleteOutlinedIcon from '@material-ui/icons/DeleteOutlined';
import EditOutlinedIcon from '@material-ui/icons/EditOutlined';
import MoreVertOutlinedIcon from '@material-ui/icons/MoreVertOutlined';
import Typography from '@material-ui/core/Typography';
import makeStyles from '@material-ui/styles/makeStyles';
import Image from '../assets/Logo_non_descriptive.svg';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    margin: theme.spacing(4),
    maxHeight: '88px'
  },
  cardActionArea: {
    display: 'inherit',
    justifyContent: 'start',
    minWidth: '60%'
  },
  checkbox: {
    margin: '0 -10px 0 1px',
    width: '5.5rem'
  },
  media: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    minWidth: 65,
    maxWidth: 65
  },
  moreButton: {
    margin: 'auto'
  },
  text: {
    overflow: 'hidden',
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis'
  },
  textContent: {
    flex: '2 auto',
    maxWidth: '70%'
  }
}));

const MobileWikiCard = ({
  bulkChecker,
  checkedWiki,
  deleteWikiHandler,
  openWikiHandler,
  renameWikiHandler,
  title
}) => {
  const classes = useStyles();
  const [checked, setChecked] = React.useState(checkedWiki);
  const [open, setOpen] = React.useState({
    drawer: false,
    deletionDialog: false,
    renameDialog: false
  });
  const openDrawer = () => setOpen({ ...(open && { drawer: true }) });
  const openDeletionDialog = () => setOpen({ ...(open && { deletionDialog: true }) });
  const openRenameDialog = () => setOpen({ ...(open && { renameDialog: true }) });
  const handleClose = () => setOpen({ drawer: false, deletionDialog: false, renameDialog: false });
  const [textfieldValue, setTextFieldValue] = React.useState('');
  const handleChange = event => setTextFieldValue(event.target.value);
  const handleCheck = event => {
    setChecked(event.target.checked);
    bulkChecker();
  };
  const handleFormSubmission = () => {
    const newTitle = textfieldValue;
    renameWikiHandler(title, newTitle);
    handleClose();
  };
  const deletionHandler = () => {
    deleteWikiHandler(title);
    handleClose();
  };
  React.useEffect(() => {
    setChecked(checkedWiki);
  }, [checkedWiki]);
  return (
    <>
      <Card className={classes.root} elevation={3}>
        <Checkbox
          name="wiki-checkbox"
          color="secondary"
          className={classes.checkbox}
          checked={checked}
          onChange={handleCheck}
          inputProps={{ 'aria-label': 'check wiki' }}
          value={title}
        />
        <CardActionArea className={classes.cardActionArea} onClick={openWikiHandler}>
          <CardMedia className={classes.media}>
            <img src={Image} alt="notebook triskelion logo" />
          </CardMedia>
          <CardContent className={classes.textContent}>
            <Typography className={classes.text} variant="subtitle2">
              {title}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardContent className={classes.moreButton}>
          <IconButton arial-label="more options button" color="secondary" onClick={openDrawer}>
            <MoreVertOutlinedIcon />
          </IconButton>
        </CardContent>
      </Card>
      <Drawer anchor="bottom" open={open.drawer} onClose={handleClose}>
        <List>
          <ListItem button onClick={openRenameDialog}>
            <ListItemIcon>
              <EditOutlinedIcon />
            </ListItemIcon>
            <ListItemText>Rename</ListItemText>
          </ListItem>
          <ListItem button onClick={openDeletionDialog}>
            <ListItemIcon>
              <DeleteOutlinedIcon />
            </ListItemIcon>
            <ListItemText>Delete</ListItemText>
          </ListItem>
        </List>
      </Drawer>
      <Dialog open={open.deletionDialog} onClose={handleClose} aria-label="Delete wiki notebook">
        <DialogContent>
          <DialogContentText>
            Delete this wiki notebook titled &ldquo;{title}&rdquo;?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button color="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button color="secondary" onClick={deletionHandler}>
            Delete
          </Button>
        </DialogActions>
      </Dialog>
      <Dialog open={open.renameDialog} onClose={handleClose} aria-label="Rename wiki notebook">
        <DialogTitle>Rename wiki notebook</DialogTitle>
        <DialogContent>
          <DialogContentText>
            What would you like to rename this wiki notebook to?
          </DialogContentText>
          <TextField
            autoFocus
            color="secondary"
            margin="dense"
            id="wiki-rename"
            label="Rename wiki notebook"
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
            Rename
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

MobileWikiCard.defaultProps = {
  checkedWiki: false
};

MobileWikiCard.propTypes = {
  bulkChecker: PropTypes.func.isRequired,
  checkedWiki: PropTypes.bool,
  deleteWikiHandler: PropTypes.func.isRequired,
  openWikiHandler: PropTypes.func.isRequired,
  renameWikiHandler: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired
};

export default MobileWikiCard;
