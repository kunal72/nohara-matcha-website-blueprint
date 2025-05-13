
import React from 'react';

const UsageSection = () => {
  // Usage steps
  const steps = [
    {
      step: 1,
      title: "Sift matcha",
      description: "Sift 1-2 tsp into a bowl",
      icon: "🍵"
    },
    {
      step: 2,
      title: "Add hot water",
      description: "Add 76 ml of hot water (80°C)",
      icon: "💧"
    },
    {
      step: 3,
      title: "Whisk until frothy",
      description: "Use a bamboo whisk in a W motion",
      icon: "🍃"
    }
  ];

  // Applications
  const applications = [
    "Cafe Lattes", "Smoothies", "Ice Creams", 
    "Cakes", "Health Shots", "Matcha Cookies"
  ];

  return (
    <section id="usage" className="section-padding bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-matcha mb-4">
            <span className="heading-underline">🧾 Usage & Applications</span>
          </h2>
        </div>
        
        <div className="flex flex-col md:flex-row gap-12 md:gap-6 lg:gap-12">
          {/* Preparation Steps */}
          <div className="md:w-1/2">
            <h3 className="text-2xl font-serif text-matcha mb-8 text-center md:text-left">
              How to Prepare Matcha
            </h3>
            
            <div className="space-y-8">
              {steps.map((step, index) => (
                <div key={index} className="flex gap-6 items-start">
                  <div className="w-12 h-12 rounded-full bg-matcha/10 text-matcha flex items-center justify-center flex-shrink-0">
                    <span className="text-xl">{step.icon}</span>
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-matcha mb-1">
                      {step.step}. {step.title}
                    </h4>
                    <p className="text-matcha-dark/70">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Applications */}
          <div className="md:w-1/2">
            <h3 className="text-2xl font-serif text-matcha mb-8 text-center md:text-left">
              Popular Applications
            </h3>
            
            <div className="grid grid-cols-2 gap-4">
              {applications.map((app, index) => (
                <div 
                  key={index} 
                  className="bg-matcha/5 hover:bg-matcha/10 transition-colors p-5 rounded-lg border border-matcha/10 text-center"
                >
                  <span className="text-matcha font-medium">{app}</span>
                </div>
              ))}
            </div>
            
            <div className="mt-8 p-6 bg-matcha-cream/50 rounded-lg border border-matcha/10">
              <h4 className="font-medium text-matcha mb-3">Perfect for:</h4>
              <p className="text-matcha-dark/70">
                Beverage menus, fusion desserts, and health-oriented offerings. 
                Our matcha can elevate any menu with its authentic flavor and vibrant color.
              </p>
              <div className="mt-4 bg-white/60 p-3 rounded">
                <p className="text-sm text-matcha-dark/70 italic">
                  "Matcha's versatility allows for endless culinary creativity, while 
                  maintaining its health benefits and unique character."
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UsageSection;
