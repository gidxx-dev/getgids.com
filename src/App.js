import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import FAQPage from "./Pages/FAQPage";
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/faqs" element={<FAQPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
