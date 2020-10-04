import { document } from 'browser-monads';

const setCookie = (cookie = '') => {
  document.cookie = cookie;
  const event = new CustomEvent('opb-cookie-set', { detail: { cookie } });
  document.dispatchEvent(event);
};

export default setCookie;
