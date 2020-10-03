import React from 'react';
import Footer from './Footer';
import Header from './Header';

const Layout = ({ children }) => {
  return (
    <div id="top">
      <Header />
      <main className="text-gray-900">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
