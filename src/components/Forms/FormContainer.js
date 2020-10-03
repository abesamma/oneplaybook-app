/* eslint-disable react/forbid-prop-types */
import React from 'react';
import { withStyles } from '@material-ui/core/styles';
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
  return (
    <>
      {steps.map((step, index) => (
        <div
          key={step[0]}
          style={activeIndex === index ? { display: 'block' } : { display: 'none' }}
          className={classes.root}
        >
          {step[1]}
        </div>
      ))}
    </>
  );
};

FormContainer.defaultProps = {
  classes: { root: {} },
  activeIndex: 0
};

FormContainer.propTypes = {
  classes: PropTypes.object,
  activeIndex: PropTypes.number,
  steps: PropTypes.array.isRequired
};

export default withStyles(styles)(FormContainer);
