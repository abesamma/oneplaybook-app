/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */
import React from 'react';
import svg from '../../assets/mastodon.svg';

const Mastodon = ({ className, linkTo }) => (
    <a
        title="Follow me on Mastodon"
        className={className}
        href={linkTo}
        target="_blank"
        rel="noopener noreferrer"
    >
        <img className="w-5" src={svg} alt="Mastodon profile" />
    </a>
);

export default Mastodon;
