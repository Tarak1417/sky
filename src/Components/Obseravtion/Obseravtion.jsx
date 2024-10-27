import React from 'react';
import birdImage from '../../Assets/birdimage.png';
import earthSatelliteImage from '../../Assets/earthsatilitesjpeg.jpeg';
import './Obseravtion.css';

const Obseravtion = () => {
  return (
    <div className="observationContainer">
      <div className="observationBirdImage">
        <img src={birdImage} alt="Bird logo" />
      </div>
      <div className="observationContentWrapper">
        <div className="observationContent">
          <h1 className="observationHeading">Challanges with earh Observations Industry today</h1>
          <ul className="observationList">
            <li>Latency</li>
            <li>Friction</li>
            <li>hight Cost</li>
          </ul>
        </div>
        <div className="observationImage">
          <img src={earthSatelliteImage} alt="Satellite view of Earth" />
        </div>
      </div>
    </div>
  );
};

export default Obseravtion;
