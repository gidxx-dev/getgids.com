import React from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import About from "../components/About";
import Skills from "../components/Skills";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Services from "../components/Services";
import Testimonials from "../components/Testimonials"
import WhyMe from "../components/WhyMe"


const HomePage = () => {
  return (
    <div className="min-h-screen bg-slate-50">
      <Header />
      <Hero />
      <WhyMe />
      <Services />
      <Skills />
      <Testimonials />
      <About />
      <Contact />
      <Footer />
    </div>
  );
};

export default HomePage;