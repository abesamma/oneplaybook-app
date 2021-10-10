import React from 'react';
import PropTypes from 'prop-types';
import { document } from 'browser-monads';
import Hidden from '@material-ui/core/Hidden';
import Grid from '@material-ui/core/Grid';
import { useMediaQuery } from '@material-ui/core';
import AddOutlinedIcon from '@material-ui/icons/AddOutlined';
import Button from '@material-ui/core/Button';
import Checkbox from '@material-ui/core/Checkbox';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContentText from '@material-ui/core/DialogContentText';
import DeleteIcon from '@material-ui/icons/Delete';
import Grow from '@material-ui/core/Grow';
import makeStyles from '@material-ui/styles/makeStyles';
import WikiView from './WikiView';
import BlankTemplate from '../BlankTemplate';
import ErrorTemplate from '../ErrorTemplate';
import LoadingTemplate from '../LoadingTemplate';
import CreateWikiFab from '../CreateWikiFab';
import WikiCard from '../WikiCard';
import MobileWikiCard from '../MobileWikiCard';
import getWikis from '../../data/wikis-data';

const useStyles = makeStyles(theme => ({
  checkbox: {
    marginTop: theme.spacing(5),
    marginLeft: theme.spacing(22),
    marginBottom: theme.spacing(-5)
  },
  checkboxMobile: {
    marginTop: theme.spacing(-2),
    marginLeft: theme.spacing(16),
    marginBottom: theme.spacing(-2.5)
  },
  deleteAllButton: {
    marginTop: theme.spacing(2),
    marginLeft: theme.spacing(5),
    marginBottom: theme.spacing(-5.5)
  },
  deleteAllButtonMobile: {
    marginTop: theme.spacing(-4),
    marginLeft: theme.spacing(5),
    marginBottom: theme.spacing(-5.5)
  },
  fab: {
    position: 'fixed',
    float: 'right',
    right: '16px',
    bottom: '72px'
  },
  gridContainer: {
    paddingBottom: '25vh'
  }
}));

const Transition = React.forwardRef(function Transition(props, ref) {
  // eslint-disable-next-line react/jsx-props-no-spreading
  return <Grow ref={ref} {...props} />;
});

