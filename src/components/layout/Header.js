import React from 'react';
import { AnchorLink } from 'gatsby-plugin-anchor-links';
import { window, document } from 'browser-monads';
import LogoIcon from '../../svg/LogoIcon';

const Header = () => {
  const [open, setMenu] = React.useState(false);
  const [stickyHeader, setStickyHeader] = React.useState(true); // set back to false when ln 14 is fixed.
  const headerScrollHandler = () => {
    if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
      setStickyHeader(true);
    } else setStickyHeader(false);
  };
  // window.onscroll = headerScrollHandler; error: window object not extensible.
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
      <LogoIcon className="w-52" />
    </AnchorLink>
  );
  const menuItems = (
    <>
      <AnchorLink
        onAnchorLinkClick={handleMenuClose}
        className="menu-item font-body px-4 my-4 lg:my-0"
        to="/#benefits"
      >
        Why Oneplaybook
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
    <header className={stickyHeader ? 'sticky top-0 bg-white shadow' : 'top-0 bg-white'}>
      {/** Add style to container div below for macHeight to prevent
       *webkit in iOS from expanding header to 100vh */}
      <div
        style={{ maxHeight: 77 }}
        className="container flex flex-row justify-between items-center mx-auto py-4 px-8"
      >
        <div className="flex items-center text-2xl">
          <div className="m-auto">{logoAnchorLink}</div>
        </div>
        <button
          type="button"
          className={open ? 'flex p-1 z-10 lg:hidden' : 'flex p-4 z-10 lg:hidden'}
          onClick={handleMenuClick}
        >
          {open ? <i className="gg-close" /> : <i className="gg-menu" />}
        </button>
        <div className="hidden lg:flex mt-0">{menuItems}</div>
      </div>
      <div className={open ? 'absolute w-screen bg-white h-screen lg:h-0' : 'hidden'}>
        <div className={open ? 'flex flex-col items-center lg:hidden' : 'hidden'}>{menuItems}</div>
      </div>
    </header>
  );
};

export default Header;
