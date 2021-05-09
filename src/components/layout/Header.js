import React from 'react';
import { AnchorLink } from 'gatsby-plugin-anchor-links';
import { window } from 'browser-monads';
import LogoIcon from '../../svg/LogoIcon';
import CtaButton from '../CtaButton';

const Header = () => {
  const [open, setMenu] = React.useState(false);
  const handleMenuClick = () => {
    setMenu(!open);
  };
  const handleMenuClose = () => {
    const mq = window.matchMedia('(min-width: 1024px)');
    if (mq.matches) return;
    setMenu(false);
  };
  const logoAnchorLink = (
    <AnchorLink to="/#top">
      <LogoIcon />
    </AnchorLink>
  );
  const menuItems = (
    <>
      <AnchorLink
        onAnchorLinkClick={handleMenuClose}
        className="menu-item font-body px-4 my-4 lg:my-0"
        to="/#benefits"
      >
        Benefits
      </AnchorLink>
      <AnchorLink
        onAnchorLinkClick={handleMenuClose}
        className="menu-item font-body px-4 my-4 lg:my-0"
        to="/#features"
      >
        Features
      </AnchorLink>
      <AnchorLink
        onAnchorLinkClick={handleMenuClose}
        className="menu-item font-body px-4 my-4 lg:my-0"
        to="/#cloud"
      >
        Hosting
      </AnchorLink>
      <AnchorLink
        onAnchorLinkClick={handleMenuClose}
        className="menu-item font-body px-4 my-4 lg:my-0"
        to="/#setup"
      >
        Setup
      </AnchorLink>
      <AnchorLink
        onAnchorLinkClick={handleMenuClose}
        className="menu-item font-body px-4 my-4 lg:my-0"
        to="/#opensource"
      >
        Open source
      </AnchorLink>
      <AnchorLink
        onAnchorLinkClick={handleMenuClose}
        className="menu-item font-body px-4 my-4 lg:my-0"
        to="/about"
      >
        About
      </AnchorLink>
    </>
  );

  return (
    <header className="sticky top-0 bg-white shadow">
      {/** Add style to container div below for macHeight to prevent
       *webkit in iOS from expanding header to 100vh */}
      <div
        style={{ maxHeight: 77 }}
        className="container flex flex-row justify-between items-center mx-auto py-4 px-8"
      >
        <div className="flex items-center text-2xl">
          <div className="w-48 m-auto">{logoAnchorLink}</div>
        </div>
        <button
          type="button"
          className={open ? 'flex p-1 lg:hidden' : 'flex p-4 lg:hidden'}
          onClick={handleMenuClick}
        >
          {open ? <i className="gg-close" /> : <i className="gg-menu" />}
        </button>
        <div className="hidden lg:flex mt-0">{menuItems}</div>
        <div className="hidden lg:block">
          <CtaButton className="primary-text-bg font-body font-bold text-sm">
            Join wait list
          </CtaButton>
        </div>
      </div>
      <div className={open ? 'absolute w-screen bg-white h-screen lg:h-0' : 'hidden'}>
        <div className={open ? 'flex flex-col items-center lg:hidden' : 'hidden'}>{menuItems}</div>
      </div>
    </header>
  );
};

export default Header;
