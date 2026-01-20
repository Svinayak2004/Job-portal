import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
// import JobCard from "./components/JobCard";
// import About from "./pages/About";
// import Contact from "./pages/Contact";

import "./index.css";

const App = () => {
  return (

    <>
      

        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Signup />} />
          
        </Routes>
        <Footer />
      
    </>
  );
};

export default App;
