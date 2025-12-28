import React from "react";
import { Button } from "./ui/button";
import { ArrowRight, Download, Linkedin, Facebook, Instagram } from "lucide-react";

const Hero = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const handleDownloadResume = () => {
    // Local resume path in the public or /assets folder
    window.open("/assets/Gideon_Piano_Resume.pdf", "_blank");
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white pt-20"
    >
      <div className="container mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="space-y-6">
            <div className="space-y-2">
              <p className="text-blue-400 font-semibold text-lg tracking-wide">
                Hello, I'm
              </p>
              <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight">
                Gideons Piano
              </h1>
              <h2 className="text-2xl md:text-3xl text-slate-300 font-medium">
                Technical Support Professional
              </h2>
            </div>

            <p className="text-lg text-slate-300 leading-relaxed max-w-xl">
              Experienced in resolving complex technical issues, delivering
              exceptional customer support, and thriving in dynamic environments.
              Specialized in troubleshooting, customer relationship management,
              and team collaboration.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <Button
                onClick={() => scrollToSection("experience")}
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-6 text-base font-medium"
              >
                View Experience
                <ArrowRight className="ml-2" size={18} />
              </Button>
              <Button
                onClick={handleDownloadResume}
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-slate-900 px-6 py-6 text-base font-medium"
              >
                <Download className="mr-2" size={18} />
                Download Resume
              </Button>
            </div>

            {/* Social Media Links */}
            <div className="flex gap-4 pt-6">
              <a
                href="https://www.linkedin.com/in/gideons-piano-0ab179154/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-slate-700 hover:bg-blue-600 text-white p-3 rounded-full transition-all duration-300 hover:scale-110"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="https://facebook.com/gidxx"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-slate-700 hover:bg-blue-600 text-white p-3 rounded-full transition-all duration-300 hover:scale-110"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a
                href="https://instagram.com/gdnspn"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-slate-700 hover:bg-blue-600 text-white p-3 rounded-full transition-all duration-300 hover:scale-110"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Right Column - Photo */}
          <div className="flex justify-center md:justify-end">
            <div className="relative">
              <div className="absolute inset-0 bg-blue-600 rounded-2xl transform rotate-6"></div>
              {/* Use local asset: place your photo at public/assets/gideon_photo.jpg or src/assets and adjust path */}
              <img
                src="/assets/gideon_photo.jpg"
                alt="Gideons Piano"
                className="relative rounded-2xl shadow-2xl w-full max-w-md object-cover border-4 border-white"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;