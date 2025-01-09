import Image from 'next/image';
import projects from '@/data/projects.json';
import PortfolioCard from '@/components/Portfolio/PortfolioCard';

import React from 'react';

type Project = {
  images?: { src: string; alt: string }[];
  image: string;
  altText: string;
  logo: string;
  logoAltText: string;
  title: string;
  technologies: string[];
  links: { url: string; label: string; icon: string }[];
};

const PortfolioSection = () => {
  return (
    <section className="bg-white py-12">
      <div className="container mx-auto px-20">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar Title */}
          <div className="lg:col-span-1">
            <div className="sticky top-20">
              <h2 className="text-4xl font-medium text-gray-800">
                <span className="featured">Some of my work</span>
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:col-span-3 gap-6">
            {projects.map((project, index) => (
              <PortfolioCard key={index} project={project as Project} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
