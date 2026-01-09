import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "./ui/button";
import { useNavigate, useLocation } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id) => {
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        const element = document.getElementById(id);
        element?.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 100);
    } else {
      const element = document.getElementById(id);
      element?.scrollIntoView({ behavior: "smooth", block: "start" });
    }

    setIsMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-sm shadow-md"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">

          {/* Brand */}
          <button
            onClick={() => scrollToSection("hero")}
            className="
              text-2xl font-bold text-slate-900
              hover:text-blue-600 transition-colors
            "
          >
            Gideons Piano
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-10">
            {[
              { label: "About", id: "about" },
              { label: "Services", id: "services" },
              { label: "Skills", id: "skills" },
              { label: "Testimonials", id: "testimonials" },
            ].map((item) => (
              <button
                key={item.label}
                onClick={() => scrollToSection(item.id)}
                className="
                  text-lg font-medium text-slate-700
                  hover:text-blue-600 transition-colors
                "
              >
                {item.label}
              </button>
            ))}

            <button
              onClick={() => navigate("/faqs")}
              className="
                text-lg font-medium text-slate-700
                hover:text-blue-600 transition-colors
              "
            >
              FAQs
            </button>

            <Button
              onClick={() => scrollToSection("contact")}
              className="
                bg-blue-600 hover:bg-blue-700 text-white
                px-6 py-2.5 text-base font-semibold
              "
            >
              Contact Me
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-slate-900 hover:text-blue-600 transition-colors"
          >
            {isMobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 flex flex-col space-y-4">
            {["about", "services", "skills", "testimonials"].map((section) => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className="
                  text-slate-700 text-lg font-medium
                  hover:text-blue-600 transition-colors text-left
                "
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </button>
            ))}

            <Button
              onClick={() => scrollToSection("contact")}
              className="bg-blue-600 hover:bg-blue-700 text-white w-full py-2.5"
            >
              Contact Me
            </Button>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
