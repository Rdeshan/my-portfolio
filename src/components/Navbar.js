import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaFileAlt } from 'react-icons/fa'; // black document icon

import CV from '../myCV.pdf';
import '../css/Navbar.css';

const Navbar = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  // Prevent background scroll when popup is open
  useEffect(() => {
    document.body.style.overflow = showPopup ? 'hidden' : 'auto';
  }, [showPopup]);

  return (
    <>
      <nav className="navbar">
       <button className="resume-button" onClick={() => setShowPopup(true)}>
  <FaFileAlt style={{ marginRight: '8px' }} />
      My Resume
</button>


        {/* ☰ menu icon only visible on mobile */}
        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
          ☰
        </button>

        <div className={`nav-links ${menuOpen ? 'active' : ''}`}>
          <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
          <Link to="/about" onClick={() => setMenuOpen(false)}>About</Link>
          <Link to="/projects" onClick={() => setMenuOpen(false)}>Projects</Link>
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

export default Navbar;
