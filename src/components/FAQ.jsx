import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const faqs = [
  {
    question: "What’s your background in technical support?",
    answer:
      "I’ve worked with companies like CNX, Foundever, IQOR, and QB, helping clients solve technical issues efficiently. My experience ranges from troubleshooting software and hardware to improving workflow systems.",
  },
  {
    question: "Do you have experience in IT solutions beyond support?",
    answer:
      "Yes! I build user-friendly websites, optimize systems, and create visual content to help businesses communicate better and solve real-world problems.",
  },
  {
    question: "What services do you offer?",
    answer:
      "I offer technical support, IT solutions, website development, and creative services like photo and video editing. I focus on delivering practical solutions that make technology simple for clients.",
  },
  {
    question: "What tools or software are you skilled in?",
    answer:
      "For technical support: ticketing systems and troubleshooting tools.\nFor web: HTML, CSS, WordPress.\nFor creative work: Photoshop, Canva, Premiere Pro, Figma.",
  },
  {
    question: "How do you approach a new project?",
    answer:
      "I start by understanding your problem or goal, plan the steps, and execute with clear communication throughout. I tailor my approach based on whether it’s IT, web, or creative work.",
  },
  {
    question: "What is your typical turnaround time?",
    answer:
      "It depends on the project scope. Small tasks can take a day or two, while larger projects like websites or case-study implementations may take a week or more.",
  },
  {
    question: "Can you provide examples of your past work?",
    answer:
      "Absolutely! My Experience / Case Studies section shows projects I’ve worked on, detailing the Situation, Task, Action, and Result for each. I also include screenshots or visuals for web and creative projects.",
  },
  {
    question: "Do you offer support after project delivery?",
    answer:
      "Yes! I provide follow-up assistance and troubleshooting to ensure your solution works smoothly after launch.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faqs" className="bg-slate-50 py-16">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Frequently Asked Questions
        </h2>
        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-slate-200 rounded-lg overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center px-6 py-4 bg-white hover:bg-slate-100 transition-colors font-medium text-left"
              >
                {faq.question}
                {openIndex === index ? (
                  <ChevronUp size={20} />
                ) : (
                  <ChevronDown size={20} />
                )}
              </button>
              {openIndex === index && (
                <div className="px-6 py-4 bg-slate-50 text-slate-700 whitespace-pre-line">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
