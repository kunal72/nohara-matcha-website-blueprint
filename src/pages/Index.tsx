
import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import AboutSection from '@/components/AboutSection';
import WhyNoharaSection from '@/components/WhyNoharaSection';
import MarketSection from '@/components/MarketSection';
import IndiaMapSection from '@/components/IndiaMapSection';
import ProductsSection from '@/components/ProductsSection';
import UsageSection from '@/components/UsageSection';
import PartnerSection from '@/components/PartnerSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <AboutSection />
      <WhyNoharaSection />
      <MarketSection />
      <IndiaMapSection />
      <ProductsSection />
      <UsageSection />
      <PartnerSection />
      <Footer />
    </div>
  );
};

export default Index;
