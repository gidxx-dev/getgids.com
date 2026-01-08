import React from "react";
import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { Code, Wrench, Users, Globe } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      category: "Technical Tools",
      icon: Code,
      skills: [
        "Salesforce B2B",
        "Zendesk",
        "Outlook 365",
        "SAP-ECC",
        "QuickBooks Desktop",
        "ReactJS",
        "Tailwind CSS",
        "Case Management Systems",
        "Photoshop",
        "Adobe Lightroom",
        "Capcut",
        "Canva",
        
      ],
      color: "blue",
    },
    {
      category: "Core Competencies",
      icon: Wrench,
      skills: [
        "Technical Troubleshooting",
        "Web Development",
        "Problem Solving",
        "Process Improvement",
        "Case Documentation",
        "Data Analysis",
        "Video and Photo Editing"
      ],
      color: "purple",
    },
    {
      category: "Soft Skills",
      icon: Users,
      skills: [
        "Team Collaboration",
        "Critical Thinking",
        "Clear Communication",
        "Adaptability",
        "Customer Relationship Management",
        "Time Management",
        "Professional Communication",
      ],
      color: "green",
    },
    {
      category: "Languages",
      icon: Globe,
      skills: ["English (Fluent)", "Filipino (Native)"],
      color: "orange",
    },
  ];

  const getColorClasses = (color) => {
    const colorMap = {
      blue: {
        bg: "bg-blue-100",
        text: "text-blue-600",
        badge: "bg-blue-50 text-blue-700 border-blue-200",
      },
      purple: {
        bg: "bg-purple-100",
        text: "text-purple-600",
        badge: "bg-purple-50 text-purple-700 border-purple-200",
      },
      green: {
        bg: "bg-green-100",
        text: "text-green-600",
        badge: "bg-green-50 text-green-700 border-green-200",
      },
      orange: {
        bg: "bg-orange-100",
        text: "text-orange-600",
        badge: "bg-orange-50 text-orange-700 border-orange-200",
      },
    };
    return colorMap[color] || colorMap.blue;
  };

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Skills & Expertise
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Technical proficiencies and professional competencies
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            const colors = getColorClasses(category.color);
            return (
              <Card
                key={index}
                className="p-8 hover:shadow-xl transition-all duration-300 border-2 hover:border-blue-300"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className={`${colors.bg} w-12 h-12 rounded-lg flex items-center justify-center`}>
                    <Icon className={colors.text} size={24} />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900">
                    {category.category}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, idx) => (
                    <Badge
                      key={idx}
                      variant="outline"
                      className={`${colors.badge} px-3 py-1 text-sm`}
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </Card>
            );
          })}
        </div>

        {/* Certification Section */}
          <div className="mt-16 max-w-4xl mx-auto">
            <Card className="p-8 bg-gradient-to-br from-blue-50 to-slate-50 border-2 border-blue-200">
              <div className="flex items-center justify-between flex-wrap gap-4">
                <div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">
                    Certifications
                  </h3>
                  <p className="text-slate-700 text-lg">
                    Lean Six Sigma - White Belt
                  </p>
                </div>
                <a
                  href="https://drive.google.com/drive/folders/1oW2YcPTGIKA800CfqbrlDvy1UEw70NeF"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Badge className="bg-blue-600 text-white hover:bg-blue-700 px-4 py-2 text-base cursor-pointer">
                        Certified
                      </Badge>
                    </a>
              </div>
            </Card>
        </div>
      </div>
    </section>
  );
};

export default Skills;