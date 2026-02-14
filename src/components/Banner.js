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
