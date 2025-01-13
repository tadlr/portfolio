'use client';

import React from 'react';
import { useEffect } from 'react';
import Header from '@/components/Header';

import Footer from '@/components/Footer';
import ToTop from '@/components/ToTop';
import SkipLinks from '@/components/SkipLinks';
import HomeHero from '@/components/Home/HomeHero';
import QuoteText from '@/components/Home/QuoteText';
import AboutMe from '@/components/Home/AboutMe';
import SkillSection from '@/components/Home/SkillSection';
import WorkExperience from '@/components/Home/WorkExperience';

export default function Home() {
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
    <div id="home">
      <SkipLinks />
      <Header />
      <HomeHero />
      <QuoteText />
      <AboutMe />
      <SkillSection />
      <WorkExperience />
      <Footer />
      <ToTop />
    </div>
  );
}
