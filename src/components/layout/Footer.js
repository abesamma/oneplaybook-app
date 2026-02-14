/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */
import React from 'react';

const Footer = () => {
  return (
    <>
      <footer className="container mx-auto py-16 px-3 mt-20 mb-8 text-gray-800">
        <div className="flex mx-3">
          <div className="flex-1 px-3">
            <h2 className="text-lg font-semibold">About</h2>
            <p className="mt-5">
              We are helping people work better and achieve more with Neublio,
              an integrated knowledge work toolsuite.
            </p>
            <p className="mt-2">
              Made with{' '}
              <span role="img" aria-label="love">
                ❤️
              </span>{' '}
              by{' '}
              <a target="_blank" rel="noopener noreferrer" href="https://github.com/abesamma">
                Abraham Samma
              </a>
              {' and '}
              <span>Patricia Kessy</span>
            </p>
          </div>
          <div className="flex-1 px-3">
            <h2 className="text-lg font-semibold">Important Links</h2>
            <ul className="mt-4 leading-loose">
              <li>
                <a href="/terms&conditions">Terms &amp; Conditions</a>
              </li>
              <li>
                <a href="/privacy">Privacy Policy</a>
              </li>
              {/* <li>
                <a href="https://tiddlywiki.com">TiddlyWiki</a>
              </li> */}
            </ul>
          </div>
          <div className="flex-1 px-3">
            <h2 className="text-lg font-semibold">Get in touch!</h2>
            <ul className="mt-4 leading-loose">
              <li>
                <a href="https://github.com/Neublio/neublio.com">GitHub</a>
              </li>
              <li>
                <a href="mailto:abraham.samma@neublio.com">Email</a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
