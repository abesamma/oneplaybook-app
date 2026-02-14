/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */
import React from 'react';
import Typography from '@mui/material/Typography';
import CompositeAvatar from '../CompositeAvatar';

const Introduction = () => {
  return (
    <>
      <Typography variant="h5" gutterBottom>
        Hey there!
      </Typography>
      <CompositeAvatar showLinks={true}>
        How&apos;s it going? We&apos;re Abraham Samma and Patricia Kessy, medical doctors and the developers of Neublio. Feel free to reach
        out to us if you have any questions. Great to have you!
      </CompositeAvatar>
      <Typography variant="inherit">
        Thanks for taking the time to poke around here! Neublio is at the early stages of
        its soft launch and we are slowly rolling it out to more users.
        <br />
        <br />
        If you want to be one of the first to try it out, join the waiting list by clicking through and filling out the form.
        We are super excited to have you try it out and would love to hear your feedback!
      </Typography>
    </>
  );
};

export default Introduction;
