
import React from 'react';
import { images } from '../assets/index';

const AboutSection = () => {
  return (
    <section id="about" className="section-padding bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-matcha mb-4">
            <span className="heading-underline">🌱 Who We Are</span>
          </h2>
        </div>
        
        <div className="flex flex-col md:flex-row gap-10 items-center">
          <div className="md:w-2/5">
            <div className="relative">
              {/* Founder Image - Made smaller */}
              <div className="bg-matcha/5 w-full aspect-[4/5] rounded-lg overflow-hidden">
                <img 
                  src={images.founder} 
                  alt="Shreya Mishra - Founder of Nohara Matcha" 
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Decorative elements */}
              <div className="absolute -bottom-6 -right-6 w-24 h-24 rounded-lg border-2 border-matcha-gold/30 -z-10"></div>
            </div>
          </div>
          
          <div className="md:w-3/5">
            <p className="text-lg mb-6 leading-relaxed text-matcha-dark/90">
              At Nohara Matcha, we believe in mindful living powered by nature.
            </p>
            <p className="mb-6 leading-relaxed">
              Founded by Shreya Mishra, an MBA graduate from Canada and a wellness enthusiast, 
              Nohara was born out of a desire to make the world's finest ceremonial matcha 
              both accessible and affordable.
            </p>
            <p className="mb-8 leading-relaxed">
              We bring to India the rich tradition of premium Japanese matcha — sourced from 
              Shizuoka and Izumo, Japan, where tea craftsmanship is heritage.
            </p>
            <blockquote className="border-l-4 border-matcha-gold pl-4 italic">
              "Nohara is more than a product — it's a movement to integrate calm, clean energy into modern lives."
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
