import React from 'react';
import Header from '@/components/Header';

import Footer from '@/components/Footer';
import ToTop from '@/components/ToTop';
import SkipLinks from '@/components/SkipLinks';
import Portfolio from '@/components/Portfolio/Portfolio';
import Banner from '@/components/Portfolio/PortfolioBanner';
import BreadCrumbs from '@/components/Portfolio/BreadCrumbs';

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: `My Work - Gustavo's Portfolio`,
  description: 'Some of my work and stuff.',
};

export default function MyWork() {
  return (
    <div id="portfolio">
      <SkipLinks />
      <Header />
      <Banner />
      <BreadCrumbs />
      <Portfolio />
      <Footer />
      <ToTop />
    </div>
  );
}
