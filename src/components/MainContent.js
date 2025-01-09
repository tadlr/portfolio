'use client';
import React from 'react';
import { useEffect, useState } from 'react';

const quotes = [
  'My love for code is inversely proportional to my enjoyment of green juice.',
  'Everyone knows "GIF" is pronounced /ɡɪf/.',
  'How to save in VSCode: [ CMD + S S S S S].',
  'Everyone knows "GIF" is pronounced /dʒɪf/.',
  "I'm more of a dark-mode guy. Light attracts bugs.",
  'Coffee. The mastermind behind any code.',
  "I really liked Windows Vista. It wasn't bad, just misunderstood.",
  "JSON? No, I'm Tay.",
  'Mo regex, mo problems.',
  'echo "Hello world.";',
];

function MainContent() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [showToTop, setShowToTop] = useState(false);
  const [currentQuote, setCurrentQuote] = useState('');
  const [headerClass, setHeaderClass] = useState('top');
  const [year, setYear] = useState(new Date().getFullYear());
  let winPrevPosition = 0;

  useEffect(() => {
    handleQuoteRotation();
    handleScroll();
    setupIntersectionObserver();
    setYear(new Date().getFullYear());

    // Cleanup event listeners
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Toggle navigation
  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  // Handle scroll visibility for ToTop button and header
  const handleScroll = () => {
    const scrollTop = window.pageYOffset;
    setShowToTop(scrollTop > 50);

    winPrevPosition > scrollTop
      ? setHeaderClass((prev) => `${prev} open`)
      : setHeaderClass((prev) => prev.replace('open', ''));
    winPrevPosition = scrollTop;

    window.addEventListener('scroll', handleScroll);
  };

  // Quote rotation with interval
  const handleQuoteRotation = () => {
    const shuffledQuotes = shuffleArray([...quotes]);
    let index = 0;
    setCurrentQuote(shuffledQuotes[index]);

    const quoteInterval = setInterval(() => {
      index = (index + 1) % shuffledQuotes.length;
      setCurrentQuote(shuffledQuotes[index]);
    }, 6500);

    return () => clearInterval(quoteInterval);
  };

  // Fisher-Yates shuffle for quote rotation
  const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  // Intersection Observer for animations
  const setupIntersectionObserver = () => {
    const isInView = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
        }
      });
    };

    const threshold = window.innerWidth < 768 ? 0.2 : 0.5;
    const observer = new IntersectionObserver(isInView, { threshold });

    document.querySelectorAll('.animate').forEach((item) => {
      observer.observe(item);
    });
  };

  return (
    <main id="main">
      <section className="home-banner" tabIndex={0}>
        <div className="container d-flex justify-content-start align-items-center">
          <div className="banner__content col col-sm-12 col-md-7 col-lg-8 text-white">
            <span className="sub__title bg-primary text-wrap fw-bold w-auto badge">
              Hello world, I'm Gustavo!
            </span>
            <h2 className="banner__title h1 lh-1">
              <span className="d-block">Senior Front-end </span>&amp; Full-Stack
              Developer
            </h2>
            <p className="banner__text">
              Located in Canada's capital (Ottawa) with almost ten years of
              experience in multiple stacks.
            </p>
            <div
              className="btn-group"
              role="group"
              aria-label="Connect with me"
            >
              <a
                className="btn btn-primary"
                href="https://www.linkedin.com/in/gram-dev/"
                target="_blank"
              >
                <i className="bi bi-linkedin" /> LinkedIn
              </a>
              <a
                className="btn btn-secondary"
                href="https://code.tayfox.ca/Gustavo/Code-Snippets"
                target="_blank"
              >
                <i className="bi bi-github" /> Git Repository
              </a>
              <a
                className="btn btn-light"
                href="https://tayfox.ca"
                target="_blank"
              >
                <i className="bi bi-book" /> Blog
              </a>
            </div>
          </div>
        </div>
      </section>
      <section id="banner" className="py-0" tabIndex={0}>
        <div className="container my-0">
          <div className="row">
            <div className="col-sm-12">
              <div className="row d-flex">
                <figure className="text-center p-4">
                  <blockquote id="main-quote" className="blockquote">
                    <p className="quote__text text-white" />
                    {/* Quote filled by JS */}
                  </blockquote>
                  <figcaption className="blockquote-footer">
                    Words of wisdom by <cite title="Source Title">Me</cite>
                  </figcaption>
                </figure>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="about-me" className="bg-light py-5" tabIndex={0}>
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-lg-3">
              <div className="row d-flex align-items-center justify-content-center sticky-top">
                <h2 className="animate fade__left pt-3">
                  <span className="featured">About me</span>
                </h2>
              </div>
            </div>
            <div className="col-sm-12 col-lg-9 animate fade__right">
              <p>
                Innovative and goal-oriented Full Stack Developer with nearly a
                decade of experience in web and mobile application development.
                Known for a strong commitment to collaboration, problem-solving,
                and delivering high-quality solutions, I specialize in creating
                responsive, user-focused applications with an emphasis on
                accessibility, usability, and performance.
              </p>
              <p>
                With a robust background in front-end development and experience
                across a range of modern stacks, I’m skilled in
                JavaScript/TypeScript, React, React Native, Node.js, Expo,
                Swift, C#, and Kotlin. My expertise spans the full development
                lifecycle, from concept to deployment, ensuring dynamic,
                scalable applications that meet modern design and development
                standards.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section tabIndex={0} className="bg-light">
        <div className="container py-5">
          <div className="row">
            <div className="col-sm-12 col-lg-3">
              <div className="row d-flex align-items-center justify-content-center sticky-top pt-5">
                <h2 className="animate fade__left pt-3">
                  <span className="featured">Work Experience</span>
                </h2>
              </div>
            </div>
            <div className="col-sm-12 col-lg-9">
              <article className="pb-3">
                <header className="sticky-top bg-light pt-3">
                  <p className="badge text-bg-secondary float-end animate fade__right">
                    Feb 2023 - Sep 2024
                  </p>
                  <h3 className="job animate fade__top">
                    Senior Frontend Developer
                  </h3>
                  <p className="company animate fade__in">
                    Sekure Payment Experts, (Montreal, Quebec)
                  </p>
                </header>
                <ul className="pl-2 animate fade__bottom">
                  <li>
                    Developed accessible, user-friendly WordPress web pages,
                    enhancing user experience and ensuring optimal performance
                    on various devices.
                  </li>
                  <li>
                    Engineered and integrated advanced functionalities into
                    existing WordPress sites, elevating interactivity and site
                    performance.
                  </li>
                  <li>
                    Resolved complex front-end issues, optimized code to improve
                    site performance significantly, and developed custom
                    solutions like plugins and themes tailored to business
                    needs.
                  </li>
                  <li>
                    Worked closely with multiple teams to deliver scalable
                    solutions and mentored junior developers to foster skills
                    improvement and professional growth.
                  </li>
                  <li>
                    Championed accessibility by implementing WCAG standards and
                    improved user satisfaction by 40% through iterative design
                    enhancements based on user feedback.
                  </li>
                  <li>
                    Ensured high-quality, consistent coding and design across
                    projects, proactively identifying and addressing UI/UX
                    design pitfalls to enhance user experience.
                  </li>
                </ul>
              </article>
              <article className="pb-3">
                <header className="sticky-top bg-light pt-3">
                  <p className="badge text-bg-secondary float-end animate fade__right">
                    Jun 2020 - Feb 2023
                  </p>
                  <h3 className="job animate fade__top">
                    Intermediate Web Developer
                  </h3>
                  <p className="company animate fade__in">
                    WebDrive Canada, (Ottawa, Ontario)
                  </p>
                </header>
                <ul className="pl-2 animate fade__bottom">
                  <li>
                    Install new Drupal WxT installation on local and development
                    environments, operating Lando, MAMP and Apache. With
                    creation of sub-themes based on the Drupal Bootstrap-WxT and
                    implementation of custom modules to enhance website
                    functionality.
                  </li>
                  <li>
                    Built Front-end web development following guidelines in
                    design mock-up. With Twig, Html, jQuery, JavaScript, and
                    SASS technologies. Tested, performed QA and debugged
                    multiple projects, with constant validation of client sites
                    followed proper WCAG accessibility standards.
                  </li>
                  <li>
                    Construct system and user documentation, Troubleshooting and
                    2nd level support.
                  </li>
                  <li>
                    Troubleshooting broken and unresponsive Drupal projects, as
                    well as making upgrades from Drupal 8 to Drupal 9, patching
                    and fixing any issues caused by updates.
                  </li>
                  <li>
                    Managing web servers, configuring and set-up local and
                    remote instances to host web applications.
                  </li>
                </ul>
              </article>
              <article className="pb-3">
                <header className="sticky-top bg-light pt-3">
                  <p className="badge text-bg-secondary float-end animate fade__right">
                    Nov 2018 - Jun 2020
                  </p>
                  <h3 className="job animate fade__top">Web Developer</h3>
                  <p className="company animate fade__in">
                    LinkNow Media, (Montreal, Quebec)
                  </p>
                </header>
                <ul className="pl-2 animate fade__bottom">
                  <li>
                    Led development of robust WordPress plug-ins and themes to
                    meet requirements for functionality, scalability, and
                    performance. Working closely with design team members.
                  </li>
                  <li>
                    Collaborated with more than 5 cross-functional design
                    departments to create software solutions elevated
                    client-side experience and revised overall functionality and
                    performance.
                  </li>
                  <li>
                    Modified more than 30 existing internal and external,
                    plug-ins and tools to correct coding errors, upgrade
                    interfaces and improve overall performance.
                  </li>
                  <li>
                    Tested troubleshooting methods, devised innovative
                    solutions, and documented resolutions for inclusion in
                    knowledge base for support team use. Created more than 10
                    different support wikis.
                  </li>
                </ul>
              </article>
              <article className="pb-3">
                <header className="sticky-top bg-light pt-3">
                  <p className="badge text-bg-secondary float-end animate fade__right">
                    Mar 2015 - Nov 2018
                  </p>
                  <h3 className="job animate fade__top">Web Developer</h3>
                  <p className="company animate fade__in">
                    Freelancer, (Mexico City, Mexico)
                  </p>
                </header>
                <ul className="pl-2 animate fade__bottom">
                  <li>
                    Conceived and built optimized web pages in HTML and CSS,
                    using WordPress as CMS and cross- browser compatibility, to
                    support marketing and e-commerce. Implementing programming
                    capabilities in PHP, SQL and JavaScript and other libraries
                    as needed.
                  </li>
                  <li>
                    Submitted professional proposals and project scopes to
                    potential employers. Tracking hours and expenses for more
                    than 5 projects at a time, detailing each action and charge.
                  </li>
                  <li>
                    Designed more than 20 eye-catching and functional digital
                    design concepts across various platforms to strengthen
                    company brand and identity.
                  </li>
                  <li>
                    Designed and constructed sites using a content management
                    system such as WordPress making sure were compatible with
                    top browsers, including Firefox, Chrome and Safari.
                  </li>
                  <li>
                    Owned more than 28 projects from initial research and
                    conceptual design through development, testing and
                    implementation phases. Completed full redesigns of existing
                    websites to improve navigation, enhance visuals and
                    strengthen search engine rankings.
                  </li>
                </ul>
              </article>
              <article className="pb-3">
                <header className="sticky-top bg-light pt-3">
                  <p className="badge text-bg-secondary float-end animate fade__right">
                    Jan 2018 - Aug 2018
                  </p>
                  <h3 className="job animate fade__top">
                    Web Developer | Project Manager
                  </h3>
                  <p className="company animate fade__in">
                    Geekbears, (Mexico City, Mexico)
                  </p>
                </header>
                <ul className="pl-2 animate fade__bottom">
                  <li>
                    Developed high-class websites with Drupal 8 as a content
                    management system by following mock- ups and wireframes
                    provided by project manager using technologies such as
                    WordPress, Genesis Framework, HTML, CSS, jQuery and PHP.
                  </li>
                  <li>
                    Managed Web servers and initial set-up of AWS instances for
                    web hosting using technologies such as cPanel, XAMP, MAMP,
                    Apache, MariaDB, etc.
                  </li>
                  <li>
                    Maintained multiple WordPress websites with some direct
                    communication with customers. Closely collaborated with
                    co-workers to identify and quickly address problems.
                  </li>
                  <li>
                    Developed and initiated more than 10 projects, including
                    managing pricing, sale strategies and performance.
                  </li>
                </ul>
              </article>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default MainContent;
