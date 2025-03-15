import React, { useState } from "react";
import "./Navbar.scss";
import { FaSearch, FaMapMarkerAlt } from "react-icons/fa";
import letzstepinImg from "../../assets/let_image.png";
import { Menu, Dropdown } from "antd";
import { FaGlobe, FaUser } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";



import { GiHamburgerMenu } from "react-icons/gi";



const Navbar = () => {
  const [showMediaIcons, setShowMediaIcons] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState("English");

  const handleMenuClick = (e) => {
    setSelectedLanguage(e.key);
  };

  const languageMenu = (
    <Menu onClick={handleMenuClick}>
      <Menu.Item key="English">English</Menu.Item>
      <Menu.Item key="Hindi">Hindi</Menu.Item>
      <Menu.Item key="Punjabi">Kannada</Menu.Item>
    </Menu>
  );

 
  return (
    <>
      <nav className="main-nav">
        {/* 1st logo part  */}
        <div className="logo">
          <h2>
            <div className="logo">
              <img src={letzstepinImg} alt="Logo" className="logo-img"  />
            </div>
          </h2>
        </div>

        {/* 2nd menu part  */}
        <div
          className={
            showMediaIcons ? "menu-link mobile-menu-link" : "menu-link"
          }
        >
          <ul>
            <li>
              <div className="search-container">
                <input
                  type="text"
                  placeholder="Search..."
                  className="search-input"
                />
                <button className="search-btn">
                  <FaSearch className="search-icon" />
                </button>
              </div>
            </li>
            <li>
              <div className="gps-search-container">
                <input
                  type="text"
                  placeholder="Search location..."
                  className="gps-search-input"
                />
                <button className="gps-search-btn">
                  <FaMapMarkerAlt className="gps-icon" />
                </button>
              </div>
            </li>
            {/* <li>
              Register School
            </li> */}
          {/* <li style={{ fontSize: "25px" }}>Blog</li> */}

            <li>
              {/* <NavLink to="/contact">contact</NavLink> */}
              <Dropdown
                overlay={languageMenu}
                trigger={["click"]}
                placement="bottomRight"
              >
                <div className="language-selector">
                  <FaGlobe className="language-icon" />
                  <span>{selectedLanguage}</span>
                </div>
              </Dropdown>
            </li>
            <li>
               <FaShoppingCart className="cart-icon" size={50}/>
            </li>

          </ul>
        </div>

        {/* 3rd social media links */}
        <div className="social-media">
          {/* hamburget menu start  */}
          <div className="hamburger-menu">
            <a href="#" onClick={() => setShowMediaIcons(!showMediaIcons)}>
              <GiHamburgerMenu />
            </a>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;