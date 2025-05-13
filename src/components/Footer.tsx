import React from 'react';
import { Instagram, Mail, MessageSquare } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-matcha-dark text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-8 md:mb-0">
            <a href="/" className="flex items-center">
              <span className="text-2xl font-serif font-bold">
                Nohara<span className="text-matcha-gold">.</span>
              </span>
            </a>
            <div className="flex items-center mt-4 space-x-4">
              <a href="mailto:drinknohara@gmail.com" className="text-white hover:text-matcha-gold transition-colors">
                <Mail size={20} />
              </a>
              <a href="https://wa.me/917380598810" className="text-white hover:text-matcha-gold transition-colors">
                <MessageSquare size={20} />
              </a>
              <a href="https://instagram.com/drinknohara" className="text-white hover:text-matcha-gold transition-colors">
                <Instagram size={20} />
              </a>
            </div>
          </div>
          
          <div className="grid grid-cols-2 md:flex md:gap-12 text-center md:text-left">
            <div className="mb-6 md:mb-0">
              <h4 className="font-medium mb-3 text-matcha-gold/80">About</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#about" className="hover:text-matcha-gold transition-colors">Our Story</a></li>
                <li><a href="#products" className="hover:text-matcha-gold transition-colors">Products</a></li>
                <li><a href="#why-nohara" className="hover:text-matcha-gold transition-colors">Why Us</a></li>
              </ul>
            </div>
            
            <div className="mb-6 md:mb-0">
              <h4 className="font-medium mb-3 text-matcha-gold/80">Resources</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#usage" className="hover:text-matcha-gold transition-colors">Usage Guide</a></li>
                <li><a href="#" className="hover:text-matcha-gold transition-colors">Product Catalog</a></li>
                <li><a href="#market" className="hover:text-matcha-gold transition-colors">Market Trends</a></li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/10 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-sm text-white/60 mb-4 md:mb-0">
            <p>Email: drinknohara@gmail.com</p>
            <p>WhatsApp: +91 73805 98810</p>
            <p>Location: Lucknow, India</p>
          </div>
          <div className="text-sm text-white/60">
            <p>© 2025 Nohara Matcha. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
