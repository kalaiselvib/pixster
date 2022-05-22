/** @format */

import React from "react";
import logo from "../assets/logo.svg";
import { BiSearchAlt } from "react-icons/bi";
import { BsChevronDown } from "react-icons/bs";
import userImage from "../assets/user-image.jpg";
function Navbar() {
  return (
    <div className="navbar-wrapper px-3">
      <div className="logo-container">
        <img src={logo} alt="logo" />
      </div>
      <div className="search-container">
        <div className="input-item">
          <input
            type="text"
            placeholder="Search anything ...."
            className="input"
          />
          <BiSearchAlt className="search-icon" />
        </div>
      </div>
      <div className="user-info-container">
        <div className="user">
          <div style={{ display: "flex", alignItems: "center" }}>
            <div className="user-name  pl-2">Jaime Lannister</div>
            <BsChevronDown className="mx-3" />
          </div>
          <img src={userImage} alt="user" />
        </div>
      </div>
    </div>
  );
  //jj
}

export default Navbar;
