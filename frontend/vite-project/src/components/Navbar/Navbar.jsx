import React, { useState } from "react";
import '../Navbar/Navbar.scss';
import { FaSearch, FaChevronDown, FaShoppingCart } from "react-icons/fa";

 import letzstepin_logo from "../../assets/letzstepin_logo.png";

const Navbar = () => {

  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => {
    setShowDropdown((prev) => !prev);
  };

 

  return (
    <nav className="navbar">
     <div className="logo">
      <img src={letzstepin_logo} alt="Logo" />
    </div>


      <div className="input-group">
        {/* Search Input */}
        <div className="input-wrapper">
          <FaSearch className="icon" />
          <input type="text" placeholder="Search..." />
        </div>

      
        <div className="dropdown-wrapper">
          <div className="dropdown-header" onClick={toggleDropdown}>
            <input type="text" placeholder="Select Location" readOnly />
            <FaChevronDown className="icon" />
          </div>

          {showDropdown && (
            <div className="dropdown-menu">
              <input type="text" placeholder="My Current Location" />
              <input type="text" placeholder="GPS Tracker" />
            </div>
          )}
        </div>
      

    
      </div>
    </nav>
  );
};

export default Navbar;
