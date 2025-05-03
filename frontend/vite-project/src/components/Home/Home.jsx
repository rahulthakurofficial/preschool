import React, { useState, useRef, useEffect } from "react";
import "./Home.scss";
import gigglezz from "/src/assets/gigglezz-logo.png";
import admn from "/src/assets/admn.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faStarHalfAlt } from "@fortawesome/free-solid-svg-icons";
import searchIcon from "../../assets/information.png";
import amenitiesIcon from "../../assets/amenities.png";
import cctvImg from "../../assets/cctv.png";
import daycareImg from "../../assets/daycare.png";
import sportsImg from "../../assets/sports.png";
import minAgeImg from "../../assets/min-age.png";
import maxAgeImg from "../../assets/max-age.png";
import mealsImg from "../../assets/healthy-meal.png";
import playgroundImg from "../../assets/playground.png";
import teacherImg from "../../assets/teacher.png";
import transportImg from "../../assets/transport.png";
import musicImg from "../../assets/fan.png";
import diningImg from "../../assets/dining.png";
import artImg from "../../assets/art.png";
import footerpreschool from "../../assets/footerpreschool.jpg";
import preschoolimg from "../../assets/preschoolimg.avif";
import preschoolimages from "../../assets/preschoolimages.jpg";

import {
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaHeart,
  FaShareAlt,
  FaSmile,
  FaQuoteLeft,
  FaUserCircle,
  FaRupeeSign,
} from "react-icons/fa";
import { FaFaceSmile } from "react-icons/fa6";
const Home = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isPurchaseModalOpen, setIsPurchaseModalOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [cart, setCart] = useState({});

  const updateCart = (itemName, change) => {
    setCart((prevCart) => {
      const newCount = (prevCart[itemName] || 0) + change;
      if (newCount <= 0) {
        const { [itemName]: _, ...rest } = prevCart;
        return rest;
      }
      return { ...prevCart, [itemName]: newCount };
    });
  };
  const [studentCount, setStudentCount] = useState(1);

  return (
    <div className="preschool-container">
      <header className="preschool-header">
        <div className="header-left">
          <img src={gigglezz} alt="Preschool Logo" className="logo" />
          <div>
            <h1 className="title">Gigglezz Preschool</h1>
            <p className="tagline">Where Learning Begins with Laughter!</p>
          </div>
        </div>

        <div className="header-right">
          <div className="contact-info">
            <p>
              <strong>📞</strong> +91-9876543210
            </p>
            <p>
              <strong>📧</strong> gigglezz@preschool.com
            </p>
          </div>
          <button className="enroll-btn">Enroll Now</button>
        </div>
      </header>
      {/* Modal for Fee Structure */}
      {isModalOpen && (
        <div className="modal" style={{ color: "white", fontSize: "13px" }}>
          <div className="modal-content">
            <button className="close-btn" onClick={() => setIsModalOpen(false)}>
              ✖
            </button>
            <h2 className="fee-structure-heading">Fee Structure</h2>

            <table>
              <thead>
                <tr>
                  <th>Class</th>
                  <th>Admission Fee (₹)</th>
                  <th>Discounted Fee (₹)</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {[
                  {
                    name: "Play Class",
                    admissionFee: 4500,
                    discountedFee: 4000,
                  },
                  { name: "LKG", admissionFee: 5000, discountedFee: 4500 },
                  { name: "UKG", admissionFee: 5500, discountedFee: 5000 },
                  { name: "Class 1", admissionFee: 6000, discountedFee: 5500 },
                ].map((item) => (
                  <tr key={item.name}>
                    <td>{item.name}</td>
                    <td>₹ {item.admissionFee}</td>
                    <td>₹ {item.discountedFee}</td>
                    <td>
                      <div className="price-actions">
                        <button
                          className="buy-btn"
                          onClick={() => {
                            setSelectedItem(item);
                            setIsPurchaseModalOpen(true);
                          }}
                        >
                          Buy Now
                        </button>

                        <button
                          className="cart-btn"
                          onClick={() => updateCart(item.name, 1)}
                        >
                          Add to Cart
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            <h3 className="extra-services">Our Extra Services</h3>
            <table>
              <thead>
                <tr>
                  <th>Service</th>
                  <th>Admission Fee (₹)</th>
                  <th>Discounted Fee (₹)</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { name: "Summer Camp", price: 2000, discountedPrice: 1800 },
                  { name: "Winter Camp", price: 2500, discountedPrice: 2200 },
                  { name: "Seasonal Camp", price: 3000, discountedPrice: 2700 },
                  { name: "Day Care", price: 1500, discountedPrice: 1400 },
                  { name: "Night Care", price: 1800, discountedPrice: 1600 },
                ].map((item) => (
                  <tr key={item.name}>
                    <td>{item.name}</td>
                    <td>₹ {item.price}</td>
                    <td>₹ {item.discountedPrice}</td>
                    <td>
                      <div className="price-actions">
                        <button
                          className="buy-btn"
                          onClick={() => {
                            setSelectedItem(item);
                            setIsPurchaseModalOpen(true);
                          }}
                        >
                          Buy Now
                        </button>

                        <button
                          className="cart-btn"
                          onClick={() => updateCart(item.name, 1)}
                        >
                          Add to Cart
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            <div className="modal-actions"></div>
          </div>
        </div>
      )}

      {isPurchaseModalOpen && selectedItem && (
        <div className="purchase-modal">
          <div className="inner-modal-content">
            <h2>Form for {selectedItem.name}</h2>
            <label>No. Of Students:</label>
            <select
              value={studentCount}
              onChange={(e) => setStudentCount(Number(e.target.value))}
            >
              <option value="1">1</option>
              <option value="2">2</option>
            </select>

            {[...Array(studentCount)].map((_, index) => (
              <input
                key={index}
                type="text"
                placeholder={`Child's Name ${index + 1}`}
              />
            ))}

            <input type="text" placeholder="Parent's Name" />
            <input type="email" placeholder="Email ID" />
            <input type="number" placeholder="Mobile No." />
            <input type="text" placeholder="Address" />
            <input type="text" placeholder="Location" />

            <button
              className="purchase-confirm-btn"
              onClick={() => setIsPurchaseModalOpen(false)}
            >
              Buy Now
            </button>
          </div>

          <button
            className="purchase-close-btn"
            onClick={() => setIsPurchaseModalOpen(false)}
          >
            ✖
          </button>
        </div>
      )}

      {/* Google Maps */}

      <div className="container">
        <div className="iframe-container">
          <iframe
            src="https://www.google.com/maps/embed?pb=!4v1737903296373!6m8!1m7!1sCAoSLEFGMVFpcE5DVmN0ZVBudjJSWVc3ZTJKT285U0xhYWRNMlp0eE9wU0FIaDgt!2m2!1d12.89627456744329!2d77.58808555922155!3f80.01844357416653!4f2.1998036717126155!5f0.4000000000000002"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>

        <div className="about-section">
          <h2 className="aboutUs-title">About Us</h2>
          <p class="aboutus-text">
            At Gigglezz Pre-School, we believe that fostering creativity is a
            crucial part of early childhood development. Our thoughtfully
            designed activities are aimed at inspiring the imagination and
            creative expression of every child, helping them explore new ideas
            and develop their unique talents. We are dedicated to creating an
            environment where creativity can flourish. Our activities are
            designed to be fun, engaging, and full of possibilities, ensuring
            that every child has the chance to shine in their own unique way.
          </p>
          <div className="action-buttons">
            <button className="btn-counseling">Counseling Form</button>
            <button className="btn-fee" onClick={() => setIsModalOpen(true)}>
              <FaRupeeSign className="rupee-icon" /> View Fee Structure
            </button>
          </div>
        </div>
      </div>

      {/* Information & Reviews Section */}
      <div
        className="info-reviews"
        style={{ color: "#333", background: "white", fontSize: "14px" }}
      >
        <div className="key-info">
          <a></a>

          <div className="key-info-container">
            <img src={searchIcon} alt="Search Icon" className="key-icon" />
            <h2 className="key-information">Key Information</h2>
          </div>

          <div className="info-grid">
            {[
              { image: cctvImg, text: "CCTV", value: "Yes" },
              { image: daycareImg, text: "Day & Night Care", value: "Yes" },
              { image: sportsImg, text: "Outdoor Sports", value: "Yes" },
              { image: minAgeImg, text: "Minimum Age", value: "02 Years" },
              { image: maxAgeImg, text: "Maximum Age", value: "06 Years" },
              { image: mealsImg, text: "Meals Provided", value: "Yes" },
            ].map(({ image, text, value }, index) => (
              <div key={index} className="info-card">
                <img src={image} alt={text} className="icon-image" />
                {text} <span>{value}</span>
              </div>
            ))}
          </div>
        </div>
        <div
          className="amenities-section"
          style={{ color: "#333", fontSize: "14px" }}
        >
          <div className="amenities-header">
            <img
              src={amenitiesIcon}
              alt="Amenities Icon"
              className="amenities-icon"
            />
            <h2 className="amenities-title">Our Amenities</h2>
          </div>

          <div className="amenities-grid">
            {[
              { image: playgroundImg, text: "Outdoor Playground" },
              { image: teacherImg, text: "Expert Teachers" },
              { image: transportImg, text: "School Transport" },
              { image: musicImg, text: "Music & Dance Room" },
              { image: diningImg, text: "Healthy Snack & Dining Area" },
              { image: artImg, text: "Art & Craft Zone" },
            ].map(({ image, text }, index) => (
              <div key={index} className="amenity-card">
                <img src={image} alt={text} className="amenity-icon" />
                {text}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div class="testimonial-section">
        <h2 class="section-title">What Parents Say</h2>
        <div class="testimonial-container">
          <div class="testimonial-card">
            <p class="message">
              "This preschool is amazing! My child loves the teachers and
              activities."
            </p>
            <div class="author">– Rahul, Parent</div>
          </div>

          <div class="testimonial-card">
            <p class="message">
              "Warm, welcoming, and educational – highly recommended!"
            </p>
            <div class="author">– Abhishek, Parent</div>
          </div>

          <div class="testimonial-card">
            <p class="message">
              "My daughter learned so much while having fun. The best preschool
              in town!"
            </p>
            <div class="author">– Anita, Parent</div>
          </div>
        </div>
      </div>

      <div class="explore-section">
        <h2 class="section-title">Explore More Preschools Near Me</h2>
        <div class="explore-container">
          <div class="explore-card">
            <img src={footerpreschool} alt="Amenities Icon" />

            <h3>Little Sunshine Academy</h3>
            <p>Rated 4.8 ★ – Safe, nurturing & fun learning space!</p>
            <button class="explore-btn">View Details</button>
          </div>

          <div class="explore-card">
            <img src={preschoolimg} alt="Amenities Icon" />

            <h3>Happy Tots Preschool</h3>
            <p>Modern facilities with creative curriculum programs.</p>
            <button class="explore-btn">View Details</button>
          </div>

          <div class="explore-card">
            <img src={preschoolimages} alt="Amenities Icon" />

            <h3>Smart Steps Preschool</h3>
            <p>Friendly staff and playful educational environment.</p>
            <button class="explore-btn">View Details</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
