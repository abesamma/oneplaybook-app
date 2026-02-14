import React from 'react';
import svg from '../../assets/github.svg';

const Github = ({ className, linkTo }) => (
  <a
    title="Check me out at Github"
    className={className}
    href={linkTo}
    target="_blank"
    rel="noopener noreferrer"
  >
    <img className="w-5" src={svg} alt="Github profile" />
  </a>
);

export default Github;
