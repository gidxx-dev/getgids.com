import React from "react";
import { Card } from "./ui/card";
import { Users, Target, Zap } from "lucide-react";

const About = () => {
  const highlights = [
    {
      icon: Target,
      title: "Problem-First Thinking",
      description:
        "I approach development the same way I approached technical support—by understanding the root cause before jumping to solutions.",
    },
    {
      icon: Users,
      title: "User-Centered Mindset",
      description:
        "Years of direct customer interaction trained me to build interfaces that are intuitive, accessible, and practical for real users.",
    },
    {
      icon: Zap,
      title: "Adaptable & Growth-Oriented",
      description:
        "Comfortable learning new tools, adapting to fast-paced environments, and continuously improving both technical and soft skills.",
    },
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Front-End Developer with a Strong Technical Support Foundation
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            I’m a front-end web developer with a background in technical support,
            where I spent years troubleshooting complex issues, working with CRMs
            like Salesforce, Zendesk, and assisting users in real-world, high-pressure
            environments.
            <br />
            <br />
            Today, I build clean, responsive, and user-focused web interfaces
            using React and Tailwind CSS—bringing the same problem-solving
            mindset, attention to detail, and communication skills into my
            development work.
          </p>
        </div>

        {/* Highlights */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {highlights.map((highlight, index) => {
            const Icon = highlight.icon;
            return (
              <Card
                key={index}
                className="p-8 text-center hover:shadow-xl transition-all duration-300 border-2 hover:border-blue-600"
              >
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon className="text-blue-600" size={32} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">
                  {highlight.title}
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  {highlight.description}
                </p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default About;
