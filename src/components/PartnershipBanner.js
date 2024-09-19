import React from 'react';
import './css/partnershipBanner.css'; 
import logo2 from './img/partner1.png'; 
import logo1 from './img/partner2.png'; 

const PartnershipBanner = () => {
  return (
    <div className="partnership-banner">
      <h4 >Our Partners:</h4>
      <div className="partners-logos">
        <h4>
          <img src={logo1} alt="Partner 1" />
          <span>Redix Digital Solution</span>
        </h4>
        <h4>
          <img src={logo2} alt="Partner 2" />
          <span>CASA</span>
        </h4>
      </div>
    </div>
  );
};

export default PartnershipBanner;
