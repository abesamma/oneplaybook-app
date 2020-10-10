import React from 'react';
import { document } from 'browser-monads';
import Footer from './Footer';
import Header from './Header';
import ClickyAnalytics from '../ClickyAnalytics';

const checkForCookie = () =>
  document.cookie.split(';').some(item => item.includes('opb-clicky-accept-status=true')); // check if set true

const result = checkForCookie();

const Layout = ({ children }) => {
  const [cookieStatus, setCookieStatus] = React.useState(result);
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
      {cookieStatus === true ? <ClickyAnalytics /> : <div />}
    </>
  );
};

export default Layout;
