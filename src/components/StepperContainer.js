/* eslint-disable react/forbid-prop-types */
import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';
import CustomConnector from './CustomConnector';
import CustomStepIcon from './CustomStepIcon';

const stepperStyles = {
  rootVertical: {
    height: 'inherit',
    backgroundColor: 'inherit'
  },
  rootHorizontal: {
    height: 'inherit',
    width: '99%', // 100% obliterates the top rounded corners
    backgroundColor: 'inherit'
  }
};

const StepperContainer = ({ classes, steps, activeIndex }) => {
  const mediaQuery = useMediaQuery('(min-width: 768px)');
  return (
    <>
      <Stepper
        className={mediaQuery ? classes.rootVertical : classes.rootHorizontal}
        activeStep={activeIndex}
        orientation={mediaQuery ? 'vertical' : 'horizontal'}
        alternativeLabel={!mediaQuery}
        connector={<CustomConnector />}
      >
        {steps.map(step => {
          return (
            <Step key={step[0]}>
              <StepLabel StepIconComponent={CustomStepIcon}>
                <Typography
                  style={mediaQuery ? { marginBottom: '5px' } : { marginTop: '-20px' }}
                  variant={mediaQuery ? 'body1' : 'caption'}
                  display="block"
                >
                  {step[0]}
                </Typography>
              </StepLabel>
            </Step>
          );
        })}
      </Stepper>
    </>
  );
};

StepperContainer.defaultProps = {
  activeIndex: 0,
  classes: { rootVertical: {}, rootHorizontal: {} }
};

StepperContainer.propTypes = {
  activeIndex: PropTypes.number,
  classes: PropTypes.object,
  steps: PropTypes.array.isRequired
};

export default withStyles(stepperStyles)(StepperContainer);
