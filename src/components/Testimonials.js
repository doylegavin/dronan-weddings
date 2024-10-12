// src/components/Testimonials.js
import React, { useState } from 'react';
import ClipPath from './ClipPath';
import { Modal, Button } from './UIComponents';


const testimonials = [
  {
    id: 1,
    image: '/Media/Stills/MAC2.jpg',
    video: '/public/HomeVideo.mp4',
    videos: [
      'https://youtu.be/irmetMwmnio',
      'https://youtu.be/UIF6_Wnq8ac',
      'https://youtu.be/-BuLMCDLyug'
    ],
    text: 'Ronan captured our wedding perfectly! \n - Laoise & Kyle',
    galleryLink: '/gallery/wedding1',
  },
  {
    id: 2,
    image: '/Media/Stills/MAC3.jpg',
    video: '/public/HomeVideo.mp4',
    videos: [
      'https://youtu.be/MvQnf89Ds5o',
      'https://youtu.be/Azh2jhesD8c',
    ],
    text: 'Ronan captured our wedding perfectly! \n - Martin & Eilis',
    galleryLink: '/gallery/wedding1',
  },
  {
    id: 3,
    image: '/Media/Stills/MAC4.jpg',
    video: '/public/HomeVideo.mp4',
    videos: [
      'https://youtu.be/wrhNsJ206jM',
      'https://youtu.be/DAmfFkMQ4Fg',
    ],
    text: 'Ronan captured our wedding perfectly! \n - Aisling & James',
    galleryLink: '/gallery/wedding1',
  },
  {
    id: 4,
    image: '/Media/Stills/MAC5.jpg',
    video: '/public/HomeVideo.mp4',
    videos: [
      'https://youtu.be/x9tO0AQNCt0'
    ],
    text: 'Ronan captured our wedding perfectly! \n - Patrick & Karmel',
    galleryLink: '/gallery/wedding1',
  },
  {
    id: 5,
    image: '/Media/Stills/MAC6.jpg',
    video: '/public/HomeVideo.mp4',
    videos: [
      'https://youtu.be/s6qRvsZPZfc'
    ],
    text: 'Ronan captured our wedding perfectly! \n - Amy & Kevin',
    galleryLink: '/gallery/wedding1',
  },
  {
    id: 6,
    image: '/Media/Stills/MAC7.jpg',
    video: '/public/HomeVideo.mp4',
    videos: [
      'https://youtu.be/_qEN29QCrwg'
    ],
    text: 'Ronan captured our wedding perfectly! \n - Brendan and Ruth',
    galleryLink: '/gallery/wedding1',
  },
];

const TestimonialModal = ({ isOpen, onClose, testimonial }) => (
  <Modal isOpen={isOpen} onClose={onClose}>
    <h2 className="text-3xl mb-4">{testimonial.text}</h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
      {testimonial.videos.map((videoUrl, index) => (
        <div key={index} className="aspect-w-16 aspect-h-9">
          <iframe
            src={videoUrl}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full"
          ></iframe>
        </div>
      ))}
    </div>
    <Button onClick={onClose} className="w-full bg-olivine-500 hover:bg-olivine-600">Close</Button>
  </Modal>
);

  function Testimonials() {
    const [hovered, setHovered] = useState(null);
    const [selectedTestimonial, setSelectedTestimonial] = useState(null);
  
    return (
      <>
        <div className="container mx-auto justify-center">
          <h2 className="text-3xl font-semibold text-center mb-8">Portfolio</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-4 justify-center">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="relative group mx-auto"
              onMouseEnter={() => setHovered(testimonial.id)}
              onMouseLeave={() => setHovered(null)}
              onClick={() => setSelectedTestimonial(testimonial)}
            >
              <ClipPath />
              <img
                src={testimonial.image}
                alt="Testimonial"
                className="w-full max-w-md h-64 object-cover opacity-70 rounded-3xl rounded-tr-none cut-corner::after transform transition-transform  group-hover:scale-105"
                style={{ clipPath: 'url(#benefits)' }}
                loading="lazy"
              />
              <div
                className="absolute max-w-md  flex inset-0 items-center justify-center text-white text-xl font-semibold bg-black bg-opacity-50 opacity-0 group-hover:opacity-100  group-hover:scale-105 transition-opacity text-center"
                style={{ clipPath: 'url(#benefits)' }}
              >
                {testimonial.text}
              </div>
            </div>
          ))}
        </div>
        {selectedTestimonial && (
          <TestimonialModal
            isOpen={!!selectedTestimonial}
            onClose={() => setSelectedTestimonial(null)}
            testimonial={selectedTestimonial}
          />
        )}
      </>
    );
  }

export default Testimonials;
