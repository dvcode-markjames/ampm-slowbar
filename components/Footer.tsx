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
          <Link href="/" className="hover:text-amber-500 transition-colors active:scale-95">Home</Link>
          <Link href="/menu" className="hover:text-amber-500 transition-colors active:scale-95">Menu</Link>
          <Link href="/#location" className="hover:text-amber-500 transition-colors active:scale-95">Location</Link>
        </div>
      </div>

      {/* Copyright, Views & Developer Credit */}
      <div className="max-w-6xl mx-auto px-6 mt-16 pt-8 border-t border-gray-900/50 flex flex-col md:flex-row justify-between items-center gap-6 text-xs font-light text-gray-600">
        <p className="text-center md:text-left">© 2026 AM/PM Slow Bar. All rights reserved.</p>
        
        {/* LIVE PAGE VIEW COUNTER */}
        <div className="flex items-center gap-2 opacity-80 hover:opacity-100 transition-opacity bg-black/50 px-3 py-1.5 rounded-full border border-gray-800" title="Live Page Views">
          <span className="tracking-widest uppercase text-[10px] text-gray-500">Views:</span>
          <img 
            // Gumagamit tayo ng libreng counter API na saktong kulay amber ang bilang!
            src="https://api.visitorbadge.io/api/visitors?path=ampmslowbar-markjames&label=%E2%80%8B&labelColor=%23050505&countColor=%23d97706&style=flat-square" 
            alt="Page Views" 
            className="h-4 rounded-sm object-contain"
          />
        </div>

        {/* Subtle Flex mo 'to bilang Web Developer nila */}
        <p className="tracking-wide text-center md:text-right">
          Designed & Built by <a href="#" className="text-amber-700 hover:text-amber-500 font-medium transition-colors">Mark James J. Rogelio</a>
        </p>
      </div>
    </footer>
  );
}