import React from 'react';
import Footer from './Footer';
import Header from './Header';
import CookieBanner from '../CookieBanner';

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main className="text-gray-900">{children}</main>
      <Footer />
      <CookieBanner />
    </>
  );
};

export default Layout;
