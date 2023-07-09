import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Home from "./pages/home/Home";
import Services from "./pages/services/Services";
import Blogs from "./pages/blogs/Blogs";
import Preloader from "./components/Preloader";

const App = () => {
  const [loading, setLoading] = useState(true);

  window.onload = () => {
    setLoading(false);
  };

  return (
    <BrowserRouter>
      {loading ? (
        <Preloader />
      ) : (
        <>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/blog" element={<Blogs />} />
          </Routes>
          <Footer />
        </>
      )}
    </BrowserRouter>
  );
};

export default App;
