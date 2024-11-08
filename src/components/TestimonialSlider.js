import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


const TestimonialSlider = () => {

const testimonials = [
    { name: 'Hughie & Andrea', text: 'Ronan was so professional, his ideas and suggestions were insane.' },
    { name: 'Jane & Barry', text: 'Ronan truly went above and beyond and captured everything and more.' },
    { name: 'Mags & Conor', text: 'Ronan was utterly professional as well as being fun, making us laugh and feel relaxed for the entire day' },
    { name: 'Eilis & Martin', text: 'We were absolutely blown away by the Video we received, we wore it out with the amount of times we watched it!'},
    { name: 'Aoife & Michael', text: 'Ronan was such a pleasure to deal with on the lead up, both full of suggestions and very open to ours.'},
    { name: 'Orla & Niall', text: 'Ronan manages to capture every emotional moment and incorporate the scenery with his drone and also crafts the best parts into a wonderful story'},
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
  <h2 className=" text-3xl md:text-4xl font-bold mb-8 text-center">What Couples Say</h2>
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