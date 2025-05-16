
import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import WhyNoharaSection from '@/components/WhyNoharaSection';
import MarketSection from '@/components/MarketSection';
import IndiaMapSection from '@/components/IndiaMapSection';
import ProductsSection from '@/components/ProductsSection';
import UsageSection from '@/components/UsageSection';
import PartnerSection from '@/components/PartnerSection';
import FounderStorySection from '@/components/FounderStorySection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <WhyNoharaSection />
      <MarketSection />
      <IndiaMapSection />
      <ProductsSection />
      <UsageSection />
      <PartnerSection />
      <FounderStorySection />
      <Footer />
    </div>
  );
};

export default Index;
