// src/components/LandingPage.js
import React from 'react';


// Image from assets folder
import landingImage from '../assets/images/landingpage_image.jpeg';

export const LandingPage = () => {
  // Function to handle button click (for example, navigate to another page)
  const handleButtonClick = () => {
    alert("Michigan Sucks!");
  };

  return (
    <div className="landing-page-container">
      {/* Display the landing image */}
      <img src={landingImage} alt="Landing Page" className="landing-image" />
      
      {/* Landing Page Content */}
      <h1>Welcome to Our Website!</h1>
      <p>Start exploring the exciting features we offer.</p>

      {/* Button */}
      <button className="cta-button" onClick={handleButtonClick}>
        Get Started
      </button>
    </div>
  );
}

