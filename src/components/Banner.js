/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';

const Banner = (props) => {
  return (
    <>
      <div
        style={{
          boxShadow: '0 10px 28px rgba(0,0,0,.3)'
        }}
        {...props}
      >
        {props.children}
      </div>
    </>
  );
};

export default Banner;
