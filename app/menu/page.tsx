import React from 'react';
import Link from 'next/link';
import Footer from '../../components/Footer';
// --- BUONG MENU DATA ---
const fullDrinksData = [
  {
    category: "Usuals",
    items: [
      { name: "Long Black", price: "120", desc: "Espresso & Water" },
      { name: "Cortado", price: "130", desc: "Equal parts of espresso & warm milk" },
      { name: "Flat White", price: "160", desc: "Espresso & thin foam of warm milk" },
      { name: "Cappuccino", price: "160", desc: "Espresso & foamy warm milk" },
      { name: "Latte", price: "160", desc: "Espresso & milk (Sweet, vanilla or caramel)" },
      { name: "Ben's Mocha", price: "175", desc: "Espresso, tablea sourced from Ben's farm & milk" },
      { name: "Classic Cold Brew", price: "120", desc: "18 hour cold brew concentrate" },
      { name: "House Affogato", price: "160", desc: "Espresso & vanilla ice cream" }
    ]
  },
  {
    category: "Signature",
    items: [
      { name: "Barbados", price: "160", desc: "Muscovado espresso infusion" },
      { name: "Three in One", price: "170", desc: "Espresso, milk & heavy cream. Iced only." },
      { name: "Conquistador", price: "170", desc: "Our take on your favorite Spanish Latte." },
      { name: "Caramel Bomb", price: "180", desc: "Our version of the Green Logo's Caramel Macchiato" },
      { name: "Dirty Horchata", price: "175", desc: "Horchata and ristretto." },
      { name: "Rocket Orange", price: "170", desc: "Black coffee with a citrus twist. Iced only." },
      { name: "Cloudy Cold Brew", price: "175", desc: "Vanilla cold brew with sweet cream. Iced only." },
      { name: "Cookie Day Dream", price: "210", desc: "Lotus Biscoff latte. Can be non-coffee." }
    ]
  },
  {
    category: "Blended & Non-Coffee",
    items: [
      { name: "Dirty Milkshake", price: "200", desc: "Milkshake for adults." },
      { name: "Mocha Frappe", price: "220", desc: "Mocha milkshake." },
      { name: "Horchata", price: "150", desc: "Creamy rice milk spiced with cinnamon." },
      { name: "Strawberry Latte", price: "150", desc: "Creamy strawberry milk drink." }
    ]
  },
  {
    category: "Tea & Mocktails",
    items: [
      { name: "Matcha Latte", price: "175", desc: "Hand-whisked Matcha over milk." },
      { name: "Dirty Matcha", price: "210", desc: "Matcha Latte with espresso." },
      { name: "La Castellana", price: "165", desc: "Cold brew & caramel. A good vibe drink." },
      { name: "Glowbar Signature", price: "165", desc: "A burst of sweet caramel apple." }
    ]
  }
];

const fullFoodData = [
  {
    category: "Food Bowls",
    items: [
      { name: "Herbed Truffle Pasta", price: "235", desc: "Creamy spinach mushroom truffle linguine pasta." },
      { name: "Juicy Tapa", price: "200", desc: "Marinated beef strips. Served with rice, egg & veggie sides." },
      { name: "Pork Aloha Tocino", price: "175", desc: "Tender pork tocino with a tropical twist." },
      { name: "Breakfast Bacon", price: "175", desc: "The daily breakfast icon." }
    ]
  },
  {
    category: "Pastry & Snacks",
    items: [
      { name: "Triple Chocolate Cheesecake", price: "220", desc: "Smooth, decadent cheesecake." },
      { name: "Burnt Basque Cheesecake", price: "200", desc: "Creamy and velvety, crowned with its signature burnt top." },
      { name: "Tiramisu", price: "200", desc: "Layers of rich, creamy goodness finished with cocoa powder." },
      { name: "Cinnamon Roll", price: "120", desc: "Soft, warm and gooey. Our favorite coffee pairing ever." },
      { name: "Mini Pepperoni Pizza", price: "120", desc: "6 inch pepperoni pizza. Small bites with big flavor." },
      { name: "Potato Dippers", price: "120", desc: "Seasoned US potato fries." }
    ]
  }
];

