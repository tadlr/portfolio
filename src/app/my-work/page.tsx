import React from 'react';
import Header from '@/components/Header';

import Footer from '@/components/Footer';
import ToTop from '@/components/ToTop';
import SkipLinks from '@/components/SkipLinks';
import Portfolio from '@/components/Portfolio/Portfolio';
import Banner from '@/components/Portfolio/PortfolioBanner';
import BreadCrumbs from '@/components/Portfolio/BreadCrumbs';

export default function Home() {
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
