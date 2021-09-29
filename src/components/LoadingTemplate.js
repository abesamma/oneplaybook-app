import React from 'react';
import LinearProgress from '@material-ui/core/LinearProgress';
import makeStyles from '@material-ui/styles/makeStyles';
import LoadingIllustration from '../svg/LoadingIllustration';

const useStyles = makeStyles({
  progress: {
    width: '100%'
  }
});

const LoadingTemplate = ({ hidden = false }) => {
  const classes = useStyles();
  return (
    <div className={hidden ? 'hidden' : 'container mx-auto pt-24 w-80 md:w-96 lg:w-1/3'}>
      <LoadingIllustration />
      <p className="italic text-xl text-center text-black text-opacity-50 my-2">Loading...</p>
      <div className="flex justify-center">
        <LinearProgress className={classes.progress} color="secondary" />
      </div>
    </div>
  );
};

export default LoadingTemplate;
