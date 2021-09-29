import React from 'react';
import logo from '../assets/Logo_descriptive_grey_font_stretched_plain_svg.svg';

const LogoIcon = ({ className }) => (
  <div className={`flex ${className}`}>
    <img src={logo} alt="one play book logo" />
  </div>
);

export default LogoIcon;
