import React from 'react';
import "./Mission.css";

const Missions = () => {
  return (
    <div className="missionsContainer">
      <header className="missionsTitle">Missions : 2024 <span className="status">(Flying)</span></header>
      
      <div className="missionCards">
        {/* Matterhorn Card */}
        <div className="missionCard">
          <h3 className="missionName">Matterhorn</h3>
          <p>Blue, Green, Red</p>
          <p className="gsd">GSD 160m</p>
        </div>

        {/* Denali Card */}
        <div className="missionCard">
          <h3 className="missionName">Denali</h3>
          <p>Dual Sensors</p>
          <p>Blue, Green, Red</p>
          <div className="split">
            <p>Hyperspectral 150×</p>
            <p className="gsd">GSD 10m</p>
          </div>
        </div>

        {/* K2 Card */}
        <div className="missionCard">
          <h3 className="missionName">K2</h3>
          <p>Multispectral <span className="smallText">VisNIR</span></p>
          <p className="gsd">GSD 5.75m</p>
        </div>
      </div>

      <footer className="footerNote">
        * These sensor details are of SkyServe's current satellite operator partners. More partnerships with different sensors are in the pipeline.
      </footer>
    </div>
  );
};

export default Missions;
