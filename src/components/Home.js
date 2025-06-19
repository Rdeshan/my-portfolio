import React, { useState } from 'react';
import WaveBackground from './WaveBackground';
import '../css/photosection.css';
import profilePic from '../myphoto.png';
import { FaLinkedin, FaGithub, FaRegCopy } from 'react-icons/fa';

const Home = () => {
  const [copied, setCopied] = useState(false);

  const email = 'deshr.perera03@gmail.com';

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <div className="home-container" style={{ position: 'relative', overflow: 'hidden' }}>
      <WaveBackground />

      {/* Floating code snippets */}
      <div className="floating-element float1" style={{ left: '10%', top: '90%' }}>print("Hello")</div>
      <div className="floating-element float2" style={{ left: '30%', top: '92%' }}>if (isCool) {'{ ... }'}</div>
      <div className="floating-element float3" style={{ left: '70%', top: '95%' }}>when (x) {'{ -> }'}</div>
      <div className="floating-element float4" style={{ left: '50%', top: '93%' }}>&lt;div class="code"&gt;</div>
      <div className="floating-element float5" style={{ left: '80%', top: '94%' }}>for (i in 0..9)</div>
      <div className="floating-element float6" style={{ left: '20%', top: '91%' }}>console.log("Welcome!")</div>
      <div className="floating-element float7" style={{ left: '60%', top: '96%' }}>def greet():</div>
      <div className="floating-element float8" style={{ left: '40%', top: '94%' }}>let x = 10</div>
      <div className="floating-element float9" style={{ left: '85%', top: '97%' }}>&lt;React.Fragment&gt;</div>
      <div className="floating-element float10" style={{ left: '50%', top: '89%' }}>print("I am Ravindu perera")</div>

      <div className="profile-section">
        <div className="profile-box">
          
          <img className="my-photo" src={profilePic} alt="ravindu perera" />

         

          <div className="name-about">
            <h1 className="intro-text">Hi, I'm Ravindu Perera 👋</h1>

            <div className="aboutme">
              I’m currently an undergraduate student at SLIIT, <br />
              pursuing a degree in Information Technology. I’m in my 3rd year (1st semester), focusing on{' '}
              <b>full stack development</b><br /> with a passion for building real-world applications.
            </div>

            <div className="social-icons">
              <a href="https://linkedin.com/in/ravindu-d-perera" target="_blank" rel="noopener noreferrer">
                <FaLinkedin size={31} color="#0A66C2" />
              </a>
              <a href="https://github.com/Rdeshan" target="_blank" rel="noopener noreferrer">
                <FaGithub size={30} color="#171515" />
              </a>
            </div>
            
            <button className="copy-email-btn" onClick={handleCopyEmail}>
            <FaRegCopy style={{ marginRight: '8px' }} />
            {copied ? 'Email Copied!' : 'Copy Email'}
          </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
