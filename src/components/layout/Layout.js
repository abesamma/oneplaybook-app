import React from 'react';
import Footer from './Footer';
import Header from './Header';
import CookieBanner from '../CookieBanner';

const Layout = ({ children }) => {
  return (
    <>
      {/** Just incase iOS webkit misbehaves and expands it all the way down the screen.
       * Remove if proven unnecessary */}
      <div style={{ maxHeight: 22.5 }} id="top">
        <Header />
        <main className="text-gray-900">{children}</main>
        <Footer />
      </div>
      <CookieBanner />
    </>
  );
};

export default Layout;