export default function FullMenuPage() {
  return (
<main className="min-h-screen flex flex-col bg-[#0f0f0f] text-gray-200 font-sans selection:bg-amber-500 selection:text-white">
        {/* Sticky Navigation Bar */}
      <div className="sticky top-0 z-50 bg-[#0f0f0f]/90 backdrop-blur-md border-b border-gray-800 p-6">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <Link href="/" className="group flex items-center text-sm font-bold tracking-widest text-gray-400 hover:text-amber-500 transition-all uppercase active:scale-95">
            <span className="mr-3 transform group-hover:-translate-x-1 transition-transform">←</span> 
            Back to Home
          </Link>
          <div className="text-xl font-bold tracking-[0.2em] uppercase text-white hidden sm:block">
             AM/PM <span className="text-amber-500 font-light">Menu</span>
          </div>
        </div>
      </div>
        
        <div className="flex-1 w-full max-w-6xl mx-auto px-6 pt-16 mt-8 pb-24">
        
        <div className="text-center mb-16 animate-fade-up opacity-0">
          <h2 className="text-sm font-bold tracking-[0.3em] text-amber-500 uppercase mb-3">AM/PM BLEND | 50% Brazil 50% Vietnam</h2>
          <h1 className="text-4xl md:text-6xl font-extrabold text-white">Full Offerings</h1>
          <div className="w-24 h-1 bg-amber-600 mx-auto mt-6"></div>
        </div>

        {/* The Good Stuff Special Section */}
        <div className="mb-16 bg-gradient-to-br from-[#1a1311] to-[#0a0a0a] border border-red-900/30 rounded-lg p-8 max-w-3xl mx-auto relative overflow-hidden animate-fade-up opacity-0 delay-100">
           <div className="absolute top-0 left-0 w-1 h-full bg-red-500"></div>
           <h4 className="text-red-400 font-bold tracking-widest uppercase mb-1 text-sm">The Good Stuff</h4>
           <h5 className="text-white text-xl font-bold mb-4">KARO, INDONESIA - CO-FERMENTED</h5>
           <p className="text-sm text-gray-400 mb-6 italic">Notes of berries, strawberry cookies & chocolate</p>
           
           <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div>
                <div className="flex justify-between items-baseline"><span className="font-medium text-white">Black</span><span className="text-amber-500 font-bold">140</span></div>
                <p className="text-xs text-gray-500 mt-1">An eight ounce long black.</p>
              </div>
              <div>
                <div className="flex justify-between items-baseline"><span className="font-medium text-white">White</span><span className="text-amber-500 font-bold">170</span></div>
                <p className="text-xs text-gray-500 mt-1">Espresso and milk ratioed to an 8oz cup.</p>
              </div>
              <div>
                <div className="flex justify-between items-baseline"><span className="font-medium text-white">Blush Break</span><span className="text-amber-500 font-bold">180</span></div>
                <p className="text-xs text-gray-500 mt-1">Aerocano style tonic & tea infusion.</p>
              </div>
           </div>
        </div>

        {/* Full Menu Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          <div className="space-y-12 animate-fade-up opacity-0 delay-200">
            {fullDrinksData.map((section, index) => (
              <div key={`drink-${index}`}>
                <h4 className="text-2xl font-bold text-white mb-6 uppercase tracking-widest flex items-center gap-4">
                  {section.category}
                  <span className="h-px bg-gray-800 flex-1"></span>
                </h4>
                <ul className="flex flex-col gap-6">
                  {section.items.map((item, itemIdx) => (
                    <li key={itemIdx} className="group">
                      <div className="flex justify-between items-baseline mb-1">
                        <h5 className="text-base font-semibold text-gray-100 group-hover:text-amber-500 transition-colors">{item.name}</h5>
                        <div className="flex-1 border-b border-dotted border-gray-700 mx-4 opacity-40"></div>
                        <span className="text-base font-bold text-amber-500">{item.price}</span>
                      </div>
                      <p className="text-sm text-gray-500 font-light pr-12 leading-relaxed">{item.desc}</p>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="space-y-12 animate-fade-up opacity-0 delay-300">
            {fullFoodData.map((section, index) => (
              <div key={`food-${index}`}>
                <h4 className="text-2xl font-bold text-white mb-6 uppercase tracking-widest flex items-center gap-4">
                  {section.category}
                  <span className="h-px bg-gray-800 flex-1"></span>
                </h4>
                <ul className="flex flex-col gap-6">
                  {section.items.map((item, itemIdx) => (
                    <li key={itemIdx} className="group">
                      <div className="flex justify-between items-baseline mb-1">
                        <h5 className="text-base font-semibold text-gray-100 group-hover:text-amber-500 transition-colors">{item.name}</h5>
                        <div className="flex-1 border-b border-dotted border-gray-700 mx-4 opacity-40"></div>
                        <span className="text-base font-bold text-amber-500">{item.price}</span>
                      </div>
                      <p className="text-sm text-gray-500 font-light pr-12 leading-relaxed">{item.desc}</p>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            <div className="mt-16 p-8 bg-[#111] rounded-lg border border-gray-800">
                <h4 className="text-lg font-bold text-white mb-3 uppercase tracking-widest">Who Are We?</h4>
                <p className="text-sm text-gray-400 leading-relaxed font-light mb-4">
                  We're just a bunch of geeks who enjoy conversations over a cup of coffee. We believe there's no "best" time to have one. Whether it's on the AM or PM, just enjoy a cup whenever you want and have a damn good time.
                </p>
                <p className="text-sm text-gray-400 leading-relaxed font-light">
                  We're not the best coffee shop in town (believe us, we are not), but hey, we give a shit every single time. What even is "the best," anyway? We'd rather be yours. The one you always go back to. Your favorite.
                </p>
            </div>
          </div>
        </div> 
      </div>
    <Footer />   
    </main>
  );
}