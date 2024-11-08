import React from "react";

const testimonials = [
  {
    heading: "Why Donegal?",
    p: "Donegal is Ireland’s forgotten county, with its sweeping views, unspoiled landscapes and rich history. From the iconic Slieve League cliffs to hidden beaches and ancient ruins, every corner offers a breathtaking setting for your special day. The privacy and intimacy of Donegal’s remote locations create the ideal backdrop for couples seeking a quiet, romantic celebration. With its wide array of stunning venues; from castles to cliffsides, we can tailor your elopement to match your unique vision.",
    image: "Media/Stills/MAC5.jpg",
  },
  {
    heading: "Bespoke Photography & Videography",
    p: "Capturing the magic of your elopement in Donegal is at the heart of what we do. Our bespoke photography and videography services ensure that every moment from the quiet, intimate glances to the dramatic scenery, is preserved in a way that reflects your story. Whether you envision cinematic drone footage or softly lit portraits against a backdrop of natural beauty, we’ll work with you to create memories you’ll cherish forever.",
    image: "Media/Stills/MAC10.jpg",
  },
  {
    heading: "Stress-Free Planning",
    p: "Planning your elopement abroad doesn’t have to be complicated. With our local expertise, we'll help you find the most picturesque spots, recommend trusted vendors and ensure that every detail is perfectly taken care of. Whether it’s a cliffside ceremony or a cozy woodland escape, we’ll be there to help create an effortless, enchanting day.",
    image: "Media/Stills/MAC11.jpg",
  }, 
  {
    heading: "Your Dream Elopement Awaits",
    p: "For couples looking for an intimate wedding experience surrounded by Ireland’s most stunning scenery, Donegal offers everything you could dream of. Reach out today, and let’s start planning your bespoke elopement in this magical part of the world.",
    image: "Media/Stills/MAC12.jpg",
  },
  // Add more testimonials as needed
];

const ElopementTestimonials = () => {
  return (
    <section className="bg-gray-100 py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Elopements</h2>
      
        <div
           
            className='flex flex-col md:flex-row-reverse items-center mb-12' >
            <div className="md:w-1/2 p-4">
            <h2 className="text-lg font-bold mb-4">Eloping to Donegal: Your Dream Wedding in Ireland’s Wild Beauty</h2>
            <p className="text-lg  ">Imagine saying your vows surrounded by the rugged beauty of Donegal’s coastlines, dramatic cliffs, and mystical glens. Whether you seek an intimate, off-the-beaten-path ceremony or a fairytale wedding, Donegal is the perfect destination for a truly unforgettable elopement.</p>
            </div>
            <div className="relative md:w-1/2 p-4">
              <div className="absolute inset-0 bg-peach-light -z-10 rounded-lg transform scale-105" />
              <iframe
              src="https://www.youtube.com/embed/ZMZFRsem678"
              frameBorder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              sandbox="allow-same-origin allow-scripts allow-popups allow-forms"
              title="YouTube video player"
              className="w-full h-48 lg:h-80 object-cover rounded-lg shadow-lg"
            ></iframe>
            </div>
          </div>





        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className={`flex flex-col md:flex-row items-center mb-12 ${
              index % 2 !== 0 ? "md:flex-row-reverse" : ""
            }`}
          >
            <div className="md:w-1/2 p-4">
              <h2 className="text-lg font-bold mb-4">{testimonial.heading}</h2>
              <p className="text-lg  ">{testimonial.p}</p>
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

export default ElopementTestimonials;
