/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */
import React from 'react';
import Footer from './Footer';
import Header from './Header';
import CookieBanner from '../CookieBanner';

const Layout = ({ children }) => {
  return (
    <>
      <div id="top">
        <Header />
        <main className="text-gray-900">{children}</main>
        <Footer />
      </div>
      <CookieBanner />
    </>
  );
};

export default Layout;
