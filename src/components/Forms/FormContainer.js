/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */
/* eslint-disable react/forbid-prop-types */
import React from 'react';
import { withStyles } from '@mui/styles';
import PropTypes from 'prop-types';

const styles = {
  root: {
    minHeight: '350px',
    maxHeight: '350px',
    overflow: 'auto',
    width: '100%',
    paddingTop: '20px',
    paddingBottom: '40px'
  }
};

const FormContainer = ({ classes, steps, activeIndex }) => {
  const { root = '' } = classes || {};
  return (
    <>
      {steps.map((step, index) => (
        <div
          key={step[0]}
          style={activeIndex === index ? { display: 'block' } : { display: 'none' }}
          className={root}
        >
          {step[1]}
        </div>
      ))}
    </>
  );
};

FormContainer.defaultProps = {
  classes: { root: '' },
  activeIndex: 0
};

FormContainer.propTypes = {
  classes: PropTypes.shape({
    root: PropTypes.string
  }),
  activeIndex: PropTypes.number,
  steps: PropTypes.array.isRequired
};

export default withStyles(styles)(FormContainer);
