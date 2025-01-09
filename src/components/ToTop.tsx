'use client';

import React, { useState, useEffect } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
const ToTop = () => {
  const [showToTop, setshowToTop] = useState(true);
  const [isAtTop, setIsAtTop] = useState(true);

  // Handle scroll behavior
  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Check if the user is at the top of the page
      setIsAtTop(currentScrollY < 200);

      // Show/hide header based on scroll direction
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setshowToTop(false); // Hide on scroll down
      } else {
        setshowToTop(true); // Show on scroll up
      }

      lastScrollY = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <span
      className={`fixed bottom-4 right-4 to-top-container ${
        showToTop && !isAtTop ? 'visible' : ''
      }`}>
      <a
        href="#"
        className={`flex text-white w-10 h-10 text-base rounded-full shadow-lg transition items-center justify-center to-top ${
          showToTop ? 'visible' : ''
        } ${isAtTop ? 'top text-white' : 'navbar-dark text-dark'}`}
        aria-label="Go to top">
        <FontAwesomeIcon icon={faArrowUp} width={20} height={20} />
        <span className="sr-only">Go to top</span>
      </a>
    </span>
  );
};

export default ToTop;
