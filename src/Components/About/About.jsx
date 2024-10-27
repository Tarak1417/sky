import React from 'react';
import "./About.css";

import birdImage from "../../Assets/birdimage.png";
import satilite from "../../Assets/satilite.jpeg"

const About = () => {
  return (
    <div className="aboutContainer">
      <div className="birdImage">
        <img src={birdImage} alt="Bird logo" />
      </div>
      <div className='satilite'>
      <div className="aboutContent">
        <h1 className="aboutHeading">About Us</h1>
        <p className="aboutDescription">
          SkyServe is an <span className="highlight">AI & edge computing technology company for satellite platforms</span>, enabling analytics providers and core industries to deploy applications for earth observation and space solutions.
        </p>
      </div>
      <div className="aboutImage">
        <img src={satilite} alt="Satellite view of Earth" />
      </div>
      </div>
    </div>
  );
}

export default About;
