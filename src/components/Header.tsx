'use client';

import { usePathname } from 'next/navigation';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';

function Header() {
  const path = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [showHeader, setShowHeader] = useState(true);
  const [isAtTop, setIsAtTop] = useState(true);

  // Handle scroll behavior
  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      setIsAtTop(currentScrollY < 70);

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setShowHeader(false);
      } else {
        setShowHeader(true);
      }

      lastScrollY = currentScrollY;
    };

    // Handle window resize to close mobile menu
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setMenuOpen(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Function to check if the link is active
  const isActiveLink = (href: string) => path === href;

  return (
    <header
      id="header-nav"
      className={`fixed top-0 left-0 w-full bg-gray-900 shadow-md z-50 ${
        showHeader ? 'show' : 'hide'
      } ${isAtTop ? 'top text-white' : 'navbar-dark text-dark'}`}>
      <div className="container mx-auto flex items-center justify-between p-4">
        {/* Logo */}
        <a href="/" className="flex items-center space-x-2 navbar-brand">
          <div className="logo flex gap-3 items-center margin-0">
            <Image src="/images/logo.svg" alt="Logo" className="logo__img" width={50} height={50} />
            <span className="font-base logo__text text-2xl">Gustavo's portfolio</span>
          </div>
        </a>

        {/* Hamburger Menu for Mobile */}
        <button
          className="lg:hidden p-2 rounded-md focus:outline-none z-50 focus:ring-2 focus:ring-white"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"></path>
          </svg>
        </button>

        {/* Navbar Links */}
        <nav
          id="main-nav"
          className={`${
            menuOpen
              ? 'fixed inset-0 bg-gray-900 text-white flex flex-col items-center justify-center z-40 h-screen'
              : 'hidden'
          } lg:flex lg:space-x-4 lg:text-sm lg:font-medium`}>
          <a href="/" className={`hover:text-purple-200 ${isActiveLink('/') ? 'font-bold' : ''}`}>
            About me
          </a>
          <a
            href="/my-work"
            className={`hover:text-purple-200 ${isActiveLink('/my-work') ? 'font-bold' : ''}`}>
            Some of my work
          </a>
          {/* <a
            href="https://tayfox.ca"
            target="_blank"
            rel="noreferrer"
            className="hover:text-purple-200">
            Blog
          </a>
          <a
            href="https://www.wattpad.com/user/TayJFox"
            target="_blank"
            rel="noreferrer"
            className="hover:text-purple-200">
            Creative Writing
          </a> */}
        </nav>
      </div>
    </header>
  );
}

export default Header;
