import React from 'react';
import svg from '../../assets/linkedin.svg';

const LinkedIn = ({ className, linkTo }) => (
  <a
    title="Connect with me on LinkedIn"
    className={className}
    href={linkTo}
    target="_blank"
    rel="noopener noreferrer"
  >
    <img className="w-5" src={svg} alt="Linkedin profile" />
  </a>
);

export default LinkedIn;
