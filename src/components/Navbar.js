import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import CV from'../myCV.pdf'
import '../css/Navbar.css';

const Navbar = () => {
  const [showPopup, setShowPopup] = useState(false);

  // Prevent background scroll when popup is open
  useEffect(() => {
    if (showPopup) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [showPopup]);

  return (
    <>
      <nav className="navbar">
        <button className="resume-button" onClick={() => setShowPopup(true)}>
          Resume
        </button>
        <div className="nav-links">
          <Link to="/" style={linkStyle}>Home</Link>
          <Link to="/about" style={linkStyle}>About</Link>
          <Link to="/projects" style={linkStyle}>Projects</Link>
        </div>
      </nav>

      {showPopup && (
        <div className="popup-overlay">
          <div className="popup-content">
            <button className="close-btn" onClick={() => setShowPopup(false)}>✕</button>
            <iframe
              src={CV}
              title="My Resume"
              width="100%"
              height="100%"
              style={{ border: 'none' }}
            ></iframe>
          </div>
        </div>
      )}
    </>
  );
};

const linkStyle = {
  color: '#ffffff',
  textDecoration: 'none',
  fontWeight: 'bold',
  fontSize: '18px',
  padding: '6px 12px',
  borderRadius: '5px',
  transition: 'background 0.3s',
};

export default Navbar;
