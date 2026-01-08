import React from "react";
import { Card } from "./ui/card";
import { Users, Target, Zap } from "lucide-react";

const About = () => {
  const highlights = [
    {
      icon: Target,
      title: "Problem Solver",
      description:
        "Expert in troubleshooting complex technical issues with patience and professionalism",
    },
    {
      icon: Users,
      title: "Customer Focused",
      description:
        "Strong customer service background with excellent communication skills",
    },
    {
      icon: Zap,
      title: "Adaptable",
      description:
        "Comfortable working in fast-paced and dynamic environments with high-pressure situations",
    },
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            About Me
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            I am a Technical Support professional who combines problem-solving expertise with web development and video 
            & photo editing to create efficient, user-friendly, and visually engaging solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {highlights.map((highlight, index) => {
            const Icon = highlight.icon;
            return (
              <Card
                key={index}
                className="p-8 text-center hover:shadow-xl transition-shadow duration-300 border-2 hover:border-blue-600"
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