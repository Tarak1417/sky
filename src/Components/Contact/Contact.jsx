import React from 'react';
import './Contact.css'; // Import the CSS file

const ConnectWithUs = () => {
  return (
    <div className="connect-container">
      <div className="header-text">Know More | Connect with Us</div>
      <div className="content">
        <div className="icon-text-container">
          <span className="icon">🌐</span>
          <a href="https://skyserve.ai" target="_blank" rel="noopener noreferrer" className="link-text">
            https://skyserve.ai
          </a>
        </div>
        <div className="icon-text-container">
          <span className="icon">✉️</span>
          <a href="mailto:hello@skyserve.ai" className="link-text">
            hello@skyserve.ai
          </a>
        </div>
      </div>
      <div className="logo-container">
        <span className="logo-text">
          <span className="sky-text">Sky</span>
          <span className="serve-text">Serve</span>
        </span>
      </div>
    </div>
  );
};

export default ConnectWithUs;
