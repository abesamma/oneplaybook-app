import React from 'react';
import BlankIllustration from '../svg/BlankCanvasIllustration';

const BlankTemplate = ({ hidden = false }) => {
  return (
    <div className={hidden ? 'hidden' : 'container mx-auto pt-24 w-80 md:w-96 lg:w-1/3'}>
      <BlankIllustration />
      <p className="italic text-xl text-center text-black text-opacity-50">
        &ldquo;A blank canvas brings new possibilities&rdquo;
      </p>
    </div>
  );
};

export default BlankTemplate;
