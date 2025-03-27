import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; 
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import Footer from "./components/Footer/Footer";


const App = () => {
  return (
   
    <div>
    <section id="Navbar">
      <Navbar />
    </section>
    <section id="Home">
      <Home />
    </section>
    <section id="Footer">
      <Footer />
    </section>
    
  </div>
  );
};

export default App;
