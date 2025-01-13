'use client';

import React from 'react';
import { useEffect } from 'react';
import projects from '@/data/projects.json';
import PortfolioCard from '@/components/Portfolio/PortfolioCard';

const PortfolioSection = () => {
  useEffect(() => {
    handleScroll();
    setupIntersectionObserver();

    // Cleanup event listeners
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Intersection Observer for animations
  const setupIntersectionObserver = () => {
    const isInView = (entries: IntersectionObserverEntry[]) => {
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

  const handleScroll = () => {
    window.addEventListener('scroll', handleScroll);
  };

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
                  <h2 className="text-4xl font-medium text-gray-200 animate fade__left">
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
