import React from 'react';
import { document } from 'browser-monads';
import Footer from './Footer';
import Header from './Header';
import checkForCookie from '../utils/checkForCookie';

const cookiePresent = checkForCookie('opb-clicky-accept-status=true');

const Layout = ({ children }) => {
  const [cookieStatus, setCookieStatus] = React.useState(cookiePresent);
  const checker = event => {
    if (event.detail.cookie) {
      setCookieStatus(true);
      document.removeEventListener('opb-cookie-set', checker);
    }
  };
  document.addEventListener('opb-cookie-set', checker);
  return (
    <>
      <div id="top">
        <Header />
        <main className="text-gray-900">{children}</main>
        <Footer />
      </div>
      {cookieStatus && <script id="clicky" />}
    </>
  );
};

export default Layout;
