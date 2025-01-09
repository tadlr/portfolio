import Image from 'next/image';
import Carousel from './Carousel';

interface Project {
  images?: { src: string; alt: string }[];
  image: string;
  altText: string;
  logo: string;
  logoAltText: string;
  title: string;
  technologies: string[];
  links: { url: string; label: string; icon: string }[];
}

const PortfolioCard = ({ project }: { project: Project }) => {
  return (
    <div className="bg-white shadow-md rounded-md overflow-hidden flex flex-col content-between justify-between">
      {/* Carousel or Static Image */}
      {project.images ? (
        <Carousel images={project.images} />
      ) : (
        <Image
          src={project.image}
          alt={project.altText}
          width={500}
          height={300}
          className="w-full object-cover h-52"
          priority
        />
      )}

      {/* Project Details */}

      <div className="text-center flex-1">
        <div className="flex flex-wrap justify-center bg-gray-100 py-3 mb-2 rounded-md h-full">
          {/* Technology Badge */}
          <div className="w-full md:w-1/2 text-center">
            <small className="inline-block bg-green-700 text-white text-xs font-bold px-3 py-1 rounded-full mb-2">
              Project technology
            </small>
            <div className="flex justify-center items-center gap-4">
              {project.technologies.map((tech, i) => (
                <div key={i} className="flex flex-col items-center">
                  <Image
                    src={`/images/${tech.toLowerCase()}.svg`}
                    alt={`${tech} logo`}
                    width={35}
                    height={35}
                    className="rounded"
                  />
                  {/* <span className="text-xs mt-1">{tech}</span> */}
                </div>
              ))}
            </div>
          </div>
          {/* Project Badge */}
          <div className="w-full md:w-1/2 text-center">
            <small className="inline-block bg-blue-500 text-white text-xs font-bold px-3 py-1 rounded-full mb-2">
              Project
            </small>
            <div className="flex justify-center items-center">
              <span className="sr-only">{project.title}</span>
              <Image
                src={project.logo}
                alt={project.logoAltText}
                width={120}
                height={120}
                className="rounded-md"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-row items-center gap-2 px-4 pb-2">
        {project.links.map((link, index) => (
          <a
            key={index}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-indigo-900 text-white text-sm px-4 py-2 rounded-md mt-2 hover:bg-indigo-700 flex-1 text-center">
            {link.label}
            <i className={`ml-2 ${link.icon}`}></i>
          </a>
        ))}
      </div>
    </div>
  );
};

export default PortfolioCard;
