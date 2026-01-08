import React from "react";
import { Card } from "./ui/card";
import { Wrench, Code2, Video } from "lucide-react";
import { Badge } from "./ui/badge";

const services = [
  {
    icon: <Wrench size={28} />,
    title: "Technical Support & Troubleshooting",
    description:
      "Reliable technical support to quickly diagnose and resolve software, hardware, and system issues.",
    skills: ["Customer Support", "Problem-Solving", "Windows & macOS", "Network Troubleshooting"],
  },
  {
    icon: <Code2 size={28} />,
    title: "Web Development",
    description:
      "Responsive, user-friendly websites built with clean code and optimized performance.",
    skills: ["React.js", "JavaScript", "HTML/CSS", "Tailwind CSS"],
  },
  {
    icon: <Video size={28} />,
    title: "Video & Photo Editing",
    description:
      "High-quality video and visual content that enhances branding and storytelling.",
    skills: ["Photoshop", "Lightroom", "Canva", "CapCut", "Vegas Pro"],
  },
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-slate-50">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">
            Services I Offer
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Practical solutions that combine technology, creativity, and reliability
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-8 md:grid-cols-3">
          {services.map((service, index) => (
            <Card
              key={index}
              className="p-8 text-center transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl border-t-4 border-t-blue-600 bg-white"
            >
              {/* Icon */}
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 text-blue-600">
                {service.icon}
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-slate-900 mb-3">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-slate-600 mb-6 leading-relaxed">
                {service.description}
              </p>

              {/* Skills */}
              <div className="flex flex-wrap justify-center gap-2">
                {service.skills.map((skill, i) => (
                  <Badge
                    key={i}
                    variant="outline"
                    className="bg-white text-slate-700 border-slate-300"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