const LibraryView = ({ newWiki }) => {
  const mediaQuery = useMediaQuery('(min-width: 1280px)');
  const classes = useStyles();
  const [allChecked, setAllChecked] = React.useState(false);
  const [wikiChecked, setWikiChecked] = React.useState(false);
  // bulk here means anything between all and none
  const [bulkChecked, setBulkChecked] = React.useState(false);
  const [wikis, setWikis] = React.useState([]);
  const [loading, setLoading] = React.useState(false);
  const [reload, setReload] = React.useState(false);
  const [openDialog, setOpenDialog] = React.useState(false);
  const [openWiki, setOpenWiki] = React.useState(false);
  const [error, setError] = React.useState(false);
  const handleCloseDialog = () => setOpenDialog(false);
  const handleOpenDialog = () => setOpenDialog(true);
  const handleOpenWiki = () => setOpenWiki(true);
  const handleCloseWiki = () => setOpenWiki(false);
  const handleCheck = event => {
    setAllChecked(event.target.checked);
    setWikiChecked(event.target.checked);
    setBulkChecked(event.target.checked);
  };
  const toggleReload = () => setReload(!reload);
  // for demonstration; api will do this for us and return new entry for insertion
  const createWiki = wiki => setWikis([...wikis, { name: wiki }]);
  React.useEffect(() => {
    // ignore resets of the prop newWiki to null
    if (newWiki) setWikis([...wikis, { name: newWiki }]);
  }, [newWiki]);
  const renameWiki = (prevTitle, newTitle) => {
    // index of renamed wiki should be maintained
    // for demonstration; api will do this for us and return changed entry
    const indexToRename = wikis.findIndex(wiki => wiki.name === prevTitle);
    const updateWikis = [...wikis];
    updateWikis[indexToRename].name = newTitle;
    setWikis(updateWikis);
  };
  const deleteWiki = title => {
    const updateWikis = [...wikis].filter(wiki => wiki.name !== title);
    setWikis(updateWikis);
  };
  const handleBulkDeletion = () => {
    const wikisNodeList = document.querySelectorAll('input[type="checkbox"][name="wiki-checkbox"]');
    const wikisArray = Array.from(wikisNodeList);
    const updateWikis = [];
    const retainedWikis = wikisArray.filter(wiki => wiki.checked === false);
    if (retainedWikis.length > 0) {
      retainedWikis.forEach(wiki => updateWikis.push({ name: wiki.value }));
      setWikis(updateWikis);
      setAllChecked(false);
      setWikiChecked(false);
      setBulkChecked(false);
    } else {
      setWikis([]);
      setAllChecked(false);
      setWikiChecked(false);
      setBulkChecked(false);
    }
    handleCloseDialog();
  };
  const bulkChecker = () => {
    const wikisNodeList = document.querySelectorAll('input[type="checkbox"][name="wiki-checkbox"]');
    const wikisArray = Array.from(wikisNodeList);
    const checkedWikis = wikisArray.filter(wiki => wiki.checked === true);
    // shows bulk delete button only
    if (checkedWikis.length > 0) {
      setBulkChecked(true);
      setAllChecked(false);
    }
    // shows bulk delete button AND selects all
    if (checkedWikis.length === wikisArray.length) {
      setAllChecked(true);
      setBulkChecked(true);
    }
    if (checkedWikis.length === 0) {
      setBulkChecked(false);
      setAllChecked(false);
    }
  };
  // for demonstration; api will do this for us and return new entry for insertion
  React.useEffect(() => {
    setLoading(true);
    getWikis().then(
      response => {
        response.json().then(
          json => {
            const fetchedWikis = json.entries;
            setWikis([...fetchedWikis]);
            setLoading(false);
          },
          err => {
            // eslint-disable-next-line no-console
            console.log('%cError:%o', 'background-color: red; color: white;', err);
            setLoading(false);
            setError(true);
          }
        );
      },
      err => {
        // eslint-disable-next-line no-console
        console.log('%cError:%o', 'background-color: red; color: white;', err);
        setLoading(false);
        setError(true);
      }
    );
  }, [reload]);
  return (
    <>
      <div className="flex sticky top-14 md:top-12 w-full h-14 items-center bg-white z-10">
        <Checkbox
          className={mediaQuery ? classes.checkbox : classes.checkboxMobile}
          checked={allChecked}
          onChange={handleCheck}
          color="secondary"
          disableRipple
          aria-label="select all items"
        />
        <div hidden={!(allChecked || bulkChecked)}>
          <Button
            className={mediaQuery ? classes.deleteAllButton : classes.deleteAllButtonMobile}
            onClick={handleOpenDialog}
            startIcon={<DeleteIcon color="secondary" />}
            arial-label="delete button"
            variant="outlined"
            color="secondary"
          >
            Delete
          </Button>
        </div>
      </div>
      {wikis.length > 0 ? (
        <Grid container className={classes.gridContainer}>
          {wikis.map(wiki => (
            <Grid item xs={12} key={wiki.name}>
              {mediaQuery ? (
                <WikiCard
                  checkedWiki={wikiChecked}
                  bulkChecker={bulkChecker}
                  deleteWikiHandler={deleteWiki}
                  openWikiHandler={handleOpenWiki}
                  renameWikiHandler={renameWiki}
                  title={wiki.name}
                />
              ) : (
                <MobileWikiCard
                  checkedWiki={wikiChecked}
                  bulkChecker={bulkChecker}
                  deleteWikiHandler={deleteWiki}
                  openWikiHandler={handleOpenWiki}
                  renameWikiHandler={renameWiki}
                  title={wiki.name}
                />
              )}
            </Grid>
          ))}
        </Grid>
      ) : (
        <>
          {/* Loading template not hidden when loading */}
          <LoadingTemplate hidden={!loading} />
          {/* Error template not hidden when not loading and there is an error */}
          <ErrorTemplate hidden={!(error && !loading)} reloadHandler={toggleReload} />
          {/* Blank templated not hidden when not loading and there no error */}
          <BlankTemplate hidden={!(!error && !loading)} />
        </>
      )}
      <Hidden only={['xl', 'lg']}>
        <CreateWikiFab className={classes.fab} variant="round" createWikiHandler={createWiki}>
          <AddOutlinedIcon />
        </CreateWikiFab>
      </Hidden>
      <Dialog open={openDialog} onClose={handleCloseDialog} aria-label="Bulk deletion">
        <DialogContent>
          <DialogContentText>Perform bulk deletion?</DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button color="secondary" onClick={handleCloseDialog}>
            Cancel
          </Button>
          <Button color="secondary" onClick={handleBulkDeletion}>
            Delete
          </Button>
        </DialogActions>
      </Dialog>
      {/** Wiki view opens here */}
      <Dialog fullScreen open={openWiki} onClose={handleCloseWiki} TransitionComponent={Transition}>
        <WikiView closeWikiHandler={handleCloseWiki} />
      </Dialog>
    </>
  );
};

LibraryView.defaultProps = {
  newWiki: null
};

LibraryView.propTypes = {
  newWiki: PropTypes.string
};

export default LibraryView;
