import React, { useEffect, useState } from "react";
import WaveBackground from "./WaveBackground";
import "../css/photosection.css";
import profilePic from "../myphoto.png";
import {
  FaLinkedin,
  FaGithub,
  FaRegCopy,
  FaDiscord,
  FaCommentDots,
} from "react-icons/fa";
import LikeButton from "./LikeButton.js";



const Home = () => {
  const [copied, setCopied] = useState(false);
  const [typedText, setTypedText] = useState("");
  const [showCursor, setShowCursor] = useState(true);
  const [showFeedbackModal, setShowFeedbackModal] = useState(false);

  const email = "deshr.perera03@gmail.com";
  const fullText = "Hi, I'm Ravindu Perera 👋";

  useEffect(() => {
    setTypedText("");
    setShowCursor(true);

    const audio = new Audio("../../keyboard.mp3");
    audio.volume = 0.5;

    const typeInterval = setInterval(() => {
      setTypedText((prevText) => {
        const nextChar = fullText[prevText.length];
        if (nextChar) {
          audio.currentTime = 0;
          audio.play().catch(() => {});
          return prevText + nextChar;
        } else {
          clearInterval(typeInterval);
          setTimeout(() => setShowCursor(false), 1000);
          return prevText;
        }
      });
    }, 100);

    return () => clearInterval(typeInterval);
  }, []);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <div className="home-container" style={{ position: "relative", overflow: "hidden" }}>
      <WaveBackground />

      {/* Floating elements (unchanged) */}
      {/* ...keep your floating code snippets here... */}
           <div
        className="floating-element float1"
        style={{ left: "10%", top: "90%" }}
      >
        print("Hello")
      </div>
      <div
        className="floating-element float2"
        style={{ left: "30%", top: "92%" }}
      >
        if (isCool) {"{ ... }"}
      </div>
      <div
        className="floating-element float3"
        style={{ left: "70%", top: "95%" }}
      >
        when (x) {"{ -> }"}
      </div>
      <div
        className="floating-element float4"
        style={{ left: "50%", top: "93%" }}
      >
        &lt;div class="code"&gt;
      </div>
      <div
        className="floating-element float5"
        style={{ left: "80%", top: "94%" }}
      >
        for (i in 0..9)
      </div>
      <div
        className="floating-element float6"
        style={{ left: "20%", top: "91%" }}
      >
        console.log("Welcome!")
      </div>
      <div
        className="floating-element float7"
        style={{ left: "60%", top: "96%" }}
      >
        def greet():
      </div>
      <div
        className="floating-element float8"
        style={{ left: "40%", top: "94%" }}
      >
        let x = 10
      </div>
      <div
        className="floating-element float9"
        style={{ left: "85%", top: "97%" }}
      >
        &lt;React.Fragment&gt;
      </div>
      <div
        className="floating-element float10"
        style={{ left: "50%", top: "89%" }}
      >
        print("I am Ravindu perera")
      </div>
      <div className="profile-section">
        <div className="profile-box">
          <img className="my-photo" src={profilePic} alt="ravindu perera" />
          <div className="name-about" >
            <div style={{display:'flex',gap:'1rem'}}>
            <h1 className="intro-text">
              {typedText}
              {showCursor && <span className="blinking-cursor">|</span>}
            </h1>
            <LikeButton />
            </div>

            <div className="aboutme">
              I’m currently an undergraduate student at SLIIT, <br />
              pursuing a degree in Information Technology. I’m in my 3rd year
              (1st semester), focusing on <b>full stack development</b>
              <br /> with a passion for building real-world applications.
            </div>

            <div className="social-icons">
              <a href="https://linkedin.com/in/ravindu-d-perera" target="_blank" rel="noopener noreferrer">
                <FaLinkedin size={31} color="#0A66C2" />
              </a>
              <a href="https://github.com/Rdeshan" target="_blank" rel="noopener noreferrer">
                <FaGithub size={30} color="#171515" />
              </a>
              <a
                href="https://discord.com/users/YOUR_DISCORD_ID"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  backgroundColor: "#5865F2",
                  borderRadius: "50%",
                  width: "31px",
                  height: "31px",
                  marginLeft: "2px",
                }}
              >
                <FaDiscord size={21} color="#FFFFFF" />
              </a>
            </div>

            <div className="copy-feedback-button">
              <button className="copy-email-btn" onClick={handleCopyEmail}>
                <FaRegCopy style={{ marginRight: "8px" }} />
                {copied ? "Email Copied!" : "Copy Email"}
              </button>
              <button
                className="feedback-btn"
                onClick={() => setShowFeedbackModal(true)}
              >
                <FaCommentDots style={{ marginRight: "8px" }} />
                Give Feedback
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* 🔵 Feedback Modal */}
      {showFeedbackModal && (
        <div className="modal-overlay">
          <div className="modal-box">
            

            <h2 className="modal-title">Portfolio Feedback</h2>
            <p>Let me know what you think about my site! Your suggestions are always welcome.</p>
            <form
              action="https://formsubmit.co/deshr.perera03@gmail.com"
              method="POST"
              className="modal-form"
            >
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_next" value="https://ravindudeshanperera.netlify.app" />

              <input
                type="text"
                name="name"
                placeholder="Your Name"
               
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                required
              />
              <textarea
                name="message"
                placeholder="Your Feedback"
                rows="4"
                required
              ></textarea>
              <p><b>Rate my portfolio(4-highrate)</b></p>
             <label style={{display:'flex', gap:'40px'}}>
              <input type="radio"  name="rate"  /> 1
              <input type="radio" name="rate" /> 2
              <input type="radio" name="rate" /> 3
              <input type="radio" name="rate" /> 4
             </label>
          
                 <div className="Send-button">
                <button type="submit" >Send</button>
                </div>
                <div className="close-button">
                <button type="button"  onClick={() => setShowFeedbackModal(false)}>✕</button>
                </div>
              
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
