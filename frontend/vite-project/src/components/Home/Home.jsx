import React, { useState } from "react";
import "./Home.scss";
import gigglezz from "/src/assets/gigglezz-logo.png";
import admn from "/src/assets/admn.png";
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
  FaChild,
  FaRunning,
  FaSmile,
  FaQuoteLeft,
  FaUserCircle,
  FaRupeeSign,
} from "react-icons/fa";
import { FaFaceSmile } from "react-icons/fa6";
const Home = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const ratingsData = [
    { text: "Infrastructure", rating: 5, image: "infrastructure.jpg" },
    { text: "Academics", rating: 4, image: "academics.jpg" },
    { text: "Faculty", rating: 3, image: "faculty.jpg" },
    { text: "Safety", rating: 5, image: "safety.jpg" },
    { text: "Hygiene", rating: 4, image: "hygiene.jpg" },
    { text: "Activities", rating: 3, image: "activities.jpg" },
  ];

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
          <h2>Gigglezz Preschool | Bangalore, Karnataka</h2>
          <p>
            23, 3rd Cross Rd, Paradise Colony, JP Nagar 7th Phase, Bengaluru
          </p>

          <div class="price-rating-container">
            <p class="price">
              Rs 4,548 / Monthly, <span class="emi">EMI Available</span>
            </p>
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
            <button
              className="close-btn"
              onClick={() => setIsModalOpen(false)}
              style={{ marginLeft: "400px", color: "black" }}

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

            <h3>Our Extra Services</h3>
            <table>
              <thead>
                <tr>
                  <th>Service</th>
                  <th>Price (₹)</th>
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

            <div className="modal-actions">
              {/* <button
                className="close-btn"
                onClick={() => setIsModalOpen(false)}
              >
                Close
              </button> */}
            </div>
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

            {/* Dynamically generate input fields for student names */}
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
            // style={{ marginLeft: "400px" }}
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
              { icon: FaChild, text: "Day & Night Care", value: "Yes" },
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
            {ratingsData.map(({ text, rating }, index) => (
              <div key={index} className="rating-card">
                <div className="smiley-rating">
                  {[...Array(rating)].map((_, i) => (
                    <FaFaceSmile key={i} className="smile-icon" />
                  ))}
                </div>
                <span>{text}</span>
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
