import { document } from 'browser-monads';

const checkForCookie = async (cookie) => {
  const cookiePresent = await document.cookie.split(';').some(item => item.includes(cookie));
  return cookiePresent;
};

export default checkForCookie;
