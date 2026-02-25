import React from 'react';

export default function Location() {
  return (
    <section id="location" className="py-24 bg-[#0f0f0f] text-white border-t border-gray-900">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold tracking-[0.3em] text-amber-500 uppercase mb-3">Visit Us</h2>
          <h3 className="text-4xl font-extrabold">Find Our Bar</h3>
          <div className="w-16 h-1 bg-amber-600 mx-auto mt-6"></div>
        </div>

        {/* Details and Map Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          
          {/* Left Details */}
          <div className="space-y-10 pl-0 md:pl-8">
            <div>
              <h4 className="text-xl font-bold mb-3 text-white flex items-center gap-3">
                 <span className="text-amber-500 text-2xl">📍</span> Address
              </h4>
              <p className="text-gray-400 font-light leading-relaxed">
                2F LKBP Tower and Business Centre<br />
                Sta. Rita, Guiguinto, Bulacan
              </p>
            </div>
            
            <div>
              <h4 className="text-xl font-bold mb-3 text-white flex items-center gap-3">
                <span className="text-amber-500 text-2xl">⏰</span> Store Hours
              </h4>
              <p className="text-gray-400 font-light leading-relaxed">
                Brewing Everyday<br />
                11:00 AM to 10:00 PM
              </p>
            </div>
            
            <div>
              <h4 className="text-xl font-bold mb-3 text-white flex items-center gap-3">
                <span className="text-amber-500 text-2xl">📱</span> Socials
              </h4>
              <div className="text-gray-400 font-light flex flex-col gap-3">
                <a href="https://facebook.com" target="_blank" rel="noreferrer" className="hover:text-amber-500 transition-colors inline-block">
                  Facebook: AM/PM SLOW BAR
                </a>
                <a href="https://instagram.com/ampmslowbar" target="_blank" rel="noreferrer" className="hover:text-amber-500 transition-colors inline-block">
                  Instagram: @ampmslowbar
                </a>
              </div>
            </div>
          </div>

          {/* Right Map (Google Maps Embed) */}
          <div className="h-[400px] w-full bg-[#1a1a1a] rounded-xl overflow-hidden border border-gray-800 shadow-2xl relative group">
            <iframe 
              src="https://www.google.com/maps?q=LKBP+Tower+and+Business+Centre,+Sta.+Rita,+Guiguinto,+Bulacan&output=embed" 
              width="100%" 
              height="100%" 
              style={{ border: 0, filter: 'grayscale(100%) contrast(1.2) opacity(0.8)' }} 
              allowFullScreen={true} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              className="group-hover:filter-none transition-all duration-500"
            ></iframe>
          </div>

        </div>
      </div>
    </section>
  );
}