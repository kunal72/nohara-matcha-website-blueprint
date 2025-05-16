
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
    <section className="section-padding bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl mb-8 text-center heading-underline pb-2 inline-block mx-auto">
          Our Presence in India
        </h2>
        <p className="text-center mb-8 max-w-3xl mx-auto">
          Nohara is rapidly expanding across major cities in India, bringing premium matcha products to tea lovers nationwide.
        </p>

        <div className="flex flex-col md:flex-row items-center justify-between gap-10 max-w-5xl mx-auto">
          <div className="md:w-1/2 relative">
            <div className="w-full max-w-md mx-auto">
              <AspectRatio ratio={3/4} className="rounded-lg overflow-hidden">
                <div className="relative w-full h-full">
                  <img 
                    src={images.indiaMap} 
                    alt="Map of India" 
                    className="object-contain w-full h-full"
                  />
                  {cities.map((city, index) => (
                    <div
                      key={index}
                      className="absolute transform -translate-x-1/2 -translate-y-1/2"
                      style={{ left: `${city.x}%`, top: `${city.y}%` }}
                    >
                      <MapPin
                        size={24}
                        className={`${
                          city.active
                            ? "text-matcha fill-matcha animate-pulse"
                            : "text-gray-400"
                        }`}
                      />
                      <span className={`absolute text-xs font-bold -mt-6 -ml-6 whitespace-nowrap ${
                        city.active ? "text-matcha" : "text-gray-500"
                      }`}>
                        {city.name}
                      </span>
                    </div>
                  ))}
                </div>
              </AspectRatio>
            </div>
          </div>

          <div className="md:w-1/2">
            <h3 className="text-2xl mb-4 font-serif">Bringing Premium Matcha Across India</h3>
            <p className="mb-4">
              With active operations in 5 major cities and plans to expand to 3 more, Nohara is committed to making authentic matcha products accessible throughout India.
            </p>
            <div className="grid grid-cols-2 gap-4 mt-6">
              <div className="p-4 border border-matcha/20 rounded-md bg-green-50">
                <h4 className="font-bold text-matcha">Active Cities</h4>
                <p className="text-sm">Delhi, Mumbai, Bangalore, Kolkata, Lucknow</p>
              </div>
              <div className="p-4 border border-matcha/20 rounded-md bg-green-50">
                <h4 className="font-bold text-yellow-700">Coming Soon</h4>
                <p className="text-sm">Chennai, Hyderabad, Ahmedabad</p>
              </div>
              <div className="p-4 border border-matcha/20 rounded-md bg-green-50 col-span-2">
                <h4 className="font-bold text-matcha">Our Mission</h4>
                <p className="text-sm">Introduce authentic matcha culture to every corner of India</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IndiaMapSection;
