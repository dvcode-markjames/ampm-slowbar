import React from 'react';
import Link from 'next/link';

// Best sellers lang ang ilalagay natin dito para hindi nakakahilo
const shortDrinksData = [
  {
    category: "Crowd Favorites",
    items: [
      { name: "Caramel Bomb", price: "180", desc: "Our version of the Green Logo's Caramel Macchiato" },
      { name: "Conquistador", price: "170", desc: "Our take on your favorite Spanish Latte." },
      { name: "Latte", price: "160", desc: "Espresso & milk (Sweet, vanilla or caramel)" },
      { name: "Classic Cold Brew", price: "120", desc: "18 hour cold brew concentrate" }
    ]
  }
];

const shortFoodData = [
  {
    category: "Perfect Pairings",
    items: [
      { name: "Burnt Basque Cheesecake", price: "200", desc: "Creamy and velvety, crowned with its signature burnt top." },
      { name: "Cinnamon Roll", price: "120", desc: "Soft, warm and gooey. Our favorite coffee pairing ever." },
      { name: "Herbed Truffle Pasta", price: "235", desc: "Creamy spinach mushroom truffle linguine pasta." }
    ]
  }
];

export default function Menu() {
  return (
    <section id="menu" className="py-24 bg-[#0a0a0a] relative text-gray-200">
      <div className="max-w-6xl mx-auto px-6">
        
        <div className="text-center mb-16 animate-fade-up opacity-0">
          <h2 className="text-sm font-bold tracking-[0.3em] text-amber-500 uppercase mb-3">A Taste of AM/PM</h2>
          <h3 className="text-4xl md:text-5xl font-extrabold text-white">Our Best Sellers</h3>
          <div className="w-24 h-1 bg-amber-600 mx-auto mt-6"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Drinks Teaser */}
          <div className="space-y-12 animate-fade-up opacity-0 delay-100">
            {shortDrinksData.map((section, index) => (
              <div key={index}>
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
                      <p className="text-sm text-gray-500 font-light pr-12">{item.desc}</p>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Food Teaser */}
          <div className="space-y-12 animate-fade-up opacity-0 delay-200">
            {shortFoodData.map((section, index) => (
              <div key={index}>
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
                      <p className="text-sm text-gray-500 font-light pr-12">{item.desc}</p>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Link papunta sa Bagong Page */}
        <div className="mt-20 flex justify-center animate-fade-up opacity-0 delay-300">
          <Link 
            href="/menu" 
            className="px-10 py-4 rounded-full border border-amber-600 hover:bg-amber-600 text-amber-500 hover:text-white font-semibold tracking-widest uppercase text-sm transition-all duration-300 shadow-[0_0_20px_rgba(217,119,6,0.1)] hover:shadow-[0_0_20px_rgba(217,119,6,0.4)] active:scale-95"
          >
            Explore Full Menu
          </Link>
        </div>

      </div>
    </section>
  );
}