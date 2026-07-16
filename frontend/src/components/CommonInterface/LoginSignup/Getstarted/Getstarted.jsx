import React, { useState } from "react";
import "./Getstarted.css";
import { FaRecycle, FaShopify } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function Getstarted() {
  const navigate = useNavigate();
  const [activeButton, setActiveButton] = useState(null);

  const handleButtonClick = (buttonName) => {
    setActiveButton(buttonName);
  };

  return (
    <div className="getstarted-page">
      <div className="sidebar">
        <div className="landing-navbar-left-logo-getstarted">
          <img src="/logo.png" alt="Campus Recycle Logo" />
        </div>


        <div className="getstarted-page-headtext">
          How do you want to use Campus Recycle?
        </div>
        <div className="getstarted-page-subheadtext">
          We’ll personalize your setup experience accordingly.
        </div>

        <div className="getstarted-button">
          {/* BUYER BUTTON */}
          <button
            className={`sidebar-button ${activeButton === "button1" ? "active" : ""
              }`}
            onClick={() => handleButtonClick("button1")}
          >
            <div className="sidebar-button-icon">
              <FaRecycle />
            </div>
            <div className="sidebar-button-text">
              <p className="sidebar-button-subtext">I'm here to buy</p>
              <p>Browse quality second-hand items from peers</p>
            </div>
          </button>

          {/* SELLER BUTTON */}
          <button
            className={`sidebar-button ${activeButton === "button2" ? "active" : ""
              }`}
            onClick={() => handleButtonClick("button2")}
          >
            <div className="sidebar-button-icon">
              <FaShopify />
            </div>
            <div className="sidebar-button-text">
              <p className="sidebar-button-subtext">I'm here to sell</p>
              <p>List your items and reach campus buyers</p>
            </div>
          </button>

          {/* GET STARTED BUTTON */}
          <div className="create_account_button">
            <button
              className={`${activeButton ? "button" : "defbutton"
                }`}
              onClick={() => {
                if (activeButton === "button1") navigate("/buyer/productlist");
                else if (activeButton === "button2") navigate("/seller/welcome");
              }}
            >
              Get Started
              <div className="arrow-wrapper">
                <div className="arrow"></div>
              </div>
            </button>
          </div>
        </div>
      </div>

      <div className="content1">
        {activeButton === "button1" && (
          <div className="content-display">
            <div className="content-icon">
              <FaRecycle />
            </div>
            <h2>Buyer Mode</h2>
            <p>Browse and purchase quality items from your campus community</p>
          </div>
        )}
        {activeButton === "button2" && (
          <div className="content-display">
            <div className="content-icon">
              <FaShopify />
            </div>
            <h2>Seller Mode</h2>
            <p>List your items and connect with interested buyers</p>
          </div>
        )}
        {!activeButton && (
          <div className="content-display content-placeholder">
            <div className="content-icon-placeholder">
              <FaRecycle />
            </div>
            <h2>Choose Your Mode</h2>
            <p>Select buyer or seller to get started</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Getstarted;
