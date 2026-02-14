import { withStyles } from '@material-ui/core/styles';
import StepConnector from '@material-ui/core/StepConnector';

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
