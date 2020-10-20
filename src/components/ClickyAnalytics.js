import React from 'react';

const ClickyAnalytics = () => {
  return (
    <>
      <script src="../scripts/clicky-split-test-script.js" crossorigin="anonymous" />
      <script>var clicky_site_ids = clicky_site_ids || []; clicky_site_ids.push(101280810);</script>
      <script async src="//static.getclicky.com/js" crossorigin="anonymous" />
      <noscript>
        <p>
          <img alt="Clicky" width="1" height="1" src="//in.getclicky.com/101280810ns.gif" />
        </p>
      </noscript>
    </>
  );
};

export default ClickyAnalytics;
