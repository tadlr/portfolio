import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faSquareGithub } from '@fortawesome/free-brands-svg-icons';
import { faBlog, faBookOpen } from '@fortawesome/free-solid-svg-icons';

const HomeHero = () => {
  return (
    <section className="home-banner bg-gray-900 text-white">
      <div className="container mx-auto flex flex-col lg:flex-row justify-start items-center py-16 px-6 lg:px-12">
        {/* Content */}
        <div className="banner__content w-full lg:w-8/12 text-center lg:text-left">
          <span className="sub__title bg-purple-900 text-white font-bold inline-block rounded px-3 py-1 mb-4">
            Hello world, I'm Gustavo!
          </span>
          <h2 className="banner__title text-4xl lg:text-5xl font-bold leading-tight">
            <span className="block">Senior Front-end </span>&amp; Full-Stack Developer
          </h2>
          <p className="banner__text text-lg mt-4">
            Located in Canada's capital (Ottawa) with almost ten years of experience in multiple
            stacks.
          </p>
          {/* Buttons */}
          <div
            className="flex flex-wrap justify-center lg:justify-start space-x-0 mt-8"
            role="group"
            aria-label="Connect with me">
            <a
              className="bg-violet-900 text-white font-medium px-3 py-2 rounded-md  rounded-e-none hover:bg-purple-700 transition"
              href="https://www.linkedin.com/in/gram-dev/"
              target="_blank"
              rel="noreferrer">
              <FontAwesomeIcon icon={faLinkedin} /> LinkedIn
            </a>
            <a
              className="bg-gray-700 text-white font-medium px-3 py-2 rounded-none hover:bg-gray-800 transition"
              href="https://github.com/tadlr"
              target="_blank"
              rel="noreferrer">
              <FontAwesomeIcon icon={faSquareGithub} /> Github
            </a>
            <a
              className="bg-blue-700 text-white font-medium px-3 py-2 rounded-none hover:bg-blue-800 transition"
              href="https://tayfox.ca"
              target="_blank"
              rel="noreferrer">
              <FontAwesomeIcon icon={faBlog} /> Blog
            </a>
            <a
              className="bg-gray-200 text-gray-800 font-medium px-3 py-2 rounded-md  rounded-s-none hover:bg-gray-400 transition"
              href="https://www.wattpad.com/user/TayJFox"
              target="_blank"
              rel="noreferrer">
              <FontAwesomeIcon icon={faBookOpen} /> Creative Writing
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeHero;
