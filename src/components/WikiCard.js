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
import IconButton from '@material-ui/core/IconButton';
import DeleteOutlinedIcon from '@material-ui/icons/DeleteOutlined';
import EditOutlinedIcon from '@material-ui/icons/EditOutlined';
import Typography from '@material-ui/core/Typography';
import makeStyles from '@material-ui/styles/makeStyles';
import Image from '../assets/Logo_non_descriptive.svg';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    margin: theme.spacing(8),
    maxHeight: '100px'
  },
  buttons: {
    margin: 'auto'
  },
  cardActionArea: {
    display: 'inherit',
    justifyContent: 'start',
    width: '80%'
  },
  checkbox: {
    margin: '0 -10px 0 1px',
    width: '6rem'
  },
  media: {
    maxWidth: 100
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

const WikiCard = ({
  bulkChecker,
  checkedWiki,
  deleteWikiHandler,
  openWikiHandler,
  renameWikiHandler,
  title
}) => {
  const classes = useStyles();
  const [checked, setChecked] = React.useState(checkedWiki);
  const [elevation, setElevation] = React.useState(3);
  const [open, setOpen] = React.useState({ deletionDialog: false, renameDialog: false });
  const [hidden, setHidden] = React.useState(true);
  const [textfieldValue, setTextFieldValue] = React.useState('');
  const handleChange = event => setTextFieldValue(event.target.value);
  const handleCheck = event => {
    setChecked(event.target.checked);
    bulkChecker();
  };
  const handleClose = () => setOpen({ deletionDialog: false, renameDialog: false });
  const handleMouseOver = () => {
    setElevation(10);
    setHidden(false);
  };
  const handleMouseOut = () => {
    setElevation(3);
    setHidden(true);
  };
  const openDeletionDialog = () => setOpen({ ...(open && { deletionDialog: true }) });
  const openRenameDialog = () => setOpen({ ...(open && { renameDialog: true }) });
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
      <Card
        className={classes.root}
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
        elevation={elevation}
      >
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
            <img src={Image} alt="Notebook logo" />
          </CardMedia>
          <CardContent className={classes.textContent}>
            <Typography className={classes.text} component="h5" variant="h5">
              {title}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardContent className={classes.buttons} hidden={hidden}>
          <IconButton arial-label="rename wiki button" color="secondary" onClick={openRenameDialog}>
            <EditOutlinedIcon />
          </IconButton>
          <IconButton arial-label="delete button" color="secondary" onClick={openDeletionDialog}>
            <DeleteOutlinedIcon />
          </IconButton>
        </CardContent>
      </Card>
      <Dialog open={open.deletionDialog} onClose={handleClose} aria-label="Delete wiki notebook">
        <DialogContent>
          <DialogContentText>Delete wiki notebook titled &ldquo;{title}&rdquo;?</DialogContentText>
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

WikiCard.defaultProps = {
  checkedWiki: false
};

WikiCard.propTypes = {
  bulkChecker: PropTypes.func.isRequired,
  checkedWiki: PropTypes.bool,
  deleteWikiHandler: PropTypes.func.isRequired,
  openWikiHandler: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  renameWikiHandler: PropTypes.func.isRequired
};

export default WikiCard;
