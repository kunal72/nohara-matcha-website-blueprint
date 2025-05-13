
import React from 'react';
import { ArrowRight, Download } from 'lucide-react';

const ProductsSection = () => {
  // Product data
  const products = [
    { 
      name: "Upper Grade 1", 
      grade: "Ceremonial", 
      useCase: "Premium tea ceremonies", 
      price: "₹18,850",
      description: "Our finest matcha, featuring a vibrant green color and delicate umami flavor profile.",
      color: "bg-matcha"
    },
    { 
      name: "Upper Grade 2", 
      grade: "Ceremonial", 
      useCase: "Lattes, luxury menus", 
      price: "₹16,850",
      description: "Excellent balance of flavor and color, perfect for premium matcha lattes and beverages.",
      color: "bg-matcha-light"
    },
    { 
      name: "Middle Grade 1", 
      grade: "Ceremonial/Culinary", 
      useCase: "Café drinks, bakeries", 
      price: "₹14,850",
      description: "Versatile grade suitable for both premium drinks and high-end culinary applications.",
      color: "bg-matcha-accent"
    },
    { 
      name: "Middle Grade 2", 
      grade: "Culinary", 
      useCase: "Smoothies, desserts", 
      price: "₹12,850",
      description: "Robust flavor that stands out in smoothies, ice cream, and pastries.",
      color: "bg-matcha/80"
    },
    { 
      name: "Regular Grade 1", 
      grade: "Culinary", 
      useCase: "Everyday drinks", 
      price: "₹9,850",
      description: "Balanced flavor profile ideal for everyday matcha applications and menu innovations.",
      color: "bg-matcha-dark/80"
    },
    { 
      name: "Regular Grade 2", 
      grade: "Culinary", 
      useCase: "Mass-use/baking", 
      price: "₹7,850",
      description: "Cost-effective option for large-scale baking and food production applications.",
      color: "bg-matcha-dark"
    },
  ];

  return (
    <section id="products" className="section-padding bg-matcha/5">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-matcha mb-4">
            <span className="heading-underline">🍵 Product Range</span>
          </h2>
          <p className="text-matcha-dark/70 mt-6">
            All matcha is organic and sourced from certified Japanese producers.
          </p>
        </div>
        
        {/* Product Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {products.map((product, index) => (
            <div 
              key={index} 
              className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow border border-matcha/5"
            >
              <div className={`${product.color} h-8`}></div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-serif font-medium text-matcha">{product.name}</h3>
                  <span className="text-xl font-bold text-matcha-gold">{product.price}</span>
                </div>
                <div className="mb-4 space-y-2">
                  <div className="flex items-center">
                    <span className="text-sm font-medium w-20">Grade:</span>
                    <span className="text-matcha-dark/70 text-sm">{product.grade}</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-sm font-medium w-20">Use Case:</span>
                    <span className="text-matcha-dark/70 text-sm">{product.useCase}</span>
                  </div>
                </div>
                <p className="text-sm text-matcha-dark/70 mt-4">{product.description}</p>
              </div>
            </div>
          ))}
        </div>
        
        {/* CTA Button */}
        <div className="text-center">
          <a href="#" className="matcha-btn-primary inline-flex">
            Download Full Product Catalog <Download size={18} className="ml-2" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
