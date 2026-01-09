import React from "react";
import { Linkedin, Facebook, Instagram, Github } from "lucide-react";
import { motion } from "framer-motion";

const socialLinks = [
  { icon: <Linkedin size={20} />, url: "https://www.linkedin.com/in/gideons-piano-0ab179154/", name: "LinkedIn" },
  { icon: <Facebook size={20} />, url: "https://facebook.com/gidxx", name: "Facebook" },
  { icon: <Instagram size={20} />, url: "https://instagram.com/gdnspn", name: "Instagram" },
  { icon: <Github size={20} />, url: "https://github.com/gidxx-dev", name: "GitHub" },
];

const Hero = () => {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white pt-20"
    >
      <div className="container mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-2"
            >
              <p className="text-blue-400 font-semibold text-lg tracking-wide">
                Hello, I'm
              </p>
              <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight">
                Gideons Piano
              </h1>
              <h2 className="text-2xl md:text-3xl text-slate-300 font-medium">
                Making Technology Work for You
              </h2>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="text-lg text-slate-300 leading-relaxed max-w-xl"
            >
              From solving tech problems to building intuitive websites, 
              I help ideas work online — reliably, efficiently, and stress-free.
            </motion.p>

            {/* Social Media & Contact Links */}
            <motion.div
              initial="hidden"
              animate="visible"
              className="flex flex-wrap gap-4 pt-6"
              variants={{
                hidden: {},
                visible: {
                  transition: { staggerChildren: 0.2 },
                },
              }}
            >
              {socialLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.name}
                  className={`bg-slate-700 hover:bg-blue-600 text-white p-3 rounded-full transition-all duration-300 hover:scale-110
                    ${link.name === "GitHub" ? "hover:bg-gray-900" : ""}`} // GitHub standout
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0 },
                  }}
                >
                  {link.icon}
                </motion.a>
              ))}
            </motion.div>

            {/* CTA Button */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.2, duration: 0.8 }}
                    className="pt-6 flex flex-horizontal items-start gap-3.5" // change flex-wrap -> flex-col and items-center -> items-start
                  >
                    <a
                      href="#contact"
                      className="
                        inline-block
                        bg-blue-600 hover:bg-blue-700
                        text-white
                        px-8 py-3
                        rounded-full
                        font-semibold
                        transition-all duration-300
                      "
                    >
                      Let’s Work Together
                    </a>

                    <a
                      href="/resume/Gideons-Piano-Resume.pdf"
                      className="
                        inline-block
                        bg-blue-600 hover:bg-blue-700
                        text-white
                        px-8 py-3
                        rounded-full
                        font-semibold
                        transition-all duration-300
                      
                      "
                    >
                      Download my CV (PDF)
                    </a>
                  </motion.div>
          </div>

          {/* Right Column - Photo */}
          <div className="flex justify-center md:justify-end">
            <div className="relative">
              {/* Floating rotated background */}
              <motion.div
                className="absolute inset-0 bg-blue-600 rounded-2xl transform rotate-6"
                animate={{ rotate: [6, 8, 6, 4, 6] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              ></motion.div>

              <motion.img
                src="/images/511007777_24442161515410074_3661924069600662694_n.jpg" // note the leading slash
                alt="Portrait of Gideons Piano, Web Developer"
                className="relative rounded-2xl shadow-2xl w-full max-w-md object-cover border-4 border-white"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.5 }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
