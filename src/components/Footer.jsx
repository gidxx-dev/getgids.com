import React from "react";
import { Linkedin, Facebook, Instagram, Heart } from "lucide-react";

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
          <div>
            <h3 className="text-xl font-bold mb-4">Gideons Piano</h3>
            <p className="text-slate-400 leading-relaxed">
              Technical Support Professional specializing in troubleshooting,
              customer service, and IT solutions.
            </p>
          </div>

          {/* Quick Links Column */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => scrollToSection("about")}
                  className="text-slate-400 hover:text-blue-400 transition-colors"
                >
                  About
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("experience")}
                  className="text-slate-400 hover:text-blue-400 transition-colors"
                >
                  Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("skills")}
                  className="text-slate-400 hover:text-blue-400 transition-colors"
                >
                  Skills
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("contact")}
                  className="text-slate-400 hover:text-blue-400 transition-colors"
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
              <a
                href="https://www.linkedin.com/in/gideons-piano-0ab179154/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-slate-800 hover:bg-blue-600 text-white p-3 rounded-full transition-all duration-300 hover:scale-110"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="https://facebook.com/gidxx"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-slate-800 hover:bg-blue-600 text-white p-3 rounded-full transition-all duration-300 hover:scale-110"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a
                href="https://instagram.com/gdnspn"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-slate-800 hover:bg-blue-600 text-white p-3 rounded-full transition-all duration-300 hover:scale-110"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
            </div>
            <p className="text-slate-400">
              <a
                href="mailto:gideonspiano11@gmail.com"
                className="hover:text-blue-400 transition-colors"
              >
                gideonspiano11@gmail.com
              </a>
            </p>
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