import React from 'react';
import PropTypes from 'prop-types';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItemAvatar';
import makeStyles from '@material-ui/styles/makeStyles';
import loginButtons from './LoginButtons';
import CloudAccess from './CloudAccess';

const useStyles = makeStyles({
  list: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  listItem: {
    margin: '10px'
  }
});

const LoginList = ({ loginHandler }) => {
  const classes = useStyles();
  const cloud = React.useContext(CloudAccess);
  return (
    <List className={classes.list}>
      {loginButtons.map(([key, component]) => (
        <ListItem className={classes.listItem} key={key}>
          {React.cloneElement(component, {
            onClick: () => {
              loginHandler(key, cloud);
            }
          })}
        </ListItem>
      ))}
    </List>
  );
};

LoginList.defaultProps = {
  loginHandler: () => {}
};

LoginList.propTypes = {
  loginHandler: PropTypes.func
};

export default LoginList;
