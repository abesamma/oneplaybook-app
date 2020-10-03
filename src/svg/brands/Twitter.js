import React from 'react';
import svg from '../../assets/twitter.svg';

const Twitter = ({ className, linkTo }) => (
  <a
    title="Follow me on Twitter"
    className={className}
    href={linkTo}
    target="_blank"
    rel="noopener noreferrer"
  >
    <img className="w-5" src={svg} alt="Twitter profile" />
  </a>
);

export default Twitter;
