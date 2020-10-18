import React from 'react';

const ClickyAnalytics = () => {
  return (
    <>
      <script>
        var clicky_custom = clicky_custom || {}; clicky_custom.split = { name: 'landing page main branch', version: 'v0.9.0' };
      </script>
      <script>var clicky_site_ids = clicky_site_ids || []; clicky_site_ids.push(101280810);</script>
      <script async src="//static.getclicky.com/js" />
      <noscript>
        <p>
          <img alt="Clicky" width="1" height="1" src="//in.getclicky.com/101280810ns.gif" />
        </p>
      </noscript>
    </>
  );
};

export default ClickyAnalytics;
