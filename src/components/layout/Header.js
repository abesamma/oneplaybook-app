import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { window } from 'browser-monads';
import LogoIcon from '../../svg/LogoIcon';
import CtaButton from '../CtaButton';

const Header = () => {
  const [open, setMenu] = React.useState(false);
  const page = window.location.pathname;
  const handleMenuClick = () => {
    setMenu(!open);
  };
  const handleMenuClose = () => {
    const mq = window.matchMedia('(min-width: 1024px)');
    if (mq.matches) return;
    setMenu(false);
  };
  const scrollToTop = () => {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  };
  const logoAnchorLink = (
    <AnchorLink onClick={scrollToTop}>
      <LogoIcon />
    </AnchorLink>
  );
  const returnToIndexPageLogoAnchorLink = (
    <a href="/">
      <LogoIcon />
    </a>
  );
  const menuItems = (
    <>
      <AnchorLink
        onClick={handleMenuClose}
        className="menu-item font-body px-4 my-4 lg:my-0"
        href="#benefits"
      >
        Benefits
      </AnchorLink>
      <AnchorLink
        onClick={handleMenuClose}
        className="menu-item font-body px-4 my-4 lg:my-0"
        href="#features"
      >
        Features
      </AnchorLink>
      <AnchorLink
        onClick={handleMenuClose}
        className="menu-item font-body px-4 my-4 lg:my-0"
        href="#cloud"
      >
        Hosting
      </AnchorLink>
      <AnchorLink
        onClick={handleMenuClose}
        className="menu-item font-body px-4 my-4 lg:my-0"
        href="#setup"
      >
        Setup
      </AnchorLink>
      <AnchorLink
        onClick={handleMenuClose}
        className="menu-item font-body px-4 my-4 lg:my-0"
        href="#opensource"
      >
        Open source
      </AnchorLink>
      <a onClick={handleMenuClose} className="menu-item font-body px-4 my-4 lg:my-0" href="/about">
        About
      </a>
    </>
  );
  const nativeMenuItems = (
    <>
      <a
        onClick={handleMenuClose}
        className="menu-item font-body px-4 my-4 lg:my-0"
        href="/#benefits"
      >
        Benefits
      </a>
      <a
        onClick={handleMenuClose}
        className="menu-item font-body px-4 my-4 lg:my-0"
        href="/#features"
      >
        Features
      </a>
      <a onClick={handleMenuClose} className="menu-item font-body px-4 my-4 lg:my-0" href="/#cloud">
        Hosting
      </a>
      <a onClick={handleMenuClose} className="menu-item font-body px-4 my-4 lg:my-0" href="/#setup">
        Setup
      </a>
      <a
        onClick={handleMenuClose}
        className="menu-item font-body px-4 my-4 lg:my-0"
        href="/#opensource"
      >
        Open source
      </a>
      <a onClick={handleMenuClose} className="menu-item font-body px-4 my-4 lg:my-0" href="/about">
        About
      </a>
    </>
  );
  return (
    <header className="sticky top-0 bg-white shadow">
      <div
        style={{ maxHeight: 77 }} {/*Fixes tendency of webkit browsers extending the container to fit entire screen*/}
        className="container flex flex-row justify-between items-center mx-auto py-4 px-8"
      >
        <div className="flex items-center text-2xl">
          <div className="w-48 m-auto">
            {page === '/' ? logoAnchorLink : returnToIndexPageLogoAnchorLink}
          </div>
        </div>
        <button
          type="button"
          className={open ? 'flex p-1 lg:hidden' : 'flex p-4 lg:hidden'}
          onClick={handleMenuClick}
        >
          {open ? <i className="gg-close" /> : <i className="gg-menu" />}
        </button>
        <div className="hidden lg:flex mt-0">{page === '/' ? menuItems : nativeMenuItems}</div>
        <div className="hidden lg:block">
          <CtaButton className="primary-text-bg font-body font-bold text-sm">
            Create your Wiki
          </CtaButton>
        </div>
      </div>
      <div className={open ? 'absolute w-screen bg-white h-screen lg:h-0' : 'hidden'}>
        <div className={open ? 'flex flex-col items-center lg:hidden' : 'hidden'}>
          {page === '/' ? menuItems : nativeMenuItems}
        </div>
      </div>
    </header>
  );
};

export default Header;
