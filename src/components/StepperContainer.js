/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */
/* eslint-disable react/forbid-prop-types */
import React from 'react';
import { withStyles } from '@mui/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Typography from '@mui/material/Typography';
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
    backgroundColor: 'inherit',
    // makes sure the stepper is centered in its container on smaller screens
    alignItems: 'center'
  }
};

const StepperContainer = ({ classes, steps, activeIndex }) => {
  const mediaQuery = useMediaQuery('(min-width: 768px)');
  const { rootVertical = '', rootHorizontal = '' } = classes || {};
  return (
    <>
      <Stepper
        className={mediaQuery ? rootVertical : rootHorizontal}
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
  activeIndex: 0
};

StepperContainer.propTypes = {
  activeIndex: PropTypes.number,
  classes: PropTypes.shape({
    rootVertical: PropTypes.string,
    rootHorizontal: PropTypes.string
  }),
  steps: PropTypes.array.isRequired
};

export default withStyles(stepperStyles)(StepperContainer);
