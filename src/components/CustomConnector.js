/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */
import { withStyles } from '@mui/styles';
import StepConnector from '@mui/material/StepConnector';

const CustomConnector = withStyles({
  lineVertical: { height: '100%', width: 2 },
  lineHorizontal: { width: '100%', height: 2 },
  active: {
    '& $line': {
      backgroundImage: 'linear-gradient( 180deg, #DD2476, #FF512F)'
    }
  },
  completed: {
    '& $line': {
      backgroundImage: 'linear-gradient( 180deg, #DD2476, #FF512F)'
    }
  },
  line: {
    backgroundColor: '#eaeaf0',
    border: 0
  }
})(StepConnector);

export default CustomConnector;
