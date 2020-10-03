import React from 'react';

const Card = ({ className, icon, children }) => (
  <div
    className={`p-12 rounded-lg border border-solid border-gray-200 ${className}`}
    style={{
      boxShadow: '0 10px 28px rgba(0,0,0,.08)'
    }}
  >
    {icon ? <div className="flex justify-center p-10">{icon}</div> : <div />}
    {children}
  </div>
);

export default Card;
