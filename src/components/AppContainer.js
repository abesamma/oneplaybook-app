/* eslint-disable no-alert */
import React from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { document } from 'browser-monads';
import StepperContainer from './StepperContainer';
import FormContainer from './Forms/FormContainer';
import FormErrorContext from './FormErrorContext';
import steps from './Steps';

const AppContainer = ({ className, controls }) => {
  const formOne = document.forms['form-1'];
  const formTwo = document.forms['form-2'];
  const honeypot = document.getElementById('honeypot');
  const mediaQuery = useMediaQuery('(min-width: 768px)');
  const [activeIndex, setActiveIndex] = React.useState(0);
  const [loading, setLoading] = React.useState(false);
  const [formError, setFormError] = React.useState({
    profession: false,
    teamType: false,
    teamHeadCount: false,
    project: false,
    softwareCount: false,
    problem: false,
    email: false,
    consentEmail: false
  });
  const incrementIndex = () => setActiveIndex(activeIndex + 1);
  const decrementIndex = () => setActiveIndex(activeIndex - 1);
  // submits form one and two data all at once
  const submitFormTwo = formOneData => {
    // prepare form 2 data
    const formTwoData = new FormData(formTwo);
    // handler to prevent default behavior on submit
    const handleFormTwoSubmission = event => {
      event.preventDefault();
      // eslint-disable-next-line no-restricted-syntax
      for (const entry of formOneData) {
        // append form 1 data to form 2
        formTwoData.set(entry[0], entry[1]);
      }
      // actual submission to google sheets
      const request = new XMLHttpRequest();
      request.open('POST', formTwo.action);
      request.send(formTwoData);
      // remove listener to prevent duplication of submits
      formTwo.removeEventListener('submit', handleFormTwoSubmission);
    };
    // fire it all up!
    formTwo.addEventListener('submit', handleFormTwoSubmission);
    formTwo.requestSubmit();
  };
  // begins submission process starting with form 1
  const submitForms = () => {
    // prepare form 1 data
    const formOneData = new FormData(formOne);
    // handler to prevent default behavior on submit
    const handleFormOneSubmission = event => {
      event.preventDefault();
      submitFormTwo(formOneData);
      // remove listener to prevent duplication of event handlings
      formOne.removeEventListener('submit', handleFormOneSubmission);
    };
    // fire it up!
    formOne.addEventListener('submit', handleFormOneSubmission);
    formOne.requestSubmit();
  };
  // validates input and prompts form errors
  const checkFormThenIncrement = () => {
    let isFilled = true;
    const unfilledItems = {};
    if (activeIndex === 1) {
      document
        .getElementById('form-1')
        .querySelectorAll('[required]')
        .forEach(i => {
          if (!i.value) {
            const elementId = i.id;
            isFilled = false;
            unfilledItems[elementId] = true;
          }
        });
    }
    if (activeIndex === 2) {
      document
        .getElementById('form-2')
        .querySelectorAll('[required]')
        .forEach(i => {
          if (i.type === 'email' && (!i.value || i.validity.typeMismatch)) {
            const elementId = i.id;
            isFilled = false;
            unfilledItems[elementId] = true;
          }
          if (i.type === 'checkbox' && !i.checked) {
            const elementId = i.id;
            isFilled = false;
            unfilledItems[elementId] = true;
          }
        });
    }
    setFormError({ ...(formError && unfilledItems) });
    if (isFilled) {
      const keys = Object.keys(formError);
      keys.forEach(key => {
        unfilledItems[key] = false;
      });
      setFormError(unfilledItems);
      if (!honeypot.value && activeIndex === 2) {
        const submit = new Promise(resolve => {
          setLoading(true);
          resolve();
        });
        submit
          .then(submitForms)
          .then(() => setLoading(false))
          .finally(incrementIndex);
      }
      incrementIndex();
    }
  };
  return (
    <Paper className={className} elevation={5}>
      <Grid container spacing={0}>
        <Grid item xs={12} sm={6}>
          {mediaQuery ? (
            <div
              className="rounded-l-lg flex justify-center bg-pink-100"
              style={{ width: 'inherit', minHeight: '450px' }}
              elevation={2}
            >
              <StepperContainer activeIndex={activeIndex} steps={steps} />
            </div>
          ) : (
            <div className="rounded-t-lg flex justify-center bg-pink-100" elevation={2}>
              <StepperContainer activeIndex={activeIndex} steps={steps} />
            </div>
          )}
        </Grid>
        <Grid item xs={12} sm={6}>
          <div className="flex-col justify-center items-center pl-6 pr-6" elevation={2}>
            <FormErrorContext.Provider value={formError}>
              <FormContainer activeIndex={activeIndex} steps={steps} />
            </FormErrorContext.Provider>
            <div className="flex justify-between pt-4 pb-4">
              <button
                type="button"
                disabled={loading || activeIndex === 3}
                onClick={decrementIndex}
                className={
                  activeIndex > 0
                    ? 'visible primary-text-bg font-body font-bold text-sm py-3 px-8 rounded text-white'
                    : 'invisible primary-text-bg font-body font-bold text-sm py-3 px-8 rounded text-white'
                }
              >
                Back
              </button>
              {activeIndex === steps.length - 1 ? (
                <button
                  type="button"
                  onClick={controls} // method to close app
                  className="visible primary font-body font-bold py-3 px-8 rounded text-white"
                >
                  Finish
                </button>
              ) : (
                <>
                  <button
                    type="button"
                    disabled={loading}
                    onClick={checkFormThenIncrement}
                    className="visible primary font-body font-bold py-3 px-8 rounded text-white"
                  >
                    {activeIndex === 2 ? 'Submit' : 'Next'}
                  </button>
                </>
              )}
            </div>
          </div>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default AppContainer;
