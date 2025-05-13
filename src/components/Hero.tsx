
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { images } from '../assets/index';

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
            <div className="mb-6 flex justify-start">
              <img 
                src={images.noharaLogo} 
                alt="Nohara Logo" 
                className="h-16 w-auto" 
              />
            </div>
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
              <img 
                src={images.matchaProduct} 
                alt="Nohara Matcha - Premium Product" 
                className="w-auto h-[500px] object-contain animate-float"
              />
              {/* Decorative elements */}
              <div className="absolute -bottom-6 -right-6 w-32 h-32 rounded-full border-2 border-matcha-gold/30 -z-10"></div>
              <div className="absolute top-10 right-10 w-8 h-8 bg-matcha-cream/30 rounded-full animate-float" style={{ animationDelay: '0.5s' }}></div>
              <div className="absolute bottom-10 left-10 w-6 h-6 bg-matcha-cream/30 rounded-full animate-float" style={{ animationDelay: '1.5s' }}></div>
              <div className="absolute top-1/4 left-5 w-4 h-4 bg-matcha-cream/30 rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
