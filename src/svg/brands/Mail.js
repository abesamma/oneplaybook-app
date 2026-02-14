/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */
import React from 'react';
import Typography from '@mui/material/Typography';
import svg from '../../assets/gmail.svg';

const Mail = ({ className, linkTo }) => (
  <a title="Email me" className={className} href={linkTo} target="_blank" rel="noopener noreferrer">
    <img className="w-5" src={svg} alt="Send email" />
  </a>
);

export default Mail;
