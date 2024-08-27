import React from 'react';
import './css/partnershipBanner.css'; // Add appropriate styling
import logo1 from './img/imc.png'; // Import images
import logo2 from './img/imc.png'; 
import logo3 from './img/imc.png'; 

const PartnershipBanner = () => {
  return (
    <div className="partnership-banner">
      <p className="partners-text">Our Partners:</p>
      <div className="partners-logos">
        <div className="partner">
          <img src={logo1} alt="Partner 1" /> {/* Use imported image */}
          <span>Partner 1</span>
        </div>
        <div className="partner">
          <img src={logo2} alt="Partner 2" /> {/* Use imported image */}
          <span>Partner 2</span>
        </div>
        <div className="partner">
          <img src={logo3} alt="Partner 3" /> {/* Use imported image */}
          <span>Partner 3</span>
        </div>
      </div>
    </div>
  );
};

export default PartnershipBanner;
