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
import abraham from '../assets/abraham.jpg';
import LinkedIn from '../svg/brands/LinkedIn';
import BlueSky from '../svg/brands/BlueSky';
import Mastodon from '../svg/brands/Mastodon';
import Github from '../svg/brands/Github';
import Mail from '../svg/brands/Mail';

const useStyles = makeStyles(theme => ({
    avatar: {
        width: theme.spacing(8),
        height: theme.spacing(8),
        border: `2px solid ${theme.palette.background.paper}`
    },
    avatarStack: {
        position: 'relative',
        width: theme.spacing(13),
        height: theme.spacing(8),
        flexShrink: 0
    },
    avatarFront: {
        position: 'absolute',
        left: 0,
        zIndex: 2
    },
    avatarBack: {
        position: 'absolute',
        left: theme.spacing(6),
        zIndex: 1
    }
}));

const CompositeAvatar = ({ children, showLinks = false }) => {
    const classes = useStyles();
    return (
        <div className="flex flex-row items-center mb-3">
            <div className={classes.avatarStack}>
                <Avatar
                    className={`${classes.avatar} ${classes.avatarFront}`}
                    alt="picture of Dr. Patricia Kessy"
                    src={pat}
                />
                <Avatar
                    className={`${classes.avatar} ${classes.avatarBack}`}
                    alt="picture of Abraham Samma"
                    src={abraham}
                />
            </div>
            <div className="flex flex-col px-4">
                <Typography variant="caption">{children}</Typography>
                {showLinks && (
                    <div className="flex flex-row py-1">
                        <LinkedIn className="mr-6" linkTo="https://www.linkedin.com/in/abraham-samma-094047153" />
                        <BlueSky className="mr-6" linkTo="https://bsky.app/profile/abesamma.bsky.social" />
                        <Mastodon className="mr-6" linkTo="https://toolsforthought.social/@abesamma" />
                        <Github className="mr-6" linkTo="https://github.com/abesamma" />
                        <Mail className="mr-6" linkTo="mailto:abraham.samma@neublio.com" />
                    </div>
                )}
            </div>
        </div>
    );
};

export default CompositeAvatar;
