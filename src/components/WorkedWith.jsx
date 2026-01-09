import React from "react";
import { motion } from "framer-motion";

const employers = [
  { name: "Concentrix", logo: "/logos/concentrix.svg" },
  { name: "Foundever", logo: "/logos/foundever.svg" },
  { name: "TaskUs", logo: "/logos/taskus.svg" },
  { name: "San Miguel Corporation", logo: "/logos/sanmiguel.svg" },
];

const clients = [
  { name: "QuickBooks", logo: "/logos/quickbooks.svg" },
  { name: "AT&T", logo: "/logos/att.svg" },
  { name: "Postmates", logo: "/logos/postmates.svg" },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 0.95,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const WorkedWith = () => {
  return (
    <section className="pt-8 pb-20 bg-white">
      <div className="container mx-auto px-6">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Companies & Clients
          </h2>

          <div className="w-16 h-1 bg-blue-600 mx-auto mb-6" />

          <p className="text-lg text-slate-700 max-w-2xl mx-auto">
            I’ve worked with enterprise teams and global clients across customer
            support and technical operations.
          </p>
        </motion.div>

        {/* Employers */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-14"
        >
          <p className="text-center text-xs uppercase tracking-wider text-slate-400 mb-8">
            Employers
          </p>

          <div className="flex flex-wrap justify-center items-center gap-14">
            {employers.map((company, index) => (
              <motion.img
                key={index}
                variants={itemVariants}
                whileHover={{
                  scale: 1.08,
                  y: -2,
                }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                src={company.logo}
                alt={company.name}
                className="
                  h-12 md:h-14
                  max-w-[190px]
                  opacity-90
                  cursor-pointer
                "
              />
            ))}
          </div>
        </motion.div>

        {/* Clients */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <p className="text-center text-xs uppercase tracking-wider text-slate-400 mb-8">
            Clients / Accounts Supported
          </p>

          <div className="flex flex-wrap justify-center items-center gap-14">
            {clients.map((client, index) => (
              <motion.img
                key={index}
                variants={itemVariants}
                whileHover={{
                  scale: 1.08,
                  y: -2,
                }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                src={client.logo}
                alt={client.name}
                className="
                  h-10 md:h-12
                  max-w-[160px]
                  opacity-90
                  cursor-pointer
                "
              />
            ))}
          </div>
        </motion.div>

        {/* Legal Note */}
        <p className="text-center text-xs text-slate-400 mt-14">
          Logos are used for identification purposes only. All trademarks belong
          to their respective owners.
        </p>

      </div>
    </section>
  );
};

export default WorkedWith;
