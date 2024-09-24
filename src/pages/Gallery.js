// src/pages/Gallery.js
import React from 'react';
import { useParams } from 'react-router-dom';

function Gallery() {
  const { id } = useParams();
  // Fetch or import your gallery data based on the id

  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto">
        <h2 className="text-3xl font-semibold text-center mb-8">Gallery</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Map over your gallery images/videos */}
          <img src="/path/to/gallery-image.jpg" alt="Gallery Item" className="w-full h-64 object-cover" />
          {/* Repeat for other images */}
        </div>
      </div>
    </section>
  );
}

export default Gallery;
