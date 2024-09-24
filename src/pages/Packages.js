// src/pages/Packages.js
import React from 'react';

const packages = [
  { id: 1, title: '1-Minute Highlight', description: 'Perfect for sharing on social media.', price: '€500' },
  { id: 2, title: '3-Minute Film', description: 'A short film capturing the essence of your day.', price: '€1000' },
  { id: 3, title: '25-Minute Documentary', description: 'A full documentary of your wedding day.', price: '€2500' },
  { id: 4, title: 'Speeches & Ceremony', description: 'Full coverage of your speeches and ceremony.', price: '€1500' },
];

function Packages() {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto">
        <h2 className="text-3xl font-semibold text-center mb-8">Our Packages</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {packages.map((pkg) => (
            <div key={pkg.id} className="p-6 bg-gray-100 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4">{pkg.title}</h3>
              <p className="mb-4">{pkg.description}</p>
              <p className="text-lg font-bold">{pkg.price}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Packages;
