"use client"
import React, { useState, useEffect } from 'react';
import {Menu, X, ArrowRight, BriefcaseBusiness } from 'lucide-react';
import Link from 'next/link';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      scrolled ? 'glass-header' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">

          <div className="flex items-center space-x-3">
            <div className="relative">
              <div className="w-10 h-10 bg-gradient-hero rounded-lg flex items-center justify-center glow-primary">
                <BriefcaseBusiness className="h-6 w-6 text-white" />
              </div>
          
            </div>
            <div>
              <span className="text-xl font-bold font-poppins text-white">
                PrepNext<span className="text-primary">AI</span>
              </span>
            </div>
          </div>

          <nav className="hidden lg:flex items-center space-x-8">
            <a href="#features" className="text-gray-300 hover:text-white transition-colors font-medium">
              Features
            </a>
            <a href="#how-it-works" className="text-gray-300 hover:text-white transition-colors font-medium">
              How It Works
            </a>
            <a href="#pricing" className="text-gray-300 hover:text-white transition-colors font-medium">
              Pricing
            </a>
            <a href="#testimonials" className="text-gray-300 hover:text-white transition-colors font-medium">
              Reviews
            </a>
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <Link href={"/sign-in"}>
            <button className="text-gray-300 hover:text-white transition-colors px-4 py-2 rounded-lg hover:bg-white/5">
              Sign In
            </button>
            </Link>
             <Link href={"/dashboard"}>
            <button className="btn-primary flex items-center">
              Get Started
              <ArrowRight className="ml-2 h-4 w-4" />
            </button>
            </Link>
          </div>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-gray-300 hover:text-white p-2 rounded-lg hover:bg-white/10 transition-all"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden py-4 glass-card rounded-lg mt-4 mx-4">
            <div className="flex flex-col space-y-3 px-4">
              <a href="#features" className="text-gray-300 hover:text-white transition-colors py-2 font-medium">
                Features
              </a>
              <a href="#how-it-works" className="text-gray-300 hover:text-white transition-colors py-2 font-medium">
                How It Works
              </a>
              <a href="#pricing" className="text-gray-300 hover:text-white transition-colors py-2 font-medium">
                Pricing
              </a>
              <a href="#testimonials" className="text-gray-300 hover:text-white transition-colors py-2 font-medium">
                Reviews
              </a>
              <Link href={"/dashboard"}>
              <div className="pt-3 border-t border-gray-700">
                <button className="w-full btn-primary">
                  Get Started
                </button>
              </div>
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;