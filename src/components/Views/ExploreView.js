import React from 'react';
import ConstructionIllustration from '../../svg/ConstructionIllustration';

const ExploreView = () => {
  return (
    <>
      <div className="container mx-auto pt-24 w-80 px-4 md:w-96 lg:w-1/3">
        <ConstructionIllustration />
      </div>
      <p className="italic text-xl text-center text-black text-opacity-50 mt-1 px-2">
        Explore the Tiddlyverse. Coming soon!
      </p>
    </>
  );
};

export default ExploreView;
