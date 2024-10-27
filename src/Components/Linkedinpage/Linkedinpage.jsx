import React from 'react';
import birdImage from '../../Assets/birdimage.png';
import earthsatilites from "../../Assets/earthsatilitesjpeg.jpeg"

import './Linkedinpage.css';

const Linkedinpage = () => {
  return (
    <div className="linkedinContainer">
      <div className="linkedinBirdImage">
        <img src={birdImage} alt="Bird logo" />
      </div>
      <div className='linkedinContentWrapper'>
        <div className="linkedinContent">
          <h1 className="linkedinHeading">SkyServe LinkedIn Page & Blog</h1>
         <ul>
            <li>
            Connect with SkyServe on LinkedIn to stay up-to-date on the latest developments in
            satellite imagery and data analytics.
            </li>
            <li>Explore our company profile, meet the team, and discover how we are taking the space
            Industry by STORM.</li>
            <li>Follow us to know more about SkyServe and our current and upcoming missions to
            deliver real-time insights from space.</li>
            <li>For technical discussions (and case studies) follow our blog: https://blog.skyserve.ai/</li>
         </ul>
        </div>
        <div className="linkedinImage">
          <img src={earthsatilites} alt="Satellite view of Earth" />
        </div>
      </div>
    </div>
  );
}

export default Linkedinpage;
