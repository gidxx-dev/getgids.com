import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

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
      "I offer technical support, IT solutions, website development, and creative services like photo and video editing.",
  },
  {
    question: "What tools or software are you skilled in?",
    answer:
      "For support: Salesforce, Zendesk, SAP-ECC.\nFor web: HTML, CSS, ReactJS, Tailwind.\nFor creative: Photoshop, Lightroom, Canva, Capcut.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <motion.section
      id="faqs"
      className="bg-slate-50 py-16"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Frequently Asked Questions
        </h2>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                className="border border-slate-200 rounded-lg overflow-hidden bg-white"
              >
                {/* Question */}
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex justify-between items-center px-6 py-4 hover:bg-slate-100 transition-colors font-medium text-left"
                >
                  {faq.question}

                  <motion.span
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ChevronDown size={20} />
                  </motion.span>
                </button>

                {/* Answer */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: "easeInOut" }}
                      className="px-6 bg-slate-50 text-slate-700 whitespace-pre-line overflow-hidden"
                    >
                      <div className="py-4">{faq.answer}</div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </motion.section>
  );
};

export default FAQ;
