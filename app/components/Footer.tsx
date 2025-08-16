"use client"

import React from 'react';
import { Twitter, Instagram, Youtube, Linkedin, Mail, BriefcaseBusiness } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="glass-header border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">

          <div className="md:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <div className="relative">
                <div className="w-10 h-10 bg-gradient-hero rounded-lg flex items-center justify-center glow-primary">
                  <BriefcaseBusiness className="h-6 w-6 text-white" />
                </div>
                
              </div>
              <span className="text-xl font-bold font-poppins text-white">
                PrepNext<span className="text-primary">AI</span>
              </span>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Empowering professionals to excel in interviews through cutting-edge AI technology and personalized coaching.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-secondary transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-accent transition-colors">
                <Youtube className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Product</h3>
            <ul className="space-y-3">
              <li><a href="#features" className="text-gray-400 hover:text-primary transition-colors">Features</a></li>
              <li><a href="#pricing" className="text-gray-400 hover:text-secondary transition-colors">Pricing</a></li>
              <li><a href="#" className="text-gray-400 hover:text-accent transition-colors">Templates</a></li>
              <li><a href="#" className="text-gray-400 hover:text-primary transition-colors">API</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Resources</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-primary transition-colors">Blog</a></li>
              <li><a href="#" className="text-gray-400 hover:text-secondary transition-colors">Help Center</a></li>
              <li><a href="#" className="text-gray-400 hover:text-accent transition-colors">Tutorials</a></li>
              <li><a href="#" className="text-gray-400 hover:text-primary transition-colors">Community</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Company</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-primary transition-colors">About</a></li>
              <li><a href="#" className="text-gray-400 hover:text-secondary transition-colors">Careers</a></li>
              <li><a href="#" className="text-gray-400 hover:text-accent transition-colors">Press</a></li>
              <li><a href="#" className="text-gray-400 hover:text-primary transition-colors">Contact</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="md:flex md:items-center md:justify-between">
            <div className="mb-6 md:mb-0">
              <h3 className="text-white font-semibold mb-2">Stay Updated</h3>
              <p className="text-gray-400">Get the latest updates and tips for interviews.</p>
            </div>
            <div className="flex space-x-4">
              <input 
                type="email" 
                placeholder="Enter your email"
                className="glass-card border border-gray-700 rounded-lg px-4 py-2 text-white placeholder-gray-400 focus:outline-none focus:border-primary transition-colors"
              />
              <button className="btn-primary px-6 py-2 rounded-lg font-semibold">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2024 PrepNextAI. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-primary text-sm transition-colors">Privacy</a>
            <a href="#" className="text-gray-400 hover:text-secondary text-sm transition-colors">Terms</a>
            <a href="#" className="text-gray-400 hover:text-accent text-sm transition-colors">Cookies</a>
          </div>
        </div>

        <div className="mt-8 text-center">
          <div className="inline-flex items-center text-gray-400">
            <Mail className="h-4 w-4 mr-2" />
            <a href="mailto:hello@shortlyai.com" className="hover:text-primary transition-colors">
              hello@PrepNextAI.com
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;