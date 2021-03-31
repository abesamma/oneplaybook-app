import React from 'react';

const ClickyAnalytics = () => {
  return (
    <>
      <script>var clicky_site_ids = clicky_site_ids || []; clicky_site_ids.push(101280810);</script>
      <script async src="https://static.getclicky.com/js" crossOrigin="anonymous" />
      <noscript>
        <p>
          <img
            alt="Clicky"
            width="1"
            height="1"
            src="//in.getclicky.com/101280810ns.gif"
            crossOrigin="anonymous"
          />
        </p>
      </noscript>
    </>
  );
};

export default ClickyAnalytics;
