import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="bg-white text-center text-lg-start">
      <section className="py-8">
        <div className="container mx-auto px-20">
          <div className="flex flex-col md:flex-row justify-between items-center">
            {/* Logo Section */}
            <div className="mb-6 md:mb-0">
              <h2 className="text-xl font-bold">
                <a
                  href="/"
                  className="flex items-center text-gray-800 hover:text-purple-900 hover:underline">
                  <div className="logo flex gap-3 items-center margin-0">
                    <Image
                      src="/images/logo.svg"
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
              <ul className="flex space-x-4 text-gray-600">
                <li>
                  <a href="#about-me" className="hover:text-purple-900 hover:underline">
                    About me
                  </a>
                </li>
                <li>
                  <a href="#my-work" className="hover:text-purple-900 hover:underline">
                    Some of my work
                  </a>
                </li>
                <li>
                  <a
                    href="https://tayfox.ca"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-purple-900 hover:underline">
                    Blog
                  </a>
                </li>
                <li>
                  <a
                    href="https://mydinosaurlife.com"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-purple-900 hover:underline">
                    Creative Writing
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Copyright Section */}
      <div className="bg-gray-800 text-white py-4">
        <div className="container mx-auto px-20 flex justify-between items-center">
          <p>
            &copy; <span className="c-year">2025</span> Gustavo Ramirez
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
