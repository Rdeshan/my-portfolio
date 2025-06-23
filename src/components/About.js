import React from "react";
import "../css/About.css"; // Your CSS file
// Add this at the top
import Certifications from "./Certifications";
import Educations from "./Educations";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
  FaJava,
} from "react-icons/fa";
import { SiMongodb, SiFirebase, SiMysql, SiPython } from "react-icons/si";
import ParticlesBackground from "./ParticlesBackground";

const About = () => {
  return (
    <section className="about-section" id="about" style={{ position: 'relative', overflow: 'hidden' }}>
      <ParticlesBackground />
      <div style={{ position: 'relative', zIndex: 1 }}>
        <h2 className="section-title">About Me</h2>
        <div className="about-grid">
          {/* Top: Who I Am */}
          <div className="about-card full-width whoami">
            <h3>Who I Am</h3>
            <p>
              I'm Ravindu Perera, a full-stack developer passionate about building
              modern web applications using the MERN stack. I'm also interested in
              AI, machine learning, and creating real-world solutions.
            </p>
          </div>

          {/* Left: Certifications */}
          <Certifications />

          {/* Center: Skills and Education (stacked vertically) */}
          <div className="about-center-column">
            <div className="about-card skills">
              <h3>Skills</h3>
              <div className="skill-grid">
                <div className="skill-item">
                  <FaHtml5 size={40} color="#e44d26" />
                  <span>HTML</span>
                </div>
                <div className="skill-item">
                  <FaCss3Alt size={40} color="#264de4" />
                  <span>CSS</span>
                </div>
                <div className="skill-item">
                  <FaJs size={40} color="#f7df1e" />
                  <span>JavaScript</span>
                </div>
                <div className="skill-item">
                  <FaReact size={40} color="#61dbfb" />
                  <span>React</span>
                </div>
                <div className="skill-item">
                  <FaNodeJs size={40} color="#3c873a" />
                  <span>Node.js</span>
                </div>
                <div className="skill-item">
                  <SiMongodb size={40} color="#4db33d" />
                  <span>MongoDB</span>
                </div>
                <div className="skill-item">
                  <FaGitAlt size={40} color="#f1502f" />
                  <span>Git</span>
                </div>
                <div className="skill-item">
                  <SiFirebase size={40} color="#ffcb2b" />
                  <span>Firebase</span>
                </div>
                <div className="skill-item">
                  <SiMysql size={40} color="#00758F" />
                  <span>MySQL</span>
                </div>
                <div className="skill-item">
                  <SiPython size={40} color="#306998" />
                  <span>Python</span>
                </div>
                <div className="skill-item">
                  <FaJava size={40} color="#f89820" />
                  <span>Java</span>
                </div>
                <div className="skill-item">
                  <FaGithub size={40} color="black" />
                  <span>Github</span>
                </div>
              </div>
            </div>
            <Educations/>
          </div>

          {/* Right: Projects */}
          <div className="about-card projects">
            <h3>Projects</h3>
            <ul>
              <li>
                <a href="#project1">Student Management System</a>
              </li>
              <li>
                <a href="#project2">Garment Management System</a>
              </li>
              <li>
                <a href="#project3">Personal Finance Tracker</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
