/* eslint-disable no-alert */
import React from 'react';
import PropTypes from 'prop-types';
import Hidden from '@material-ui/core/Hidden';
import TopNavigation from './TopNavigation';
import ViewContainer from './ViewContainer';
import BottomNavigation from './BottomNavigation';
import ViewItems from './Views/ViewItems';

const App = ({ appExitHandler }) => {
  const [drawerOpen, setDrawerOpen] = React.useState(true);
  const [view, setView] = React.useState('Library');
  const [newWiki, addNewWiki] = React.useState('');
  const createWiki = title => {
    addNewWiki(title);
    /** a hack to reset prop 'newWiki' fed into LibraryView
     * so that consecutive title repetitions can still be created
     *  */
    setTimeout(() => addNewWiki(null), 500);
  };
  const viewSelectionHandler = event => setView(event.currentTarget.id);
  return (
    <>
      <TopNavigation
        viewHandler={viewSelectionHandler}
        appExitHandler={appExitHandler}
        drawerOpenHandler={setDrawerOpen}
        createWikiHandler={createWiki}
      />
      <ViewContainer
        newWiki={newWiki}
        views={ViewItems}
        activeView={view}
        drawerOpen={drawerOpen}
      />
      <Hidden only={['xl', 'lg']}>
        <BottomNavigation viewHandler={viewSelectionHandler} />
      </Hidden>
    </>
  );
};

App.propTypes = {
  appExitHandler: PropTypes.func.isRequired
};

export default App;
