// src/pages/Home.js
import React, { useEffect, useState, Suspense, useMemo } from 'react';
import PackagesSection from '../components/PackagesSection';
import Elopements from '../components/Elopement';
import Footer from '../components/Footer';
import ContactButton from '../components/ContactButton';
import TestimonialSlider from '../components/TestimonialSlider';
import About from '../components/About';
import Contact from '../components/Contact';
import Testimonials from '../components/Testimonials';

const Portfolio = React.lazy(() => import('../components/Portfolio'));

const images = [
  '/Media//LandingPage/LandingPage1.jpg',
  '/Media//LandingPage/LandingPage2.jpg',
  '/Media//LandingPage/LandingPage3.jpg',
  '/Media//LandingPage/LandingPage4.jpg',
  '/Media//LandingPage/LandingPage5.jpg',
  '/Media//LandingPage/LandingPage6.jpg',
  '/Media//LandingPage/LandingPage7.jpg',
  '/Media//LandingPage/LandingPage8.jpg',
  '/Media//LandingPage/LandingPage9.jpg',
  '/Media//LandingPage/LandingPage10.jpg',
  '/Media//LandingPage/LandingPage11.jpg',
  '/Media//LandingPage/LandingPage12.jpg',
  '/Media//LandingPage/LandingPage13.jpg',
  '/Media//LandingPage/LandingPage14.jpg',
  '/Media//LandingPage/LandingPage15.jpg',
  '/Media//LandingPage/LandingPage16.jpg',
  '/Media//LandingPage/LandingPage17.jpg',
  
];

function Home({ openNavigation }) {
  const [canAutoplay, setCanAutoplay] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Check if video can autoplay
  useEffect(() => {
    const video = document.createElement('video');
    video.src = '/Media/Videos/HomeVideo.mp4';
    video.muted = true;
    video.play().then(() => {
      setCanAutoplay(true);
    }).catch(() => {
      setCanAutoplay(false);
    });
  }, []);

  // Cycle through the images at a set interval
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Change every 5 seconds

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, []);

  const headerContent = useMemo(() => (
    <div className="relative z-10 flex flex-col items-center justify-center w-full h-full  ">
      <h1 className={`${openNavigation ? 'hidden' : 'block'} text-white z-20 text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-thin font-sans pb-10  `}>
        DRONAN WEDDINGS 
      </h1>
      <br />
      
      <br />
    </div>
  ), [openNavigation]);

  return (
    <>
      <section id="home" >
      <div className="overflow-hidden pt-24" >
        {/* Header is now rendered in App.js, not here */}
      </div>
      </section>
      <div>
        
        <header className="relative w-full h-screen overflow-hidden">
          {canAutoplay ? (
            <video className="absolute top-0 left-0 w-full h-full object-cover" autoPlay loop muted>
              <source src="/Media/Videos/HomeVideo.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          ) : (
            <div className="absolute top-0 left-0 w-full h-full object-cover slideshow">
              {images.map((src, index) => (
                <img
                  key={index}
                  src={src}
                  alt={`Slide ${index}`}
                  className={`slide ${index === currentImageIndex ? 'active' : ''}`}
                />
              ))}
            </div>
          )}
          {headerContent}
        </header>

       {/*  <section className="py-12 bg-gray-200">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="flex flex-col items-center justify-center md:col-span-1 lg:col-span-1">
                <img src="/Media/Stills/MAC2.jpg" alt="Image 1" className="w-48 h-48 rounded-full" />
                <p className="mt-4 text-center">Wedding Highlights</p>
              </div>

              <div className="flex flex-col items-center justify-center md:col-span-1 lg:col-span-1">
                <img src="/Media/Stills/MAC3.jpg" alt="Image 2" className="w-48 h-48 rounded-full" />
                <p className="mt-4 text-center">Drone Footage</p>
              </div>

              <div className="flex flex-col items-center justify-center md:col-span-2 lg:col-span-1">
                <img src="/Media/Stills/MAC4.jpg" alt="Image 3" className="w-48 h-48 rounded-full" />
                <p className="mt-4 text-center">Elopements</p>
              </div>
            </div>
          </div>
        </section> */}

        <hr className="border-t border-gray-300" />

        <section className="py-12" id="portfolio">
          <Suspense fallback={<div>Loading...</div>}>
            <Portfolio />
          </Suspense>
        </section>
   <section id="packages">
        <PackagesSection  />
        </section>
        <section id="testimonials">
        <TestimonialSlider  />
        </section>
{/* About section */}

       {/*  <Elopements /> */}
      </div>
      <section id="Testimonials" ><Testimonials  /></section>
      <section id="about" ><About  /></section>
      <section id="contact" ><Contact  /></section>
    
      <div>
      {!openNavigation && <ContactButton />}
      </div>
      <div><Footer /></div>
    </>
  );
}

export default Home;
