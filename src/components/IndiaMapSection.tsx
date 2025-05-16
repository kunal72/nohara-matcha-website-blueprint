
import React from 'react';
import { images } from '../assets/index';
import { MapPin } from 'lucide-react';
import { AspectRatio } from '@/components/ui/aspect-ratio';

const IndiaMapSection = () => {
  // Key cities where Nohara is expanding
  const cities = [{
    name: "Delhi",
    x: 46,
    y: 32,
    active: true
  }, {
    name: "Mumbai",
    x: 28,
    y: 59,
    active: true
  }, {
    name: "Bangalore",
    x: 40,
    y: 78,
    active: true
  }, {
    name: "Kolkata",
    x: 70,
    y: 50,
    active: true
  }, {
    name: "Lucknow",
    x: 52,
    y: 40,
    active: true
  }, {
    name: "Chennai",
    x: 50,
    y: 82,
    active: false
  }, {
    name: "Hyderabad",
    x: 42,
    y: 68,
    active: false
  }, {
    name: "Ahmedabad",
    x: 26,
    y: 49,
    active: false
  }];

  return (
    <section id="india-presence" className="section-padding bg-matcha-cream/30">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-matcha mb-4">
            <span className="heading-underline">🇮🇳 Our Presence in India</span>
          </h2>
          <p className="text-matcha-dark/70 mt-4">
            Expanding across India's major urban centers
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto relative">
          <div className="aspect-[4/3] w-full relative">
            <AspectRatio ratio={4/3} className="bg-white/50 rounded-xl p-4">
              <div className="relative w-full h-full">
                <img 
                  src={images.indiaMap} 
                  alt="Map of India showing Nohara's presence" 
                  className="w-full h-full object-contain"
                />
                
                {cities.map((city, index) => (
                  <div 
                    key={index}
                    className="absolute transform -translate-x-1/2 -translate-y-1/2"
                    style={{ left: `${city.x}%`, top: `${city.y}%` }}
                  >
                    <div className={`relative group ${city.active ? '' : 'opacity-40'}`}>
                      <MapPin 
                        size={24} 
                        className={`${city.active ? 'text-matcha-gold' : 'text-gray-400'} drop-shadow-md`} 
                        fill={city.active ? '#D4AF37' : '#CBD5E1'} 
                      />
                      <div className="opacity-0 group-hover:opacity-100 absolute bottom-full mb-2 left-1/2 -translate-x-1/2 bg-white px-2 py-1 rounded shadow text-sm whitespace-nowrap transition-opacity">
                        {city.name}
                        {city.active && <span className="block text-xs text-matcha-gold">Active</span>}
                      </div>
                      
                      {/* Pulse animation for active cities */}
                      {city.active && (
                        <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-matcha-gold/30 animate-ping"></span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </AspectRatio>
          </div>
          
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-matcha/10">
              <h3 className="font-serif text-xl font-medium text-matcha mb-4">Active Markets</h3>
              <div className="flex flex-wrap gap-2">
                {cities.filter(c => c.active).map((city, idx) => (
                  <span key={idx} className="inline-flex items-center px-3 py-1 rounded-full bg-matcha/10 text-matcha text-sm">
                    <span className="w-2 h-2 bg-matcha-gold rounded-full mr-2"></span>
                    {city.name}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm border border-matcha/10">
              <h3 className="font-serif text-xl font-medium text-matcha mb-4">Expanding Soon</h3>
              <div className="flex flex-wrap gap-2">
                {cities.filter(c => !c.active).map((city, idx) => (
                  <span key={idx} className="inline-flex items-center px-3 py-1 rounded-full bg-gray-100 text-gray-600 text-sm">
                    <span className="w-2 h-2 bg-gray-400 rounded-full mr-2"></span>
                    {city.name}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IndiaMapSection;
