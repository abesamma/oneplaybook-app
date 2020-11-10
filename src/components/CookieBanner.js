import React from 'react';
import { document } from 'browser-monads';
import Banner from './Banner';
import Button from './Button';
import ClickyAnalytics from './ClickyAnalytics';

const checkForCookie = () =>
  document.cookie.split(';').some(item => item.includes('opb-clicky-accept-status'));

const setCookie = (cookie = '') => {
  document.cookie = cookie;
};

const cookiePresent = checkForCookie();

const CookieBanner = () => {
  const [cookieBannerState, setCookieBannerState] = React.useState({
    expand: false,
    dismiss: false
  });
  const [acceptCookieState, setAcceptCookieState] = React.useState(false);
  // eslint-disable-next-line consistent-return
  React.useEffect(() => {
    if (acceptCookieState && cookieBannerState.dismiss)
      return setCookie('opb-clicky-accept-status=true;domain=oneplaybook.app;samesite=lax');
    if (!acceptCookieState && cookieBannerState.dismiss)
      return setCookie('opb-clicky-accept-status=true;domain=oneplaybook.app;samesite=lax');
  }, [acceptCookieState, cookieBannerState]);
  const acceptCookie = () => {
    setCookieBannerState({ ...(cookieBannerState && { dismiss: true }) });
    setAcceptCookieState(true);
  };
  const dismissBanner = () => {
    setCookieBannerState({ ...(cookieBannerState && { dismiss: true }) });
    setAcceptCookieState(true);
  };
  const expandBanner = () => setCookieBannerState({ ...(cookieBannerState && { expand: true }) });
  const shrinkBanner = () => setCookieBannerState({ ...(cookieBannerState && { expand: false }) });
  const rejectCookie = () => {
    setCookieBannerState({ ...(cookieBannerState && { dismiss: true }) });
    setAcceptCookieState(false);
  };
  return (
    <>
      {cookiePresent ? null : <Banner
        className={
          cookieBannerState.dismiss === true
            ? 'hidden'
            : 'fixed bottom-0 mb-12 p-4 bg-white h-auto w-full rounded lg:w-1/2 lg:ml-8'
        }
      >
        <div className="flex justify-between">
          <p className="text-lg font-semibold mr-2 lg:text-xl">
            <span role="img" aria-label="Cookie banner">
              🍪
            </span>{' '}
            Cookie Notice
          </p>
          <div className="flex">
            <button
              title="Minimize"
              type="button"
              className={cookieBannerState.expand ? 'flex px-2 mx-1' : 'hidden'}
              onClick={shrinkBanner}
            >
              <span className="text-xl" role="img" aria-label="Minimize banner">
                🔻
              </span>
            </button>
            <button
              title="Maximize"
              type="button"
              className={!cookieBannerState.expand ? 'flex px-2 mx-1' : 'hidden'}
              onClick={expandBanner}
            >
              <span className="text-xl" role="img" aria-label="Maximize banner">
                🔺
              </span>
            </button>
            <button title="Close" type="button" className="flex px-2 mx-1" onClick={dismissBanner}>
              <span className="text-xl" role="img" aria-label="Close cookie banner">
                ❌
              </span>
            </button>
          </div>
        </div>
        <div className={!cookieBannerState.expand ? 'hidden' : ''}>
          <p className="my-4">
            Oneplaybook uses &apos;cookies&apos;, which are used to store information to optimize
            the users&apos; experience by customizing our web page content content based on
            visitors&apos; browser type and/or other information.{' '}
            <a href="/privacy" target="_blank">
              Learn more.
            </a>
          </p>
          <div className="flex flex-col lg:flex-row justify-end">
            <Button
              className="primary-text-bg font-body font-bold text-sm my-4 lg:mx-4"
              onClick={rejectCookie}
            >
              Reject
            </Button>
            <Button
              className="primary-text-bg font-body font-bold text-sm my-4 lg:mx-4"
              onClick={acceptCookie}
            >
              Accept
            </Button>
          </div>
        </div>
      </Banner>}
      {cookiePresent && <ClickyAnalytics />}
    </>
  );
};

export default CookieBanner;
