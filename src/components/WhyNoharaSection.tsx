import React from 'react';
import { Leaf, Briefcase, Vegan } from 'lucide-react';
const WhyNoharaSection = () => {
  return <section id="why-nohara" className="section-padding bg-matcha-cream/50 leaf-pattern">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-matcha mb-4">
            <span className="heading-underline">🌸 Why Choose Nohara Matcha?</span>
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Premium Sourcing */}
          <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow border border-matcha/10 transform hover:-translate-y-1 transition-transform duration-300">
            <div className="w-16 h-16 bg-matcha/10 rounded-full flex items-center justify-center text-matcha mb-6">
              <Leaf size={24} />
            </div>
            <h3 className="text-xl font-serif font-medium text-matcha mb-4">Premium Sourcing</h3>
            <p className="text-matcha-dark/70">
              Sourced from Japan's best tea-growing regions — certified JAS, USDA & EU Organic.
            </p>
          </div>
          
          {/* B2B Ready */}
          <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow border border-matcha/10 transform hover:-translate-y-1 transition-transform duration-300">
            <div className="w-16 h-16 bg-matcha/10 rounded-full flex items-center justify-center text-matcha mb-6">
              <Briefcase size={24} />
            </div>
            <h3 className="text-xl font-serif font-medium text-matcha mb-4">B2B Ready</h3>
            <p className="text-matcha-dark/70">
              Available in bulk (1kg bags), custom packaging, and fast fulfillment for HORECA and wellness partners.
            </p>
          </div>
          
          {/* 100% Natural & Vegan */}
          <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow border border-matcha/10 transform hover:-translate-y-1 transition-transform duration-300">
            <div className="w-16 h-16 bg-matcha/10 rounded-full flex items-center justify-center text-matcha mb-6">
              <Vegan size={24} />
            </div>
            <h3 className="text-xl font-serif font-medium text-matcha mb-4">100% Natural & Vegan</h3>
            <p className="text-matcha-dark/70">
              No sugar, no additives — just pure, antioxidant-rich matcha, in ceremonial and culinary grades.
            </p>
          </div>
        </div>
        
        {/* Certifications */}
        
      </div>
    </section>;
};
export default WhyNoharaSection;