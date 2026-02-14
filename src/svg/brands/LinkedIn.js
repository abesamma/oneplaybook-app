/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */
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
