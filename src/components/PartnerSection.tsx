
import React from 'react';
import { ArrowRight, Phone, Mail, MessageSquare } from 'lucide-react';

const PartnerSection = () => {
  // Business types
  const businessTypes = [
    "Café or restaurant", 
    "Boutique hotel",
    "Fitness studio or wellness spa",
    "Organic retail brand"
  ];
  
  return (
    <section id="partner" className="section-padding bg-matcha">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-4">
            <span className="heading-underline">🤝 Let's Collaborate</span>
          </h2>
        </div>
        
        <div className="bg-white rounded-lg p-8 md:p-10 shadow-lg max-w-4xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-10">
            <div className="lg:w-1/2">
              <p className="text-lg text-matcha-dark mb-6 leading-relaxed">
                We're currently partnering with select businesses in Lucknow to bring 
                high-quality, ceremonial-grade matcha to India's emerging wellness capital. 
              </p>
              
              <p className="text-matcha mb-4 font-medium">If you're a:</p>
              <ul className="space-y-3 mb-8">
                {businessTypes.map((type, index) => (
                  <li key={index} className="flex items-center">
                    <span className="w-2 h-2 bg-matcha-gold rounded-full mr-2"></span>
                    <span>{type}</span>
                  </li>
                ))}
              </ul>
              
              <p className="italic text-matcha-dark/70 mb-8">...we'd love to hear from you.</p>
              
              <div className="flex flex-wrap gap-4">
                <a href="#" className="matcha-btn-primary">
                  Book a Call <Phone size={18} />
                </a>
                <a href="#" className="matcha-btn-secondary">
                  Request a Sample <ArrowRight size={18} />
                </a>
              </div>
            </div>
            
            <div className="lg:w-1/2 lg:border-l lg:border-matcha/10 lg:pl-10">
              <h3 className="text-xl font-serif font-medium text-matcha mb-6">
                Contact Us Directly
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-matcha/10 flex items-center justify-center text-matcha">
                    <Mail size={18} />
                  </div>
                  <div>
                    <p className="text-sm text-matcha-dark/70">Email</p>
                    <a href="mailto:drinknohara@gmail.com" className="text-matcha hover:text-matcha-light transition-colors">
                      drinknohara@gmail.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-matcha/10 flex items-center justify-center text-matcha">
                    <MessageSquare size={18} />
                  </div>
                  <div>
                    <p className="text-sm text-matcha-dark/70">WhatsApp</p>
                    <a href="https://wa.me/917380598810" className="text-matcha hover:text-matcha-light transition-colors">
                      +91 73805 98810
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-matcha/10 flex items-center justify-center text-matcha">
                    <span className="text-xl">📍</span>
                  </div>
                  <div>
                    <p className="text-sm text-matcha-dark/70">Location</p>
                    <p className="text-matcha">Lucknow, India</p>
                  </div>
                </div>
                
                {/* Special message for early partners */}
                <div className="mt-8 p-4 bg-matcha-gold/10 rounded-lg border border-matcha-gold/20">
                  <p className="text-sm italic">
                    "Want to be one of our first exclusive partners in Lucknow? Let's talk."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnerSection;
