import React from 'react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-[#050505] text-gray-400 py-16 border-t border-gray-900 font-sans mt-auto">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-10">
        
        {/* Brand & Tagline */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <img 
            src="/ampm-logo.png" 
            alt="AM/PM Slow Bar Logo" 
            className="w-auto h-12 object-contain mb-4 opacity-50 hover:opacity-100 transition-opacity"
          />
          <p className="text-sm font-light text-gray-500 max-w-sm leading-relaxed">
            Savor the slow moments. Artisanal coffee crafted with intention in Sta. Rita, Guiguinto.
          </p>
        </div>

        {/* Quick Links */}
        <div className="flex gap-8 text-xs font-bold tracking-[0.2em] uppercase">
          <Link href="/#menu" className="hover:text-amber-500 transition-colors active:scale-95">Menu</Link>
          <Link href="/#location" className="hover:text-amber-500 transition-colors active:scale-95">Location</Link>
        </div>
      </div>

      {/* Copyright & Developer Credit */}
      <div className="max-w-6xl mx-auto px-6 mt-16 pt-8 border-t border-gray-900/50 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-light text-gray-600">
        <p>© 2026 AM/PM Slow Bar. All rights reserved.</p>
        
        {/* Subtle Flex mo 'to bilang Web Developer nila */}
        <p className="tracking-wide">
          Designed & Built by <a href="#" className="text-amber-700 hover:text-amber-500 font-medium transition-colors">Mark James J. Rogelio</a>
        </p>
      </div>
    </footer>
  );
}