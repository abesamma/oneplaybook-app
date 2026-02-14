/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */
/* eslint-disable react/no-array-index-key */
import React from 'react';
import { makeStyles } from '@mui/styles';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import options from '../../data/registration-options';
import FormErrorContext from '../FormErrorContext';

const useStyles = makeStyles(() => ({
  root: {
    '& .MuiTypography-root': {
      lineHeight: '55px'
    },
    '& .MuiTextField-root': {
      top: '9.5px'
    },
    '& .MuiTextField-root select#problem': {
      width: '250px'
    },
    '& .MuiTextField-root input#softwareCount': {
      width: '50px'
    },
    '& .MuiInput-underline::after': {
      borderBottom: '2px solid #dd2476'
    }
  }
}));

const TesterRegistration = () => {
  const classes = useStyles();
  const [state, setState] = React.useState({
    profession: '',
    teamType: '',
    teamHeadCount: '',
    project: '',
    softwareCount: 1,
    problem: '',
    more: ''
  });
  const error = React.useContext(FormErrorContext);
  const handleChange = event => {
    setState({ ...state, [event.target.id]: event.target.value });
  };
  return (
    <>
      <Typography variant="h5" gutterBottom>
        What about you?
      </Typography>
      <Typography variant="body2">
        Please describe yourself so that your Neublio experience can be tailored to your
        particular background and needs.
      </Typography>
      <form
        id="form-1"
        className={classes.root}
        method="POST"
        action="https://script.google.com/macros/s/AKfycbyLXGHjsokiwlMFXb6UGTMOL3jdrCIrxIT5xAoj9W04WdAeujxkxe7WyugGdAkvHmmz/exec"
        noValidate
        autoComplete="off"
      >
        <div>
          <Typography variant="inherit" gutterBottom>
            I am a{' '}
            <TextField
              id="profession"
              name="profession"
              select
              size="small"
              SelectProps={{ native: true }}
              value={state.profession}
              error={error.profession}
              helperText={error.profession ? 'Profession required' : ''}
              required
              onChange={handleChange}
            >
              {options.profession.map((professionItem, index) => (
                <option key={index}>{professionItem}</option>
              ))}
            </TextField>{' '}
            on a{' '}
            <TextField
              id="teamType"
              name="teamType"
              select
              size="small"
              SelectProps={{ native: true }}
              value={state.teamType}
              error={error.teamType}
              helperText={error.teamType ? 'Team type required' : ''}
              required
              onChange={handleChange}
            >
              {options.teamType.map((type, index) => (
                <option key={index}>{type}</option>
              ))}
            </TextField>{' '}
            team of{' '}
            <TextField
              id="teamHeadCount"
              name="teamHeadCount"
              select
              size="small"
              SelectProps={{ native: true }}
              value={state.teamHeadCount}
              error={error.teamHeadCount}
              helperText={error.teamHeadCount ? 'Team size required' : ''}
              required
              onChange={handleChange}
            >
              {options.teamCount.map((number, index) => (
                <option key={index}>{number}</option>
              ))}
            </TextField>
            . Our{' '}
            <TextField
              id="project"
              name="project"
              select
              size="small"
              SelectProps={{ native: true }}
              value={state.project}
              error={error.project}
              helperText={error.project ? 'Project type required' : ''}
              required
              onChange={handleChange}
            >
              {options.project.map((projectItem, index) => (
                <option key={index}>{projectItem}</option>
              ))}
            </TextField>{' '}
            project currently uses{' '}
            <TextField
              id="softwareCount"
              name="softwareCount"
              type="number"
              size="small"
              inputProps={{
                min: 0
              }}
              value={state.softwareCount}
              error={error.softwareCount}
              helperText={error.softwareCount ? 'Apps used required' : ''}
              required
              onChange={handleChange}
            />{' '}
            software services to manage daily operations. I am interested in trying out Neublio
            to solve my/our{' '}
            <TextField
              id="problem"
              name="problem"
              select
              size="small"
              SelectProps={{ native: true }}
              value={state.problem}
              error={error.problem}
              helperText={error.problem ? 'Problem type required' : ''}
              required
              onChange={handleChange}
            >
              {options.problem.map((problemItem, index) => (
                <option key={index}>{problemItem}</option>
              ))}
            </TextField>
            problem.
          </Typography>
        </div>
        <div className="w-full mt-1">
          Anything else?
          <TextField
            id="more"
            name="more"
            className="w-full"
            placeholder="Type here"
            multiline
            value={state.more}
            onChange={handleChange}
          />
        </div>
      </form>
    </>
  );
};

export default TesterRegistration;
