import Image from 'next/image';
import projects from '@/data/projects.json';
import PortfolioCard from '@/components/Portfolio/PortfolioCard';

import React from 'react';

const PortfolioSection = () => {
  return (
    <>
      {projects.map((section, sectionIndex) => (
        <section
          className={`py-12 ${sectionIndex % 2 === 0 ? 'bg-slate-900' : 'bg-slate-950'}`}
          key={sectionIndex}>
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
              {/* Sidebar Title */}
              <div className="lg:col-span-1">
                <div className="sticky top-20">
                  <h2 className="text-4xl font-medium text-gray-200">
                    <span className="featured">{section.sectionTitle}</span>
                  </h2>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:col-span-3 gap-6">
                {section.projects.map((project, projectIndex) => (
                  <PortfolioCard key={projectIndex} project={project as Project} />
                ))}
              </div>
            </div>
          </div>
        </section>
      ))}
    </>
  );
};

export default PortfolioSection;
