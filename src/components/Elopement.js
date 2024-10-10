import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import InteractiveMap from './InteractiveMap';

const Elopements = () => {
  const elopementLocations = [
    {
      name: 'Cliffs of Moher',
      lat: 52.9715,
      lng: -9.4265,
      description: 'Stunning cliffs overlooking the Atlantic Ocean',
      images: [
        '/Media/Elopments/COM1.jpeg',
        '/Media/Elopments/COM2.jpeg',
        '/Media/Elopments/COM3.jpeg',
      ],
      image: 
        '/Media/Elopments/COM1.jpeg',
    },
    {
      name: 'Connemara',
      lat: 53.5181,
      lng: -9.9767,
      description: 'Rugged landscape with beautiful mountains and lakes',
      images: [
        '/Media/Elopments/Connemara1.jpeg',
        '/Media/Elopments/Connemara2.jpeg',
        '/Media/Elopments/Connemara3.jpeg',
      ],
      image: 
        '/Media/Elopments/Connemara1.jpeg',
    },
    {
      name: 'Aran Islands',
      lat: 53.1272,
      lng: -9.7481,
      description: 'Picturesque islands with ancient ruins and stunning coastal views',
      images: [
        '/Media/Elopments/Aran1.jpeg',
        '/Media/Elopments/Aran2.jpeg',
        '/Media/Elopments/Aran3.jpeg',
      ],
      image: 
        '/Media/Elopments/Aran1.jpeg',
    },
  ];


  const settings = {
    dots: false,
    infinite: true,
    speed: 8000,
    slidesToShow: 2.5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: "linear",
    pauseOnHover: false,
    arrows: false,
    responsive: [{
        breakpoint: 1024, // For screens smaller than 1024px
        settings: {
          slidesToShow: 2.5,
        },
      },
      {
        breakpoint: 768, // For screens smaller than 768px
        settings: {
          slidesToShow: 1.2,
        },
      },
      {
        breakpoint: 480, // For screens smaller than 480px
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const nestedSettings = {
    dots: false,
    infinite: true,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    pauseOnHover: false,

  };

  return (
    <div className=" min-h-screen">
      {/* Elopement Section */}
      <section id="elopement" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-8 text-center">Elope in the West of Ireland</h2>
          <p className="text-lg text-center mb-12">
            Discover the most beautiful locations for your elopement in the West of Ireland.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {elopementLocations.map((location, index) => (
              <div key={index} className="bg-gray-100 p-6 rounded-lg shadow-md">
                <h3 className="text-2xl font-semibold mb-4">{location.name}</h3>
                <Slider {...nestedSettings}>
                  {location.images.map((image, imgIndex) => (
                    <div key={imgIndex}>
                      <img src={image} alt={location.name} className="w-full h-48 object-cover mb-4 rounded-lg" />
                    </div>
                  ))}
                </Slider>
              </div>
            ))}
          </div>
        </div>
      </section>

      

      <section className="py-12 flex justify-center">
  <div className="container mx-auto text-center">
    <h2 className="text-4xl font-bold mb-8">Need some Inspiration?</h2>
    <p className="text-lg mb-12">
      Here are some of our favourite locations for your elopement in the West of Ireland
    </p>
    <div className="z-10 rounded-lg overflow-hidden shadow-md w-full md:w-3/4 mx-auto">
      <InteractiveMap locations={elopementLocations} />
    </div>
  </div>
</section> 

      {/* Packages Section */}
      <section id="packages" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-8 text-center">Elopement Packages</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {['Basic', 'Standard', 'Premium'].map((packageName, index) => (
              <div key={index} className="bg-gray-100 p-6 rounded-lg shadow-md">
                <h3 className="text-2xl font-semibold mb-4">{packageName} Package</h3>
                <ul className="list-disc list-inside mb-6">
                  <li>Feature 1</li>
                  <li>Feature 2</li>
                  <li>Feature 3</li>
                </ul>
                <button className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition duration-300">
                  Learn More
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Elopements;