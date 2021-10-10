import { createContext } from 'react';

const context = {
  services: {}, // will persist to either local storage or PouchDB
  setAccess(opts = {}) {
    this.services = { ...this.services, ...opts };
  }
};

const CloudAccess = createContext(Object.seal(context));

export default CloudAccess;
