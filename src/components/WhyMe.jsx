import React from "react";




const WhyMe = () => {
  return (
    <section id="why-me" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Why Work With Me
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Passion, problem-solving, and creativity in every project
          </p>
        </div>

        {/* Intro Text */}
        <div className="max-w-4xl mx-auto text-center mb-12">
          <p className="text-lg text-slate-600 leading-relaxed">
            I’m passionate about technology and creativity, with experience
            spanning technical support, web development, and multimedia
            editing. My goal is to deliver solutions that are practical,
            efficient, and visually engaging—helping businesses and individuals
            thrive in a digital world.
          </p>
        </div>

       
        
      </div>
    </section>
  );
};

export default WhyMe;
