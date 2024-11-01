import React from "react";

const testimonials = [
  {
    quote:
      "Videography was one of our high priorities for our wedding, keen to hold on to the special moments with our favourite people long after the day had passed. When researching who to hire, we were initially disillusioned by the many cookie cutter sample videos as they didn't fit our vision for the day or how we'd like to remember it. Then we found Dronan Media and instantly knew it was exactly what we were looking for, with personality beaming in all of their samples. Ronan was such a pleasure to deal with on the lead up, both full of suggestions and very open to ours. On the day itself, the team were so pleasant and full of happiness, constantly working away in the background. The final product is so much more than a video; the creative vision is nothing short of spectacular and the editing is painstakingly done to perfection. We couldn't be happier with our decision and would highly recommend it to others.",
    author: "Aoife & Michael",
    image: "Media/Testimonials/Testimonial1.jpg",
  },
  {
    quote:
"We chose Dronan Media to capture our wedding day in Galway and Clare. Ronan was quick to respond and put us right at ease in our first conversation. Ronan understood how important it was for us to have fun and enjoy our day. He was so laid back on the day we hardly even noticed he was there! For any camera shy brides or grooms, this would definitely help ease any nerves. Ronan delivered a beautifully crafted first look film, highlight film and cinematic feature film. I honestly couldn’t recommend him enough before we saw any of the videos, but now that I’ve seen them I’m completely speechless. Ronan captures the essence of the day perfectly. His talent is undeniable in not only the way that he manages to capture every emotional moment and incorporate the scenery with his drone but also in his ability to extrapolate the best parts into a wonderful story. Truly a work of art. My husband and I were beyond thrilled with the videos and I love looking back at them reminiscing on the day. Wedding photographs are one thing, but videos do really capture the magic of it all and bring you back in time. I'd highly recommend Dronan Weddings to any engaged couple looking for a talented videographer. A sound, friendly and unassuming guy that is there to do his job without any fuss or messing around. You won't be disappointed..and this is coming from someone that sets pretty high expectations!",    
    author: "Orla & Niall",
    image: "Media/Testimonials/Testimonial2.jpg",
  },
  {
    quote:
      "Myself & my wife Eilís could not recommend Ronan & his team highly enough. From our first meeting he was the epitome of professionalism & quality.  He was able to put us at ease with his knowledge straight away and answered any & all questions we had about logistics for the wedding day. On the day itself Ronan & team were asked discreet as could be but got every single video that we were looking for. We were absolutely blown away by the 2-minute promo video we received - the edits were unbelievable and we wore it out with the amount of times we watched it! The final element that we were so thankful for was the feature length piece which was put together exceptionally well. We couldn't have asked for any more from the experience with Ronan & would recommend him for anyone looking to hire a videographer for their big day.",
    author: "Martin & Eilís",
    image: "Media/Testimonials/Testimonial3.png",
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
