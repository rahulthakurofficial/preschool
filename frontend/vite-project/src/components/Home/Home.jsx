import React, { useState } from "react";
import "./Home.scss";
import gigglezz from "/src/assets/gigglezz-logo.png";
import {
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaHeart,
  FaShareAlt,
  FaTree,
  FaUserTie,
  FaBus,
  FaMusic,
  FaUtensils,
  FaPaintBrush,
  FaSwimmer,
  FaSeedling,
  FaVideo,
  FaBook,
  FaChild,
  FaRunning,
  FaHospitalSymbol,
  FaGraduationCap,
  FaShieldAlt,
  FaSmile,
  FaQuoteLeft,
  FaUserCircle,
  FaUsers,
  FaRupeeSign,
  FaStar,
} from "react-icons/fa";

const Home = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="preschool-container">
      {/* Preschool Card */}
      <div className="preschool-card">
        <div className="logo">
          <img src={gigglezz} alt="Gigglezz Preschool" />
        </div>
        <div className="details">
          <h2>Gigglezz Preschool | Bangalore, Karnataka</h2>
          <p>
            23, 3rd Cross Rd, Paradise Colony, JP Nagar 7th Phase, Bengaluru
          </p><div class="price-rating-container">
        <p class="price">Rs 4,548 / Monthly</p>
        <div class="rating">
            <span class="star-icon">⭐</span>
            <span class="star-icon">⭐</span>
            <span class="star-icon">⭐</span>
            <span class="star-icon">⭐</span>
            <span class="half-star">⭐</span>
            <span class="rating-value">4.5</span>
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
            {/* Close Button */}
            <button
              className="close-btn"
              onClick={() => setIsModalOpen(false)}
              style={{ marginLeft: "400px" }}
            >
              ✖
            </button>

            <h2>Fee Structure</h2>
            <table>
              <thead>
                <tr>
                  <th>Class</th>
                  <th>Admission Fee (₹)</th>
                  <th>Discounted Fee (₹)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Preschool</td>
                  <td>₹ 4,500</td>
                  <td>
                    <div className="price-actions">
                      ₹ 4,000
                      <button className="buy-btn">Buy Now</button>
                      <button className="cart-btn">Add to Cart</button>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>LKG</td>
                  <td>₹ 5,000</td>
                  <td>
                    <div className="price-actions">
                      ₹ 4,500
                      <button className="buy-btn">Buy Now</button>
                      <button className="cart-btn">Add to Cart</button>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>UKG</td>
                  <td>₹ 5,500</td>
                  <td>
                    <div className="price-actions">
                      ₹ 5,000
                      <button className="buy-btn">Buy Now</button>
                      <button className="cart-btn">Add to Cart</button>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>Class 1</td>
                  <td>₹ 6,000</td>
                  <td>
                    <div className="price-actions">
                      ₹ 5,500
                      <button className="buy-btn">Buy Now</button>
                      <button className="cart-btn">Add to Cart</button>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>

            <div className="modal-actions">
              <button
                className="cart-btn"
                onClick={() => setIsModalOpen(false)}
              >
                Close
              </button>
            </div>
          </div>
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
          <button className="call-btn" onClick={() => setIsModalOpen(true)}>
            <FaRupeeSign className="icon" /> View Fee Structure
          </button>
        </div>

        {/* Amenities Section */}
        <div
          className="amenities-section"
          style={{ color: "#333", fontSize: "18px", fontWeight: "bold" }}
        >
          <h2 className="amenities-title">Our Amenities</h2>
          <div className="amenities-grid">
            {[
              { icon: FaTree, text: "Outdoor Playground" },
              { icon: FaUserTie, text: "Expert Teachers" },
              { icon: FaBus, text: "School Transport" },
              { icon: FaMusic, text: "Music & Dance Room" },
              { icon: FaUtensils, text: "Healthy Snack & Dining Area" },
              { icon: FaPaintBrush, text: "Art & Craft Zone" },
              { icon: FaSwimmer, text: "Swimming Pool" },
              { icon: FaSeedling, text: "Gardening Activities" },
            ].map(({ icon: Icon, text }, index) => (
              <div key={index} className="amenity-card">
                <Icon className="icon" /> {text}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Information & Reviews Section */}
      <div
        className="info-reviews"
        style={{ color: "#333", fontSize: "18px", fontWeight: "bold" }}
      >
        <div className="key-info">
          <h2>Key Information</h2>
          <div className="info-grid">
            {[
              { icon: FaVideo, text: "CCTV", value: "Yes" },
              { icon: FaChild, text: "Day Care", value: "Yes" },
              { icon: FaRunning, text: "Outdoor Sports", value: "Yes" },
              { icon: FaChild, text: "Minimum Age", value: "02 Year(s)" },
              { icon: FaChild, text: "Maximum Age", value: "06 Year(s)" },
              { icon: FaUtensils, text: "Meals Provided", value: "Yes" },
            ].map(({ icon: Icon, text, value }, index) => (
              <div key={index} className="info-card">
                <Icon className="icon" /> {text} <span>{value}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Reviews Section */}
        <div
          className="reviews"
          style={{ color: "#333", fontSize: "18px", fontWeight: "bold" }}
        >
          <h2>Reviews</h2>
         
          <div className="ratings">
            {[
              { icon: FaHospitalSymbol, text: "Infrastructure" },
              { icon: FaGraduationCap, text: "Academics" },
              { icon: FaUserTie, text: "Faculty" },
              { icon: FaShieldAlt, text: "Safety" },
              { icon: FaVideo, text: "Hygiene" },
              { icon: FaChild, text: "Activities" },
            ].map(({ icon: Icon, text }, index) => (
              <div key={index} className="rating-card">
                <Icon className="icon" /> 5/5 <span>{text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
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

            {/* Name & Smile Icon */}
            <div className="name-rating">
              <h4>{name}</h4>
              <FaSmile className="smile-icon" />
            </div>

            {/* Rating System */}
            <div className="rating">
              {[...Array(5)].map((_, i) => (
                <FaSmile key={i} className={i < rating ? "smile filled" : "smile"} />
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
