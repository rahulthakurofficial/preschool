import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; 
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import Footer from "./components/Footer/Footer";

const App = () => {
  return (
    <Router>
      <div className="app-container">
        <Navbar/>
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} /> 
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
