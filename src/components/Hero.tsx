
import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center pt-20 overflow-hidden leaf-pattern">
      {/* Background Elements */}
      <div className="absolute w-full h-full inset-0 z-0">
        <div className="absolute top-1/4 right-20 w-64 h-64 bg-matcha-gold/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-20 w-80 h-80 bg-matcha/10 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 z-10">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 mb-12 lg:mb-0 max-w-xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-matcha mb-6 leading-tight animate-fade-in">
              Nohara Matcha – <br />
              <span className="text-matcha-light">Ceremonial-Grade</span> <br />
              Wellness from Japan
            </h1>
            <p className="text-lg md:text-xl text-matcha-dark/80 mb-8 animate-fade-in" style={{animationDelay: '0.3s'}}>
              Bringing calm energy to India's tea culture<br />
              – One cup at a time.
            </p>
            <div className="flex flex-wrap gap-4 animate-fade-in" style={{animationDelay: '0.6s'}}>
              <a href="#partner" className="matcha-btn-primary">
                Request a Sample <ArrowRight size={18} />
              </a>
              <a href="#products" className="matcha-btn-secondary">
                View Product Range <ArrowRight size={18} />
              </a>
            </div>
          </div>

          <div className="lg:w-1/2 flex justify-center lg:justify-end animate-fade-in" style={{animationDelay: '0.9s'}}>
            <div className="relative">
              {/* Matcha bowl animation container */}
              <div className="relative animate-pulse-subtle">
                {/* SVG or image of matcha bowl would go here */}
                <div className="w-72 h-72 md:w-96 md:h-96 bg-matcha-light rounded-full overflow-hidden flex items-center justify-center">
                  <div className="w-64 h-64 md:w-80 md:h-80 bg-matcha rounded-full flex items-center justify-center">
                    <div className="w-48 h-48 md:w-64 md:h-64 bg-matcha-dark rounded-full flex items-center justify-center">
                      <div className="relative w-40 h-40 md:w-56 md:h-56 bg-matcha flex items-center justify-center rounded-full overflow-hidden">
                        {/* Whisking effect */}
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="w-24 h-24 border-4 border-matcha-cream/30 rounded-full animate-spin" style={{ animationDuration: '8s' }}></div>
                          <div className="w-32 h-32 border-4 border-matcha-cream/20 rounded-full animate-spin" style={{ animationDuration: '12s' }}></div>
                          <div className="w-40 h-40 border-4 border-matcha-cream/10 rounded-full animate-spin" style={{ animationDuration: '16s' }}></div>
                        </div>
                        {/* Center powder */}
                        <div className="w-20 h-20 bg-matcha-cream/20 rounded-full animate-pulse-subtle"></div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Matcha powder floating elements */}
                <div className="absolute top-10 right-10 w-8 h-8 bg-matcha-cream/30 rounded-full animate-float" style={{ animationDelay: '0.5s' }}></div>
                <div className="absolute bottom-10 left-10 w-6 h-6 bg-matcha-cream/30 rounded-full animate-float" style={{ animationDelay: '1.5s' }}></div>
                <div className="absolute top-1/4 left-5 w-4 h-4 bg-matcha-cream/30 rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
