// src/components/Testimonials.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ClipPath from './ClipPath';

const testimonials = [
  {
    id: 1,
    image: '/Media/Stills/MAC2.jpg',
    video: '/public/HomeVideo.mp4',
    text: 'Ronan captured our wedding perfectly!',
    galleryLink: '/gallery/wedding1',
  },
  {
    id: 2,
    image: '/Media/Stills/MAC3.jpg',
    video: '/public/HomeVideo.mp4',
    text: 'Ronan captured our wedding perfectly!',
    galleryLink: '/gallery/wedding1',
  },
  {
    id: 3,
    image: '/Media/Stills/MAC4.jpg',
    video: '/public/HomeVideo.mp4',
    text: 'Ronan captured our wedding perfectly!',
    galleryLink: '/gallery/wedding1',
  },
  {
    id: 4,
    image: '/Media/Stills/MAC5.jpg',
    video: '/public/HomeVideo.mp4',
    text: 'Ronan captured our wedding perfectly!',
    galleryLink: '/gallery/wedding1',
  },
  {
    id: 5,
    image: '/Media/Stills/MAC6.jpg',
    video: '/public/HomeVideo.mp4',
    text: 'Ronan captured our wedding perfectly!',
    galleryLink: '/gallery/wedding1',
  },
  {
    id: 6,
    image: '/Media/Stills/MAC7.jpg',
    video: '/public/HomeVideo.mp4',
    text: 'Ronan captured our wedding perfectly!',
    galleryLink: '/gallery/wedding1',
  },
];

function Testimonials() {
  const [hovered, setHovered] = useState(null);
  const navigate = useNavigate();

  return (

    <><div className="container mx-auto justify-center">
      <h2 className="text-3xl font-semibold text-center mb-8">Portfolio</h2>
    </div><div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
        {testimonials.map((testimonial) => (
          <div
            key={testimonial.id}
            className="relative group mx-auto w-9/10"
            onMouseEnter={() => setHovered(testimonial.id)}
            onMouseLeave={() => setHovered(null)}
            onClick={() => navigate(testimonial.galleryLink)}
          >
            <ClipPath />
            <img
              src={testimonial.image}
              alt="Testimonial"
              className="w-full max-w-md h-64 object-cover opacity-70 rounded-3xl rounded-tr-none cut-corner::after transform transition-transform  group-hover:scale-105"
              style={{ clipPath: 'url(#benefits)' }} 
              loading = 'lazy'/>
            <div className="absolute max-w-md inset-0 flex items-center justify-center text-white text-xl font-semibold bg-black bg-opacity-50 opacity-0 group-hover:opacity-100  group-hover:scale-105 transition-opacity" style={{ clipPath: 'url(#benefits)' }}>
              {testimonial.text}
            </div>
          </div>
        ))}
      </div></>
  );
}


export default Testimonials;
