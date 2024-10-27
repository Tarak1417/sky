import React from 'react';
import "./Snaps.css";
import Urban from "../../Assets/Urban.jpeg";
import forest from "../../Assets/forest.jpeg";
import water from "../../Assets/Water Resource .jpeg";
import agri from "../../Assets/agricultural.jpeg";

const Snaps = () => {
  return (
    <div className="useCaseContainer">
      <h1 className="title">Use Case Snapshot</h1>

      <div className="contentContainer">
        {/* Images in each corner */}
        <img src={forest} alt="Forest Use Case" className="useCaseImage forest" />
        <img src={agri} alt="Agriculture Use Case" className="useCaseImage agriculture" />
        <img src={water} alt="Water Resource Use Case" className="useCaseImage waterResource" />
        <img src={Urban} alt="Urban Use Case" className="useCaseImage urban" />

        {/* Center text content */}
        <div className="centerContent">
          <p className="useCaseText forestText"><span className="highlight">Forest</span> - Vegetation Change, Wildfire Detection</p>
          <p className="useCaseText agricultureText"><span className="highlight">Agriculture</span> - Crop Health, Yield Monitoring</p>
          <p className="useCaseText waterResourceText"><span className="highlight">Water Resource</span> - Pollution Monitoring, Change Detection</p>
          <p className="useCaseText urbanText"><span className="highlight">Urban</span> - Change Detection, Road Network Extraction</p>
        </div>
      </div>
    </div>
  );
};

export default Snaps;
