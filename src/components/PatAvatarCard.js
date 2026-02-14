/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */
import React from 'react';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import { makeStyles } from '@mui/styles';
import pat from '../assets/pat.jpg';
import LinkedIn from '../svg/brands/LinkedIn';
import BlueSky from '../svg/brands/BlueSky';
import Mastodon from '../svg/brands/Mastodon';
import Github from '../svg/brands/Github';
import Mail from '../svg/brands/Mail';

const useStyles = makeStyles(theme => ({
    avatar: {
        width: theme.spacing(8),
        height: theme.spacing(8)
    }
}));

const PatAvatarCard = ({ children }) => {
    const classes = useStyles();
    return (
        <div className="flex flex-row justify-between items-center mb-3">
            <Avatar className={classes.avatar} alt="picture of Dr. Patricia" src={pat} />
            <div className="flex flex-col px-4">
                <Typography variant="caption">{children}</Typography>
                <div className="flex flex-row py-1">
                    {/* <LinkedIn className="mr-6" linkTo="https://www.linkedin.com/in/abraham-samma-094047153" />
          <BlueSky className="mr-6" linkTo="https://bsky.app/profile/abesamma.bsky.social" />
          <Mastodon className="mr-6" linkTo="https://toolsforthought.social/@abesamma" />
          <Github className="mr-6" linkTo="https://github.com/abesamma" />
          <Mail className="mr-6" linkTo="mailto:abraham.samma@neublio.com" /> */}
                </div>
            </div>
        </div>
    );
};

export default PatAvatarCard;
