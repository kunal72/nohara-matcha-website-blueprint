
import React from 'react';
import { images } from '../assets/index';

const FounderStorySection = () => {
  return (
    <section id="founder-story" className="section-padding bg-white">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-matcha-dark mb-4">
              The Story Behind Nohara
            </h2>
            <p className="text-xl text-matcha-dark/70">
              Meet the visionary who brought premium matcha to the Indian market
            </p>
          </div>
          
          <div className="flex flex-col lg:flex-row items-center gap-12 mt-16">
            <div className="lg:w-2/5">
              <div className="rounded-full overflow-hidden border-4 border-matcha/10 w-[320px] h-[320px] mx-auto">
                <img 
                  src={images.founder} 
                  alt="Shreya Mishra - Founder of Nohara Matcha" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            
            <div className="lg:w-3/5">
              <h3 className="text-3xl font-serif font-bold text-matcha-dark mb-6">
                Shreya Misra
              </h3>
              
              <p className="text-lg mb-6 leading-relaxed text-matcha-dark/80">
                With an MBA from Canada and a passion for wellness, Shreya founded Nohara with a single
                mission: to bring authentic, high-quality matcha to the Indian market. Her journey began
                when she discovered matcha's transformative benefits during her time abroad and realized
                the potential it held for the evolving Indian consumer.
              </p>
              
              <blockquote className="text-lg italic text-matcha-dark/80 border-l-4 border-matcha pl-6 py-2 mb-6">
                "Nohara was born from a vision to create something meaningful—a brand that honors
                tradition while embracing innovation. Our matcha is more than just a product; it's an
                experience that connects people to a centuries-old practice of mindfulness and wellness."
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FounderStorySection;
