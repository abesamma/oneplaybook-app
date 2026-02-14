import React from 'react';
import Introduction from './Forms/Introduction';
import TesterRegistration from './Forms/TesterRegistration';
import ContactForm from './Forms/ContactForm';
import ThankYou from './Forms/ThankYou';

const steps = [
  ['Intro', <Introduction />],
  ['Register', <TesterRegistration />],
  ['Contact', <ContactForm />],
  ['Thanks!', <ThankYou />]
];

export default steps;
