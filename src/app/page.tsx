import React from 'react';
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
