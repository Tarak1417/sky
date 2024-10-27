import React from 'react';
import './Awards.css';
import images from "../../Assets/geospa.jpeg"

const AwardsRecognition = () => {
  return (
    <div className="awardsContainer">
      <header className="awardsTitle">Awards & Recognition</header>
      
      <div className="awardsGrid">
        {/* Startup of the Year */}
        <div className="awardItem">
          <img src={images} alt="Startup of the Year" className="awardImage" />
          <div className="caption">
            <h3>Startup of the Year – 2024</h3>
            <p>Our CEO, Vinay Simha receiving the award from Shri. Amitabh Kant, G20 Sherpa</p>
          </div>
        </div>

        {/* Global Top 100 Geospatial Companies */}
        <div className="awardItem">
          <img src={images} alt="Global Top 100 Geospatial Companies" className="awardImage" />
          <div className="caption">
            <h3>Global Top 100 Geospatial Companies – 2024 Edition</h3>
          </div>
        </div>

        {/* EarthSIGHTS Demo with Hon'ble Minister */}
        <div className="awardItem">
          <img src={images} alt="EarthSIGHTS Demo" className="awardImage" />
          <div className="caption">
            <p>Hon'ble Minister Shri Nitin Gadkari on EarthSIGHTS demo @AGBA</p>
          </div>
        </div>

        {/* Aegis Graham Bell Awards */}
        <div className="awardItem">
          <img src={images} alt="Aegis Graham Bell Awards" className="awardImage" />
          <div className="caption">
            <h3>AGBA Awards 2024</h3>
            <p>Awarded for “Innovation in AI”</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AwardsRecognition;
