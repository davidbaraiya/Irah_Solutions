import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Home from "./pages/home/Home";
import Services from "./pages/services/Services";
import Blogs from "./pages/blogs/Blogs";
import DigitalSolution from "./pages/digital-solution/DigitalSolution";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/blog" element={<Blogs />} />
        <Route path="/digital_solution" element={<DigitalSolution />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
