import React, { useState } from "react";
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
      {/* Preschool Card */}
      <div className="preschool-card">
        <div className="admission-banner">
          <img src={admn} alt="Admission Open" />
        </div>
        <div className="logo">
          <img src={gigglezz} alt="Gigglezz Preschool" />
        </div>
        <div className="details">
          <h2 className="preschool-header">
            Gigglezz Preschool | Bangalore, Karnataka
          </h2>
          <p>
            23, 3rd Cross Rd, Paradise Colony, JP Nagar 7th Phase, Bengaluru
          </p>

          <div class="price-rating-container">
            <p class="price">
              Rs 4,548 / Monthly, <span class="emi">EMI Available</span>
            </p>

            <div className="rating">
              <FontAwesomeIcon icon={faStar} className="star-icon" />
              <FontAwesomeIcon icon={faStar} className="star-icon" />
              <FontAwesomeIcon icon={faStar} className="star-icon" />
              <FontAwesomeIcon icon={faStar} className="star-icon" />
              <FontAwesomeIcon icon={faStarHalfAlt} className="half-star" />
              <span className="rating-value">4.5</span>
            </div>
          </div>
        </div>
        <div className="actions">
          <button className="map-btn">
            <FaMapMarkerAlt className="icon" /> Show on Map
          </button>
          <button className="call-btn">
            <FaPhoneAlt className="icon" /> Book Now
          </button>
          <button className="call-btn" onClick={() => setIsModalOpen(true)}>
            <FaRupeeSign className="icon" /> View Fee Structure
          </button>
        </div>
        <div className="icons">
          <FaHeart className="heart-icon" />
          <FaShareAlt className="share-icon" />
        </div>
      </div>

      {/* Modal for Fee Structure */}
      {isModalOpen && (
        <div className="modal" style={{ color: "white", fontSize: "13px" }}>
          <div className="modal-content">
            <button
              className="close-btn"
              onClick={() => setIsModalOpen(false)}
              // style={{ marginLeft: "400px", color: "pink" }}
            >
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
          <button class="counseling-btn">Counseling Form</button>
        </div>
      </div>

      {/* Information & Reviews Section */}
      <div className="info-reviews" style={{ color: "#333", fontSize: "14px" }}>
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
      {/* camp */}

      {/* Testimonials Section */}
      <div className="testimonials">
        <h2 className="parent-testimonials">What Parents Say</h2>

        <div className="testimonial-grid">
          {[
            {
              avatar: FaUserCircle,
              name: "Amit Sharma",
              text: "Excellent school! My child loves it.",
              rating: 5,
            },
            {
              avatar: FaUserCircle,
              name: "Rahul",
              text: "Great staff and amazing facilities!",
              rating: 4,
            },
          ].map(({ avatar: Avatar, name, text, rating }, index) => (
            <div key={index} className="testimonial-card">
              <Avatar className="avatar" />
              <FaQuoteLeft className="quote-icon" />
              <p>{text}</p>

              <div className="name-rating">
                <h4>{name}</h4>
                <FaSmile className="smile-icon" />
              </div>

              <div className="rating">
                {[...Array(5)].map((_, i) => (
                  <FaSmile
                    key={i}
                    className={i < rating ? "smile filled" : "smile"}
                  />
                ))}
                <span className="rating-score">{rating}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Feedback Form */}
      <div className="feedback-form">
        <h2>Leave Your Feedback</h2>
        <form>
          <input type="text" placeholder="Your Name" required />
          <textarea placeholder="Your Feedback" required></textarea>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Home;
