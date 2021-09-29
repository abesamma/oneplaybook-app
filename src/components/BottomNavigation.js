import React from 'react';
import BottomNavigationBar from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import makeStyles from '@material-ui/styles/makeStyles';
import menuItems from './MenuItems';

const useStyles = makeStyles({
  bottomNavBarRoot: {
    position: 'fixed',
    bottom: 0,
    width: '100vw'
  },
  bottomNavActionRoot: {
    maxWidth: 'inherit'
  },
  selected: {
    color: '#110011'
  }
});

const BottomNavigation = ({ viewHandler }) => {
  const classes = useStyles();
  const [value, setValue] = React.useState('Library');
  const [selectedStyle, setSelectedStyle] = React.useState({ library: classes.selected });
  const handleChange = (event, newValue) => {
    const elementValue = newValue.toLowerCase();
    setValue(newValue);
    setSelectedStyle({ [elementValue]: classes.selected });
  };
  return (
    <BottomNavigationBar
      value={value}
      className={classes.bottomNavBarRoot}
      onChange={handleChange}
      showLabels
    >
      {menuItems.map(item => {
        const elementValue = item[0].toLowerCase();
        return (
          <BottomNavigationAction
            key={item[0]}
            id={item[0]}
            value={item[0]}
            className={classes.bottomNavActionRoot}
            classes={{ wrapper: selectedStyle[elementValue] }}
            label={item[0]}
            icon={item[1]}
            onClick={viewHandler}
          />
        );
      })}
    </BottomNavigationBar>
  );
};

export default BottomNavigation;
