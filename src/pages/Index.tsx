
import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import WhyNoharaSection from '@/components/WhyNoharaSection';
import MarketSection from '@/components/MarketSection';
import ProductsSection from '@/components/ProductsSection';
import UsageSection from '@/components/UsageSection';
import FounderStorySection from '@/components/FounderStorySection';
import PartnerSection from '@/components/PartnerSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <WhyNoharaSection />
      <MarketSection />
      <ProductsSection />
      <UsageSection />
      <FounderStorySection />
      <PartnerSection />
      <Footer />
    </div>
  );
};

export default Index;
