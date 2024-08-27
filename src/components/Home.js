import React, { useState, useEffect } from "react";
import "./css/home.css";
import image1 from "./img/a.jpg";
import image2 from "./img/b.jpg";
import image3 from "./img/c.jpg";
import logo from "./img/imc.png";
import PartnershipBanner from './PartnershipBanner'; // Import the partnership banner

const images = [image1, image2, image3];
const words = ["Diversity", "Passion", "Motivation", "IMC"];

const HomeComponent = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [opacity, setOpacity] = useState(1);
  const [wordIndex, setWordIndex] = useState(0);
  const [navbarActive, setNavbarActive] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setOpacity(0);
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        setWordIndex((prevIndex) => (prevIndex + 1) % words.length);
        setOpacity(1);
      }, 500);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const handleArrowClick = (direction) => {
    setOpacity(0);
    setTimeout(() => {
      if (direction === "prev") {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
        setWordIndex((prevIndex) => (prevIndex - 1 + words.length) % words.length);
      } else if (direction === "next") {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        setWordIndex((prevIndex) => (prevIndex + 1) % words.length);
      }
      setOpacity(1);
    }, 500);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    // Add your search logic here
    console.log("Search button clicked");
  };

  const toggleNavbar = () => {
    setNavbarActive(!navbarActive);
  };

  return (
    <>
      <nav className="navbar">
        <div className="container">
          <div className="logo-container">
            <img src={logo} alt="IMC Logo" className="logo-img" />
          </div>
          <div className="imc-title">
              <span className="imc-letter i">I</span>
              <span className="imc-letter m">M</span>
              <span className="imc-letter c">C</span>
          </div>
          <div className="navbar-toggle" onClick={toggleNavbar}>
            ☰
          </div>
          <ul className={`navbar-nav ${navbarActive ? 'active' : ''}`}>
            <li><a href="#home">Home</a></li>
            
            <li><a href="#services">Services</a></li>
            <li><a href="#upcoming-events">Events</a></li>
            <li><a href="#team">About Us</a></li>
            <li>
              <button onClick={() => document.getElementById('join-us').scrollIntoView({ behavior: 'smooth' })} className="join-button">Join Us</button>
            </li>
          </ul>
        </div>
      </nav>
      <div id="home" className="home-component">
        <div className="overlay">
          <div
            className="background-image"
            style={{
              backgroundImage: `url(${images[currentIndex]})`,
              opacity,
            }}
          />
          <div className="black-overlay" />
          <div className="text-overlay">
            {/* Welcome Message */}
            <div className="welcome-message">
              <h1>Welcome to ISAMM MICROSOFT CLUB</h1>
            </div>
            <div className="search-bar" >
              
              <button onClick={() => document.getElementById('join-us').scrollIntoView({ behavior: 'smooth' })}>
                JOIN US
              </button>
            </div>
          </div>
          <div className="arrows">
            <button onClick={() => handleArrowClick("prev")}>‹</button>
            <button onClick={() => handleArrowClick("next")}>›</button>
          </div>
        </div>
      </div>
      {/* Add the partnership banner at the end */}
      <PartnershipBanner />
    </>
  );
};

export default HomeComponent;
