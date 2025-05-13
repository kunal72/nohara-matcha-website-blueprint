
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-sm z-50 border-b border-matcha/10">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="/" className="flex items-center">
            <span className="text-2xl font-serif text-matcha font-bold">
              Nohara<span className="text-matcha-gold">.</span>
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#about" className="text-matcha/80 hover:text-matcha font-medium transition-colors">About</a>
            <a href="#why-nohara" className="text-matcha/80 hover:text-matcha font-medium transition-colors">Why Us</a>
            <a href="#market" className="text-matcha/80 hover:text-matcha font-medium transition-colors">Market</a>
            <a href="#products" className="text-matcha/80 hover:text-matcha font-medium transition-colors">Products</a>
            <a href="#usage" className="text-matcha/80 hover:text-matcha font-medium transition-colors">Usage Guide</a>
            <a href="#partner" className="matcha-btn-primary">
              Partner with us
            </a>
          </nav>

          {/* Mobile menu button */}
          <button 
            onClick={toggleMenu}
            className="md:hidden text-matcha"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile navigation */}
      <div className={cn(
        "fixed inset-0 bg-white z-40 transition-transform duration-300 ease-in-out transform pt-20",
        isMenuOpen ? "translate-x-0" : "translate-x-full"
      )}>
        <nav className="container mx-auto px-4 py-8 flex flex-col space-y-6">
          <a 
            href="#about" 
            className="text-matcha text-xl font-medium py-2 border-b border-gray-100"
            onClick={toggleMenu}
          >
            About
          </a>
          <a 
            href="#why-nohara" 
            className="text-matcha text-xl font-medium py-2 border-b border-gray-100"
            onClick={toggleMenu}
          >
            Why Us
          </a>
          <a 
            href="#market" 
            className="text-matcha text-xl font-medium py-2 border-b border-gray-100"
            onClick={toggleMenu}
          >
            Market
          </a>
          <a 
            href="#products" 
            className="text-matcha text-xl font-medium py-2 border-b border-gray-100"
            onClick={toggleMenu}
          >
            Products
          </a>
          <a 
            href="#usage" 
            className="text-matcha text-xl font-medium py-2 border-b border-gray-100"
            onClick={toggleMenu}
          >
            Usage Guide
          </a>
          <a 
            href="#partner" 
            className="matcha-btn-primary self-start mt-4"
            onClick={toggleMenu}
          >
            Partner with us
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
