import React, { useState, useEffect } from "react";
import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { ExternalLink, Github, X } from "lucide-react";

const projects = [
  {
    title: "React Portfolio Website",
    description:
      "A modern React portfolio featuring responsive design, smooth animations, and clean UI architecture.",
    gif: "/gifs/portfolio-demo.gif",
    tech: ["React", "Tailwind CSS", "Framer Motion"],
    live: "https://getgids.netlify.app",
    github: null,
  },
  {
    title: "UI Component Showcase",
    description:
      "Reusable UI components built with Tailwind and modern React patterns.",
    gif: "/gifs/ui-components-demo.gif",
    tech: ["React", "Tailwind CSS"],
    live: "#",
    github: null,
  },
];

const Projects = () => {
  const [activeProject, setActiveProject] = useState(null);

  // Lock scroll when modal is open
  useEffect(() => {
    document.body.style.overflow = activeProject ? "hidden" : "auto";
  }, [activeProject]);

  return (
    <section id="projects" className="py-20 bg-slate-50">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Projects
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Selected projects showcasing my frontend development journey
          </p>
        </div>

        {/* Project Cards */}
        <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
            >
              {/* GIF Preview */}
              <button
                onClick={() => setActiveProject(project)}
                className="relative bg-slate-100 overflow-hidden group w-full"
              >
                <img
                  src={project.gif}
                  alt={project.title}
                  className="w-full aspect-video object-contain transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="text-white font-semibold text-sm tracking-wide">
                    Click to Preview
                  </span>
                </div>
              </button>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-2xl font-bold text-slate-900 mb-2">
                  {project.title}
                </h3>
                <p className="text-slate-600 mb-4">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((item, i) => (
                    <Badge key={i} variant="outline">
                      {item}
                    </Badge>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-4">
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-blue-600 font-medium hover:underline"
                  >
                    Live Demo <ExternalLink size={18} />
                  </a>

                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-slate-600 font-medium hover:underline"
                    >
                      Code <Github size={18} />
                    </a>
                  )}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* MODAL */}
      {activeProject && (
        <div className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center px-4">
          <div className="relative bg-white rounded-xl max-w-5xl w-full overflow-hidden shadow-2xl">
            {/* Close Button */}
            <button
              onClick={() => setActiveProject(null)}
              className="absolute top-4 right-4 bg-white rounded-full p-2 hover:bg-slate-100 transition"
              aria-label="Close preview"
            >
              <X size={20} />
            </button>

            {/* Modal Content */}
            <div className="p-6">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">
                {activeProject.title}
              </h3>

              <img
                src={activeProject.gif}
                alt={activeProject.title}
                className="w-full rounded-lg border aspect-video object-contain bg-slate-100"
              />

              <p className="text-slate-600 mt-4">
                {activeProject.description}
              </p>

              <div className="flex flex-wrap gap-2 mt-4">
                {activeProject.tech.map((item, i) => (
                  <Badge key={i} variant="outline">
                    {item}
                  </Badge>
                ))}
              </div>

              <div className="flex gap-6 mt-6">
                <a
                  href={activeProject.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-blue-600 font-medium hover:underline"
                >
                  Visit Live Site <ExternalLink size={18} />
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;
