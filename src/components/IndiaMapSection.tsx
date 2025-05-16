
import React from 'react';
import { images } from '../assets/index';
import { MapPin } from 'lucide-react';
import { AspectRatio } from '@/components/ui/aspect-ratio';

const IndiaMapSection = () => {
  // Key cities where Nohara is expanding
  const cities = [
    { name: "Delhi", x: 46, y: 32, active: true },
    { name: "Mumbai", x: 28, y: 59, active: true },
    { name: "Bangalore", x: 40, y: 78, active: true },
    { name: "Kolkata", x: 70, y: 50, active: true },
    { name: "Lucknow", x: 52, y: 40, active: true },
    { name: "Chennai", x: 50, y: 82, active: false },
    { name: "Hyderabad", x: 42, y: 68, active: false },
    { name: "Ahmedabad", x: 26, y: 49, active: false },
  ];

  return (
    <section id="india-presence" className="section-padding bg-matcha-cream/30">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-matcha mb-4">
            <span className="heading-underline">🌱 Matcha Movement in India</span>
          </h2>
          <p className="text-lg text-matcha-dark/80">
            From metro cities to emerging markets, Nohara is leading the matcha revolution across India
          </p>
        </div>
        
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2 order-2 lg:order-1">
            <div className="bg-white p-6 rounded-lg border border-matcha/20 shadow-sm">
              <h3 className="text-xl font-medium text-matcha mb-4">Expanding Across India</h3>
              <p className="mb-6 leading-relaxed">
                Starting with premium cafés in Lucknow and expanding into metros like Delhi, Mumbai, 
                and Bangalore, Nohara Matcha is bringing authentic Japanese matcha culture to India's 
                most vibrant cities.
              </p>
              
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="border border-matcha/10 rounded-md p-3 hover-lift">
                  <p className="text-lg font-medium text-matcha">5+</p>
                  <p className="text-sm text-matcha-dark/70">Cities with Partners</p>
                </div>
                <div className="border border-matcha/10 rounded-md p-3 hover-lift">
                  <p className="text-lg font-medium text-matcha">25+</p>
                  <p className="text-sm text-matcha-dark/70">Partner Cafés</p>
                </div>
                <div className="border border-matcha/10 rounded-md p-3 hover-lift">
                  <p className="text-lg font-medium text-matcha">3</p>
                  <p className="text-sm text-matcha-dark/70">States Coverage</p>
                </div>
                <div className="border border-matcha/10 rounded-md p-3 hover-lift">
                  <p className="text-lg font-medium text-matcha">2024</p>
                  <p className="text-sm text-matcha-dark/70">Started in</p>
                </div>
              </div>
              
              <div className="p-4 bg-matcha/5 rounded-lg">
                <h4 className="font-medium text-matcha mb-2">Upcoming City Launches</h4>
                <div className="flex flex-wrap gap-2">
                  {cities.filter(city => !city.active).map(city => (
                    <span key={city.name} className="px-3 py-1 bg-white border border-matcha/10 rounded-md text-sm">
                      {city.name}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          <div className="lg:w-1/2 relative order-1 lg:order-2">
            <div className="relative w-full h-96 md:h-auto md:aspect-square max-w-lg mx-auto">
              <AspectRatio ratio={1/1} className="bg-matcha/5 rounded-lg overflow-hidden">
                {/* Map Background */}
                <img 
                  src={images.indiaMap} 
                  alt="India Map" 
                  className="w-full h-full object-contain"
                />
                
                {/* City Markers */}
                {cities.map((city) => (
                  <div 
                    key={city.name}
                    className="absolute transform -translate-x-1/2 -translate-y-1/2 group"
                    style={{ 
                      left: `${city.x}%`, 
                      top: `${city.y}%` 
                    }}
                  >
                    <div className={`
                      flex flex-col items-center
                      ${city.active ? 'scale-100' : 'scale-90 opacity-60'}
                    `}>
                      <MapPin 
                        size={city.active ? 30 : 24} 
                        className={`
                          ${city.active ? 'text-matcha animate-pulse-subtle' : 'text-matcha/60'} 
                          drop-shadow-md
                        `}
                        strokeWidth={city.active ? 2.5 : 1.5}
                        fill={city.active ? 'rgba(26, 71, 42, 0.1)' : 'transparent'}
                      />
                      <span className={`
                        text-xs font-medium mt-1 px-2 py-0.5 rounded-full 
                        ${city.active 
                          ? 'bg-white text-matcha shadow-sm border border-matcha/20' 
                          : 'bg-white/70 text-matcha-dark/70'
                        }
                      `}>
                        {city.name}
                      </span>
                    </div>
                    
                    {city.active && (
                      <div className="absolute top-0 left-0 -mt-1 w-3 h-3 rounded-full">
                        <span className="absolute inline-flex h-full w-full rounded-full bg-matcha opacity-75 animate-ping"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-matcha"></span>
                      </div>
                    )}
                  </div>
                ))}
              </AspectRatio>
              
              {/* Decorative Elements */}
              <div className="absolute -bottom-4 -right-4 w-20 h-20 rounded-full border-2 border-matcha-gold/20 -z-10"></div>
              <div className="absolute top-10 -left-4 w-12 h-12 rounded-full border border-matcha-gold/20 -z-10"></div>
            </div>
            
            <div className="text-center mt-6">
              <p className="text-sm text-matcha-dark/60 italic">
                Active cities highlighted on the map
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IndiaMapSection;
