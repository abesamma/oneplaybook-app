import React from 'react';
import Typography from '@material-ui/core/Typography';
import AbrahamAvatarCard from '../AbrahamAvatarCard';

const ThankYou = () => {
  return (
    <>
      <Typography variant="h5" gutterBottom>
        Thanks very much!
      </Typography>
      <Typography variant="inherit">
        Thank you so much for wanting to try out Oneplaybook! I will get back to you as soon as
        possible so you can begin trying this app out.
        <br />
        <br />
        If you have other project leaders in your network, please consider inviting them to join our
        tester community by tweeting it out below, or sharing a link to this site. More people
        equals more feedback. More feedback equals a better final app for all.
      </Typography>
      <div className="my-2">
        <a
          href="https://twitter.com/intent/tweet?text=Oneplaybook+app+is+a+new+self-hosted+project+assistance+tool+that+helps+you+get+projects+%28%26+side+projects%29+done+well+with+others.+Powered+by+%40TiddlyWiki.+%F0%9F%94%A5%F0%9F%94%A5%F0%9F%94%A5+Check+it+out+here%3A+https%3A%2F%2Foneplaybook.app+%23projectmanagement+%23productivity+%23Tiddlywiki+%23oneplaybook+"
          target="_blank"
          rel="noopener noreferrer"
        >
          Tweet it out
        </a>
      </div>
      <AbrahamAvatarCard>
        Thank you again for joining this project of mine! Please reach out if you have any questions
        , suggestions, or if you just want to talk TiddlyWiki. I am all ears!
      </AbrahamAvatarCard>
    </>
  );
};

export default ThankYou;
