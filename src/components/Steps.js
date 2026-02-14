/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */
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
