import React from "react";

const testimonials = [
  {
    quote:
      "We were lucky enough to have Stephen film our wedding day. He was amazing from start to finish and captured the day so beautifully. Absolutely loved every part of our video’s and would 100% recommend him. Thanks so much Stephen, you're amazing!",
    author: "Jess & Tony",
    image: "media/stills/MAC2.jpg",
  },
  {
    quote:
      "We can’t thank Stephen and Team enough for our amazing wedding videos. From the very first email, the guys were so friendly and professional and captured our day beautifully. The drone footage is breathtaking. Highly recommend Signature Media!",
    author: "Emma & Shane",
    image: "media/stills/MAC3.jpg",
  },
  {
    quote:
      "We can’t thank Stephen and Team enough for our amazing wedding videos. From the very first email, the guys were so friendly and professional and captured our day beautifully. The drone footage is breathtaking. Highly recommend Signature Media!",
    author: "Emma & Shane",
    image: "media/stills/MAC4.jpg",
  },
  // Add more testimonials as needed
];

const TestimonialSection = () => {
  return (
    <section className="bg-gray-100 py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Testimonials</h2>
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className={`flex flex-col md:flex-row items-center mb-12 ${
              index % 2 !== 0 ? "md:flex-row-reverse" : ""
            }`}
          >
            <div className="md:w-1/2 p-4">
              <p className="text-lg italic text-gray-600 mb-4">"{testimonial.quote}"</p>
              <h3 className="text-lg font-semibold text-gray-800">{testimonial.author}</h3>
            </div>
            <div className="relative md:w-1/2 p-4">
              <div className="absolute inset-0 bg-peach-light -z-10 rounded-lg transform scale-105" />
              <img
                src={testimonial.image}
                alt={testimonial.author}
                className="w-full h-auto object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TestimonialSection;
