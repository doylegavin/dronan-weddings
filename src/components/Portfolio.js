// src/components/Portfolio.js
import React, { useState } from 'react';
import ClipPath from './ClipPath';
import { Modal, Button } from './UIComponents';


const portfolio = [
  {
    id: 1,
    image: '/Media/PortfolioImages/LaoiseandKyle.jpg',
    videos: [
      'https://www.youtube.com/embed/irmetMwmnio',
      'https://www.youtube.com/embed/UIF6_Wnq8ac',
      'https://www.youtube.com/embed/-BuLMCDLyug'
    ],
    firstLook: 'https://www.youtube.com/embed/irmetMwmnio',
    highlights: 'https://www.youtube.com/embed/UIF6_Wnq8ac',
    featureFilm: 'https://www.youtube.com/embed/-BuLMCDLyug',
    text: 'Laoise and Kyle',
    couple: 'Laoise and Kyle',
    p: 'Ronan captured our wedding perfectly!',
    galleryLink: '/gallery/wedding1',
    season: 'Spring',
    location: 'Mill Park Hotel, Donegal',
  },
  {
    id: 2,
    image: '/Media/PortfolioImages/MartinandEilís.png',
    videos: [
      'https://www.youtube.com/embed/MvQnf89Ds5o',
      'https://www.youtube.com/embed/Azh2jhesD8c',
    ],
    firstLook: 'https://www.youtube.com/embed/MvQnf89Ds5o',
    highlights: 'https://www.youtube.com/embed/Azh2jhesD8c',
    text: 'Martin and Eilís',
    couple: 'Martin and Eilís',
    p: 'Ronan captured our wedding perfectly!',
    galleryLink: '/gallery/wedding1',
    season: 'Summer',
    location: 'Rathsallagh, Wicklow',
  },
  {
    id: 3,
    image: '/Media/PortfolioImages/AislingandJames.png',
    videos: [
      'https://www.youtube.com/embed/wrhNsJ206jM',
      'https://www.youtube.com/embed/DAmfFkMQ4Fg',
    ],
    firstLook: 'https://www.youtube.com/embed/wrhNsJ206jM',
    highlights: 'https://www.youtube.com/embed/DAmfFkMQ4Fg',
    text: 'Aisling and James',
    galleryLink: '/gallery/wedding1',
    season: 'Spring',
    location: 'Rockhill House, Donegal',
  },
  {
    id: 4,
    image: '/Media/PortfolioImages/PatrickandKarmel.jpg',
    videos: [
      'https://www.youtube.com/embed/x9tO0AQNCt0'
    ],
    firstLook: 'https://www.youtube.com/embed/x9tO0AQNCt0',
    text: 'Patrick and Karmel',
    galleryLink: '/gallery/wedding1',
    season: 'Autumn',
    location: 'Caisleáin Óir, Donegal',
  },
  {
    id: 5,
    image: '/Media/PortfolioImages/AmyandBishop.png',
    videos: [
      'https://www.youtube.com/embed/s6qRvsZPZfc'
    ],
    firstLook: 'https://www.youtube.com/embed/s6qRvsZPZfc',
    text: 'Amy and Kevin',
    galleryLink: '/gallery/wedding1',
    season: 'Summer',
    location: 'Blue Haven, Donegal',
  },
  {
    id: 6,
    image: '/Media/PortfolioImages/BrendanandRuth.jpg',
    videos: [
      'https://www.youtube.com/embed/_qEN29QCrwg'
    ],
    firstLook: 'https://www.youtube.com/embed/_qEN29QCrwg',
    text: 'Brendan and Ruth',
    galleryLink: '/gallery/wedding1',
    season: 'Summer',
    location: 'Langtons, Kilkenny',
  },
];

const TestimonialModal = ({ isOpen, onClose, testimonial }) => (
  <Modal isOpen={isOpen} onClose={onClose}>
    <h2 className="text-3xl mb-4 font-serif">{testimonial.text}</h2>
    <p className="text-xl mb-2">{testimonial.location}</p>
    <p className="text-lg mb-6">{testimonial.season}</p>
    
    <div className="flex flex-col gap-8">
      {testimonial.videos.map((videoUrl, index) => (
        <div key={index} className="flex flex-col gap-2">
          <h3 className="text-2xl font-serif">
            {index === 0 && "First Look"}
            {index === 1 && "Highlights"}
            {index === 2 && "Feature Film"}
          </h3>
          <div className="aspect-w-16 aspect-h-9">
            <iframe
              src={videoUrl}
              frameBorder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              sandbox="allow-same-origin allow-scripts allow-popups allow-forms"
              title="YouTube video player"
              className="w-full h-full"
            ></iframe>
          </div>
        </div>
      ))}
    </div>
    
    <Button onClick={onClose} className="w-full bg-olivine-500 hover:bg-olivine-600 mt-6">
      Close
    </Button>
  </Modal>
);

  function Portfolio() {
    const [hovered, setHovered] = useState(null);
    const [selectedTestimonial, setSelectedTestimonial] = useState(null);
  
    return (
      <>
        <div className="container mx-auto justify-center">
          <h2 className="text-3xl font-semibold text-center mb-8">Portfolio</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-4 justify-center">
          {portfolio.map((testimonial) => (
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

export default Portfolio;
