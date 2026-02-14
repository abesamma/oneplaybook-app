/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */
import React from 'react';
import { makeStyles } from '@mui/styles';
import Typography from '@mui/material/Typography';
import FormGroup from '@mui/material/FormGroup';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormHelperText from '@mui/material/FormHelperText';
import Checkbox from '@mui/material/Checkbox';
import TextField from '@mui/material/TextField';
import FormErrorContext from '../FormErrorContext';

const useStyles = makeStyles(() => ({
  root: {
    '& .MuiInput-underline::after': {
      borderBottom: '2px solid #dd2476'
    },
    '& .MuiFormLabel-root.Mui-focused': {
      color: '#dd2476'
    },
    '& .Mui-checked': {
      color: '#dd2476'
    }
  }
}));

const ContactForm = () => {
  const classes = useStyles();
  const [state, setState] = React.useState({
    email: '',
    consentEmail: false,
    consentFollowup: false,
    consentNewsletter: false
  });
  const error = React.useContext(FormErrorContext);
  const handleChange = event => {
    setState({ ...state, [event.target.id]: event.target.value });
  };
  const handleChecked = event => {
    setState({ ...state, [event.target.id]: event.target.checked });
  };
  return (
    <>
      <Typography variant="h5" gutterBottom>
        How would you like to be contacted?
      </Typography>
      <Typography variant="subtitle2" gutterBottom>
        Thanks for joining our tester community! You will be notified via email when Neublio is
        ready for you to try out. Please enter a valid email address below:
      </Typography>
      <form
        id="form-2"
        className={classes.root}
        method="POST"
        action="https://script.google.com/macros/s/AKfycbyLXGHjsokiwlMFXb6UGTMOL3jdrCIrxIT5xAoj9W04WdAeujxkxe7WyugGdAkvHmmz/exec"
        noValidate
        autoComplete="off"
      >
        <FormGroup className="px-3">
          <TextField
            id="email"
            name="email"
            type="email"
            label="Enter email address"
            onChange={handleChange}
            fullWidth
            error={error.email}
            helperText={error.email ? 'Please enter a valid email address' : ''}
            required
          />
          <FormControl error={error.consentEmail}>
            <FormControlLabel
              control={
                <Checkbox
                  checked={state.consentEmail}
                  id="consentEmail"
                  inputProps={{ name: 'consentEmail' }}
                  onChange={handleChecked}
                  value="consented-to-email"
                  size="small"
                  required
                />
              }
              label="Yes, I would like to be notified via this email address (required)"
            />
            {error.consentEmail ? (
              <FormHelperText>Consent is required to proceed</FormHelperText>
            ) : null}
          </FormControl>
          <FormControlLabel
            control={
              <Checkbox
                checked={state.consentFollowup}
                id="consentFollowup"
                inputProps={{ name: 'consentFollowup' }}
                onChange={handleChecked}
                value="consented-to-followup"
                size="small"
              />
            }
            label="Yes, you may follow up on my experience during testing (optional)"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={state.consentNewsletter}
                id="consentNewsletter"
                inputProps={{ name: 'consentNewsletter' }}
                onChange={handleChecked}
                value="consented-to-newsletter"
                size="small"
              />
            }
            label="Yes, I would like to receive user tips via email (optional perk 🎁)"
          />
        </FormGroup>
        <TextField style={{ display: 'none' }} id="honeypot" name="honeypot" />
      </form>
      <Typography variant="caption" gutterBottom>
        All data submitted will be treated according to rules stipulated by the European
        Union&apos;s GDPR as outlined in this website&apos;s{' '}
        <a href="/privacy" target="_blank" rel="noopener noreferrer">
          privacy policy page
        </a>
        .
      </Typography>
    </>
  );
};

export default ContactForm;
