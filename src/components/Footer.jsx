import React from "react";
import { Linkedin, Facebook, Instagram, Heart } from "lucide-react";
import { motion } from "framer-motion"; // added for smooth hover effects

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <footer className="bg-slate-900 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* About Column */}
          <div className="mb-6 md:mb-0">
            <h3 className="text-xl font-bold mb-4">Gideons Piano</h3>
            <p className="text-slate-400 leading-relaxed">
              Technical Support Professional specializing in troubleshooting,
              customer service, and IT solutions.
            </p>
          </div>

          {/* Quick Links Column */}
          <div className="mb-6 md:mb-0">
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => scrollToSection("about")}
                  className="text-slate-400 hover:text-blue-400 transition-colors"
                  aria-label="Go to About section"
                >
                  About
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("experience")}
                  className="text-slate-400 hover:text-blue-400 transition-colors"
                  aria-label="Go to Services section"
                >
                  Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("skills")}
                  className="text-slate-400 hover:text-blue-400 transition-colors"
                  aria-label="Go to Skills section"
                >
                  Skills
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("contact")}
                  className="text-slate-400 hover:text-blue-400 transition-colors"
                  aria-label="Go to Contact section"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Connect Column */}
          <div>
            <h3 className="text-xl font-bold mb-4">Connect</h3>
            <div className="flex gap-4 mb-4">
              {[{
                icon: <Linkedin size={20} />,
                url: "https://www.linkedin.com/in/gideons-piano-0ab179154/",
                label: "LinkedIn"
              },{
                icon: <Facebook size={20} />,
                url: "https://facebook.com/gidxx",
                label: "Facebook"
              },{
                icon: <Instagram size={20} />,
                url: "https://instagram.com/gdnspn",
                label: "Instagram"
              }].map(({icon, url, label}) => (
                <motion.a
                  key={label}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-slate-800 text-white p-3 rounded-full"
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                  aria-label={label}
                >
                  {icon}
                </motion.a>
              ))}
            </div>
            <p className="text-slate-400">
              <a
                href="mailto:gideonspiano11@gmail.com"
                className="hover:text-blue-400 transition-colors"
              >
                gideonspiano11@gmail.com
              </a>
            </p>

            {/* Optional CTA Button */}
            <a
              href="#contact"
              className="mt-4 inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full font-semibold transition-all duration-300"
            >
              Let’s Work Together
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-800 pt-8 text-center">
          <p className="text-slate-400 flex items-center justify-center gap-2">
            © {currentYear} Gideons Piano. Made with{" "}
            <Heart className="text-red-500" size={16} fill="currentColor" /> for
            connecting professionals.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
