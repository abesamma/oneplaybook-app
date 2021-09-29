/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import { useMediaQuery } from '@material-ui/core';

const ViewContainer = ({ views, activeView, drawerOpen, newWiki }) => {
  const mediaQuery = useMediaQuery('(min-width: 1280px)');
  const filteredView = views.filter(view => view[0] === activeView);
  const paddingLeftView = mediaQuery ? '15vw' : '';
  const paddingLeftMobileView = mediaQuery ? '5vw' : '';
  return (
    <>
      {filteredView.map(view => (
        <div
          style={
            drawerOpen ? { paddingLeft: paddingLeftView } : { paddingLeft: paddingLeftMobileView }
          }
          key={view[0]}
        >
          {view[0] === 'Library' ? React.cloneElement(view[1], { newWiki }) : view[1]}
        </div>
      ))}
    </>
  );
};

ViewContainer.defaultProps = {
  newWiki: null
};

ViewContainer.propTypes = {
  newWiki: PropTypes.string,
  views: PropTypes.array.isRequired,
  activeView: PropTypes.string.isRequired,
  drawerOpen: PropTypes.bool.isRequired
};

export default ViewContainer;
