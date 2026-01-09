import React from "react";
import Header from "../components/Header";
import FAQ from "../components/FAQ";
import Footer from "../components/Footer";

const FAQPage = () => {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      <Header />

      {/* Add spacing from header */}
      <main className="flex-1 container mx-auto px-6 py-20">
        <FAQ />
      </main>

      <Footer />
    </div>
  );
};

export default FAQPage;
