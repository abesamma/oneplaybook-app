import { document } from 'browser-monads';

const checkForCookie = (cookie) => {
  const cookiePresent = document.cookie.split(';').some(item => item.includes(cookie));
  return cookiePresent;
};

export default checkForCookie;
