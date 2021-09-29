import React from 'react';
import Button from '@material-ui/core/Button';
import ErrorIllustration from '../svg/ErrorIllustration';

const ErrorTemplate = ({ hidden = false, reloadHandler }) => {
  return (
    <div className={hidden ? 'hidden' : 'container mx-auto pt-24 w-60 md:w-70'}>
      <ErrorIllustration />
      <p className="italic text-xl text-center text-black text-opacity-50 my-2">
        &ldquo;The abyss stares back.&rdquo; Something went wrong.
      </p>
      <div className="flex justify-center">
        <Button color="secondary" variant="outlined" onClick={reloadHandler}>
          Try again
        </Button>
      </div>
    </div>
  );
};

export default ErrorTemplate;
