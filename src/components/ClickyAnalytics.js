/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */
import React from 'react';

const ClickyAnalytics = () => {
  return (
    <>
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
