import Image from 'next/image';

const AboutMe = () => {
  return (
    <section id="about-me" className="bg-slate-900 py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Title Section */}
          <div className="lg:col-span-1">
            <div className="sticky top-20">
              <h2 className="text-4xl font-medium text-gray-200">
                <span className="featured">About me</span>
              </h2>
            </div>
          </div>

          {/* Content Section */}
          <div className="lg:col-span-3 space-y-6 text-gray-300">
            <p>
              Innovative and goal-oriented Full Stack Developer with nearly a decade of experience
              in web and mobile application development. Known for a strong commitment to
              collaboration, problem-solving, and delivering high-quality solutions, I specialize in
              creating responsive, user-focused applications with an emphasis on accessibility,
              usability, and performance.
            </p>
            <p>
              With a robust background in front-end development and experience across a range of
              modern stacks, I’m skilled in JavaScript/TypeScript, React, React Native, Node.js,
              Expo, Swift, C#, and Kotlin. My expertise spans the full development lifecycle, from
              concept to deployment, ensuring dynamic, scalable applications that meet modern design
              and development standards.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
