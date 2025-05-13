
import React from 'react';

const MarketSection = () => {
  return (
    <section id="market" className="section-padding bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-matcha mb-4">
            <span className="heading-underline">📈 Why Now is the Time for Matcha in India</span>
          </h2>
        </div>
        
        <div className="flex flex-col lg:flex-row gap-10 items-center">
          <div className="lg:w-1/2">
            <p className="text-xl md:text-2xl font-serif text-matcha-dark mb-6 leading-relaxed">
              Matcha isn't just a trend — it's a global wellness movement.
            </p>
            <p className="mb-6 leading-relaxed">
              With a CAGR of 8.7%, the global matcha market is expected to reach $5.5B by 2027. 
              In India, health-conscious consumers are embracing premium teas across urban centers 
              — starting with cities like Lucknow.
            </p>
            <p className="mb-8 leading-relaxed font-medium">
              Your café, wellness studio, or restaurant can be at the forefront of this 
              revolution with Nohara Matcha.
            </p>
          </div>
          
          <div className="lg:w-1/2">
            <div className="bg-matcha-cream/50 rounded-lg p-8">
              {/* Market Statistics */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="border-b-2 border-matcha-gold/50 pb-4">
                  <p className="text-4xl font-bold text-matcha mb-2">8.7%</p>
                  <p className="text-sm text-matcha-dark/70">CAGR Growth Rate</p>
                </div>
                <div className="border-b-2 border-matcha-gold/50 pb-4">
                  <p className="text-4xl font-bold text-matcha mb-2">$5.5B</p>
                  <p className="text-sm text-matcha-dark/70">Market Size by 2027</p>
                </div>
                <div className="border-b-2 border-matcha/20 pb-4">
                  <p className="text-xl font-medium text-matcha mb-2">137x</p>
                  <p className="text-sm text-matcha-dark/70">More Antioxidants than Green Tea</p>
                </div>
                <div className="border-b-2 border-matcha/20 pb-4">
                  <p className="text-xl font-medium text-matcha mb-2">3-6</p>
                  <p className="text-sm text-matcha-dark/70">Hours of Sustained Energy</p>
                </div>
              </div>
              
              {/* Market Trends */}
              <div className="mt-8">
                <h4 className="text-lg font-medium text-matcha mb-4">Top Matcha Market Trends</h4>
                <ul className="space-y-2">
                  <li className="flex items-center text-sm">
                    <span className="w-2 h-2 bg-matcha-gold rounded-full mr-2"></span>
                    <span>Focus on premium, ceremonial-grade offerings</span>
                  </li>
                  <li className="flex items-center text-sm">
                    <span className="w-2 h-2 bg-matcha-gold rounded-full mr-2"></span>
                    <span>Growing café and hospitality integration</span>
                  </li>
                  <li className="flex items-center text-sm">
                    <span className="w-2 h-2 bg-matcha-gold rounded-full mr-2"></span>
                    <span>Rising consumer interest in Japanese wellness</span>
                  </li>
                  <li className="flex items-center text-sm">
                    <span className="w-2 h-2 bg-matcha-gold rounded-full mr-2"></span>
                    <span>Matcha-infused menu innovations</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MarketSection;
