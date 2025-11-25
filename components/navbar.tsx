'use client';

import Link from 'next/link';
import { Button } from './ui/button';
import { useState, useEffect } from 'react';

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-black/80 backdrop-blur-xl border-b border-gray-900' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link href="/" className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
              <img src="/2821378.png" alt="Cognito" className="w-6 h-6" />
            </div>
            <span className="text-xl font-bold text-white tracking-tight">
              Cognito
            </span>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <button onClick={() => {
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }} className="text-gray-400 hover:text-white transition-colors text-sm font-medium tracking-wide">
              Home
            </button>
            <button onClick={() => {
              const dataSection = document.getElementById('data');
              if (dataSection) {
                dataSection.scrollIntoView({ behavior: 'smooth' });
              }
            }} className="text-gray-400 hover:text-white transition-colors text-sm font-medium tracking-wide">
              Features
            </button>
            <button onClick={() => {
              document.getElementById('intelligence-access')?.scrollIntoView({ behavior: 'smooth' });
            }} className="text-gray-400 hover:text-white transition-colors text-sm font-medium tracking-wide">
              Reports
            </button>
            <button onClick={() => {
              const pricingSection = document.getElementById('institutional-access');
              if (pricingSection) {
                pricingSection.scrollIntoView({ behavior: 'smooth' });
              } else {
                window.location.href = '/pricing';
              }
            }} className="text-gray-400 hover:text-white transition-colors text-sm font-medium tracking-wide">
              Pricing
            </button>
            <button onClick={() => {
              const reviewsSection = document.getElementById('reviews-section');
              if (reviewsSection) {
                reviewsSection.scrollIntoView({ behavior: 'smooth' });
              } else {
                window.location.href = '/reviews';
              }
            }} className="text-gray-400 hover:text-white transition-colors text-sm font-medium tracking-wide">
              Reviews
            </button>
          </div>

          <Button
            onClick={() => {
              const pricingSection = document.getElementById('institutional-access');
              if (pricingSection) {
                pricingSection.scrollIntoView({ behavior: 'smooth' });
              } else {
                window.location.href = '/pricing';
              }
            }}
            className="bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white font-semibold shadow-lg shadow-blue-500/50"
          >
            Join Now
          </Button>
        </div>
      </div>
    </nav>
  );
}
