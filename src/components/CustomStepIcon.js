/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */
import React from 'react';
import clsx from 'clsx';
import Check from '@mui/icons-material/Check';
import { withStyles } from '@mui/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

const StepIcon = ({ active, completed, classes }) => {
  const mediaQuery = useMediaQuery('(min-width: 768px)');
  if (mediaQuery) {
    return (
      <div className={clsx(classes.rootVertical, { [classes.active]: active })}>
        {completed ? <Check className={classes.completed} /> : <div className={classes.circle} />}
      </div>
    );
  }
  return (
    <div className={clsx(classes.rootHorizontal, { [classes.active]: active })}>
      {completed ? <Check className={classes.completed} /> : <div className={classes.circle} />}
    </div>
  );
};

const CustomStepIcon = withStyles({
  rootVertical: {
    color: '#eaeaf0',
    display: 'flex',
    height: 22,
    width: 26,
    justifyContent: 'center',
    marginTop: '5px'
  },
  rootHorizontal: {
    color: '#eaeaf0',
    display: 'flex',
    height: 22,
    width: 26,
    justifyContent: 'center',
    alignItems: 'center'
  },
  circle: {
    width: 10,
    height: 10,
    borderRadius: '50%',
    backgroundColor: 'currentColor'
  },
  active: {
    color: '#DD2476'
  },
  completed: {
    color: '#DD2476',
    zIndex: 1,
    fontSize: 18
  }
})(StepIcon);

export default CustomStepIcon;
