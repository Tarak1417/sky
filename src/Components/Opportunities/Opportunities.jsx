import React from 'react';
import './Opportunities.css';
import birdLogo from '../../Assets/birdimage.png';

const Opportunities = () => {
  return (
    <div className="maincontainer">
     
        <div>
          <h1 className='heding'>
            Opportunities with Earth Observation Industry Today
          </h1>
          <div className="rightcontainer">
          {/* First container with two boxes in flex row */}
          <div className="container">
            <div className="box-2">
              <p>Image + Analytics</p>
            </div>
            <div className="box-1">
              <p>What do businesses pay for today?</p>
            </div>
          </div>

        
          <div className="container">
            <div className="box-2">
              <p>• Actionable<br /> Insights</p>
            </div>
            <div className="box-1">
              <p>What do they only need to pay for with SkyServe?</p>
            </div>
          </div>
        </div>
      </div>

     
      <div className="leftcontainer">
  <div className="birdslogo">
    <img src={birdLogo} alt="SkyServe Logo" />
  </div>
  <div className="Container-2">
    <div className="rectaange1">
      <p>Businesses want actionable insights, not just data</p>
    </div>
    <div className="rectaange2"></div>
   
  </div>
  <div className="Container-2">
    <div className="rectaange1">
      <p>Businesses want actionable insights, not just data</p>
    </div>
    <div className="rectaange2"></div>
   
  </div>
  <div className="Container-2">
    <div className="rectaange1">
      <p>Businesses want actionable insights, not just data</p>
    </div>
    <div className="rectaange2"></div>
   
  </div>
</div>

    </div>
  );
};

export default Opportunities;
