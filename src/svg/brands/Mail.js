import React from 'react';
import Typography from '@material-ui/core/Typography';
import svg from '../../assets/gmail.svg';

const Mail = ({ className, linkTo }) => (
  <a title="Email me" className={className} href={linkTo} target="_blank" rel="noopener noreferrer">
    <img className="w-5" src={svg} alt="Send email" />
  </a>
);

export default Mail;
