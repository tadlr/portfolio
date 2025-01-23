import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faBlog, faBookOpen } from '@fortawesome/free-solid-svg-icons';
import { faCodeFork } from '@fortawesome/free-solid-svg-icons/faCodeFork';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="bg-slate-950 text-center text-lg-start">
      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            {/* Logo Section */}
            <div className="mb-6 md:mb-0">
              <h2 className="text-xl font-bold">
                <a
                  href="/"
                  className="flex items-center text-gray-200 hover:text-purple-300 hover:underline">
                  <div className="logo flex gap-3 items-center margin-0">
                    <Image
                      src="/logos/logo.svg"
                      alt="Logo"
                      className="logo__img"
                      width={50}
                      height={50}
                    />
                    <span className="font-base logo__text text-2xl">Gustavo's portfolio</span>
                  </div>
                </a>
              </h2>
            </div>

            {/* Footer Menu */}
            <div className="flex space-x-8">
              <ul className="flex space-x-4 text-gray-300">
                <li>
                  <a href="/" className="hover:text-purple-300 hover:underline">
                    About me
                  </a>
                </li>
                <li>
                  <a href="/my-work" className="hover:text-purple-300 hover:underline">
                    Some of my work
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Copyright Section */}
      <div className="bg-black text-white py-4">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <p>
            &copy; <span className="c-year">2025</span> Gustavo Ramirez
          </p>
          <div
            className="flex flex-wrap justify-center lg:justify-start space-x-0 mt-0"
            role="group"
            aria-label="Connect with me">
            <a
              className="text-white font-medium px-3 py-2 rounded-md  rounded-e-none hover:bg-purple-700 transition"
              href="https://www.linkedin.com/in/gram-dev/"
              target="_blank"
              rel="noreferrer">
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
            <a
              className="text-dark font-medium px-3 py-2 rounded-none hover:bg-gray-800 transition"
              href="https://github.com/orgs/tadlr/repositories"
              target="_blank"
              rel="noreferrer">
              <FontAwesomeIcon icon={faGithub} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
