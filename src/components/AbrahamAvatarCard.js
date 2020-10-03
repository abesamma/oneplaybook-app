import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import abraham from '../../public/static/abraham.jpg';
import LinkedIn from '../svg/brands/LinkedIn';
import Twitter from '../svg/brands/Twitter';
import Github from '../svg/brands/Github';
import Mail from '../svg/brands/Mail';

const useStyles = makeStyles(theme => ({
  avatar: {
    width: theme.spacing(8),
    height: theme.spacing(8)
  }
}));

const AbrahamAvatarCard = ({ children }) => {
  const classes = useStyles();
  return (
    <div className="flex flex-row justify-between items-center mb-3">
      <Avatar className={classes.avatar} alt="picture of Abraham" src={abraham} />
      <div className="flex flex-col px-4">
        <Typography variant="caption">{children}</Typography>
        <div className="flex flex-row py-1">
          <LinkedIn className="mr-6" linkTo="https://www.linkedin.com/in/abraham-samma-094047153" />
          <Twitter className="mr-6" linkTo="https://twitter.com/ABSamma" />
          <Github className="mr-6" linkTo="https://github.com/abesamma" />
          <Mail className="mr-6" linkTo="mailto:oneplaybooklab@gmail.com" />
        </div>
      </div>
    </div>
  );
};

export default AbrahamAvatarCard;
