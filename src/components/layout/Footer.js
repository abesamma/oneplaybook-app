import React from 'react';

const Footer = () => {
  return (
    <>
      <footer className="container mx-auto py-16 px-3 mt-20 mb-8 text-gray-800">
        <div className="flex -mx-3">
          <div className="flex-1 px-3">
            <h2 className="text-lg font-semibold">About</h2>
            <p className="mt-5">
              Oneplaybook app is a knowledge management & collaboration tool that helps you & your
              team think & get awesome stuff done together.
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
              <li>
                <a href="https://tiddlywiki.com">TiddlyWiki</a>
              </li>
            </ul>
          </div>
          <div className="flex-1 px-3">
            <h2 className="text-lg font-semibold">Social Media</h2>
            <ul className="mt-4 leading-loose">
              <li>
                <a href="https://twitter.com/One_Playbook">Twitter</a>
              </li>
              <li>
                <a href="https://github.com/abesamma/oneplaybook">GitHub</a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
