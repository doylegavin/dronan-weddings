import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


const TestimonialSlider = () => {

const testimonials = [
    { name: 'Sarah & John', text: 'Our elopement video was absolutely magical!' },
    { name: 'Emily & Mike', text: 'Captured our special day perfectly in the Irish landscape.' },
    { name: 'Gavin & Ronan', text: 'The most amazing experience we could ever ask for' },
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


  return (
    <>
{/* Testimonials Section */}
<section id="testimonials" className="py-16  w-full ">
<div className="w-full ">
  <h2 className="text-4xl font-bold mb-8 text-center">What Couples Say</h2>
  <Slider {...settings}>
    {testimonials.map((testimonial, index) => (
      <div key={index} className="px-4 pt-4 pb-8">
        <div className="bg-white p-9 rounded-lg shadow-xl max-w-xl md:min-h-52 lg:min-h-40">
          <p className="text-lg mb-4">"{testimonial.text}"</p>
          <p className="font-semibold fixed">- {testimonial.name}</p>
        </div>
      </div>
    ))}
  </Slider>
</div>
</section>
</>
  );

}

export default TestimonialSlider;