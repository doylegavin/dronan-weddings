// src/pages/Home.js
import React from 'react';

const About = () => {
  return (
    <section className="py-12 bg-white" id="About">
      <div className="container mx-auto text-center">
        <img src='/Media/Stills/Dronan.jpg' alt='Dronan' className='rounded-3xl w-1/2 h-auto mx-auto object-cover' />
        <h1 className="text-3xl font-bold mt-8">About Me</h1>
        <h2 className="text-xl mt-4">Hi, I'm Ronan, a videographer based in the West of Ireland</h2>
        <p className="text-lg mt-4">
        I capture weddings in a natural, cinematic style, focusing on the real moments and emotions of your day. My approach is relaxed and unobtrusive with very minimal posing, letting you enjoy every moment while I create a visual story you'll treasure forever

        </p>
      </div>
    </section>
  );
}

export default About;
