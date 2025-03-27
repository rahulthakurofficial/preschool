import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; 
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import Footer from "./components/Footer/Footer";
import Testimonial from "./components/Testimonial/Testimonial";

const App = () => {
  return (
    // <Router>
    //   <div className="app-container">
    //     <Navbar/>
    //     <div className="content">
    //       <Routes>
    //         <Route path="/" element={<Home />} /> 
    //       </Routes>
          
    //     </div>
    //     {/* <Testimonial/> */}
    //     <Footer />
    //   </div>
    // </Router>
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
    {/* <section id="Testimonial">
      <Testimonial />
    </section> */}
    {/* <section id="Testimonial">
      <Testimonial Reviews={Reviews} /> 
    </section>
    <section id="Feedback">
      <FeedbackForm3D />
    </section>
    <section id="Footer">
      <Footer />
    </section> */}
  </div>
  );
};

export default App;
