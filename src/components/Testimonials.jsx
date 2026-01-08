import React from "react";
import { Card } from "./ui/card";
import { QuoteIcon } from "lucide-react";
import { Badge } from "./ui/badge";

const testimonials = [
  {
    name: "John Doe",
    role: "Startup Founder",
    company: "Tech Solutions Inc.",
    feedback:
      "Gideons was incredibly professional and responsive. He solved our technical issues quickly and delivered exactly what we needed. Highly recommended!",
    tag: "Technical Support",
  },
  {
    name: "Sarah Lim",
    role: "Marketing Manager",
    company: "Creative Agency PH",
    feedback:
      "Working with Gideons was smooth and efficient. His attention to detail and creativity really elevated our website.",
    tag: "Web Development",
  },
  {
    name: "Michael Reyes",
    role: "Content Creator",
    company: "Freelance",
    feedback:
      "Excellent video and photo editing skills. He understands instructions well and always delivers on time.",
    tag: "Creative Services",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-20 bg-slate-50">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Client Feedbacks
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            What clients say about working with me
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="p-8 hover:shadow-xl transition-all duration-300 border-t-4 border-t-blue-600"
            >
              <div className="flex flex-col h-full">
                {/* Quote Icon */}
                <div className="bg-blue-100 w-14 h-14 rounded-full flex items-center justify-center mb-6">
                  <QuoteIcon className="text-blue-600" size={28} />
                </div>

                {/* Feedback */}
                <p className="text-slate-600 mb-6 leading-relaxed flex-1">
                  “{testimonial.feedback}”
                </p>

                {/* Client Info */}
                <div className="border-t pt-4">
                  <h3 className="font-bold text-slate-900">
                    {testimonial.name}
                  </h3>
                  <p className="text-sm text-slate-500">
                    {testimonial.role} • {testimonial.company}
                  </p>

                  <Badge
                    variant="outline"
                    className="mt-3 bg-white text-slate-700 border-slate-300"
                  >
                    {testimonial.tag}
                  </Badge>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
