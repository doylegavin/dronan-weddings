// src/pages/Home.js
import React from 'react';
import PackagesSection from '../components/PackagesSection';
import Elopements from '../components/Elopement';
import Footer from '../components/Footer';
import ContactButton from '../components/ContactButton';

const Testimonials = React.lazy(() => import('../components/Testimonials'));

 function Home({ openNavigation }) {
  return (
    <>
      <div className="overflow-hidden">
        {/* Header is now rendered in App.js, not here */}
      </div>
      <div>
        <header className="relative w-full h-screen overflow-hidden">
          <video className="absolute top-0 left-0 w-full h-full object-cover" autoPlay loop muted>
            <source src="/Media/Videos/HomeVideo.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className= 'relative z-10 flex flex-col items-center justify-center w-full h-full bg-black bg-opacity-50'>
            <h1 className= {`${openNavigation ? 'hidden' : 'block'} text-white text-5xl md:text-7xl font-bold`}>
              Dronan Videography
            </h1>
            <br/>
            <p className={`${openNavigation ? 'hidden' : 'block'} text-white  font-bold`}>Making wedding's simple</p><br/>
           
          </div>
        </header>
        <section className="py-12 bg-gray-200">
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
</section>
<hr className="border-t border-gray-300" />

        <section className="py-12 " id='testimonials'>
         
            <Testimonials />
          
        </section>
        <PackagesSection />
        <Elopements />

      </div>
      <div>
        <ContactButton />
      </div>
      <div><Footer /></div>
      
    </>
    
  );
}

export default Home;